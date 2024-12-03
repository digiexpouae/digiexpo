import React from "react";
import SEO from "../common/seo";
import WebDevelopment from "../components/webDevelopment";
import Wrapper from "../layout/wrapper";

const index = () => {
  const [title, desc] = [
    ` Web Design And Development Agency | Web Development Services`,
    `Work with a great web design and development agency to grow your brand. To improve the visibility of your company, DigiExpo offers great web development services.`,
  ];
  return (
    <Wrapper>
      <SEO pageTitle={title} pageDesc={desc} canonicalUrl={"https://www.digiexpo.ae/website-development-company-in-dubai"}/>
      <WebDevelopment />
    </Wrapper>
  );
};

export default index;