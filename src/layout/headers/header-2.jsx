import useSticky from "@/hooks/use-sticky";
import Offcanvus from "@/common/offcanvus";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavMenu from "./nav-menu";

import white_logo from "../../../public/assets/img/logo/mainlogo-white.png";
import black_logo from "../../../public/assets/img/logo/mainlogo.png";
import PhoneFour from "@/svg/phone-4";
import WhatsappIcon from "@/svg/whatsapp-icon";
import PhoneFourWhite from "@/svg/phone-4-white";
import WhatsappIconWhite from "@/svg/whatsapp-icon-white";
import ContactUsFormMuz from "@/forms/contact-us-form-muz";

const hero_content = {
  login_btn: "Login",
  sign_up_btn: "Sign Up",
};
const { login_btn, sign_up_btn } = hero_content;

const HeaderTwo = () => {
  const { sticky } = useSticky();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen((prevState) => !prevState);
  };

  return (
    <>
      <header className='tp-header-height'>
        <div
          id='header-sticky'
          className={`"tp-header-2__area header-sticky-bg-2 tp-header-2__transparent tp-header-2__plr z-index-3 ${
            sticky && "header-sticky"
          }`}
        >
          <div className='container-fluid g-0'>
            <div className='row g-0 align-items-center'>
              <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6'>
                <div className='tp-header-2__logo'>
                  <Link className='white-logo' href='/'>
                    <Image src={white_logo} alt='theme-pure' />
                  </Link>
                  <Link className='black-logo' href='/'>
                    <Image src={black_logo} alt='theme-pure' />
                  </Link>
                </div>
              </div>
              <div className='col-xxl-6 col-xl-6 col-lg-5 d-none d-lg-block'>
                <div className='tp-header-2__main-menu text-center'>
                  <nav id='mobile-menu'>
                    <NavMenu />
                  </nav>
                </div>
              </div>
              <div className='col-xxl-4 col-xl-4 col-lg-5 col-md-8 col-6'>
                <div className='tp-header-2__right d-flex align-items-center justify-content-end'>
                  <div className='header-bottom__action'>
                    {/* <a className="d-none d-md-inline-block search-open-btn"
                                    onClick={() => setSearchOpen(true)} >
                                    <SearchIconTwo />
                                 </a> */}
                    <Link
                      className='d-none d-lg-inline-block'
                      href='tel:+971552626943'
                    >
                      {sticky ? <PhoneFour /> : <PhoneFourWhite />}
                    </Link>
                    <Link
                      className='d-none d-lg-inline-block last-child'
                      href='https://api.whatsapp.com/send?phone=971552626943&text=Hello%20DigiExpo!%20%F0%9F%91%8B'
                    >
                      {sticky ? <WhatsappIcon /> : <WhatsappIconWhite />}
                    </Link>
                  </div>
                  <div className='header-bottom__btn d-flex align-items-center'>
                    <Link
                      className='tp-btn-white tp-btn-hover alt-color-black d-none d-md-inline-block'
                      href='#'
                      onClick={toggleForm}
                    >
                      <span className='white-text'>Let's Talk</span>
                      <b></b>
                    </Link>
                    <a
                      className='header-bottom__bar d-lg-none tp-menu-bar'
                      href='#'
                      onClick={() => setSidebarOpen(true)}
                    >
                      <i className='fal fa-bars'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id='formContainer'
          className={`form-container ${isFormOpen ? "open" : ""}`}
        >
          <p className='tp-section-title-4 text-white'>Let's Talk</p>
          <span onClick={toggleForm} className='close-btn'>
            &times;
          </span>
          <div className='form-content'>
            <ContactUsFormMuz />
          </div>
        </div>
      </header>
      <Offcanvus sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};

export default HeaderTwo;
