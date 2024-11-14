import useMultipleAnime from '@/hooks/useMultipleAnime';
import feature_data from '@/data/feature-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const feature_content = {
    title: <>About Customer <span>Stories</span></>,
    des: <>Take your business to the next level with <span>09</span> accessible premium  extensions <br /> & different features</>,
    integraton_title: "Strategic Digital Marketing Roadmap",
    integraton_des: <>DigiExpo, the best digital marketing agency in Dubai develops plans<br /> that successfully deliver target results and generate more revenue.</>,
}
const {title, des, integraton_title, integraton_des}  = feature_content


const FeatureArea = ({style_integraton}) => {
    return (
        <>
            <div className={`tp-feature-area ${style_integraton ? "pt-100 pb-30 pt-sm-50 pb-sm-50" : "grey-bg-3 pt-120 pb-110"}`}>
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
                                            <h4 className="tp-feature-five-title-sm">Comprehensive <br/> Analysis</h4>
                                            <p>At DigiExpo, we dive deep into your Digital presence. We evaluate your target audience, existing content, and key performance indicators. This sets the foundation for a tailored marketing strategy that aligns with your brand and goals.</p>
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
                                            <h4 className="tp-feature-five-title-sm">Strategic <br/> Planning</h4>
                                            <p>Our expert digital marketers will craft a custom plan for you. We identify the right platforms, execution, and determine the types of content that will resonate with your audience. Our aim is to maximize engagement, reach and drive sales.</p>
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
                                            <h4 className="tp-feature-five-title-sm">Performance <br/> Tracking</h4>
                                            <p>The performance is closely monitored to ensure that the workflow is instituted and efficient. We continually analyze the results and determine which aspects need more attention and when to make corrections to reach higher performance levels and satisfy the clients.</p>
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
                                            <h4 className="tp-feature-five-title-sm">Continuous <br/> Improvement</h4>
                                            <p>Our dedicated team is committed to upholding the highest standards. Even after project completion, they diligently monitor performance, identifying potential issues or areas for enhancement. We ensure ongoing product refinement and client satisfaction.</p>
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