import React from "react";
import SEO from "../common/seo";
import Contact from "../components/contact";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Contact Us - DigiExpo"} pageDesc={"Get in touch with DigiExpo for all your digital marketing needs. Contact us today to enhance your brand's online presence."} canonicalUrl={"https://www.digiexpo.ae/contact"}/>
      <Contact />
    </Wrapper>
  );
};

export default index;
