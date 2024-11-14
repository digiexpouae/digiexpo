import service_data from '@/data/service-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const service_content = {
    bg_img: "/assets/img/service/service-5-1-bg.png",
    sub_title: "What we Offer",
    title: <>Grow Your Business<br/ >Through Our <br /><span>Spectrum Of</span> <br /> <span>Services</span> </>,
    description: <>From concept to conversion, <br />We are your digital growth engine.</>,
    btn_text: "All Services",
}
const {bg_img, sub_title, title, description, btn_text}  = service_content


const ServiceArea = () => {
    return (
        <>
            <div className="tp-service-area tp-services-five-item-bg-color p-relative fix">
                  <div className="container-fluid p-0">                    
                     <div className= "tp-service-five-bg" 
                     style={{backgroundImage: `url(${bg_img})`}}
                     ></div>
                     <div className="row g-0 align-items-center">
                        <div className="col-lg-6">
                           <div className="tp-service-five-section-box">
                              <span className="tp-section-subtitle-5">{sub_title}</span>
                              <h3 className="tp-section-title-5 pb-15">
                                 {title} 
                              </h3>
                              <p className="pb-20">
                                {description}
                              </p>
                              <Link className="tp-btn-yellow-lg" href="/service-details">{btn_text}</Link>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="row g-0">
                                <div className="col-md-6">
                                 <div className="tp-service-five-item z-index">
                                    <div className="tp-services-five-item-bg">
                                       <div className="inner"></div>
                                    </div>
                                    <div className="tp-service-five-wrapper">
                                       <div className="tp-service-five-icon">
                                          {/* <Image src={item.img} alt="theme-pure" /> */}
                                          <video autoPlay muted loop width="100px">
                                             <source src="/assets/img/service/dm-icon.webm" type="video/webm" />
                                             {/* <source src={item.img} type="video/webm" /> */}
                                          </video>
                                       </div>
                                       <div className="tp-service-five-content">
                                          <h3 className="tp-service-five-title-sm">
                                            <Link href="/digital-marketing-agency-dubai">Digital <br /> Marketing</Link>
                                          </h3>
                                          <p>Our Digital Marketers will help to increase traffic, boost conversion rates, and maximize your business's revenue.</p>
                                       </div>
                                    </div>
                                    <div className="tp-service-five-btn text-end">
                                       <Link href="/digital-marketing-agency-dubai"><i className="far fa-arrow-right"></i></Link>
                                    </div>
                                 </div>
                              </div>                                
                                <div className="col-md-6">
                                 <div className="tp-service-five-item z-index">
                                    <div className="tp-services-five-item-bg">
                                       <div className="inner"></div>
                                    </div>
                                    <div className="tp-service-five-wrapper">
                                       <div className="tp-service-five-icon">
                                          {/* <Image src={item.img} alt="theme-pure" /> */}
                                          <video autoPlay muted loop width="100px">
                                             <source src="/assets/img/service/web-icon.webm" type="video/webm" />
                                             {/* <source src={item.img} type="video/webm" /> */}
                                          </video>
                                       </div>
                                       <div className="tp-service-five-content">
                                          <h3 className="tp-service-five-title-sm">
                                            <Link href="/website-development-company-in-dubai">Website <br /> Development</Link>
                                          </h3>
                                          <p>DigiExpo professional web developers will bring the digital vision of your brand to life with a user-friendly, and responsive website.</p>
                                       </div>
                                    </div>
                                    <div className="tp-service-five-btn text-end">
                                       <Link href="/website-development-company-in-dubai"><i className="far fa-arrow-right"></i></Link>
                                    </div>
                                 </div>
                              </div>                                
                                <div className="col-md-6">
                                 <div className="tp-service-five-item z-index">
                                    <div className="tp-services-five-item-bg">
                                       <div className="inner"></div>
                                    </div>
                                    <div className="tp-service-five-wrapper">
                                       <div className="tp-service-five-icon">
                                          {/* <Image src={item.img} alt="theme-pure" /> */}
                                          <video autoPlay muted loop width="100px">
                                             <source src="/assets/img/service/seo-icon.webm" type="video/webm" />
                                             {/* <source src={item.img} type="video/webm" /> */}
                                          </video>
                                       </div>
                                       <div className="tp-service-five-content">
                                          <h3 className="tp-service-five-title-sm">
                                            <Link href="/emerging-technology">Search Engine <br />Optimization</Link>
                                          </h3>
                                          <p>Enhance your business online presence and drive targeted traffic with DigiExpo's expert SEO and content creation services.</p>
                                       </div>
                                    </div>
                                    <div className="tp-service-five-btn text-end">
                                       <Link href="/emerging-technology"><i className="far fa-arrow-right"></i></Link>
                                    </div>
                                 </div>
                              </div>                                
                                <div className="col-md-6">
                                 <div className="tp-service-five-item z-index">
                                    <div className="tp-services-five-item-bg">
                                       <div className="inner"></div>
                                    </div>
                                    <div className="tp-service-five-wrapper">
                                       <div className="tp-service-five-icon">
                                          {/* <Image src={item.img} alt="theme-pure" /> */}
                                          <video autoPlay muted loop width="100px">
                                             <source src="/assets/img/service/smm-icon.webm" type="video/webm" />
                                             {/* <source src={item.img} type="video/webm" /> */}
                                          </video>
                                       </div>
                                       <div className="tp-service-five-content">
                                          <h3 className="tp-service-five-title-sm">
                                            <Link href="/digital-marketing-agency-dubai">Social Media <br /> Marketing</Link>
                                          </h3>
                                          <p>We will help you to increase your brand’s visibility, engagement, and business growth with our expert social media marketers.</p>
                                       </div>
                                    </div>
                                    <div className="tp-service-five-btn text-end">
                                       <Link href="/digital-marketing-agency-dubai"><i className="far fa-arrow-right"></i></Link>
                                    </div>
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