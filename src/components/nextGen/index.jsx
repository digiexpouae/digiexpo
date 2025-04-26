import BreadcrumbThree from "@/common/breadcrumbs/breadcrumb-3";
import FooterFour from "@/layout/footers/footer-4";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import CarrerBanner from "../career/carrer-banner";
import Brand from "../about/brand";
import dynamic from "next/dynamic";
// import ServicesArea from "./services-area";
// import ContactArea2 from "../homes/home/contact-area2";
// import ServiceArea from "./service-area";
import AboutArea from "../../common/about-area";
// Dynamically import components you want to lazy-load
const ServicesArea = dynamic(() => import("./services-area"), { ssr: false  });
const ServiceArea = dynamic(() => import("./service-area"), { ssr: false  });

const BlogArea = dynamic(() => import("../homes/home/blog-area"), { ssr: false  });
const ContactArea = dynamic(() => import("../homes/home/contact-area"), { ssr: false});
const ContactArea2=dynamic(()=>import("../homes/home/contact-area2"), { ssr: false  })
import PaymentMethodArea from "../homes/home/payment-method-area";
import ProjectArea from "../homes/home/project-area";
import TestimonialArea from "../homes/home/testimonial-area";
import FaqArea from "../homes/home/faq-area";
// import BlogArea from "../homes/home/blog-area";
// import ContactArea from "../homes/home/contact-area";
import AboutArea2 from "../homes/home/about-area";
import StickyIcons from "@/common/sticky-icons";
import StickyButtons from "@/common/sticky-buttons";
import ScrollToTop from "../../../hooks/scroll-to-top";
import { Suspense } from "react";
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
          <Suspense fallback={<div>Loading reviews...</div>}>
          <ServicesArea/>
          </Suspense>
          <Suspense fallback={<div>Loading reviews...</div>}>
       <ContactArea2 />
        
          </Suspense>
          <Suspense fallback={<div>Loading reviews...</div>}>
          <ServiceArea />
          </Suspense>
          <AboutArea />
          <PaymentMethodArea />
          <ProjectArea />
          <TestimonialArea />
          <AboutArea2 />
          <FaqArea />
          <Suspense fallback={<div>Loading reviews...</div>}>
          <BlogArea />
          </Suspense>
          <Suspense fallback={<div>Loading reviews...</div>}>

          <ContactArea />
          </Suspense>
          </main>
          <FooterFour/>
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default NextGen;