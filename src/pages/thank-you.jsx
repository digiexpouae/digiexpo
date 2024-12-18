import React from 'react';
import Link from 'next/link';
import SEO from "../common/seo";
import HeaderFive from "../layout/headers/header-5";
import error_shape_1 from "../../public/assets/img/login/error-shape.png";
import error_shape_2 from "../../public/assets/img/login/thank-you.png";
import Image from "next/image";
import FooterFour from "@/layout/footers/footer-4";
import StickyIcons from "@/common/sticky-icons";

export default function ThankYouPage() {
  return (
    <>
      <SEO pageTitle={"Thank You!"} canonicalUrl={"https://www.digiexpo.ae/thank-you"}/>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <StickyIcons/>
            <div className="tp-error-area tp-error-ptb p-relative">
              <div className="tp-error-left-shape">
                <Image src={error_shape_1} alt="theme-pure" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-error-content-box text-center mb-40">
                      <Image src={error_shape_2} alt="theme-pure"
                      />
                    </div>
                    <div className="tp-error-text-box text-center">
                      <p>Your submission has been received successfully.</p>
                      <p>Our team will contact you soon.</p>
                      <Link
                        className="tp-btn-inner tp-btn-hover alt-color-black"
                        href="/"
                      >
                        <span> Back To Home</span>
                        <b></b>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
}
