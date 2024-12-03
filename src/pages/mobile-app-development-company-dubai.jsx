import React from "react";
import SEO from "../common/seo";
import MobileApp from "../components/mobileApp";
import Wrapper from "../layout/wrapper";

const index = () => {
  const title = `Mobile App Development Company Dubai | Mobile App Development UAE`;
  const desc = `Avail the skilled mobile app development company Dubai to grow your company. DigiExpo is your reliable growth partner for mobile app development UAE services.`;
  return (
    <Wrapper>
      <SEO pageTitle={title} pageDesc={desc} canonicalUrl={"https://www.digiexpo.ae/mobile-app-development-company-dubai"}/>
      <MobileApp />
    </Wrapper>
  );
};

export default index;