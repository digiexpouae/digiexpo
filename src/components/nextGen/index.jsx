import BreadcrumbThree from "@/common/breadcrumbs/breadcrumb-3";
import FooterFour from "@/layout/footers/footer-4";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import CarrerBanner from "../career/carrer-banner";
import Brand from "../about/brand";
import ServicesArea from "./services-area";
import ContactArea2 from "../homes/home/contact-area2";
import ServiceArea from "./service-area";
import AboutArea from "../../common/about-area";
import PaymentMethodArea from "../homes/home/payment-method-area";
import ProjectArea from "../homes/home/project-area";
import TestimonialArea from "../homes/home/testimonial-area";
import FaqArea from "../homes/home/faq-area";
import BlogArea from "../homes/home/blog-area";
import ContactArea from "../homes/home/contact-area";
import AboutArea2 from "../homes/home/about-area";
import StickyIcons from "@/common/sticky-icons";
import StickyButtons from "@/common/sticky-buttons";
const NextGen = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
          <StickyIcons/>
          <StickyButtons/>
          <BreadcrumbThree />
          <CarrerBanner />
          <Brand />
          <ServicesArea/>
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
          <FooterFour/>
        </div>
      </div>
    </>
  );
};

export default NextGen;