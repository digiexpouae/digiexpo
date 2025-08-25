import React from "react";
import dynamic from "next/dynamic";
import HeaderSix from "@/layout/headers/header-6";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";

// 🚀 Dynamically load non-critical components
const ContactFormArea = dynamic(() => import("./contact-form-area"), { ssr: false });
const ContactInner = dynamic(() => import("./contact-inner"), { ssr: false });
const CtaArea = dynamic(() => import("./cta-area"), { ssr: false });
const HeroBanner = dynamic(() => import("../../common/hero-banner"));
const OfficeLocation = dynamic(() => import("./office-location"));
const FooterFour = dynamic(() => import("@/layout/footers/footer-4"));
const StickyIcons = dynamic(() => import("@/common/sticky-icons"), { ssr: false });
const StickyButtons = dynamic(() => import("@/common/sticky-buttons"), { ssr: false });

const Contact = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <StickyIcons />
            <StickyButtons />
            <Breadcrumb title_top="Get In" title_bottom="Get In" />
            <HeroBanner bg_img="/assets/img/contact/contact-banner.jpg" />
            <OfficeLocation />
            <ContactFormArea />
            <ContactInner />
            <CtaArea />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default Contact;
