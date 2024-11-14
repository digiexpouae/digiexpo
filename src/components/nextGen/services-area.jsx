import useTitleAnimation from "@/hooks/useTitleAnimation";
import service_data from "@/data/service-data";
import RightArrow from "@/svg/right-arrow";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

import img from "../../../public/assets/img/service/sv-dashbord.png";

const service_content = {
  title: "Our Emerging Technology Development Services",
  sub_title: (
    <>
      DigiExpo deliver Innovation & Positive Change
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
      <div className="tp-service__area p-relative fix pt-110 pb-110">
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
                  <video autoPlay muted loop width="150px">
                    <source
                      src="/assets/img/service/wordpress.webm"
                      type="video/webm"
                    />
                  </video>
                </div>
                <div className="tp-service__content">
                  <h3 className="tp-service__title-sm tp-yellow-color">
                    <Link href="/service-details">Artificial Intelligence</Link>
                  </h3>
                  <p>
                  Achieve new heights with AI automation and prediction. Partner with DigiExpo for digital change.
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
                  <video autoPlay muted loop width="150px">
                    <source
                      src="/assets/img/service/laravel.webm"
                      type="video/webm"
                    />
                  </video>
                </div>
                <div className="tp-service__content">
                  <h3 className="tp-service__title-sm tp-yellow-color">
                    <Link href="/service-details">Augmented Reality</Link>
                  </h3>
                  <p>
                  Step beyond the screen with Augmented Reality—engage, interact, and captivate like never before.
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
                      src="/assets/img/service/php.webm"
                      type="video/webm"
                    />
                  </video>
                </div>
                <div className="tp-service__content">
                  <h3 className="tp-service__title-sm tp-yellow-color">
                    <Link href="/service-details">Metaverse</Link>
                  </h3>
                  <p>With the help of DigiExpo experts build a metaverse that bridges the gap between imagination and reality.</p>
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
                      src="/assets/img/service/cms.webm"
                      type="video/webm"
                    />
                  </video>
                </div>
                <div className="tp-service__content">
                  <h3 className="tp-service__title-sm tp-yellow-color">
                    <Link href="/service-details">3D Dimension</Link>
                  </h3>
                  <p>
                  Take your visual storytelling to the next dimension with our innovative 3D projection solutions.
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
                      src="/assets/img/service/maintenance.webm"
                      type="video/webm"
                    />
                  </video>
                </div>
                <div className="tp-service__content">
                  <h3 className="tp-service__title-sm tp-yellow-color">
                    <Link href="/service-details">
                    IoT development
                    </Link>
                  </h3>
                  <p>
                  Smart homes, smart cities, smart lives—brought to you by cutting-edge IoT development.
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
                      src="/assets/img/service/whatsapp.webm"
                      type="video/webm"
                    />
                  </video>
                </div>
                <div className="tp-service__content">
                  <h3 className="tp-service__title-sm tp-yellow-color">
                    <Link href="/service-details">Gesture Based</Link>
                  </h3>
                  <p>Leading the way in touchless innovation with gesture-based solutions for a touchless world.</p>
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
