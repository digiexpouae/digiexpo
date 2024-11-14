import BreadcrumbEight from "@/common/breadcrumbs/breadcrumb-8";
import FooterFour from "@/layout/footers/footer-4";
import React from "react";
import ContactArea from "./contact-area";
import BlogArea from "../../homes/home/blog-area";
import FaqArea from "../../homes/home/faq-area";
import TestimonialArea from "../../homes/home/testimonial-area";
import ProjectArea from "../../homes/home/project-area";
import PaymentMethodArea from "../../homes/home/payment-method-area";
import HeaderSix from "@/layout/headers/header-6";
import ThumbArea from "@/components/project-details/thumb-area";
import RankArea from "@/components/homes/home/rank-area";
import AboutArea from "./about-area";
import AboutArea1 from "./about-area1";
import PaymentArea from "@/components/homes/home-2/payment-area";
import ProjectDetailsArea from "@/components/project-details/project-details-area";
import CounterArea from "@/components/homes/home-3/counter-area";
import OpenAccountArea from "@/components/homes/home-2/open-account-area";
import ServiceArea from "@/components/homes/home-2/service-area";
import SalesArea from "../../../common/sales-area";
import FunFactArea from "./fun-fact-area";

const HyggeBikes = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbEight/>
            <ThumbArea />
            <ProjectDetailsArea />
            <RankArea/>
            <AboutArea1/>
            <PaymentArea />
            <CounterArea/>
            <OpenAccountArea />
            <SalesArea />
            <ServiceArea />
            <PaymentMethodArea />
            <ProjectArea />
            <TestimonialArea />
            <AboutArea />
            <FunFactArea />
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

export default HyggeBikes;