import useTitleAnimation from "@/hooks/useTitleAnimation";
import service_data from "@/data/service-data";
import RightArrow from "@/svg/right-arrow";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

import img from "../../../public/assets/img/service/sv-dashbord.png";

const service_content = {
  title: "Stand Out. Get Results. Our Dubai Web Development Services Deliver",
  sub_title: (
    <>
      DigiExpo, the best website development company in Dubai will help your
      business to craft user-friendly and unique websites
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
                  <video autoPlay muted loop width="150px">
                    <source
                      src="/assets/img/service/wordpress.webm"
                      type="video/webm"
                    />
                  </video>
                </div>
                <div className="tp-service__content">
                  <h3 className="tp-service__title-sm tp-yellow-color">
                    <Link href="/service-details">WordPress Development</Link>
                  </h3>
                  <p>
                    Transform your vision into a WordPress reality with
                    DigiExpo.
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
                    <Link href="/service-details">Laravel Development</Link>
                  </h3>
                  <p>
                    Build scalable, secure web apps with Laravel. Let’s create
                    something amazing.
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
                    <Link href="/service-details">PHP Development</Link>
                  </h3>
                  <p>Experience rapid growth with DigiExpo's PHP solutions.</p>
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
                    <Link href="/service-details">CMS Development</Link>
                  </h3>
                  <p>
                    Craft Your Digital World with Our Expert CMS Development.
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
                      Website Maintenance Services
                    </Link>
                  </h3>
                  <p>
                    Shield your website from threats. Boost its speed. We've got
                    you covered.
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
                    <Link href="/service-details">Whatsapp Integration</Link>
                  </h3>
                  <p>Boost Customer Engagement with WhatsApp Integration.</p>
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
