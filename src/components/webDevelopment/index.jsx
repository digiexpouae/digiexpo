import React from "react";
import dynamic from "next/dynamic";

// Critical components (keep static for LCP)
import HeaderThree from "@/layout/headers/header-2";
import HeroArea from "../mobileApp/hero-area";
import Image from "next/image";
// Dynamically loaded components (below-the-fold / non-critical)
const Brand = dynamic(() => import("../about/brand"));
const VideoSection = dynamic(() => import("./videoSection"));
const ServicesArea = dynamic(() => import("./services-area"));
const ContactArea2 = dynamic(() => import("../homes/home/contact-area2"));
const ServiceArea = dynamic(() => import("./service-area"));
const FunFactArea = dynamic(() => import("./fun-fact-area"));
const PaymentMethodArea = dynamic(() => import("../homes/home/payment-method-area"));
const ProjectArea = dynamic(() => import("../homes/home/project-area"));
const TestimonialArea = dynamic(() => import("../homes/home/testimonial-area"));
const AboutArea = dynamic(() => import("../homes/home/about-area"));
const FaqArea = dynamic(() => import("./faq-area"));
const BlogArea = dynamic(() => import("../homes/home/blog-area"));
const ContactArea = dynamic(() => import("../homes/home/contact-area"));
const FooterFour = dynamic(() => import("@/layout/footers/footer-4"));

// Client-only dynamic imports for components that rely on window or DOM
const StickyIcons = dynamic(() => import("@/common/sticky-icons"), { ssr: false });
const StickyButtons = dynamic(() => import("@/common/sticky-buttons"), { ssr: false });
const ScrollToTop = dynamic(() => import("../../../hooks/scroll-to-top"), { ssr: false });

const WebDevelopment = () => {
  return (
    <>
      <StickyIcons />
      <StickyButtons />

      <div className="tw-relative tw-h-screen tw-w-full">
        <HeaderThree />

        <div className="tw-absolute tw-inset-0 tw-z-0">
          {/* Desktop Background */}
          <div className="tw-hidden md:tw-block tw-relative tw-h-full tw-w-full">
            <Image
              src="/assets/img/herowebp/w-banner.webp"
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
              src="/assets/img/herowebp/web-m.webp"
              alt="Background Mobile"
              fill
              className="tw-object-cover"
              priority
            />
            <div className="tw-absolute tw-inset-0 tw-bg-black/20" />
          </div>
        </div>
        <div className="tw-relative tw-z-0  tw-h-full tw-flex tw-flex-col tw-justify-start md:tw-justify-center">
          <HeroArea main_title="Web Development" />
        </div>
      </div>

      <VideoSection />
      <Brand />
      <ServicesArea />
      <ContactArea2 />
      <ServiceArea />
      <FunFactArea />
      <PaymentMethodArea />
      <ProjectArea />
      <TestimonialArea />
      <AboutArea />
      <FaqArea />
      <BlogArea />
      <ContactArea />
      <FooterFour />
      <ScrollToTop />
    </>
  );
};

export default WebDevelopment;
