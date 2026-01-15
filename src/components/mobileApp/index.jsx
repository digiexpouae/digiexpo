import FooterFour from "@/layout/footers/footer-4";
import React from "react";
import HeroArea from "./hero-area";
import Brand from "../about/brand";
import ServicesArea from "./services-area";
import ContactArea2 from "../homes/home/contact-area2";
import FeatureArea from "./feature-area";
import CounterArea from "./counter-area";
import PaymentMethodArea from "../homes/home/payment-method-area";
import ProjectArea from "../homes/home/project-area";
import FaqArea from "./faq-area";
import BlogArea from "../homes/home/blog-area";
import ContactArea from "../homes/home/contact-area";
import TestimonialArea from "../homes/home/testimonial-area";
import AboutArea from "../homes/home/about-area";
import HeaderTwo from "@/layout/headers/header-2";
import StickyIcons from "@/common/sticky-icons";
import StickyButtons from "@/common/sticky-buttons";
import ScrollToTop from "../../../hooks/scroll-to-top";
import Image from "next/image";
const MobileApp = () => {
  return (
    <>


      <div className="tw-relative tw-h-screen tw-w-full">
        {/* 1. Header stays on top */}
        <HeaderTwo />

        {/* 2. Background Images Layer */}
        <div className="tw-absolute tw-inset-0 ">
          {/* Desktop Background */}
          <div className="tw-hidden md:tw-block tw-relative tw-h-full tw-w-full">
            <Image
              src="/assets/img/herowebp/app-banner.webp"
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
              src="/assets/img/herowebp/mob-app.webp"
              alt="Background Mobile"
              fill
              className="tw-object-cover"
              priority
            />
            <div className="tw-absolute tw-inset-0 tw-bg-black/20" />
          </div>
        </div>

        {/* 3. Content Layer (Hero Area) */}
        <div className="tw-relative tw-z-0  tw-h-full tw-flex tw-flex-col tw-justify-start md:tw-justify-center">
          <HeroArea main_title={'App Design'} />
        </div>
      </div>

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <StickyIcons />
            <StickyButtons />
            <Brand />
            <ServicesArea />
            <ContactArea2 />
            <FeatureArea style_integraton={true} />
            <CounterArea />
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

export default MobileApp;