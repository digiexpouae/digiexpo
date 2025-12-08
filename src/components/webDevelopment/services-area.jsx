import useTitleAnimation from "@/hooks/useTitleAnimation";
import RightArrow from "@/svg/right-arrow";
import Link from "next/link";
import React, { useRef } from "react";
import dynamic from 'next/dynamic';
// import whatsapp from '../../../public/animation/WhatsApp.json'
// import wordpress from '../../../public/animation/wordpress.json'
// import webmaintain from '../../../public/animation/websitemaintainance.json'
// import php from '../../../public/animation/php.json'
// import cms from '../../../public/animation/CMS.json'
// import laravel from '../../../public/animation/laravel.json'

import styles from '../mobileApp/services-area.module.scss'
import Lootie from '../../components/lottie'
const service_content = {
  title:(
  <>Stand Out. Get Results. Our Dubai <div style={{display:'flex'}}><h1 style={{color:'#7B42F7',fontSize:'40px'
  }}>Web Development Services </h1> Deliver</div></>),
  sub_title: (
    <>
      We work as a web design and development agency and specialize in building
      user-friendly and attractive content. These are customized to meet the
      demands of your company.
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
    <div className={`${styles['tp-service__area']} p-relative fix pt-110 pb-110 pb-sm-50 pt-sm-50`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              ref={titleRef}
              className={`${styles['tp-service__section-box']} tp__title_anime mb-50 text-center tp-title-anim`}
            >
              <div className={'tp-section-title'}>{title}</div>
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
            <div className={`${styles['tp-service__item']} mb-30`}>
              <div className={styles['tp-service__icon']}>
                <Lootie
                 
                    path='/animation/wordpress.json'
                     width='295px'
                />
              </div>
              <div className={styles['tp-service__content']}>
                <h3 className={`${styles['tp-service__title-sm']} ${styles['tp-yellow-color']}`}>
                  <Link href="/service-details">WordPress Development</Link>
                </h3>
                <p>
                  Transform your vision into a WordPress reality with
                  DigiExpo.
                </p>
              </div>
              <div className={styles['tp-service__link']}>
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
            <div className={`${styles['tp-service__item']} mb-30`}>
              <div className={styles['tp-service__icon']}>
                <Lootie
                 
                    path='/animation/laravel.json'
                                width='295px'
                />
              </div>
              <div className={styles['tp-service__content']}>
                <h3 className={`${styles['tp-service__title-sm']} ${styles['tp-yellow-color']}`}>
                  <Link href="/service-details">Laravel Development</Link>
                </h3>
                <p>
                  Build scalable, secure web apps with Laravel. Let's create
                  something amazing.
                </p>
              </div>
              <div className={styles['tp-service__link']}>
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
            <div className={`${styles['tp-service__item']} mb-30`}>
              <div className={styles['tp-service__icon']}>
                <Lootie
              
                    path='/animation/php.json'
                               width='122px'
                />
              </div>
              <div className={styles['tp-service__content']}>
                <h3 className={`${styles['tp-service__title-sm']} ${styles['tp-yellow-color']}`}>
                  <Link href="/service-details">PHP Development</Link>
                </h3>
                <p>Experience rapid growth with DigiExpo's PHP solutions.</p>
              </div>
              <div className={styles['tp-service__link']}>
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
            <div className={`${styles['tp-service__item']} mb-30`}>
              <div className={styles['tp-service__icon']}>
                <Lootie
              
                    path='/animation/CMS.json'
                                          width='122px'               />
              </div>
              <div className={styles['tp-service__content']}>
                <h3 className={`${styles['tp-service__title-sm']} ${styles['tp-yellow-color']}`}>
                  <Link href="/service-details">CMS Development</Link>
                </h3>
                <p>
                  Craft Your Digital World with Our Expert CMS Development.
                </p>
              </div>
              <div className={styles['tp-service__link']}>
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
            <div className={`${styles['tp-service__item']} mb-30`}>
              <div className={styles['tp-service__icon']}>
                <Lootie
             
                    path='/animation/websitemaintainance.json'
                                   width='122px'
                />
              </div>
              <div className={styles['tp-service__content']}>
                <h3 className={`${styles['tp-service__title-sm']} ${styles['tp-yellow-color']}`}>
                  <Link href="/service-details">
                    Website Maintenance Services
                  </Link>
                </h3>
                <p>
                  Shield your website from threats. Boost its speed. We've got
                  you covered.
                </p>
              </div>
              <div className={styles['tp-service__link']}>
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
            <div className={`${styles['tp-service__item']} mb-30`}>
              <div className={styles['tp-service__icon']}>
                <Lootie
               
                    path='/animation/WhatsApp.json'
                                  width='122px'
                />
              </div>
              <div className={styles['tp-service__content']}>
                <h3 className={`${styles['tp-service__title-sm']} ${styles['tp-yellow-color']}`}>
                  <Link href="/service-details">Whatsapp Integration</Link>
                </h3>
                <p>Boost Customer Engagement with WhatsApp Integration.</p>
              </div>
              <div className={styles['tp-service__link']}>
                <Link href="/service-details">
                  <RightArrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default ServicesArea;
