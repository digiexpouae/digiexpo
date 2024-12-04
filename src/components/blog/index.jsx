import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import StickyIcons from "@/common/sticky-icons";
import FooterFour from "@/layout/footers/footer-4";
import HeaderSix from "@/layout/headers/header-6";
import CtaArea from "../contact/cta-area";
import Portfolio from "./portfolio";

const Blog = ({blogArr}) => {
  return (
    <>
      <HeaderSix />
      <main>
        <StickyIcons />
        <BreadcrumbTwo title={"Read our blogs"} innertitle={"Blogs"} />
        {/* <BlogGrid /> */}
        <Portfolio blogArr={blogArr} />
        <CtaArea />
      </main>
      <FooterFour />
    </>
  );
};

export default Blog;
