import Link from "next/link";
import React, { useState, useEffect } from "react";
import SEO from "../common/seo";
import HeaderFive from "../layout/headers/header-5";

// error shape import here 
import error_shape_1 from "../../public/assets/img/login/error-shape.png";
import error_shape_2 from "../../public/assets/img/login/text-404.png";
import Image from "next/image";
import FooterFour from "@/layout/footers/footer-4";
import StickyIcons from "@/common/sticky-icons";

const NotFoundPage = () => {
  const [originalPath, setOriginalPath] = useState('Unknown');

  useEffect(() => {
    if (window.history.pushState) {
      window.history.replaceState(null, '', '/404');
    }
    setOriginalPath(window.location.pathname);
  }, []);

  return (
    <>
    <SEO pageTitle={"Oops.! Page Not Found!"} canonicalUrl={"https://www.digiexpo.ae/404"}/>
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
                      <h4 className="error-title-sm">Oops.Page Not Found!</h4>
                      <p>The page you are looking for does not exist.</p>
                      <p>Attempted URL: {originalPath}</p>
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
};

export default NotFoundPage;
