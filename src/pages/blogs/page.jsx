import BreadcrumbSix from "@/common/breadcrumbs/breadcrumb-6";
import FooterFour from "@/layout/footers/footer-4";
import HeaderSix from "@/layout/headers/header-6";
import Wrapper from "@/layout/wrapper";
import client from "@/sanityConfig";
import { useRouter } from "next/router";


const getData = () => {
  const query = `

  *[_type == "post"]{
 "currentSlug":slug.current,
  mainImage,
    body,
    title
}`;
}
const DynamicBlog = ({ blog }) => {
  const router = useRouter();

  // Handle fallback state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <HeaderSix />
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          <main>
            {/* Breadcrumb Section */}
            <BreadcrumbSix sub_title={blog?.sub_title} title={blog?.title} />

            {/* Blog Content */}
            <section className='blog-content'>
              <h1>{blog?.title}</h1>
              <p>{blog?.sub_title}</p>

              <div
                dangerouslySetInnerHTML={{ __html: blog?.content }}
                className='content'
              />
            </section>
          </main>

          <FooterFour />
        </div>
      </div>
    </Wrapper>
  );
};

export default DynamicBlog;

// Fetch all slugs for dynamic paths
// export async function getStaticPaths() {
//   const query = `*[_type == "post"]{ "slug": "first-dynamic-blog-post"}`;
//   const newQuery = `https://sszv4zrt.api.sanity.io/v2022-03-07/data/query/digiexpo?query=*%5B_type+%3D%3D+%22post%22%5D`;
//   const blogs = await client.fetch(query);

//   const paths = blogs.map((blog) => ({
//     params: { slug: blog.slug },
//   }));

//   console.log(blogs)
//   return {
//     paths,
//     fallback: "blocking", // Enable on-demand ISR for new blogs
//   };
// }

// // Fetch blog data for each path
// export async function getStaticProps({ params }) {
//   const { slug } = params;
//   console.log(slug)

// const query = `*[_type == "post" && slug.current == "first-dynamic-blog-post"][0]{
//   title,

// }`;
//   const blog = await client.fetch(query, { slug });

//   if (!blog) {
//     return {
//       notFound: true, // Return 404 for invalid slug
//     };
//   }

//   return {
//     props: { blog },
//     revalidate: 60, // ISR: Revalidate every 60 seconds
//   };
// }
