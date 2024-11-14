import React from "react";
import SEO from "../../common/seo";
import DigitalMarketingBlog2 from "../../components/blogs/digital-marketing-blog-2";
import Wrapper from "../../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"The Growing Adaption of Digital Marketing Agencies in UAE"} canonicalUrl={"https://digiexpo.ae/blogs/the-growing-adaption-of-digital-marketing-agencies-in-uae"}/>
      <DigitalMarketingBlog2 />
    </Wrapper>
  );
};

export default index;