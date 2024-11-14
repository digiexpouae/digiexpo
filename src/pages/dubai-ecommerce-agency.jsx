import React from "react";
import SEO from "../common/seo";
import ECommerce from "../components/eCommerce";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"best ecommerce websites development company | e commerce service"} pageDesc={"With DigiExpo get expert web e commerce service for your business needs. Our best ecommerce websites development company will help to enhance and maximize sales."} canonicalUrl={"https://www.digiexpo.ae/dubai-ecommerce-agency"}/>
      <ECommerce />
    </Wrapper>
  );
};

export default index;