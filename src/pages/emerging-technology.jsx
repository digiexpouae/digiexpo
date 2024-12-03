import React from "react";
import SEO from "../common/seo";
import NextGen from "../components/nextGen";
import Wrapper from "../layout/wrapper";

const index = () => {
  const title = `Emerging Technologies Development Agency Dubai | Emerging Technologies UAE`;
  const desc = `DigiExpo, a emerging technologies development agency Dubai, can help you grow your company. We act as great partners of marketing and emerging technologies UAE.`;
  return (
    <Wrapper>
      <SEO pageTitle={title} pageDesc={desc} canonicalUrl={"https://www.digiexpo.ae/emerging-technology"}/>
      <NextGen />
    </Wrapper>
  );
};

export default index;