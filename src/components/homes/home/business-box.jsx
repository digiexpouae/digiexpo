import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import shape_1 from "../../../../public/assets/img/cta/cta-shape-5-1.36521cea.webp";
import shape_2 from "../../../../public/assets/img/cta/cta-shape-5-2.png";

const business_content = {
  bg_img: "/assets/img/cta/cta-bg-5-1.webp",
  sub_title: "",
  title: (
    <>
     Empower Your Vision with a
    </>
  ),
  maintitle:" Website Development Company",
  sub_text:
    "Digiexpo offers custom web design services. We also offer SEO, performance marketing, and content marketing. These services aim to help you reach your goals and increase your site's visibility.",
  btn_text: "Get in Touch",
};
const {bg_img, sub_title, title, btn_text,maintitle, sub_text}  = business_content
const BusinessBox = () => {
    return (
      <>
      <div className="tp-cta-area pt-120 pb-120 mb-120 mt-120 mb-sm-50 mt-sm-0 tp-cta-five-bg p-relative z-40">
      {/* Wrapper for the background image */}
   
        {/* Next.js Image component with layout="fill" */}
        <Image
          src={bg_img}  // Path to the background image
          alt="Background image"  // Alt text for accessibility
          layout="fill"  // Makes the image fill the parent div
          objectFit="cover"  // Ensures the image covers the div without distortion
          priority  
          style={{zIndex:'-1',borderRadius:'25px'}}// Optional: Prioritize loading the image
        />
    

          <div className='tp-cta-five-shape-1 d-none d-md-block'>
            <Image src={shape_1} alt='theme-pure' />
          </div>
          <div className='tp-cta-five-shape-2 d-none d-md-block'>
            <Image src={shape_2} alt='theme-pure' />
          </div>
          <div className='container-fluid g-0'>
            <div className='row g-0'>
              <div className='col-12'>
                <div className='tp-cta-five-section-box text-center'>
                  <span className='tp-section-subtitle-5'>{sub_title}</span>
                  <h3 className='tp-section-title-5 pb-30'>{title}</h3>
                  <h1 className=' pb-30'>{maintitle}</h1>
                  <span className='tp-section-subtitle-5'>{sub_text}</span>
                  <div className='tp-cta-five-btn'>
                    <Link
                      className='tp-btn-yellow-lg circle-effect'
                      href='/contact'
                    >
                      {btn_text}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default BusinessBox;