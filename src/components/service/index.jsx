import Breadcrumb from "@/common/breadcrumbs/breadcrumb";
import HeroBanner from "@/common/hero-banner";
import FooterFive from "@/layout/footers/footer-5";
import HeaderTwo from "@/layout/headers/header-2";
import HeroArea from "../../common/hero-area_Two";
import React from "react";
import CardArea from "../../common/card-area";
import SalesArea from "../../common/sales-area";
import TestimonialArea from "../../common/testimonial-area";
import CtaArea from "../contact/cta-area";
import FaqArea from "../homes/home-2/faq-area";
import ServiceArea from "../digitalMarketing/service-area";
import FooterFour from "@/layout/footers/footer-4";
import ScrollToTop from "../../../hooks/scroll-to-top";
import Image from "next/image";
const Service = () => {
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
              src="/assets/img/herowebp/service.webp"
              alt="Background Desktop"
              fill
              className="tw-object-cover "
              priority
            />
            {/* Optional: Add an overlay if the text is hard to read */}
            <div className="tw-absolute tw-inset-0 tw-bg-black/20" />
          </div>

          {/* Mobile Background */}
          <div className="tw-block md:tw-hidden tw-relative tw-h-full tw-w-full">
            <Image
              src="/assets/img/herowebp/services-mob.webp"
              alt="Background Mobile"
              fill
              className="tw-object-cover "
              priority
            />
            <div className="tw-absolute tw-inset-0 tw-bg-black/20" />
          </div>
        </div>

        {/* 3. Content Layer (Hero Area) */}
        <div className="tw-relative tw-z-0  tw-h-full tw-flex tw-flex-col tw-justify-start md:tw-justify-center">
          <HeroArea main_title={'Our Top Services'} />
        </div>
      </div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* <Breadcrumb title_top={"Our Top"} title_bottom={"Service"} /> */}
            {/* <HeroBanner title="Our Top" subtitle="Service" bg_img="/assets/img/breadcrumb/breadcrumb-2.jpg" /> */}
            {/* <HeroArea /> */}
            <ServiceArea />
            <CardArea style_service={true} />
            <SalesArea style_service={true} />
            <TestimonialArea />
            <FaqArea style_service={true} />
            <CtaArea />
          </main>
          <FooterFour />
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default Service;
