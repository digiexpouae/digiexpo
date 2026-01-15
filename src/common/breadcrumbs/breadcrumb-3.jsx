import React from 'react';

import shape_1 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_2 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-2.png";
import Image from 'next/image';
import Link from 'next/link';

const BreadcrumbThree = () => {

  const btn_1 = "Our Work";
  const btn_2 = "Get in Touch";
  return (
    <>
      <div className='breadcrumb__area breadcrumb-height-3 p-relative  fix'>
        {/* <div className='breadcrumb__shape-1'>
            <Image src={shape_1} alt='theme-pure' />
          </div>
          <div className='breadcrumb__shape-2'>
            <Image src={shape_2} alt='theme-pure' />
          </div> */}
        <div className='container'>
          <div className='breadcrumb__content-wrap'>
            <div className='row justify-content-center'>
              <div className='col-xl-12'>
                <div className='breadcrumb__content mb-60'>
                  <div className='breadcrumb__title md:tw-text-start tw-text-center'>
                    <h3>Emerging Technology</h3>
                    {/* <h1> Best Emerging
                      Technologies Development Agency Dubai</h1> */}
                  </div>


                  <div className='tp-hero-2__btn tw-flex tw-items-center tw-justify-center'>
                    <div className="tp-hero-btn-3 wow tpfadeUp " data-wow-duration="1s" data-wow-delay=".9s">
                      <Link className="tp-btn-white-2 tp-btn-hover alt-color-black tw-inline-block  " href="#">
                        <span className='white-text'>{btn_1}</span>
                        <b></b>
                      </Link>
                      <Link className="tp-btn-blue-sm tp-btn-hover alt-color-black purple-bg" href="#">
                        <span className="">{btn_2}</span>
                        <b></b>
                      </Link>
                    </div>
                  </div>
                  {/* <div className="breadcrumb__text">
                                 <p>Work without distraction on your own or with your team.</p>
                              </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbThree;