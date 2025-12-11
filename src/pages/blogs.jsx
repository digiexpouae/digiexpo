import React from "react";
import SEO from "../common/seo";
import Blog from "../components/blog";
import Wrapper from "../layout/wrapper";
import { GetAllPosts } from "@/lib/posts";
import client from "@/sanityConfig";

// Fetch the data using getServerSideProps
export async function getServerSideProps() {
	const sanityQuery = `*[_type == "post"]{
	  title,
	  "currentSlug":slug.current,
	  body,
	  mainImage
	}`;

	try {
		const [wpPosts, sanityPosts] = await Promise.all([
			GetAllPosts(),
			client.fetch(sanityQuery),
		]);

		const allPosts = [...sanityPosts, ...wpPosts];

		return {
			props: {
				page: allPosts,
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
          "DigiExpo Blog | Tips on Digital Marketing Services & Technology"
        }
        pageDesc={`Discover DigiExpo Blog for expert tips on digital marketing, SEO, web design, and the latest technology insights to grow your business online.`}
        canonicalUrl={"https://www.digiexpo.ae/blogs"}
      />
      <Blog blogArr={page} />
    </Wrapper>
  );
};

export default Index;
