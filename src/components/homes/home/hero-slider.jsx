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
import Herobg from '../../../../public/assets/img/herowebp/Hero BG Image.webp'

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
        <span className='child' >  Digiexpo Expert  </span>
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
const { hero_shape, hero_title, sub_title, hero_shape_img, hero_thumbs } =
  hero_content;

const HeroSlider = () => {
  let hero_bg = useRef(null);
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

      const mainTl = gsap.timeline();

      mainTl.fromTo(
        hero_bg.current,
        { opacity: 0, scale: 1.2 },
        { opacity: 1, scale: 1, duration: 0.5 }
      );

      mainTl.to(title, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: "power4.out",
      });
    };

    loadGsap();

    return () => ctx && ctx.revert?.(); // cleanup if needed
  }, []);

  return (
    <>
      <div className='tp-hero__area tp-hero__pl-pr'>
        <div className='tp-hero__bg p-relative'>
          <div className='tp-hero-bg tp-hero-bg-single ' ref={hero_bg}>
            {/* bg-image */}
            {isMobile ? (<div className="mobile-bg"></div>)
              // <Image
              //   className="block md:hidden object-cover"
              //   src={Herobg}
              //   alt='hero background'
              //   priority
              //   fetchPriority="high"
              //   quality={85}
              //   sizes="100vw"
              //   placeholder="blur"
              //   fill
              //   loading="eager"
              //   decoding="async"
              // />
           
             : (<Image
                src={hero_frame}
                alt='hero frame'
                priority
                fetchPriority="high"
                quality={85}
                sizes="100vw"
                className="image-1"
                fill
                loading="eager"
                decoding="async"
              />)
            }
          </div>

          {!isMobile &&
            <div className='tp-hero-shape'>
              {hero_shape.map((item, i) => (
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
              ))}
            </div>}
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-xl-10'>
                <div className='tp-hero__content-box text-center z-index-3'>
                  <div className='tp-hero__title-box p-relative'>
                    <h2 className='tp-hero__hero-title tp-title-anim'>
                      {hero_title}
                    </h2>
                    <div className='tp-hero__title-shape d-none d-sm-block'>
                      <LineShape />
                    </div>
                  </div>
                  <div
                    className='tp-hero__input p-relative wow tpfadeUp'
                    data-wow-duration='.9s'
                    data-wow-delay='.5s'
                  >
                    <HeroForm />
                  </div>
                  <p
                    className='wow tpfadeUp '
                    data-wow-duration='.9s'
                    data-wow-delay='.7s'
                  >
                    {sub_title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='tp-hero__bottom z-index-5'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-xl-10'>
                <div className='tp-hero__thumb-wrapper-main p-relative'>
                  {hero_shape_img.map((item, i) => (
                    <div
                      key={i}
                      className={`tp-hero__shape-img-${item.cls} d-none d-xl-block`}
                    >
                      <Image 
                        src={item.img} 
                        alt='decorative shape' 
                        width={120} 
                        height={150}
                        quality={85}
                        loading="lazy"
                        className="object-contain"
                      />
                    </div>
                  ))}
                  <div>
                    <div className='tp-hero__thumb-wrapper p-relative'>
                      <div className='row'>


                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="none"
                          poster="/assets/img/herowebp/poster.webp"
                          className="w-full h-[600px] object-cover"
                          aria-hidden="true"
                          disablePictureInPicture
                          
                        >
                          <source 
                            src="/assets/img/hero/hero-video.webm" 
                            type="video/webm" 
                          />
                          <source 
                            src="/assets/img/hero/herosection.mp4" 
                            type="video/mp4" 
                            media="(min-width: 768px)"
                          />
                        </video>


                        {/* <source
                            src='/assets/img/hero/hero-video.mov'
                            type='video/quicktime'
                          /> */}

                        {/* <iframe src="https://player.vimeo.com/video/1051407991?h=2a87efaafb&autoplay=1&muted=1&loop=1&background=1" 
        width="640" height="360" frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
        allowfullscreen title="hero-video compress">
</iframe> */}
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/MqffbpjhriQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}


                      </div>
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

export default HeroSlider;
