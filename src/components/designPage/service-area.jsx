import service_data from '@/data/service-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import dynamic from "next/dynamic";
import service_icon_1 from "../../../public/assets/img/service/sv-icon-3-1.png"
import service_icon_2 from "../../../public/assets/img/service/service-shape-3-1.png"
import web from '../../../public/animation/php.json'
import target from '../../../public/animation/performance.json'
import todo from '../../../public/animation/checklist-board.json'
import graphic from '../../../public/animation/graphicdesign.json'
import landing from '../../../public/animation/landingpage.json'
import image from '../../../public/animation/image.json'

const Lootie = dynamic(() => import('react-lottie'), { ssr: false });

const service_content = {
    title: <>Accounting Software <br /> That Handles it All.</>,
    btn_text: <>See All Features</>,
 
    bg_img: "/assets/img/service/service-3-bg.png",
    service_title: "Build Engaging Interfaces",
    service_info: <>Unleash Peak User Experiences with <br />DigiExpo's UI/UX Design Services</>,
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
                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between mt-xl-4">
                           <div className="tp-service-sm-icon">
                               {/* {item.icon} */}
                               <Lootie 
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: image,  // Animation for Digital Marketing
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice"
                        }
                      }}
                  style={{width:'122px',height:'100%'}}
                    />  
                        
                           </div>
                           <div className="tp-service-sm-content">
                              <span>PSD to Responsive HTML</span>
                              <h3 className="tp-service-sm-title"><Link href="/service-details">Turn static PSDs into dynamic, responsive HTML, capturing your design vision with accuracy and adaptability.</Link></h3>
                              <div className="tp-service-sm-link">
                                 <Link href="/service-details">Learn More <i className="far fa-arrow-right"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                           <div className="tp-service-sm-icon">
                               {/* {item.icon} */}
                              {/* <video autoPlay muted loop width="150px">
                                 <source src="/assets/img/service/app.webm" type="video/webm" /> 
                              </video> */}
                              <Lootie 
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: web,  // Animation for Digital Marketing
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice"
                        }
                      }}
                  style={{width:'162px',height:'100%'}}
                    />  
                           </div>
                           <div className="tp-service-sm-content">
                              <span>Responsive Web Design</span>
                              <h3 className="tp-service-sm-title"><Link href="/service-details">Seamless Experience Across All Devices with DigiExpo's Responsive Web Design.</Link></h3>
                              <div className="tp-service-sm-link">
                                 <Link href="/service-details">Learn More <i className="far fa-arrow-right"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                           <div className="tp-service-sm-icon">
                               {/* {item.icon} */}
                              {/* <video autoPlay muted loop width="150px">
                                 <source src="/assets/img/service/performance.webm" type="video/webm" /> 
                              </video> */}
                                              <Lootie 
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: target,  // Animation for Digital Marketing
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice"
                        }
                      }}
                  style={{width:'142px',height:'100%'}}
                    />  
                           </div>
                           <div className="tp-service-sm-content">
                              <span>UX Design</span>
                              <h3 className="tp-service-sm-title"><Link href="/service-details">User-focused design that bridges the gap between your audience's needs and your business goals.</Link></h3>
                              <div className="tp-service-sm-link">
                                 <Link href="/service-details">Learn More <i className="far fa-arrow-right"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                           <div className="tp-service-sm-icon">
                               {/* {item.icon} */}
                               <Lootie 
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: landing,  // Animation for Digital Marketing
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice"
                        }
                      }}
                  style={{width:'132px',height:'100%'}}
                    />  
                           </div>
                           <div className="tp-service-sm-content">
                              <span>Landing Page Design</span>
                              <h3 className="tp-service-sm-title"><Link href="/service-details">Drive sales with expertly crafted landing pages designed  to engage, inform, and convert visitors with precision and style.</Link></h3>
                              <div className="tp-service-sm-link">
                                 <Link href="/service-details">Learn More <i className="far fa-arrow-right"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                           <div className="tp-service-sm-icon">
                               {/* {item.icon} */}
                              {/* <video autoPlay muted loop width="125px">
                                 <source src="/assets/img/service/writing.webm" type="video/webm" /> 
                              </video> */}
                                              <Lootie 
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: todo,  // Animation for Digital Marketing
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice"
                        }
                      }}
                  style={{width:'122px',height:'100%'}}
                    />  
                           </div>
                           <div className="tp-service-sm-content">
                              <span>UX Audit</span>
                              <h3 className="tp-service-sm-title"><Link href="/service-details">Drive meaningful engagement and conversions by optimizing your digital presence through a professional UX audit.</Link></h3>
                              <div className="tp-service-sm-link">
                                 <Link href="/service-details">Learn More <i className="far fa-arrow-right"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                           <div className="tp-service-sm-icon">
                               {/* {item.icon} */}
                              {/* <video autoPlay muted loop width="125px">
                                 <source src="/assets/img/service/influence.webm" type="video/webm" /> 
                              </video> */}
                               <Lootie 
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: graphic,  // Animation for Digital Marketing
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice"
                        }
                      }}
                  style={{width:'122px',height:'100%'}}
                    />  
                              
                           </div>
                           <div className="tp-service-sm-content">
                              <span>Graphic Design</span>
                              <h3 className="tp-service-sm-title"><Link href="/service-details">Strategically Designed Graphics That Amplify Your Brand’s Presence Across All Platforms.</Link></h3>
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