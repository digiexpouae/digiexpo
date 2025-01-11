import BreadcrumbSix from "@/common/breadcrumbs/breadcrumb-6";
import Banner from "@/components/blog-details/banner";
import FooterFour from "@/layout/footers/footer-4";
import HeaderSix from "@/layout/headers/header-6";
import client, { urlForImage } from "@/sanityConfig";
import { PortableText } from "@portabletext/react";
import SEO from "../../common/seo";
import Wrapper from "../../layout/wrapper";
// Fetch the blog data based on the slug
export async function getServerSideProps(context) {
  const { slug } = context.params; // Get the slug from the URL

  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    "currentSlug": slug.current,
    body,
    mainImage,ogImage,ogDescription,
    ogTitle,metaTags,description
  }`;

  try {
    const blog = await client.fetch(query, { slug }); // Fetch the specific blog by slug

    if (!blog) {
      // Redirect to a 404 page if no blog is found
      return {
        notFound: true,
      };
    }

    return { 
      props: {
        blog, // Pass the blog data as props
      },
    };
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return {
      props: {
        blog: null, // Pass null if there's an error
      },
    };
  }
}

const BlogPost = ({ blog }) => {
  const { title, currentSlug, mainImage, body,ogImage,ogDescription,ogTitle ,metaTags,description} = blog;
  
  console.log(blog)
  if (!blog) {
    
    return <div>Blog post not found</div>; // Handle the case where no blog is found
  
  }


  const bannerSrc = urlForImage(mainImage.asset).url();

  return (
    <Wrapper>
  
      <SEO
        pageTitle={title}
        canonicalUrl={`https://digiexpo.ae/blogs/${currentSlug}`}
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
           
                      <PortableText value={body} />
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
