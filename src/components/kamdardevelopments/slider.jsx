import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollToTranslateSwiper() {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [outerHeight, setOuterHeight] = useState("100vh");

  const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;
    wrapperRef.current = swiper.el.querySelector(".swiper-wrapper");
  };

  useEffect(() => {
    const swiper = swiperRef.current;
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!swiper || !container || !wrapper) return;

    const slidesCount = swiper.slides.length;
    if (slidesCount <= 1) return;

    const slideWidth = container.offsetWidth;
    const totalX = slideWidth * (slidesCount - 1);
    setOuterHeight(`${window.innerHeight + totalX}px`);

    const ctx = gsap.context(() => {
      gsap.to(wrapper, {
        x: -totalX/2,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "center center",
          end: () => `+=${totalX}`,
          scrub: true,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, container);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div style={{ height: outerHeight }} className="tw-relative">
      <div
        ref={containerRef}
  className="tw-sticky tw-top-0 tw-bg-cover tw-bg-center tw-h-screen tw-flex tw-items-end tw-justify-end tw-w-full tw-bg-[url('/assets/img/about2/ab-6.png')]">      
        <Swiper
          onSwiper={handleSwiperInit}
          slidesPerView={2}
             // <-- key for centering

          spaceBetween={30}
          allowTouchMove={false}
          speed={0}
          className="tw-w-full tw-h-[70%]"
        >
          <SwiperSlide className=" tw-h-full tw-w-full   ">
            <div className="tw-relative tw-h-[90%] tw-w-full  tw-rounded-xl tw-overflow-hidden tw-shadow-lg">
              <Image
                src="/assets/img/casestudies/lakeview.JPG"
                alt="Lakeview Project"
                fill
                className="tw-object-cover   tw-transform tw-transition-transform tw-duration-300 tw-ease-in-out
                hover:tw-scale-105"
                priority
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="tw-relative tw-translate-y-4 tw-h-[90%]  tw-w-full tw-flex tw-items-center tw-justify-center tw-rounded-xl tw-overflow-hidden tw-shadow-lg">
              <Image src="/assets/img/casestudies/slider (1).jpg" fill className="tw-object-cover   tw-transform tw-transition-transform tw-duration-300 tw-ease-in-out
                hover:tw-scale-105" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="tw-relative tw-h-[90%] tw-w-full tw-flex tw-items-center tw-justify-center tw-rounded-xl tw-overflow-hidden tw-shadow-lg">
              <Image src="/assets/img/casestudies/slide (2).jpg" fill className="  tw-transform tw-transition-transform tw-duration-300 tw-ease-in-out
                hover:tw-scale-105 tw-object-cover" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="tw-h-[90%] tw-relative tw-w-full tw-translate-y-4 tw-flex tw-items-center tw-justify-center tw-rounded-xl tw-overflow-hidden tw-shadow-lg tw-bg-red-500 tw-text-white tw-text-6xl tw-font-bold">
                           <Image src="/assets/img/casestudies/estates.jpg" fill className="   tw-transform tw-transition-transform tw-duration-300 tw-ease-in-out
                hover:tw-scale-105 tw-object-cover" />

            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="tw-h-[90%] tw-relative tw-w-full tw-flex tw-items-center tw-justify-center tw-rounded-xl tw-bg-red-500 tw-overflow-hidden tw-shadow-lg  tw-text-white tw-text-6xl tw-font-bold">
                            <Image src="/assets/img/casestudies/e-2.JPG" fill className="   tw-transform tw-transition-transform tw-duration-300 tw-ease-in-out
                hover:tw-scale-105 tw-object-cover" />
 5
            </div>
          </SwiperSlide>
             <SwiperSlide>
            <div className="tw-h-[90%] tw-relative tw-w-full tw-flex tw-translate-y-4 tw-items-center tw-justify-center tw-rounded-xl tw-bg-red-500 tw-overflow-hidden tw-shadow-lg  tw-text-white tw-text-6xl tw-font-bold">
                            <Image src="/assets/img/casestudies/e-3.JPG" fill className="   tw-transform tw-transition-transform tw-duration-300 tw-ease-in-out
                hover:tw-scale-105 tw-object-cover" />
 5
            </div>
          </SwiperSlide>
               <SwiperSlide>
            <div className="tw-h-[90%] tw-relative tw-w-full tw-flex tw-items-center tw-justify-center tw-rounded-xl tw-bg-red-500 tw-overflow-hidden tw-shadow-lg  tw-text-white tw-text-6xl tw-font-bold">
                            <Image src="/assets/img/casestudies/e-4.JPG" fill className="   tw-transform tw-transition-transform tw-duration-300 tw-ease-in-out
                hover:tw-scale-105 tw-object-cover" />
 5
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
}
