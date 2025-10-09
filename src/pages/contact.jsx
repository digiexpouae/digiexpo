import React from "react";
import SEO from "../common/seo";
import Contact from "../components/contact";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Contact Us | DigiExpo Web & Digital Services"} pageDesc={"get in touch with DigiExpo for professional web and digital services, including web design, development, and marketing solutions to grow your business.."} canonicalUrl={"https://www.digiexpo.ae/contact"}/>
      <Contact />
    </Wrapper>
  );
};

export default index;
