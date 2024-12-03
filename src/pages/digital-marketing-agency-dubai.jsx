import React from "react";
import SEO from "../common/seo";
import DigitalMarketing from "../components/digitalMarketing";
import Wrapper from "../layout/wrapper";

const index = () => {
  const [pageTitle, pageDescription] = [
    `Best Digital Marketing Agency In UAE | Digital Marketing Agency`,
    `Increase your company's growth with the best Digital Marketing agency in UAE. DigiExpo is your top choice for digital marketing agency services in Dubai.`,
  ];
  return (
    <Wrapper>
      <SEO pageTitle={pageTitle} pageDesc={pageDescription } canonicalUrl={"https://www.digiexpo.ae/digital-marketing-agency-dubai"}/>
      <DigitalMarketing />
    </Wrapper>
  );
};

export default index;