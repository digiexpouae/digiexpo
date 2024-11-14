import BreadcrumbSix from "@/common/breadcrumbs/breadcrumb-6";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import Banner from "./banner";
import Portfolio from "./portfolio";
import PostboxArea from "./postbox-area";
import FooterFour from "@/layout/footers/footer-4";

const SocialMediaMarketingBlog = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbSix sub_title="Social Media Marketing" title="How to Dominate the UAE Market with Effective Social Media Strategies" />
            <Banner />
            <PostboxArea />
            <Portfolio />
          </main>
          <FooterFour/>
        </div>
      </div>
    </>
  );
};

export default SocialMediaMarketingBlog;
