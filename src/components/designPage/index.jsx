import BreadcrumbTwoCopy from "@/common/breadcrumbs/breadcrumb-2-copy";
import FooterFour from "@/layout/footers/footer-4";
import React from "react";
import Brand from "../about/brand";
import ServiceArea from "./service-area";
import ContactArea2 from "../homes/home/contact-area2";
import ServiceArea2 from "./service-area2";
import ContactArea from "../homes/home/contact-area";
import BlogArea from "../homes/home/blog-area";
import FaqArea from "./faq-area";
import TestimonialArea from "../homes/home/testimonial-area";
import ProjectArea from "../homes/home/project-area";
import PaymentMethodArea from "../homes/home/payment-method-area";
import AboutArea from "../homes/home/about-area";
import HeaderSix from "@/layout/headers/header-6";
import StickyIcons from "@/common/sticky-icons";
import StickyButtons from "@/common/sticky-buttons";

const DesignPage = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <StickyIcons/>
            <StickyButtons/>
            <BreadcrumbTwoCopy title="Get Your Desired Business Growth with Intuitive UI/UX Design Services in Dubai" />
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
          <FooterFour/>
        </div>
      </div>
    </>
  );
};

export default DesignPage;