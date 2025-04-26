import BreadcrumbTwoCopy from "@/common/breadcrumbs/breadcrumb-2-copy";
import FooterFour from "@/layout/footers/footer-4";
import React from "react";
import Brand from "../about/brand";
// import ServiceArea from "./service-area";
// import ContactArea2 from "../homes/home/contact-area2";
// import ServiceArea2 from "./service-area2";
// import ContactArea from "../homes/home/contact-area";
// import BlogArea from "../homes/home/blog-area";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import components you want to lazy-load
const ServiceArea = dynamic(() => import("./service-area"), { ssr: false });
const ServiceArea2 = dynamic(() => import("./service-area2"), { ssr: false });
const BlogArea = dynamic(() => import("../homes/home/blog-area"), { ssr: false });
const ContactArea = dynamic(() => import("../homes/home/contact-area"), { ssr: false });
const ContactArea2=dynamic(()=>import("../homes/home/contact-area2"), { ssr: false })
import FaqArea from "./faq-area";
import TestimonialArea from "../homes/home/testimonial-area";
import ProjectArea from "../homes/home/project-area";
import PaymentMethodArea from "../homes/home/payment-method-area";
import AboutArea from "../homes/home/about-area";
import HeaderSix from "@/layout/headers/header-6";
import StickyIcons from "@/common/sticky-icons";
import StickyButtons from "@/common/sticky-buttons";
import ScrollToTop from "../../../hooks/scroll-to-top";
const DesignPage = () => {
  return (
    <>
      <HeaderSix />
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          <main>
            <StickyIcons />
            <StickyButtons />
            <BreadcrumbTwoCopy
              title='Get Your Desired Business Growth With Intuitive' maintitle='UI/UX Design Services Company In Dubai'/>

            <Brand />
            <Suspense fallback={<div>Loading reviews...</div>}>
            
            <ServiceArea />
            </Suspense>
            <Suspense fallback={<div>Loading reviews...</div>}>
             <ContactArea2 />
          
            </Suspense>
           <Suspense fallback={<div>Loading reviews...</div>}> 
            <ServiceArea2 />
            </Suspense>
            <PaymentMethodArea />
            <ProjectArea />
            <TestimonialArea />
            <AboutArea />
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

export default DesignPage;