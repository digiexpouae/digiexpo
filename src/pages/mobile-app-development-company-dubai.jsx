import React from "react";
import SEO from "../common/seo";
import MobileApp from "../components/mobileApp";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"mobile app development company in uae | app development services"} pageDesc={"DigiExpo is the leading mobile app development company in UAE. Our app development services provide innovative solutions to bring your app ideas to life."} canonicalUrl={"https://www.digiexpo.ae/mobile-app-development-company-dubai"}/>
      <MobileApp />
    </Wrapper>
  );
};

export default index;