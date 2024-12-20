import React from "react";
import SEO from "../common/seo";
import Blog from "../components/blog";
import Wrapper from "../layout/wrapper";
import client from "@/sanityConfig";

// Fetch the data using getServerSideProps
export async function getServerSideProps() {
  const query = `*[_type == "post"]{
  title,
    "currentSlug":slug.current,
    body,
    mainImage
}`;

  try {
    const page = await client.fetch(query);


    return {
      props: {
        page,
      },
    };
  } catch (error) {
    return {
      props: {
        page: [],
      },
    };
  }
}

const Index = ({ page }) => {
  return (
    <Wrapper>
      <SEO
        pageTitle={
          "DigiExpo - Blogs | Best e-commerce websites development company"
        }
        pageDesc={`DigiExpo's blog gives insights on digital marketing and advertising and marketing,are looking for SEO,SMM to help companies thrive in the UAE's aggressive market.`}
        canonicalUrl={"https://www.digiexpo.ae/blogs"}
      />
      <Blog blogArr={page} />
    </Wrapper>
  );
};

export default Index;
