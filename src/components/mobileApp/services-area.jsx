import useTitleAnimation from "@/hooks/useTitleAnimation";
import service_data from "@/data/service-data";
import RightArrow from "@/svg/right-arrow";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

import img from "../../../public/assets/img/service/sv-dashbord.png";

const service_content = {
  title: "Create. Connect.  Our Mobile App Development Services Fuel Your Business.",
  sub_title: (
    <>
      Our mobile app development Dubai team of experts create apps tailored to your unique business needs.
    </>
  ),

  bg_img: "/assets/img/service/sv-bg.jpg",
  title_2: (
    <>
      Data Analysis <br /> Tools & Methods
    </>
  ),
  des: (
    <>
      Lorem Ipsum is simply dummy text <br /> of the printing
    </>
  ),
  btn_text: "Work with Us",
};
const { title, sub_title, bg_img, title_2, des, btn_text } = service_content;

const ServicesArea = () => {
  let titleRef = useRef(null);

  useTitleAnimation(titleRef);
  return (
    <>
      <div className="tp-service__area p-relative fix pt-110 pb-110 pb-sm-50 pt-sm-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                ref={titleRef}
                className="tp-service__section-box tp__title_anime mb-50 text-center tp-title-anim"
              >
                <h2 className="tp-section-title">{title}</h2>
                <p>{sub_title}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".4s"
            >
              <div className="tp-service__item mb-30">
                <div className="tp-service__icon">
                  {/* <Image src={item.img} alt="theme-pure" /> */}
                  <video autoPlay muted loop width="125px">
                    <source
                      src="/assets/img/service/hybrid-apps.webm"
                      type="video/webm"
                    />
                  </video>
                </div>
                <div className="tp-service__content">
                  <h3 className="tp-service__title-sm tp-yellow-color">
                    <Link href="/service-details">Hybrid Apps</Link>
                  </h3>
                  <p>
                  Efficient. Versatile. Our Hybrid Apps Bridge Platforms with Ease.
                  </p>
                </div>
                <div className="tp-service__link">
                  <Link href="/service-details">
                    <RightArrow />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".6s"
            >
              <div className="tp-service__item mb-30">
                <div className="tp-service__icon">
                  {/* <Image src={item.img} alt="theme-pure" /> */}
                  <video autoPlay muted loop width="125px">
                    <source
                      src="/assets/img/service/andriod-app.webm"
                      type="video/webm"
                    />
                  </video>
                </div>
                <div className="tp-service__content">
                  <h3 className="tp-service__title-sm tp-yellow-color">
                    <Link href="/service-details">Android App Development</Link>
                  </h3>
                  <p>
                  Crafted for Performance. Optimized for Android. Launched with Confidence.
                  </p>
                </div>
                <div className="tp-service__link">
                  <Link href="/service-details">
                    <RightArrow />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="tp-service__item mb-30">
                <div className="tp-service__icon">
                  {/* <Image src={item.img} alt="theme-pure" /> */}
                  <video autoPlay muted loop width="125px">
                    <source
                      src="/assets/img/service/ios-app.webm"
                      type="video/webm"
                    />
                  </video>
                </div>
                <div className="tp-service__content">
                  <h3 className="tp-service__title-sm tp-yellow-color">
                    <Link href="/service-details">iOS App Development</Link>
                  </h3>
                  <p>Outstanding iOS Apps Crafted for Perfect Performance on All Apple Devices</p>
                </div>
                <div className="tp-service__link">
                  <Link href="/service-details">
                    <RightArrow />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".8s"
            >
              <div className="tp-service__item mb-30">
                <div className="tp-service__icon">
                  {/* <Image src={item.img} alt="theme-pure" /> */}
                  <video autoPlay muted loop width="125px">
                    <source
                      src="/assets/img/service/react-native.webm"
                      type="video/webm"
                    />
                  </video>
                </div>
                <div className="tp-service__content">
                  <h3 className="tp-service__title-sm tp-yellow-color">
                    <Link href="/service-details">React Native Apps</Link>
                  </h3>
                  <p>
                  Optimize. Innovate. React Native Delivers Top-Tier Native Apps Across Platforms.
                  </p>
                </div>
                <div className="tp-service__link">
                  <Link href="/service-details">
                    <RightArrow />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <div className="tp-service__item mb-30">
                <div className="tp-service__icon">
                  {/* <Image src={item.img} alt="theme-pure" /> */}
                  <video autoPlay muted loop width="125px">
                    <source
                      src="/assets/img/service/flutter.webm"
                      type="video/webm"
                    />
                  </video>
                </div>
                <div className="tp-service__content">
                  <h3 className="tp-service__title-sm tp-yellow-color">
                    <Link href="/service-details">
                    Flutter Apps
                    </Link>
                  </h3>
                  <p>
                  Flutter Apps Combining Fast Development with High Performance and Visual Brilliance on Any Device.
                  </p>
                </div>
                <div className="tp-service__link">
                  <Link href="/service-details">
                    <RightArrow />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".10s"
            >
              <div className="tp-service__item mb-30">
                <div className="tp-service__icon">
                  {/* <Image src={item.img} alt="theme-pure" /> */}
                  <video autoPlay muted loop width="125px">
                    <source
                      src="/assets/img/service/pwa.webm"
                      type="video/webm"
                    />
                  </video>
                </div>
                <div className="tp-service__content">
                  <h3 className="tp-service__title-sm tp-yellow-color">
                    <Link href="/service-details">Progressive Web Apps (PWAs)</Link>
                  </h3>
                  <p>Merging Web and Mobile Features for Smooth, Dependable, and Engaging User Experiences</p>
                </div>
                <div className="tp-service__link">
                  <Link href="/service-details">
                    <RightArrow />
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                        <div className="tp-service__dashboard" 
                        style={{backgroundImage: `url(${bg_img})`}} >
                           <div className="tp-service__top-content">
                              <h3 className="tp-service__title-white">{title_2}</h3>
                              <p>{des}</p>
                              <Link className="tp-btn tp-btn-hover alt-color-black" href="/project-details">
                                 <span>{btn_text}</span>
                                 <b></b>
                              </Link>
                           </div>
                           <div className="tp-service__dashdboard-sm-img">
                              <Image className="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s" 
                              src={img} alt="theme-pure" />
                           </div>
                        </div>
                     </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesArea;
