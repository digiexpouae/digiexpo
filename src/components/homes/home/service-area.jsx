import React from 'react';
import LottieComponent from '../../../components/lottie';  // Import your Lottie component
// import digitalmarketingAnimation from '../../../../public/animation/digitalmarketing.json';
// import webdevAnimation from '../../../../public/animation/webdev.json';
// import seoAnimation from '../../../../public/animation/seo.json';
// import socialAnimation from '../../../../public/animation/social.json';
import Link from 'next/link';

const service_content = {
    bg_img: "/assets/img/service/service-5-1-bg.png",
    sub_title: "What we Offer",
    title: <>Grow Your Business<br />Through Our <br /><span>Spectrum Of</span> <br /> <span>Services</span> </>,
    description: <>From concept to conversion, <br />We are your digital growth engine.</>,
    btn_text: "All Services",
};

const { bg_img, sub_title, title, description, btn_text } = service_content;

const ServiceArea = () => {
    return (
        <>
            <div className="tp-service-area tp-services-five-item-bg-color p-relative fix">
                <div className="container-fluid p-0">
                    <div className="tp-service-five-bg" style={{ backgroundImage: `url(${bg_img})` }}></div>
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6">
                            <div className="tp-service-five-section-box">
                                <span className="tp-section-subtitle-5">{sub_title}</span>
                                <h2 className="tp-section-title-5 pb-15">{title}</h2>
                                <p className="pb-20">{description}</p>
                                <Link className="tp-btn-yellow-lg" href="/service-details">{btn_text}</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-0">
                                {/* Digital Marketing */}
                                <div className="col-md-6">
                                    <div className="tp-service-five-item z-index">
                                        <div className="tp-services-five-item-bg">
                                            <div className="inner"></div>
                                        </div>
                                        <div className="tp-service-five-wrapper">
                                            <div className="tp-service-five-icon">
                                                <LottieComponent path='/animation/digitalmarketing.json' />
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

                                {/* Website Development */}
                                <div className="col-md-6">
                                    <div className="tp-service-five-item z-index">
                                        <div className="tp-services-five-item-bg">
                                            <div className="inner"></div>
                                        </div>
                                        <div className="tp-service-five-wrapper">
                                            <div className="tp-service-five-icon">
                                                <LottieComponent path='/animation/webdev.json' />
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

                                {/* SEO */}
                                <div className="col-md-6">
                                    <div className="tp-service-five-item z-index">
                                        <div className="tp-services-five-item-bg">
                                            <div className="inner"></div>
                                        </div>
                                        <div className="tp-service-five-wrapper">
                                            <div className="tp-service-five-icon">
                                                <LottieComponent path='/animation/seo.json' />
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

                                {/* Social Media Marketing */}
                                <div className="col-md-6">
                                    <div className="tp-service-five-item z-index">
                                        <div className="tp-services-five-item-bg">
                                            <div className="inner"></div>
                                        </div>
                                        <div className="tp-service-five-wrapper">
                                            <div className="tp-service-five-icon">
                                                <LottieComponent path='/animation/social.json' />
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
