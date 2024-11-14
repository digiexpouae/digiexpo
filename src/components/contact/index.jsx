import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import ContactFormArea from "./contact-form-area";
import ContactInner from "./contact-inner";
import CtaArea from "./cta-area";
import HeroBanner from "../../common/hero-banner";
import OfficeLocation from "./office-location";
import FooterFour from "@/layout/footers/footer-4";
import StickyIcons from "@/common/sticky-icons";
import StickyButtons from "@/common/sticky-buttons";

const Contact = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <StickyIcons/>
            <StickyButtons/>
            <Breadcrumb title_top="Get In" title_bottom="Get In" />
            <HeroBanner bg_img="/assets/img/contact/contact-banner.jpg" />
            <OfficeLocation />
            <ContactFormArea />
            <ContactInner />
            <CtaArea />
          </main>
          <FooterFour/>
        </div>
      </div>
    </>
  );
};

export default Contact;
