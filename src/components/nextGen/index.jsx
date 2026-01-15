import BreadcrumbThree from "@/common/breadcrumbs/breadcrumb-3";
import FooterFour from "@/layout/footers/footer-4";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import CarrerBanner from "../career/carrer-banner";
import Brand from "../about/brand";
import ServicesArea from "./services-area";
import ContactArea2 from "../homes/home/contact-area2";
import ServiceArea from "./service-area";
import HeroArea from "../mobileApp/hero-area";
import AboutArea from "../../common/about-area";
import PaymentMethodArea from "../homes/home/payment-method-area";
import ProjectArea from "../homes/home/project-area";
import TestimonialArea from "../homes/home/testimonial-area";
import FaqArea from "./faq-area";
import BlogArea from "../homes/home/blog-area";
import ContactArea from "../homes/home/contact-area";
import AboutArea2 from "../homes/home/about-area";
import StickyIcons from "@/common/sticky-icons";
import StickyButtons from "@/common/sticky-buttons";
import ScrollToTop from "../../../hooks/scroll-to-top";
import Image from "next/image";
const NextGen = () => {
  return (
    <>


      <div className="tw-relative tw-h-screen tw-w-full">
        {/* 1. Header stays on top */}
        <HeaderSix />

        {/* 2. Background Images Layer */}
        <div className="tw-absolute tw-inset-0">
          {/* Desktop Background */}
          <div className="tw-hidden md:tw-block tw-relative tw-h-full tw-w-full">
            <Image
              src="/assets/img/herowebp/tech-banner.webp"
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
              src="/assets/img/herowebp/mob-emerging.webp"
              alt="Background Mobile"
              fill
              className="tw-object-cover"
              priority
            />
            <div className="tw-absolute tw-inset-0 tw-bg-black/20" />
          </div>

        </div>

        <div className="tw-relative  tw-h-full tw-flex tw-flex-col tw-justify-start md:tw-justify-center">
          {/* <BreadcrumbThree /> */}
          <HeroArea main_title="Emerging Technology" />

        </div>
        {/* 3. Content Layer (Hero Area) */}

      </div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <StickyIcons />
            <StickyButtons />
            {/* <CarrerBanner /> */}
            <Brand />
            <ServicesArea />
            <ContactArea2 />
            <ServiceArea />
            <AboutArea />
            <PaymentMethodArea />
            <ProjectArea />
            <TestimonialArea />
            <AboutArea2 />
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

export default NextGen;