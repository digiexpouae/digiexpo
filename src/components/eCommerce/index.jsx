import React from "react";
import dynamic from "next/dynamic";

// Critical / above-the-fold components
import HeaderSix from "@/layout/headers/header-6";
import HeroArea from "./hero-area";

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
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <StickyIcons />
            <StickyButtons />
            <HeroArea />
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
