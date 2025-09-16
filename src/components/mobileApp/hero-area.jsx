import Link from 'next/link';
import React from "react";
import ArrowLine from '@/svg/arrow-line';
import RoundLine from '@/svg/round-line';
import useCharAnimation from '@/hooks/useCharAnimation';
import Image from 'next/image';

// img import
import scroll_bg from "../../../public/assets/img/herowebp/scroll-down.webp";
import users_img from "../../../public/assets/img/herowebp/hero-user.webp";
import hero_shape_1 from "../../../public/assets/img/herowebp/hero-img-2-1.webp";
import hero_shape_2 from "../../../public/assets/img/herowebp/image_02.webp";
import hero_shape_3 from "../../../public/assets/img/herowebp/hero-img-2-3.webp";
import hero_shape_4 from "../../../public/assets/img/herowebp/hero-img-2-4.webp";
import hero_shape_5 from "../../../public/assets/img/herowebp/hero-shape-2-2.webp";



// hero_content
const hero_content = {
  bg_img: "/assets/img/herowebp/hero-bg-2.webp",
  scroll_btn: "Scroll Down",
  title: (
    <>
      <i>
        <i className='child-1'>Redefine Your </i>{" "}
      </i>{" "}
      <i>
        <h1  style={{fontSize:'65px'}} className='child-1'>Mobile App Development</h1>{" "}
      </i>{" "}
  
      <i>
        <h2 style={{fontSize:'65px',color:'white'}} className='child-1'>Company  <br />Dubai  </h2>{" "}
      </i>
   
      {/* <i><i className="child-1">ways.</i></i> */}
    </>
  ),
  btn_text: "Get Started For Free",
  sub_title: (
    <>
      Over<span>5Ok+ Client</span> all over the world
    </>
  ),
};
const {
  bg_img,
  scroll_btn,
  title,
  btn_text,
  sub_title,
} = hero_content;


const HeroArea = () => {
  useCharAnimation('.tp-hero-2__title i.child-1');
  

  const handleScrollDown = (e) => {
    e.preventDefault();
    window.scrollBy({
      top: window.innerHeight * 5, 
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div
        className='tp-hero-2__area tp-hero-2__ptb tp-hero-2__plr z-index fix p-relative'
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <div className='scroll-bg d-none d-sm-block'>
          <Image src={scroll_bg} alt='theme-pure' />
        </div>
        <div className='tp-hero-2__mouse-scroll smooth d-none d-sm-block'>
          
          <a 
            className='mouse-scroll-btn' 
            href='#'
            onClick={handleScrollDown}
          ></a>
          <span>{scroll_btn}</span>
        </div>
        <div className='tp-hero-2__shape-img-1 d-none d-sm-block'>
          <ArrowLine />
        </div>
        <div className='container-fluid g-0'>
          <div className='row g-0 align-items-end'>
            <div className='col-xl-6 col-lg-6'>
              <div className='tp-hero-2__title-box'>
                <div className='tp-hero-2__title tp-char-animation'>{title}</div>
                <p style={{ color: "white" }}>
                  <b>In today's fast-paced world, application development Dubai is a key. It helps to meet the expectations of the modern public. </b>
                   Businesses need mobile apps that not only work well but also provide a smooth user experience.
                </p>
              </div>
              <div className='tp-hero-2__btn'>
                <Link
                  className='tp-btn-yellow-lg wow tpfadeUp'
                  data-wow-duration='.9s'
                  data-wow-delay='.5s'
                  href='/service-details'
                >
                  {btn_text}
                </Link>
              </div>
              <div className='tp-hero-2__user p-relative'>
                <h4 className='tp-char-animation-2'>{sub_title}</h4>
                <div className='tp-hero-2__user-img'>
                  <Image src={users_img} alt='theme-pure' />
                </div>
                <div className='tp-hero-2__shape-1'>
                  <RoundLine />
                </div>
              </div>
            </div>

            <div className='col-xl-6 col-lg-6'>
              <div className='tp-hero-2__right text-end p-relative'>
                <div
                  className='tp-hero-2__main-img wow tpfadeRight'
                  data-wow-duration='.9s'
                  data-wow-delay='.5s'
                >
                  <Image src={hero_shape_1} alt='theme-pure' />
                </div>

                <div
                  className='tp-hero-2__sub-img-1 d-none d-sm-block'
                  data-parallax='{"x": 100, "smoothness": 30}'
                >
                  <Image src={hero_shape_2} alt='theme-pure' />
                </div>

                <div
                  className='tp-hero-2__sub-img-2 d-none d-sm-block'
                  data-parallax='{"x": -100, "smoothness": 10}'
                >
                  <Image src={hero_shape_3} alt='theme-pure' />
                </div>

                <div
                  className='tp-hero-2__sub-img-3 d-none d-sm-block'
                  data-parallax='{"y": -80, "smoothness": 30}'
                >
                  <Image src={hero_shape_4} alt='theme-pure' />
                </div>

                <div className='tp-hero-2__sub-img-4'>
                  <Image src={hero_shape_5} alt='theme-pure' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroArea;