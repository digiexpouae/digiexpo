import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import HeaderTwo from "@/layout/headers/header-2";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";

// 🚀 Dynamically load non-critical components
const ContactFormArea = dynamic(() => import("./contact-form-area"), { ssr: false });
const ContactInner = dynamic(() => import("./contact-inner"), { ssr: false });
const CtaArea = dynamic(() => import("./cta-area"), { ssr: false });
const HeroArea = dynamic(() => import("../../common/hero-area_Two"));
const OfficeLocation = dynamic(() => import("./office-location"));
const FooterFour = dynamic(() => import("@/layout/footers/footer-4"));
const StickyIcons = dynamic(() => import("@/common/sticky-icons"), { ssr: false });
const StickyButtons = dynamic(() => import("@/common/sticky-buttons"), { ssr: false });
const RecaptchaWrapper = dynamic(() => import("@/components/Provider/googlerecaptchaprovider"), { ssr: false });

const Contact = () => {
  return (
    <>
      <div className="tw-relative tw-h-screen tw-w-full">
        {/* 1. Header stays on top */}
        <HeaderTwo />

        {/* 2. Background Images Layer */}
        <div className="tw-absolute tw-inset-0 ">
          {/* Desktop Background */}
          <div className="tw-hidden lg:tw-block tw-relative tw-h-full tw-w-full">
            <Image
              src="/assets/img/herowebp/contact.webp"
              alt="Background Desktop"
              fill
              className="tw-object-cover"
              priority
            />
            {/* Optional: Add an overlay if the text is hard to read */}
            <div className="tw-absolute tw-inset-0 tw-bg-black/20" />
          </div>

          {/* Mobile Background */}
          <div className="tw-block lg:tw-hidden tw-relative tw-h-full tw-w-full">
            <Image
              src="/assets/img/herowebp/contact-mob.webp"
              alt="Background Mobile"
              fill
              className="tw-object-cover"
              priority
            />
            <div className="tw-absolute tw-inset-0 tw-bg-black/20" />
          </div>
        </div>

        {/* 3. Content Layer (Hero Area) */}
        <div className="tw-relative tw-z-0  tw-h-full tw-flex tw-flex-col tw-justify-start lg:tw-justify-center">
          <HeroArea main_title={'Get in Touch'} />
        </div>
      </div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <RecaptchaWrapper>
            <main >
              <StickyIcons />
              <StickyButtons />
              {/* <Breadcrumb title_top="Get In" title_bottom="Get In" /> */}
              {/* <HeroBanner bg_img="/assets/img/contact/contact-banner.jpg" /> */}
              <OfficeLocation />
              <ContactFormArea />
              <ContactInner />
              <CtaArea />
            </main>
          </RecaptchaWrapper>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default Contact;
