import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import StickyIcons from "@/common/sticky-icons";
import FooterFour from "@/layout/footers/footer-4";
import HeaderTwo from "@/layout/headers/header-2";
import CtaArea from "../contact/cta-area";
import Portfolio from "./portfolio";
import HeroArea from '../../common/hero-area_Two'
import Image from "next/image";
const Blog = ({ blogArr }) => {
  return (
    <>
      <div className="tw-relative tw-h-screen tw-w-full">
        {/* 1. Header stays on top */}
        <HeaderTwo />

        {/* 2. Background Images Layer */}
        <div className="tw-absolute tw-inset-0 ">
          {/* Desktop Background */}
          <div className="tw-hidden lg:tw-block tw-relative tw-h-full tw-w-full">
            <Image
              src="/assets/img/herowebp/blogs.webp"
              alt="Background Desktop"
              fill
              className="tw-object-cover "
              priority
            />
            {/* Optional: Add an overlay if the text is hard to read */}
            <div className="tw-absolute tw-inset-0 tw-bg-black/20" />
          </div>

          {/* Mobile Background */}
          <div className="tw-block lg:tw-hidden tw-relative tw-h-full tw-w-full">
            <Image
              src="/assets/img/herowebp/blogs-mob.webp"
              alt="Background Mobile"
              fill
              className="tw-object-cover "
              priority
            />
            <div className="tw-absolute tw-inset-0 tw-bg-black/20" />
          </div>
        </div>

        {/* 3. Content Layer (Hero Area) */}
        <div className="tw-relative tw-z-0  tw-h-full tw-flex tw-flex-col tw-justify-start lg:tw-justify-center">
          <HeroArea main_title={'Read Our Blogs'} />
        </div>
      </div>
      <main>
        <StickyIcons />
        {/* <BreadcrumbTwo title={"Read our blogs"} innertitle={"Blogs"} /> */}
        {/* <BlogGrid /> */}
        <Portfolio blogArr={blogArr} />
        <CtaArea />
      </main>
      <FooterFour />
    </>
  );
};

export default Blog;
