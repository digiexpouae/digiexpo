
'use client';

import React from "react";
import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";

const Home = () => {
  const seoMetaData = {
    pageTitle: "Digital marketing agency Dubai | Digital marketing agency UAE",
    pageDesc:"Boost your business progress with a professional digital marketing agency UAE. DigiExpo, your professional digital marketing agency Dubai service provider."
  }

  return (
    <Wrapper>
      <SEO pageTitle={seoMetaData.pageTitle} pageDesc={ seoMetaData.pageDesc} />
      <HomeOne />
    </Wrapper>
  );
};

export default Home;
