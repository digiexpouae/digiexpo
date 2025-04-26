import FooterFour from "@/layout/footers/footer-4";
import HeaderThree from "@/layout/headers/header-3";
import React from "react";
import dynamic from "next/dynamic";
import HeroArea from "./hero-area";
import Brand from "../about/brand";
// import ServicesArea from "./services-area";
// import ContactArea2 from "../homes/home/contact-area2";
// import ServiceArea from "./service-area";
// Dynamically import components you want to lazy-load
const ServicesArea = dynamic(() => import("./services-area"), { ssr: false });
const ServiceArea = dynamic(() => import("./service-area"), { ssr: false  });
// const ServiceArea2 = dynamic(() => import("./service-area2"), { ssr: false });
const BlogArea = dynamic(() => import("../homes/home/blog-area"), { ssr: false });
const ContactArea = dynamic(() => import("../homes/home/contact-area"), { ssr: false});
const ContactArea2=dynamic(()=>import("../homes/home/contact-area2"), { ssr: false })
import FunFactArea from "./fun-fact-area";
import PaymentMethodArea from "../homes/home/payment-method-area";
import ProjectArea from "../homes/home/project-area";
import TestimonialArea from "../homes/home/testimonial-area";
import AboutArea from "../homes/home/about-area";
import FaqArea from "./faq-area";
// import BlogArea from "../homes/home/blog-area";
// import ContactArea from "../homes/home/contact-area";
import StickyIcons from "@/common/sticky-icons";
import StickyButtons from "@/common/sticky-buttons";
import ScrollToTop from "../../../hooks/scroll-to-top";
import { Suspense } from "react";
const WebDevelopment = () => {
  return (
    <>
      <StickyIcons/>
      <StickyButtons/>
      <HeaderThree />
    
      <HeroArea />
      <Brand />
     <Suspense fallback={<div>Loading reviews...</div>}>
      
      <ServicesArea/>
      </Suspense>
      <Suspense fallback={<div>Loading reviews...</div>}>
   <ContactArea2 />
  
      </Suspense>
      <Suspense fallback={<div>Loading reviews...</div>}>
      <ServiceArea />
      </Suspense>
      <FunFactArea />
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
      <FooterFour />
      <ScrollToTop />
    </>
  );
};

export default WebDevelopment;