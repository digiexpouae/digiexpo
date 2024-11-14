import React from "react";
import SEO from "../common/seo";
import Content from "../components/team-details";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"privacy policy"}/>
      <Content />
    </Wrapper>
  );
};

export default index;