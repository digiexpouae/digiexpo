import React from "react";
import SEO from "../common/seo";
import WebDevelopment from "../components/webDevelopment";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"web design and development agency | web development services"} pageDesc={"Choose the best website development company in Dubai for cutting-edge web solutions. Our web development services will enhance your brand and drive growth."} canonicalUrl={"https://www.digiexpo.ae/website-development-company-in-dubai"}/>
      <WebDevelopment />
    </Wrapper>
  );
};

export default index;