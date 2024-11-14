import useMultipleAnime from '@/hooks/useMultipleAnime';
import feature_data from '@/data/feature-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const feature_content = {
    title: <>About Customer <span>Stories</span></>,
    des: <>Take your business to the next level with <span>09</span> accessible premium  extensions <br /> & different features</>,
    integraton_title: <>Blueprint to Brilliance:<br/> Crafting Your App, Step by Step</>,
    integraton_des: <>Our dedicated approach guarantees a smooth journey from concept to launch,<br /> delivering an app that stands out and performs flawlessly.</>,
}
const {title, des, integraton_title, integraton_des}  = feature_content


const FeatureArea = ({style_integraton}) => {
    return (
        <>
            <div className={`tp-feature-area ${style_integraton ? "pt-100 pb-30 pb-sm-0 pt-sm-50" : "grey-bg-3 pt-120 pb-110"}`}>
                  <div className="container">
                     <div className="row">
                        <div className="col-12">
                           <div className="tp-feature-five-section-box text-center mb-40">
                            {style_integraton ? 
                                <>
                                <h3 className="tp-section-title-5 text-purple">
                                    <span>
                                        {integraton_title}
                                    </span>
                                </h3>
                                    <p>{integraton_des}</p>
                                </>
                                :
                                <>
                                <h3 className="tp-section-title-5 text-purple">{title}</h3>
                                <p>{des}</p>                                
                                </>
                            }
                           </div>
                        </div>
                     </div>
                     <div className="row gx-0 tp-feature-five-wrapper-main pb-sm-0">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="tp-feature-five-wrapper">
                                    <div className={`tp-feature-five-item tp-feature-five-item-1 text-center z-index`}>
                                        <div className="tp-feature-five-icon p-relative">
                                            {/* <Image src={item.img} alt="theme-pure" /> */}
                                            <video autoPlay muted loop width="100px">
                                                <source src="/assets/img/feature/analysis.webm" type="video/webm" /> 
                                            </video>
                                            <div className={`tp-feature-five-shape-color tp-feature-five-shape-color-1`}></div>
                                        </div>
                                        <div className="tp-feature-five-content">
                                            <h4 className="tp-feature-five-title-sm">Insightful<br/>Research</h4>
                                            <p>Thorough research and analytical brainstorming sessions are the backbone of our app development process. We go deep into the market trends and user behavior to ensure that the app we  are building is  user-friendly and engaging.</p>
                                        </div>
                                        <div class="tp-service-sm-link-2">
                                            <Link href="/service-details">STEP ONE<i class="far fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="tp-feature-five-wrapper">
                                    <div className={`tp-feature-five-item tp-feature-five-item-2 text-center z-index`}>
                                        <div className="tp-feature-five-icon p-relative">
                                            {/* <Image src={item.img} alt="theme-pure" /> */}
                                            <video autoPlay muted loop width="100px">
                                                <source src="/assets/img/feature/planning.webm" type="video/webm" /> 
                                            </video>
                                            <div className={`tp-feature-five-shape-color tp-feature-five-shape-color-2`}></div>
                                        </div>
                                        <div className="tp-feature-five-content">
                                            <h4 className="tp-feature-five-title-sm">Wireframing &<br/> Prototyping</h4>
                                            <p>At our company, we understand the importance of wireframing and always take advantage of this crucial step. We consider prototyping an essential aspect of app development. Our team ensures to provide clients with prototypes of their ideas which gives them a clear idea of what the final product will look like.</p>
                                        </div>
                                        <div class="tp-service-sm-link-2">
                                            <Link href="/service-details">STEP TWO<i class="far fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="tp-feature-five-wrapper">
                                    <div className={`tp-feature-five-item tp-feature-five-item-3 text-center z-index`}>
                                        <div className="tp-feature-five-icon p-relative">
                                            {/* <Image src={item.img} alt="theme-pure" /> */}
                                            <video autoPlay muted loop width="100px">
                                                <source src="/assets/img/feature/tracking.webm" type="video/webm" /> 
                                            </video>
                                            <div className={`tp-feature-five-shape-color tp-feature-five-shape-color-3`}></div>
                                        </div>
                                        <div className="tp-feature-five-content">
                                            <h4 className="tp-feature-five-title-sm">Design &<br/> Development</h4>
                                            <p>Our mobile app design development team combines creativity and practicality to ensure exceptional results during the design and development phase. By doing so, we provide a seamless digital experience with glitch-free performance.</p>
                                        </div>
                                        <div class="tp-service-sm-link-2">
                                            <Link href="/service-details">STEP THREE<i class="far fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="tp-feature-five-wrapper">
                                    <div className={`tp-feature-five-item tp-feature-five-item-4 text-center z-index`}>
                                        <div className="tp-feature-five-icon p-relative">
                                            {/* <Image src={item.img} alt="theme-pure" /> */}
                                            <video autoPlay muted loop width="100px">
                                                <source src="/assets/img/feature/improvement.webm" type="video/webm" /> 
                                            </video>
                                            <div className={`tp-feature-five-shape-color tp-feature-five-shape-color-4`}></div>
                                        </div>
                                        <div className="tp-feature-five-content">
                                            <h4 className="tp-feature-five-title-sm">Live<br/>Server</h4>
                                            <p>We leave no stone unturned in ensuring that the app we build for our clients is of the highest quality. After thorough revisions and tests to determine app efficiency and responsiveness, we launch a fully-functional app, ensuring our clients' satisfaction. We provide post-launch support to ensure a smooth user experience.</p>
                                        </div>
                                        <div class="tp-service-sm-link-2">
                                            <Link href="/service-details">STEP FOUR</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                     </div>
                     {/* <div className="row">
                        <div className="col-12">
                           <div className="tp-feature-five-link text-center">
                              <span>Check out all of our <Link href="/service-details">All features</Link></span>
                           </div>
                        </div>
                     </div> */}
                  </div>
               </div>
        </>
    );
};

export default FeatureArea;