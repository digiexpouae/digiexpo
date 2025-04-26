import FooterFour from "@/layout/footers/footer-4";
import React from "react";
import dynamic from "next/dynamic";
import HeroArea from "./hero-area";
import Brand from "../about/brand";
// import ServicesArea from "./services-area";
// import ContactArea2 from "../homes/home/contact-area2";
// Dynamically import components you want to lazy-load
const ServicesArea = dynamic(() => import("./services-area"), { ssr: false });
const ContactArea2=dynamic(()=>import("../homes/home/contact-area2"), { ssr: false })
const BlogArea = dynamic(() => import("../homes/home/blog-area"), { ssr: false });
const  ContactArea= dynamic(() => import("../homes/home/contact-area"), { ssr: false });

import FeatureArea from "./feature-area";
import CounterArea from "./counter-area";
import PaymentMethodArea from "../homes/home/payment-method-area";
import ProjectArea from "../homes/home/project-area";
import FaqArea from "./faq-area";
// import BlogArea from "../homes/home/blog-area";
// import ContactArea from "../homes/home/contact-area";
import TestimonialArea from "../homes/home/testimonial-area";
import AboutArea from "../homes/home/about-area";
import HeaderTwo from "@/layout/headers/header-2";
import StickyIcons from "@/common/sticky-icons";
import StickyButtons from "@/common/sticky-buttons";
import ScrollToTop from "../../../hooks/scroll-to-top";
import { Suspense } from "react";
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
            <Suspense fallback={<div>Loading reviews...</div>}>
            
            <ServicesArea />
            </Suspense>
            <Suspense>
         <ContactArea2 />
            </Suspense>
           
            <FeatureArea style_integraton={true} />
            
            <CounterArea />
            <PaymentMethodArea />
            <ProjectArea />
            <TestimonialArea />
            <Suspense fallback={<div>Loading reviews...</div>}>
            
            <AboutArea />
            </Suspense>
            <FaqArea />
            <Suspense fallback={<div>Loading reviews...</div>}>
            
            <BlogArea />
            </Suspense>
                 <Suspense fallback={<div>Loading reviews...</div>}>
            
            <ContactArea />
          </Suspense>
          </main>
          <FooterFour />
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default MobileApp;