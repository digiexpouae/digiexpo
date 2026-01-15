import React from "react";
import dynamic from "next/dynamic";

// Critical / above-the-fold components
import HeaderSix from "@/layout/headers/header-2";
import HeroArea from "../mobileApp/hero-area";
import Image from "next/image";
// Dynamically imported components (below-the-fold / non-critical)
const Brand = dynamic(() => import("../about/brand"));
const ServiceArea = dynamic(() => import("./service-area"));
const ServiceArea2 = dynamic(() => import("./service-area2"));
const ContactArea2 = dynamic(() => import("../homes/home/contact-area2"));
const PaymentMethodArea = dynamic(() => import("../homes/home/payment-method-area"));
const ProjectArea = dynamic(() => import("../homes/home/project-area"));
const TestimonialArea = dynamic(() => import("../homes/home/testimonial-area"));
const AboutArea = dynamic(() => import("../homes/home/about-area"));
const FaqArea = dynamic(() => import("./faq-area"));
const BlogArea = dynamic(() => import("../homes/home/blog-area"));
const ContactArea = dynamic(() => import("../homes/home/contact-area"));
const FooterFour = dynamic(() => import("@/layout/footers/footer-4"));

// Client-only components (rely on window / DOM)
const StickyIcons = dynamic(() => import("@/common/sticky-icons"), { ssr: false });
const StickyButtons = dynamic(() => import("@/common/sticky-buttons"), { ssr: false });
const ScrollToTop = dynamic(() => import("../../../hooks/scroll-to-top"), { ssr: false });

const Ecommerce = () => {
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
              src="/assets/img/herowebp/ecommerce-banner.webp"
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
              src="/assets/img/herowebp/ecommerce-mob.webp"
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
          <HeroArea main_title="Ecommerce " />

        </div>
      </div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
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

export default Ecommerce;
