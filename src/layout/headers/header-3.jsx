import useSticky from '@/hooks/use-sticky';
import Offcanvus from '@/common/offcanvus';
import Link from 'next/link';
import React,{useState} from 'react';
import NavMenu from './nav-menu';
import Image from 'next/image';


import logo from "../../../public/assets/img/logo/mainlogo.png"
import PhoneFour from '@/svg/phone-4';
import WhatsappIcon from '@/svg/whatsapp-icon';
import ContactUsFormMuz from '@/forms/contact-us-form-muz';

const HeaderThree = () => {

    const {sticky} = useSticky()
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen((prevState) => !prevState);
  };

    return (
      <>
        <header className='tp-header-height'>
          <div
            id='header-sticky'
            className={`"header-bottom__area header__space header-sticky-bg-2 header-bottom__transparent z-index-5 ${
              sticky && "header-sticky"
            }`}
          >
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6'>
                  <div className='header-bottom__logo'>
                    <Link href='/'>
                      <Image src={logo} alt='' />
                    </Link>
                  </div>
                </div>
                <div className='col-xxl-6 col-xl-5 col-lg-5 d-none d-lg-block'>
                  <div className='header-bottom__main-menu header-bottom__main-menu-3'>
                    <nav id='mobile-menu'>
                      <NavMenu />
                    </nav>
                  </div>
                </div>
                <div className='col-xxl-4 col-xl-5 col-lg-5 col-md-8 col-6'>
                  <div className='header-bottom__right d-flex align-items-center justify-content-end'>
                    <div className='header-bottom__action'>
                      {/* <a className="d-none d-md-inline-block search-open-btn"
                                    onClick={() => setSearchOpen(true)} >
                                    <SearchIconTwo />
                                 </a> */}
                      <Link
                        className='d-none d-lg-inline-block'
                        href='tel:+971552626943'
                      >
                        <PhoneFour />
                      </Link>
                      <Link
                        className='d-none d-lg-inline-block last-child'
                        href='https://api.whatsapp.com/send?phone=971552626943&text=Hello%20DigiExpo!%20%F0%9F%91%8B'
                      >
                        <WhatsappIcon />
                      </Link>
                    </div>
                    <div className='header-bottom__btn d-flex align-items-center'>
                      <Link
                        className='tp-btn d-none d-md-inline-block tp-btn-hover alt-color-black'
                        href='#'
                        onClick={toggleForm}
                      >
                        <span>Let's Talk</span>
                        <b></b>
                      </Link>
                      <a
                        className='header-bottom__bar tp-menu-bar d-lg-none'
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

export default HeaderThree;