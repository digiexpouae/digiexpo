import React from "react";
import SEO from "../../common/seo";
import DigitalMarketingBlog from "../../components/blogs/digital-marketing-blog";
import Wrapper from "../../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Boost Your Roi Proven Digital Marketing Tactics For UAE Businesses"} canonicalUrl={"https://digiexpo.ae/blogs/boost-your-roi-proven-digital-marketing-tactics-for-uae-businesses"}/>
      <DigitalMarketingBlog />
    </Wrapper>
  );
};

export default index;