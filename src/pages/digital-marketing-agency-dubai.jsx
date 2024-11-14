import React from "react";
import SEO from "../common/seo";
import DigitalMarketing from "../components/digitalMarketing";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Best digital marketing agency in uae | Digital marketing agency"} pageDesc={"DigiExpo, best digital marketing agency in UAE, provides innovative and effective solutions. Our digital services are designed to maximize your online presence." } canonicalUrl={"https://www.digiexpo.ae/digital-marketing-agency-dubai"}/>
      <DigitalMarketing />
    </Wrapper>
  );
};

export default index;