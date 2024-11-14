
'use client';

import React from "react";
import SEO from "../common/seo";
import HyggeBikes from "../components/caseStudies/hyggeBikes";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Softec - Data analytics"} />
      <HyggeBikes />
    </Wrapper>
  );
};

export default Home;