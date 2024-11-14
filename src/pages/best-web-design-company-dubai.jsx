import React from "react";
import SEO from "../common/seo";
import DesignPage from "../components/designPage";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Best Web Design Company in Dubai | UI UX Design Services Company"} pageDesc={"DigiExpo will transform your brand’s vision into reality with our best web design company in Dubai. Our design agency UAE will create impactful designs"} canonicalUrl={"https://www.digiexpo.ae/best-web-design-company-dubai"}/>
      <DesignPage />
    </Wrapper>
  );
};

export default index;