import Image from 'next/image';
import Link from 'next/link';

import img_1 from "../../../../public/assets/img/about/about-4-3.png";
import img_2 from "../../../../public/assets/img/about/about-4-1.png";
import img_3 from "../../../../public/assets/img/about/about-4-2.png";
// about content here
const about_content = {
   //  sub_title: "Who we are",
    title: <>We Are Visionary Marketers</>,
    des: <>With impressive clientele, enriching experience and impeccable track record, we are the most reliable digital marketing agency in Dubai. At DigiExpo, we blend strategic insights with unparalleled creativity and advanced technology to upgrade the visibility of your online brand and to deliver tangible outcomes.</>,
    feature_1: <>High-Performance <br /> Solutions</>,
    feature_2: <>Best Cyber Security <br /> Solutions.</>,
    btn_text: "About Us",
}

const {sub_title, title, des, feature_1, feature_2, btn_text }  = about_content


const AboutArea = () => {

    return (
        <>
            <div className="tp-about-area pb-135 pt-100 purple-bg p-relative pb-sm-50 pt-sm-50">
               <div className="tp-about-top-img-2">
                  <Image src={img_1} alt="theme-pure" />
               </div>
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                        <div className="tp-about-left-img text-md-center p-relative text-start z-index " >
                           {/* <Image src={img_2} alt="theme-pure" /> */}
               
                           <video  autoPlay muted loop playsInline  preload="none" className="tp-about-left-video">
   <source src="/assets/img/about/Outputvideo2.mp4" type="video/mp4" />
   {/* <source src="/assets/img/about/colorful.mov" type="video/quicktime" /> */}
</video>
       {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/MqffbpjhriQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}


                           {/* <div className="tp-about-top-img">
                              <Image src={img_3} alt="theme-pure" />
                           </div> */}
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-security-section-wrapper">
                           <div className="tp-security-section-box mb-45">
                              {/* <h5 className="tp-section-subtitle-4 pb-10">{sub_title}</h5> */}
                              <h3 className="tp-section-title-4 pb-25 text-white">{title}</h3>
                              <p>{des}</p>
                           </div>
                           <div className="tp-security-feature">
                              <ul>
                                 <li><i className="far fa-check"></i>{feature_1}</li>
                                 <li><i className="far fa-check"></i>{feature_2}</li>
                              </ul>
                           </div>
                           <div className="tp-security-btn">
                              <Link className="tp-btn-yellow-border" href="/contact">{btn_text}<i className="far fa-angle-right"></i></Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default AboutArea;