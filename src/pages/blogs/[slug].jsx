import BreadcrumbSix from "@/common/breadcrumbs/breadcrumb-6";
import Banner from "@/components/blog-details/banner";
import FooterFour from "@/layout/footers/footer-4";
import HeaderSix from "@/layout/headers/header-6";
import SEO from "../../common/seo";
import Wrapper from "../../layout/wrapper";
import graphqlRequest from "@/lib/graphqlRequest";
import { getSeo } from "@/lib/seo";
import client, { urlForImage } from "@/sanityConfig";
import { PortableText } from "@portabletext/react";
import components from "../../common/table";

// Fetch the blog data based on the slug from WordPress GraphQL, fallback to Sanity
export async function getServerSideProps(context) {
  const { slug } = context.params; // Get the slug from the URL

  const postQuery = `
    query getPostBySlug {
      post(id: "${slug}", idType: SLUG) {
        title
        slug
        content
        date
        featuredImage {
          node {
            mediaDetails {
              file
              sizes {
                sourceUrl
                width
                height
              }
            }
          }
        }
      }
    }
  `;

  try {
    // Try WordPress first
    const postRes = await graphqlRequest(postQuery);
    const wpPost = postRes?.data?.post ?? null;

    if (wpPost) {
      const seo = await getSeo("post", slug);
      return {
        props: {
          source: "wp",
          post: wpPost,
          seo,
        },
      };
    }
  } catch (error) {
    console.error("Error fetching data from WordPress GraphQL:", error);
  }

  // Fallback to Sanity post
  const sanityQuery = `*[_type == "post" && slug.current == $slug][0]{
        title,
        "currentSlug": slug.current,
        body,
        metaTitle,
        mainImage,
        ogImage,
        ogDescription,
        ogTitle,
        metaTags,
        description,
      }`;

  try {
    const blog = await client.fetch(sanityQuery, { slug });

    if (!blog) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        source: "sanity",
        post: blog,
        seo: null,
      },
    };
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return {
      props: {
        source: null,
        post: null,
        seo: null,
      },
    };
  }
}

const BlogPost = ({ source, post, seo }) => {
  if (!post) {
    return <div>Blog post not found</div>;
  }

  // WordPress post rendering
  if (source === "wp") {
    const { title, slug, content, date, featuredImage } = post;
    const currentSlug = slug;

    let bannerSrc = null;
    if (featuredImage?.node?.mediaDetails?.sizes?.length) {
      const sizes = featuredImage.node.mediaDetails.sizes;
      bannerSrc = sizes[0]?.sourceUrl || null;
    }

    const pageTitle = seo?.title || title;
    const canonicalUrl = `https://www.digiexpo.ae/blogs/${currentSlug}`;
    const ogImage = seo?.opengraphImage?.mediaItemUrl;
    const ogDescription = seo?.opengraphDescription || seo?.metaDesc;
    const ogTitle = seo?.opengraphTitle || seo?.title || title;
    const description = seo?.metaDesc || seo?.opengraphDescription;

    return (
      <Wrapper>
        <SEO
          pageTitle={pageTitle}
          canonicalUrl={canonicalUrl}
          ogImage={ogImage}
          ogDescription={ogDescription}
          ogTitle={ogTitle}
          description={description}
        />
        <HeaderSix />
        <div id='smooth-wrapper'>
          <div id='smooth-content'>
            <main>
              <BreadcrumbSix sub_title='Digiexpo' title={title} />
              <Banner imgUrl={bannerSrc} />
              <div className={`postbox__area ${"pt-100"} pb-100`}>
                <div className='container'>
                  <div className='row'>
                    <div className='col-xxl-10  col-xl-12 col-lg-12'>
                      <div
                        className='prose prose-blue prose-xl prose-headings:underline text-justify'
                        style={{ textAlign: "justify" }}
                      >
                        <div
                          dangerouslySetInnerHTML={{ __html: content }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <FooterFour />
      </Wrapper>
    );
  }

  // Sanity post rendering (legacy)
  const {
    title,
    currentSlug,
    mainImage,
    metaTitle,
    body,
    ogImage,
    ogDescription,
    ogTitle,
    metaTags,
    description,
  } = post;

  const bannerSrc = mainImage ? urlForImage(mainImage.asset).url() : null;

  return (
    <Wrapper>
      <SEO
        pageTitle={metaTitle || title}
        canonicalUrl={`https://www.digiexpo.ae/blogs/${currentSlug}`}
        ogImage={ogImage}
        ogDescription={ogDescription}
        ogTitle={ogTitle}
        metaTags={metaTags}
        description={description}
      />
      <HeaderSix />
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          <main>
            <BreadcrumbSix sub_title='Digiexpo' title={title} />
            <Banner imgUrl={bannerSrc} />
            <div className={`postbox__area ${"pt-100"} pb-100`}>
              <div className='container'>
                <div className='row'>
                  <div className='col-xxl-10  col-xl-12 col-lg-12'>
                    <div
                      className='prose prose-blue prose-xl prose-headings:underline text-justify'
                      style={{ textAlign: "justify" }}
                    >
                      <PortableText value={body} components={components} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <FooterFour />
    </Wrapper>
  );
};

export default BlogPost;
