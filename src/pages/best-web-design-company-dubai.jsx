import React from "react";
import SEO from "../common/seo";
import DesignPage from "../components/designPage";
import Wrapper from "../layout/wrapper";

const index = () => {
  const [title, desc] = [
    `Best Web Design Company In Dubai | UI UX Design Services Company`,
    `The Best Web Design Company in Dubai helps you to grow your business. DigiExpo is the top destination that provides solutions from UI/UX design services Company.`,
  ];
  return (
    <Wrapper>
      <SEO pageTitle={title} pageDesc={desc} canonicalUrl={"https://www.digiexpo.ae/best-web-design-company-dubai"}/>
      <DesignPage />
    </Wrapper>
  );
};

export default index;