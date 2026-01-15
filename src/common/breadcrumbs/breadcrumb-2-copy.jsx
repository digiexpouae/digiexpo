import useBreadcrumbTitleAnime from "@/hooks/useBreadcrumbTitleAnime";
import useCharAnimation from "@/hooks/useCharAnimation";
import useTitleAnimation from "@/hooks/useTitleAnimation";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

import shape_1 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_2 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-2.png";
import shape_3 from "../../../public/assets/img/breadcrumb/breadcrumb-3.png";
import shape_4 from "../../../public/assets/img/breadcrumb/breadcrumb-sub-1.png";



const BreadcrumbTwoCopy = ({ title, maintitle, innertitle, team_details, career_details }) => {
  const { animeRef } = useBreadcrumbTitleAnime();
  let subtitleRef = useRef(null)

  useTitleAnimation(subtitleRef)
  const btn_1 = "Our Work"
  const btn_2 = "Get in Touch"
  return (
    <>
      <div className="breadcrumb__area breadcrumb-height p-relative ">
        {/* <div className="breadcrumb__shape-1">
          <Image src={shape_1} alt="theme-pure" />
        </div>
        <div className="breadcrumb__shape-2">
          <Image src={shape_2} alt="theme-pure" />
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="breadcrumb__content mt-sm-0">

                <div ref={subtitleRef} className="breadcrumb__list tp-title-anim tp__title_anime">
                  {/* <span className="child-one">
                    <Link href="/">Home</Link>
                  </span>
                  <span className="dvdr">
                    <i className="fal fa-angle-right"></i>
                  </span> */}
                  {/* <span
                    className={`${team_details && "child-one"} ${
                      career_details && "child-one"
                    }`}
                  >
                    {innertitle}
                  </span> */}
                  {/* {team_details && (
                    <>
                      <span className="dvdr">
                        <i className="fal fa-angle-right"></i>
                      </span>
                      <span>Imdat Cimsit</span>
                    </>
                  )} */}
                  {/* {career_details && (
                    <>
                      <span className="dvdr">
                        <i className="fal fa-angle-right"></i>
                      </span>
                      <span>Team Member</span>
                    </>
                  )} */}

                  <h2
                    className="breadcrumb__title tp-char-animation anime_text" ref={animeRef}
                  >
                    {title}
                  </h2>
                  <h1 className="breadcrumb__title tp-char-animation anime_text" ref={animeRef}>
                    {maintitle}
                  </h1>
                </div>

                <div className="tp-hero-btn-3 wow tpfadeUp" data-wow-duration="1s" data-wow-delay=".9s">


                  <Link className="tp-btn-white tp-btn-hover alt-color-black d-none d-md-inline-block" href="#">
                    <span className='white-text'>{btn_1}</span>
                    <b></b>
                  </Link>

                  <Link className="tp-btn-blue-sm tp-btn-hover alt-color-black purple-bg" href="#">
                    <span >{btn_2}</span>
                    <b></b>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-lg-4 text-center text-md-end">
              {/* <div className="breadcrumb__img p-relative text-start z-index">
                <Image className="z-index-3" src={shape_3} alt="theme-pure" />
                <div
                  className="breadcrumb__sub-img wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".4s"
                >
                  <Image src={shape_4} alt="theme-pure" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbTwoCopy;
