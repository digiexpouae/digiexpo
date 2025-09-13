import React from "react";
import dynamic from "next/dynamic";

// Critical components (keep static for LCP)
import HeaderThree from "@/layout/headers/header-3";
import HeroArea from "./hero-area";

// Dynamically loaded components (below-the-fold / non-critical)
const Brand = dynamic(() => import("../about/brand"));
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
      <HeaderThree />
      <HeroArea />
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
      {/* <ScrollToTop /> */}
    </>
  );
};

export default WebDevelopment;
