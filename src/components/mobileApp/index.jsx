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

const MobileApp = () => {
  return (
    <>
      <HeaderTwo />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <StickyIcons/>
            <StickyButtons/>
            <HeroArea />
            <Brand/>
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
        </div>
      </div>
    </>
  );
};

export default MobileApp;