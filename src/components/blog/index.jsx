import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import CtaArea from "../contact/cta-area";
import BlogGrid from "./blog-grid";
import Portfolio from "./portfolio";
import StickyIcons from "@/common/sticky-icons";

const Blog = () => {
  return (
    <>
      <HeaderSix />
      <main>
        <StickyIcons/>
        <BreadcrumbTwo title={"Read our blogs"} innertitle={"Blog Grid Classic"} />
        <BlogGrid />
        <Portfolio />
        <CtaArea />
      </main>
      <FooterFive style_contact={true} style_team={true} />
    </>
  );
};

export default Blog;
