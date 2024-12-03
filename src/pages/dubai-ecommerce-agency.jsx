import React from "react";
import SEO from "../common/seo";
import ECommerce from "../components/eCommerce";
import Wrapper from "../layout/wrapper";

const index = () => {
  const title = `Best E-commerce Websites Development Company | E-commerce Service`;
  const desc = `Best E-commerce Website Development Company allows you to grow your business. DigiExpo provides great e-commerce services to boost growth and online visibility.`;
  return (
    <Wrapper>
      <SEO pageTitle={title} pageDesc={desc} canonicalUrl={"https://www.digiexpo.ae/dubai-ecommerce-agency"}/>
      <ECommerce />
    </Wrapper>
  );
};

export default index;