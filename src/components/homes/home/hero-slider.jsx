import React, { useEffect, useRef, useState } from "react";

import useCharAnimation from "@/hooks/useCharAnimation";
import Image from "next/image";
import hero_frame from "../../../../public/assets/img/herowebp/hero-frame.webp";
import shape_1 from "../../../../public/assets/img/herowebp/hero-line-shape.3146.webp";
import shape_2 from "../../../../public/assets/img/herowebp/hero-line-shape-2.webp";


import shape_img_1 from "../../../../public/assets/img/herowebp/hero-shape-1.webp";
import shape_img_2 from "../../../../public/assets/img/herowebp/hero-shape-2.webp";
import hero_thumb_1 from "../../../../public/assets/img/herowebp/hero-sm-1.webp";
import thumb_1 from "../../../../public/assets/img/herowebp/hero-sm-3.webp";
import thumb_2 from "../../../../public/assets/img/herowebp/hero-sm-4.webp";
import hero_thumb_2 from "../../../../public/assets/img/herowebp/hero-sm-2.webp";
import HeroForm from "@/forms/hero-form";
import LineShape from "@/svg/line-shape";
import Herobg from '../../../../public/assets/img/herowebp/h-banner.webp'

// hero content data
const hero_content = {
  hero_shape: [
    {
      id: 1,
      cls: "tp-hero-shape-1",
      img: shape_1,
    },
    {
      id: 2,
      cls: "tp-hero-shape-2",
      img: shape_2,
    },
  ],
  hero_title: (
    <>
      <span className='tp_title' >
        <span className='child' >Boost Business Growth with  </span>
      </span>{" "}
      <br />
      <span>
        <span className='child' >  DigiExpo Expert  </span>
      </span>{" "}
      <span>
        <span className='child' > Web Design Dubai </span>
      </span>{" "}

    </>
  ),


  mobile_title: (
    <>
      <span className='tp_title  tw-text-nowrap' >
        <span className='child' >Boost Business Growth  </span>
      </span>{" "}
      <br />
      <span>
        <span className='child' > with DigiExpo Expert  </span>
      </span>{" "}
      <span>
        <span className='child' > Web Design Dubai </span>
      </span>{" "}

    </>
  ),

  sub_title: (
    <>
      {" "}
      Welcome to Digiexpo – Dubai’s leading website development company, our expert web design Dubai helps businesses succeed in Dubai's competitive market.
    </>
  ),
  hero_shape_img: [
    {
      id: 1,
      cls: "1",
      img: shape_img_1,
    },
    {
      id: 2,
      cls: "2",
      img: shape_img_2,
    },
  ],

  hero_thumbs: [
    {
      id: 1,
      col: "4",
      cls: "tp-hero__sm-img",
      img: thumb_1,
    },
    {
      id: 2,
      col: "8",
      cls: "",
      img: thumb_2,
    },
  ],
};
const { hero_shape, hero_title, sub_title, hero_shape_img, hero_thumbs, mobile_title } =
  hero_content;

const HeroSlider = () => {
  const hero_bg = useRef(null);

  const sub_title_ref = useRef(null);
  const hero_form_ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  useEffect(() => {
    let ctx;

    const loadGsap = async () => {
      const { gsap } = await import("gsap"); // dynamic import ✅

      const title = document.querySelectorAll(".tp-hero__hero-title span.child");
      const mm = gsap.matchMedia();
      const mainTl = gsap.timeline();

      // Desktop only (LG and up)
      mm.add("(min-width: 1024px)", () => {
        mainTl.fromTo(
          hero_bg.current,
          { opacity: 0, scale: 1.2 },
          { opacity: 1, scale: 1, duration: 1.4 }
        );

        mainTl.to(title, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.5,
          ease: "power4.out",
        });

        mainTl.fromTo(
          sub_title_ref.current,
          { opacity: 0 },
          { opacity: 1, ease: "power4.out" }
        );

        mainTl.fromTo(
          hero_form_ref.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power4.out" }
        );
      });
      mm.add("(max-width: 1023px)", () => {


        mainTl.to(title, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.5,
          ease: "power4.out",
        });

        mainTl.fromTo(
          sub_title_ref.current,
          { opacity: 0 },
          { opacity: 1, ease: "power4.out" }
        );

        mainTl.fromTo(
          hero_form_ref.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power4.out" }
        );
      })
    };

    loadGsap();

    return () => ctx && ctx.revert?.(); // cleanup if needed
  }, []);

  useEffect(() => {
    const video = document.getElementById("hero-video");
    if (!video) return;

    const onLoad = () => {
      video.play().catch(() => { });
    };

    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);
  return (
    <>
      <div className='tp-hero__area tp-hero__pl-pr '  >
        <div className='tp-hero__bg p-relative md:tw-mx-[20px] tw-flex tw-pb-0 tw-items-end  tw-justify-center !tw-pb-0 tw-h-[110vh]'>
          <div className='tp-hero-bg tp-hero-bg-single p-relative tw-hidden lg:tw-block' ref={hero_bg} >
            {/* bg-image */}



            <Image src={Herobg} alt="hero background" />

          </div>

          {/* {!isMobile &&
            <div className='tp-hero-shape'>
              {/* {hero_shape.map((item, i) => (
                <Image
                  key={i}
                  className={item.cls}
                  src={item.img}
                  alt='decorative shape'
                  priority={i === 0} // Only prioritize first shape image
                  fetchPriority={i === 0 ? 'high' : 'auto'}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              ))} */}
          {/* </div> */}
          <div className='container tw-absolute tw-top-[50%] md:tw-top-[55%]  '>
            <div className='row justify-content-center'>
              <div className='col-xl-10 col-12 col-md-11'>
                <div className='tp-hero__content-box tw-text-center z-index-3 '>
                  <div className='tp-hero__title-box p-relative '>
                    <h1 className='tp-hero__hero-title tp-title-anim   tw-hidden md:tw-block tw-text-white'>
                      {hero_title}
                    </h1>
                    <h1 className='tp-hero__hero-title tp-title-anim  md:tw-hidden tw-block tw-text-white'>
                      {mobile_title}
                    </h1>



                    {/* <div className='tp-hero__title-shape d-none d-sm-block'>
                      <LineShape />
                    </div> */}
                    <p
                      className='!tw-text-white  tw-max-w-3xl tw-mx-auto wow tpfadeUp '
                      data-wow-duration='.9s'
                      data-wow-delay='.7s'

                      ref={sub_title_ref}
                    >
                      {sub_title}
                    </p>
                  </div>
                  <div
                    className='tp-hero__input search p-relative wow tpfadeUp'
                    data-wow-duration='.9s'
                    data-wow-delay='.5s'
                    ref={hero_form_ref}
                  >
                    <HeroForm />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>


      </div >
    </>
  );
};

export default HeroSlider;
