import React from "react";
import SEO from "../common/seo";
import MobileApp from "../components/mobileApp";
import Wrapper from "../layout/wrapper";

const index = () => {
  const title = `Mobile Application Dubai | App Development Company – DigiExpo`;
  const desc = `We build custom mobile applications with expert application development Dubai services. Trusted for mobile application Dubai & mob app development Dubai.`;
  return (
    <Wrapper>
      <SEO pageTitle={title} pageDesc={desc} canonicalUrl={"https://www.digiexpo.ae/application-development-dubai"}/>
      <MobileApp />
    </Wrapper>
  );
};

export default index;