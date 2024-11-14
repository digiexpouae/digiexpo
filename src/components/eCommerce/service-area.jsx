import service_data from '@/data/service-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import service_icon_1 from "../../../public/assets/img/service/sv-icon-3-1.png"
import service_icon_2 from "../../../public/assets/img/service/service-shape-3-1.png"


const service_content = {
    title: <>Accounting Software <br /> That Handles it All.</>,
    btn_text: <>See All Features</>,
 
    bg_img: "/assets/img/service/service-3-bg.png",
    service_title: "Our services",
    service_info: <>upercharge Your Ecommerce Success With <br />Our Cutting-Edge Solutions</>,
 }
 const {title, btn_text, bg_img, service_title, service_info}  = service_content


const ServiceArea = () => {
    return (
        <>
            <div className="tp-service-area pb-120 pt-120 z-index pb-sm-50 pt-sm-50">
               <div className="container">
                  {/* <div className="row">
                     <div className="col-xl-12">
                        <div className="tp-service-section-wrapper mb-60 d-flex justify-content-between align-items-end">
                           <h3 className="tp-section-title tp-title-anim">{title}</h3>
                              <Link className="tp-btn-inner tp-btn-hover alt-color-black wow tpfadeRight" 
                                 data-wow-duration=".9s" 
                                 data-wow-delay=".3s" 
                                 href="/service-details">
                                 <span>{btn_text}</span>
                                 <b></b>
                              </Link>
                        </div>
                     </div>
                  </div> */}
                  <div className="row">

                     <div className="col-xl-8 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                        <div className="tp-service-3-item mb-30 p-relative z-index" style={{backgroundImage: `url(${bg_img})`}}>
                           <div className="tp-service-3-icon">
                              <Image src={service_icon_1} alt="theme-pure" />
                           </div>
                           <div className="tp-service-3-content">
                              <span>{service_title}</span>
                              <h4 className="tp-service-3-title-sm">
                                 <Link href="/service-details">{service_info}</Link></h4>
                           </div>
                           <div className="tp-service-3-btn">
                              <Link className="tp-btn-white-solid" href="/service-details">Learn More</Link>
                           </div>
                           <div className="tp-service-3-shape">
                              <Image src={service_icon_2} alt="theme-pure" />
                           </div>
                        </div>
                     </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                           <div className="tp-service-sm-icon">
                           <video autoPlay muted loop width="100px">
                      <source
                        src="/assets/img/service/woocommerce.webm"
                        type="video/webm"
                      />
                    </video>
                           </div>
                           <div className="tp-service-sm-content">
                              <span className='ecomm'>WooCommerce Development </span>
                              <h3 className="tp-service-sm-title"><Link href="/service-details">Turn your WordPress into a shopping powerhouse with WooCommerce wizardry</Link></h3>
                              <div className="tp-service-sm-link">
                                 <Link href="/service-details">Learn More <i className="far fa-arrow-right"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                           <div className="tp-service-sm-icon">
                           <video autoPlay muted loop width="125px">
                      <source
                        src="/assets/img/service/mirakl.webm"
                        type="video/webm"
                      />
                    </video>
                           </div>
                           <div className="tp-service-sm-content">
                              <span className='ecomm'>Mirakl Development</span>
                              <h3 className="tp-service-sm-title"><Link href="/service-details">Craft your dream marketplace with our Mirakl’s powerful platform</Link></h3>
                              <div className="tp-service-sm-link">
                                 <Link href="/service-details">Learn More <i className="far fa-arrow-right"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                           <div className="tp-service-sm-icon">
                           <video autoPlay muted loop width="125px">
                      <source
                        src="/assets/img/service/magento.webm"
                        type="video/webm"
                      />
                    </video>
                           </div>
                           <div className="tp-service-sm-content">
                              <span className='ecomm'>Magento Ecommerce Development</span>
                              <h3 className="tp-service-sm-title"><Link href="/service-details">Fuel your eCommerce empire with Magento’s limitless power.</Link></h3>
                              <div className="tp-service-sm-link">
                                 <Link href="/service-details">Learn More <i className="far fa-arrow-right"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                           <div className="tp-service-sm-icon">
                           <video autoPlay muted loop width="125px">
                      <source
                        src="/assets/img/service/bigcommerce.webm"
                        type="video/webm"
                      />
                    </video>
                           </div>
                           <div className="tp-service-sm-content">
                              <span className='ecomm'>BigCommerce Development</span>
                              <h3 className="tp-service-sm-title"><Link href="/service-details">Ride the wave of growth—BigCommerce made brilliantly simple.</Link></h3>
                              <div className="tp-service-sm-link">
                                 <Link href="/service-details">Learn More <i className="far fa-arrow-right"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                           <div className="tp-service-sm-icon">
                           <video autoPlay muted loop width="125px">
                      <source
                        src="/assets/img/service/shopify.webm"
                        type="video/webm"
                      />
                    </video>
                           </div>
                           <div className="tp-service-sm-content">
                              <span className='ecomm'>Shopify Ecommerce Development </span>
                              <h3 className="tp-service-sm-title"><Link href="/service-details">Grow smarter, not harder—Shopify stores that captivate and convert.</Link></h3>
                              <div className="tp-service-sm-link">
                                 <Link href="/service-details">Learn More <i className="far fa-arrow-right"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between mb-sm-0">
                           <div className="tp-service-sm-icon">
                           <video autoPlay muted loop width="125px">
                      <source
                        src="/assets/img/service/shopify-plus.webm"
                        type="video/webm"
                      />
                    </video>
                           </div>
                           <div className="tp-service-sm-content">
                              <span className='ecomm'>Shopify Plus Ecommerce Development</span>
                              <h3 className="tp-service-sm-title"><Link href="/service-details">Go beyond the ordinary—Shopify Plus crafted for your eCommerce conquest.</Link></h3>
                              <div className="tp-service-sm-link">
                                 <Link href="/service-details">Learn More <i className="far fa-arrow-right"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default ServiceArea;