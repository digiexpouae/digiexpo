import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicEffect';

import { gsap } from "gsap";
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

import left_shape from "../../../public/assets/img/herowebp/hero-left-shape-3-1.webp";
import gradient_bg from "../../../public/assets/img/herowebp/hero-gradient-3.webp";
import img_1 from "../../../public/assets/img/herowebp/hero-img-3-1.webp";
import img_2 from "../../../public/assets/img/herowebp/hero-img-3-1-3.webp";
import Link from 'next/link';

const hero_content = {
   title_1: (
      <>
         Web Development
      </>
   ),
   title_2: "Website Development Dubai That Delivers Proven Results",
   info: (
      <>
         At DigiExpo, Our skilled <b> website development Dubai experts</b>{" "} <br /> combine Creative designs and modern web development.


      </>
   ),
   btn_1: "Our Work",
   btn_2: "Get in Touch",
};
const { title_1, title_2, info, btn_1, btn_2 } = hero_content

const HeroArea = () => {

   let info_anim = useRef(null)

   useIsomorphicLayoutEffect(() => {
      let tl = gsap.timeline({ default: { ease: "SlowMo.easeOut" } });
      tl.to(".hero-text-anim i.child-1", { y: "0px", duration: 1, opacity: 1, stagger: 0.3, delay: .5 });
   }, [])

   return (
      <>
         <div className="tp-hero-area tp-hero-pt tw-flex tw-flex-col tw-justify-start tw-items-center md:tw-items-start md:tw-justify-center tw-h-screen  p-relative pb-sm-0">
            {/* <div className="tp-hero-left-shape">
               <Image src={left_shape} alt="them-pure" />
            </div>
            <div className="tp-hero-gradient-bg">
               <Image src={gradient_bg} alt="them-pure" />
            </div> */}
            <div className="container">
               <div className="row justify-content-center ">
                  <div className="col-xl-11">
                     <div className="tp-hero-title-box">
                        <h1 className="tp-hero-title-3  hero-text-anim pb-5 !tw-text-white ">
                           <i><i className="child-1 ">{title_1}</i></i>
                           {/* <i><i className="child-1 hero-font " style={{ lineHeight: '1' }}>{title_2}</i></i> */}
                        </h1>
                        {/* <p className="tp-char-animation-2 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">{info}</p> */}
                     </div>
                     <div className="tp-hero-btn-3 wow tpfadeUp" data-wow-duration="1s" data-wow-delay=".9s">
                        <Link className="tp-btn-white tp-btn-hover alt-color-black d-none d-md-inline-block" href="#">
                           <span className='white-text'>{btn_1}</span>
                           <b></b>
                        </Link>

                        <Link className="tp-btn-blue-sm tp-btn-hover alt-color-black purple-bg " href="#">
                           <span>{btn_2}</span>
                           <b></b>
                        </Link>
                     </div>


                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HeroArea;