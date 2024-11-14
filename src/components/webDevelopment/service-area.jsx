import service_data from "@/data/service-data";
import Link from "next/link";
import React from "react";
import Image from "next/image";

import img from "../../../public/assets/img/service/service-shape-right.png";

const service_content = {
  sub_title: "WHAT WE DO",
  title: "Our Development Process",
  description: (
    <>
      We build more than just websites;
      <br /> we create digital experiences that drive results.
    </>
  ),
};
const { sub_title, title, description } = service_content;

const ServiceArea = () => {
  return (
    <>
      <div className="tp-service-area purple-bg p-relative pt-115 pb-105 pb-sm-0 pt-sm-0">
        <div className="tp-service-shape-right z-index">
          <Image src={img} alt="theme-pure" />
        </div>
        <div className="container">
          <div className="row align-items-end mb-60">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-service-section-four">
                {/* <h5 className="tp-section-subtitle-4 pb-10">{sub_title}</h5> */}
                <h3 className="tp-section-title-4">{title}</h3>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6  wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-service-sction-content pb-15 d-flex justify-content-end">
                <p className="text-white">{description}</p>
              </div>
            </div>
          </div>
          <div
            className="tp-service-4-border-top  wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 mb-50 tp-service-4-border-right service-border-trang-1">
                <div className="tp-service-4-item z-index">
                  <div className="tp-service-4-icon">
                    {/* <Image src={item.img} alt="theme-pure" /> */}
                    <video autoPlay muted loop width="125px">
                      <source
                        src="/assets/img/service/discovery-planning.webm"
                        type="video/webm"
                      />
                    </video>
                  </div>
                  <div className="tp-service-4-content">
                    <span>STEP ONE</span>
                    <h4 className="tp-service-4-title">
                      <Link href="/service-details">
                        Discovery and Planning
                      </Link>
                    </h4>
                    <span>In the very first step after discussing with our esteemed clients, we define project goals, target audience, and create a detailed plan. Our team of experts framework the site's structure, features, and different tools to ensure alignment with client objectives.</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mb-50 tp-service-4-border-right service-border-trang-2">
                <div className="tp-service-4-item z-index">
                  <div className="tp-service-4-icon">
                    {/* <Image src={item.img} alt="theme-pure" /> */}
                    <video autoPlay muted loop width="125px">
                      <source
                        src="/assets/img/service/development-coding.webm"
                        type="video/webm"
                      />
                    </video>
                  </div>
                  <div className="tp-service-4-content">
                    <span>STEP TWO</span>
                    <h4 className="tp-service-4-title">
                      <Link href="/service-details">
                      Development and Coding
                      </Link>
                    </h4>
                    <span> Our web development company in Dubai developers bring the design to life by writing code, integrating databases, and building interactive features. Our web specialists follow best practices for security, performance, and scalability.</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mb-50 tp-service-4-border-right service-border-trang-3">
                <div className="tp-service-4-item z-index">
                  <div className="tp-service-4-icon">
                    {/* <Image src={item.img} alt="theme-pure" /> */}
                    <video autoPlay muted loop width="125px">
                      <source
                        src="/assets/img/service/testing-assurance.webm"
                        type="video/webm"
                      />
                    </video>
                  </div>
                  <div className="tp-service-4-content">
                    <span>STEP THREE</span>
                    <h4 className="tp-service-4-title">
                      <Link href="/service-details">
                      Testing and Quality Assurance
                      </Link>
                    </h4>
                    <span>Punctilious testing is conducted to recognize and resolve bugs, ensure cross-browser compatibility, and optimize load times. User experience and functionality are thoroughly validated before launch.</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mb-50 tp-service-4-border-right service-border-trang-4">
                <div className="tp-service-4-item z-index">
                  <div className="tp-service-4-icon">
                    {/* <Image src={item.img} alt="theme-pure" /> */}
                    <video autoPlay muted loop width="125px">
                      <source
                        src="/assets/img/service/deployment-maintenance.webm"
                        type="video/webm"
                      />
                    </video>
                  </div>
                  <div className="tp-service-4-content">
                     <span>STEP FOUR</span>
                    <h4 className="tp-service-4-title">
                      <Link href="/service-details">
                      Deployment and Maintenance
                      </Link>
                    </h4>
                    <span>When the website is finally launched. The best web development in UAE experts monitored the website for performance, and maintained it to keep it secure and up to date. The ongoing updates, backups, and support are provided to ensure continued success.</span>
                    {/* <Link
                      className="tp-btn-service text-lightt"
                      href="/service-details"
                    >
                      Learn More
                    </Link> */}
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

export default ServiceArea;
