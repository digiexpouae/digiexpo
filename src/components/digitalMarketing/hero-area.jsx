import LineShapTwo from '@/svg/line-shap-2';
// gsap is heavy; load only on client when needed
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect } from 'react';

// import shape images
import shape_1 from "../../../public/assets/img/herowebp/hero-circle-5-1.webp";
import shape_2 from "../../../public/assets/img/herowebp/hero-circle-5-2.webp";
import shape_3 from "../../../public/assets/img/herowebp/hero-circle-5-3.webp";
import shape_4 from "../../../public/assets/img/herowebp/hero-shape-5-1-1.webp";
import shape_5 from "../../../public/assets/img/herowebp/home-shape-1-1.webp";
import shape_6 from "../../../public/assets/img/herowebp/home-shape-1-2.webp";


const HeroArea = () => {
   useEffect(() => {
      (async () => {
         const { gsap } = await import('gsap');
         let tl = gsap.timeline({ default: { ease: "SlowMo.easeOut" } });
         tl.to(".hero-text-anim-2 i.child-2", { y: "0px", duration: .9, opacity: 1, stagger: 0.3, delay: .3 });
      })();
   }, [])

   return (
      <>
         <div className="tp-hero-area  tp-hero-five__ptb-5  p-relative fix" >

            {/* <div className="tp-hero-five__shape-3">
               <Image src={shape_2} alt="theme-pure" />
            </div> */}
            {/* <div className="tp-hero-five__shape-4">
               <Image src={shape_3} alt="theme-pure" />
            </div> */}
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xl-7 col-lg-6 order-2">
                     <div className="tp-hero-five-section-wrap  tw-flex tw-flex-col tw-items-center tw-pt-32 md:tw-pt-0 tw-justify-center tw-h-screen md:tw-items-start">
                        <div className="tp-hero-five-section-box  ">
                           <h1 className="tp-hero-title-5 hero-text-anim-2 tw-text-black">
                              <i><i className="child-2 tw-font-bold tw-text-white">Digital Marketing <br /></i></i>
                              {/* <i>
                                 <i className="child-2">
                                    Website <span className="child-1 p-relative">Traffic
                                       <LineShapTwo />
                                    </span>
                                    <br />
                                 </i>
                              </i>
                              <i><i className="child-2"><span className="child-2">Leads, And Sales</span><br /></i></i>
                              <i><i className="child-2" style={{ lineHeight: '1' }}>With the top Digital <br />Marketing Agency Dubai</i></i> */}
                           </h1>
                           {/* <p className="wow tpfadeUp text-black" data-wow-duration=".9s" data-wow-delay=".5s">With Digiexpo All In One Digital Marketing Solutions</p> */}
                        </div>
                        <div className="tp-hero-five-btn-box d-flex align-items-center wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                           <Link className="tp-btn-blue-sm !tw-bg-[#FFFFFF] !tw-text-black circle-effect mr-15 mb-20" href="/">Our Work</Link>
                           <Link className="tp-btn-yellow-sm !tw-bg-[#803DFF] !tw-text-white mb-20" href="/service-details">Get in Touch</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tp-hero-five-2-thumb-main p-relative">
               {/* <div className="tp-hero-five-2-thumb">
                  <Image src={shape_4} className="tp-hero-five-2-thumb-inner" alt="theme-pure" />
               </div> */}
               {/* <div className="tp-hero-five-2-sub-img-1 d-none d-md-block">
                  <Image src={shape_5} alt="theme-pure" />
               </div>
               <div className="tp-hero-five-2-sub-img-2 d-none d-md-block">
                  <Image src={shape_6} alt="theme-pure" />
               </div> */}
            </div>
         </div>
      </>
   );
};

export default HeroArea;