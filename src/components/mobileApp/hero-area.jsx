import Link from 'next/link';
import React, { useEffect, useRef } from "react";
import ArrowLine from '@/svg/arrow-line';
import RoundLine from '@/svg/round-line';
import useCharAnimation from '@/hooks/useCharAnimation';
import Image from 'next/image';
import { gsap } from 'gsap';
// img import
import scroll_bg from "../../../public/assets/img/herowebp/scroll-down.webp";
import users_img from "../../../public/assets/img/herowebp/hero-user.webp";
import hero_shape_1 from "../../../public/assets/img/herowebp/hero-img-2-1.webp";
import hero_shape_2 from "../../../public/assets/img/herowebp/image_02.webp";
import hero_shape_3 from "../../../public/assets/img/herowebp/hero-img-2-3.webp";
import hero_shape_4 from "../../../public/assets/img/herowebp/hero-img-2-4.webp";
import hero_shape_5 from "../../../public/assets/img/herowebp/hero-shape-2-2.webp";



// hero_content

const btn_1 = "Our Work";
const btn_2 = "Get in Touch";
const HeroArea = ({ main_title }) => {

  const hero_content = {
    bg_img: "/assets/img/herowebp/hero-bg-2.webp",
    scroll_btn: "Scroll Down",
    title: (
      <>
        <i>
          <i className=''>{main_title}</i>{" "}
        </i>{" "}
        {/* <i>
        <h1 style={{ fontSize: '65px' }} className='child-1'>App with the Top App Development
        </h1>{" "}
      </i>{" "}

      <i>
        <h2 style={{ fontSize: '65px', color: 'white' }} className='child-1'>Dubai  <br />Company  </h2>{" "}
      </i> */}

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
  // useCharAnimation('.tp-hero-2__title i.child-1');


  const {
    bg_img,
    scroll_btn,
    title,
    btn_text,
    sub_title,
  } = hero_content;

  const handleScrollDown = (e) => {
    e.preventDefault();
    window.scrollBy({
      top: window.innerHeight * 5,
      behavior: 'smooth'
    });
  };
  const titleRef = useRef()
  const ref_two = useRef()
  const ref_three = useRef()
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.3, delay: 0.5, ease: "power4.out" }
    )
      .fromTo(
        ref_two.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power4.in" },
        "-=0.5" // starts 0.5s before previous animation ends
      )
      .fromTo(
        ref_three.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power4.out" },
        "-=0.4" // slight overlap for smooth flow
      );
  }, []);

  return (
    <>
      <div
        className='tp-hero-2__area tp-hero-2__ptb tp-hero-2__plr tp-hero-2 title z-index fix p-relative'
      // style={{ backgroundImage: `url(${bg_img})` }}
      >
        {/* <div className='scroll-bg d-none d-sm-block'>
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
        </div> */}
        <div className='container-fluid g-0'>
          <div className='row g-0 align-items-end'>
            <div className='col-xl-6 col-lg-6'>
              <div className='tp-hero-2__title-box'>
                <div className='tp-hero-2__title tp-char-animation tw-text-center md:tw-text-start tw-opacity-0' ref={titleRef}>{title}</div>
                {/* <p style={{ color: "white" }}>
                  <b>In today's fast-paced world, app development Dubai is key. Digiexpo hybrid mobile apps help businesses meet the expectations of the modern public.  </b>
                  Our mobile apps not only work well but also provide a smooth user experience.
                </p> */}
              </div>
              <div className='tp-hero-2__btn '>
                <div className="tp-hero-btn-3 wow tpfadeUp tw-flex " data-wow-duration="1s" data-wow-delay=".9s">
                  <Link className="tp-btn-white-2 tp-btn-hover alt-color-black tw-inline-block tw-opacity-0" href="#" ref={ref_two}>
                    <span className='white-text'>{btn_1}</span>
                    <b></b>
                  </Link>
                  <Link className="tp-btn-blue-sm tp-btn-hover alt-color-black purple-bg tw-opacity-0" href="#" ref={ref_three}>
                    <span className="">{btn_2}</span>
                    <b></b>
                  </Link>
                </div>
              </div>
              {/* <div className='tp-hero-2__user p-relative'>
                <h4 className='tp-char-animation-2'>{sub_title}</h4>
                <div className='tp-hero-2__user-img'>
                  <Image src={users_img} alt='theme-pure' />
                </div>
                <div className='tp-hero-2__shape-1'>
                  <RoundLine />
                </div>
              </div> */}
            </div>

            <div className='col-xl-6 col-lg-6'>
              <div className='tp-hero-2__right text-end p-relative'>
                {/* <div
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroArea;