import React from "react";
import ScrollToTop from "@/hooks/scroll-to-top";
import Header from "@/layout/headers/header";
import HeroSlider from "./hero-slider";
import Brand from "../../about/brand";
import FooterFour from "@/layout/footers/footer-4";
import dynamic from "next/dynamic";

// Placeholder Component
const Placeholder = () => (
  <div className="min-h-[250px] bg-gray-100 animate-pulse rounded-md" />
);

// Non-critical sections (lazy loaded with placeholder)
const ProjectArea = dynamic(() => import("./project-area"), {
  ssr: false,
  loading: () => <Placeholder />,
});

const PaymentMethodArea = dynamic(() => import("./payment-method-area"), {
  ssr: false,
  loading: () => <Placeholder />,
});
const ServiceArea = dynamic(() => import("./service-area"), {
  ssr: false,
  loading: () => <Placeholder />,
});
const BusinessBox = dynamic(() => import("./business-box"), {
  ssr: false,
  loading: () => <Placeholder />,
});
const Pricing = dynamic(() => import("./pricingplan"), {
  ssr: false,
  loading: () => <Placeholder />,
});
const AboutArea = dynamic(() => import("./about-area"), {
  ssr: false,
  loading: () => <Placeholder />,
});
const FunFactArea = dynamic(() => import("./fun-fact-area"), {
  ssr: false,
  loading: () => <Placeholder />,
});
const Client = dynamic(() => import("./client"), {
  ssr: false,
  loading: () => <Placeholder />,
});
const FaqArea = dynamic(() => import("./faq-area"), {
  ssr: false,
  loading: () => <Placeholder />,
});
const ContactArea = dynamic(() => import("./contact-area"), {
  ssr: false,
  loading: () => <Placeholder />,
});
const BlogArea = dynamic(() => import("./blog-area"), {
  ssr: false,
  loading: () => <Placeholder />,
});
const ContactArea2 = dynamic(() => import("./contact-area2"), {
  ssr: false,
  loading: () => <Placeholder />,
});

const StickyIcons = dynamic(() => import("@/common/sticky-icons"), { ssr: false });
const StickyButtons = dynamic(() => import("@/common/sticky-buttons"), { ssr: false });

const HomeOne = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <StickyIcons />
            <StickyButtons />
            <HeroSlider />
            <Brand />
            {/* <Client /> */}
            <ServiceArea />
            <Pricing />
            <ContactArea2 />
            <PaymentMethodArea />
            <BusinessBox />
            <ProjectArea />
     
            <AboutArea />
            <FunFactArea />
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

export default HomeOne;
