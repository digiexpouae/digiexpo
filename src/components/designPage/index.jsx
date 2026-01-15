import BreadcrumbTwoCopy from "@/common/breadcrumbs/breadcrumb-2-copy";
import FooterFour from "@/layout/footers/footer-4";
import React from "react";
import Brand from "../about/brand";
import ServiceArea from "./service-area";
import ContactArea2 from "../homes/home/contact-area2";
import ServiceArea2 from "./service-area2";
import ContactArea from "../homes/home/contact-area";
import BlogArea from "../homes/home/blog-area";
import FaqArea from "./faq-area";
import HeroArea from '../mobileApp/hero-area'
import TestimonialArea from "../homes/home/testimonial-area";
import ProjectArea from "../homes/home/project-area";
import PaymentMethodArea from "../homes/home/payment-method-area";
import AboutArea from "../homes/home/about-area";
import HeaderSix from "@/layout/headers/header-6";
import StickyIcons from "@/common/sticky-icons";
import StickyButtons from "@/common/sticky-buttons";
import ScrollToTop from "../../../hooks/scroll-to-top";
import Image from "next/image";
const DesignPage = () => {
  return (
    <>
      <div className="tw-relative tw-h-screen tw-w-full">
        {/* 1. Header stays on top */}
        <HeaderSix />

        {/* 2. Background Images Layer */}
        <div className="tw-absolute tw-inset-0 ">
          {/* Desktop Background */}
          <div className="tw-hidden md:tw-block tw-relative tw-h-full tw-w-full">
            <Image
              src="/assets/img/herowebp/ui-banner.webp"
              alt="Background Desktop"
              fill
              className="tw-object-cover"
              priority
            />
            {/* Optional: Add an overlay if the text is hard to read */}
            <div className="tw-absolute tw-inset-0 tw-bg-black/20" />
          </div>

          {/* Mobile Background */}
          <div className="tw-block md:tw-hidden tw-relative tw-h-full tw-w-full">
            <Image
              src="/assets/img/herowebp/mob-ui.webp"
              alt="Background Mobile"
              fill
              className="tw-object-cover"
              priority
            />
            <div className="tw-absolute tw-inset-0 tw-bg-black/20" />
          </div>
        </div>

        {/* 3. Content Layer (Hero Area) */}
        <div className="tw-relative tw-h-full tw-flex tw-flex-col tw-justify-start md:tw-justify-center">
          {/* <BreadcrumbTwoCopy
            title='Ui/UX Design' /> */}
          <HeroArea main_title="Ui/UX Design" />

        </div>
      </div>

      <div id='smooth-wrapper'>
        <div id='smooth-content'>

          <main>
            <StickyIcons />
            <StickyButtons />

            <Brand />
            <ServiceArea />
            <ContactArea2 />
            <ServiceArea2 />
            <PaymentMethodArea />
            <ProjectArea />
            <TestimonialArea />
            <AboutArea />
            <FaqArea />
            <BlogArea />
            <ContactArea />
          </main>
          <FooterFour />
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default DesignPage;