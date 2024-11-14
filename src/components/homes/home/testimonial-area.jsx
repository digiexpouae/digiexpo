import React, {useRef} from 'react';
import Slider from 'react-slick';

import HyggeBikes from "../../../../public/assets/img/testimonial/hygge.png"
import HomesPerception from "../../../../public/assets/img/testimonial/homes.png"
import VoroMotors from "../../../../public/assets/img/testimonial/VM.png"
import LivPure from "../../../../public/assets/img/testimonial/livpure.png"
import BloomingScholars from "../../../../public/assets/img/testimonial/blooming.png"
import Ronin from "../../../../public/assets/img/testimonial/ronin.png"
import BakAccounting from "../../../../public/assets/img/testimonial/bak.png"
import FZConsultancy from "../../../../public/assets/img/testimonial/fz.png"
import Image from 'next/image';


const testimonial_content  = {
    bg_img: "/assets/img/testimonial/testi-bg-3-1.png",
    title: <>Kind Words<br />from our Customers</>
}
const {bg_img , title}  = testimonial_content


// slider setting
const settings = {	
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false, 
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
        
    ]
}


// testimonial data
const testimonial_data = [
    {
        id: 1, 
        img: HyggeBikes, 
        name: "Danish Ahsan",
        job_title: "Hygge Bikes",
        description: <>Working with Digi Expo has been a game-changer for our sales and marketing. Their team really understands our brand and has helped us connect with more customers than ever before.</>,

    },
    {
        id: 2, 
        img: HomesPerception, 
        name: "Nabeel",
        job_title: "Homes Perception",
        description: <>Digi Expo really took our sales and marketing to the next level. They understood what we needed and delivered results that truly made a difference for our business.</>,

    },
    {
        id: 3, 
        img: VoroMotors, 
        name: "Alexander Wright",
        job_title: "Voro Motors",
        description: <>Digi Expo did an amazing job revamping our website and boosting our sales. Their work has made a noticeable difference in how our brand is perceived online.</>,

    },
    {
        id: 4, 
        img: LivPure, 
        name: "Zuhaib Ali",
        job_title: "Liv Pure",
        description: <>Digi Expo has been incredible in managing our website, social media, and paid marketing. We've seen a big increase in our online presence and customer engagement thanks to their efforts.</>,

    },
    {
        id: 5, 
        img: BloomingScholars, 
        name: "Irfan Khan",
        job_title: "Blooming Scholars",
        description: <>Partnering with Digi Expo for our social media and website was one of the best decisions we made. Their team is responsive, creative, and has significantly improved our online visibility.</>,

    },
    {
        id: 6, 
        img: Ronin, 
        name: "Jahangir Munawar",
        job_title: "Ronin",
        description: <>Digi Expo has been great with our website development and maintenance. They’re always on top of things, ensuring everything runs smoothly, which gives us peace of mind.</>,

    },
    {
        id: 7, 
        img: BakAccounting, 
        name: "Zubair Haseeb",
        job_title: "Bak Accounting",
        description: <>Digi Expo has been a huge help in boosting our sales and marketing. Their insights and strategies have really helped us grow and reach more clients.</>,

    },
    {
        id: 8, 
        img: FZConsultancy, 
        name: "Malik Farukh",
        job_title: "FZ Consultancy",
        description: <>Digi Expo has done a fantastic job managing our social media. They've helped us engage with our audience more effectively and build a stronger online presence.</>,

    },
]


const TestimonialArea = () => {
    const sliderRef = useRef(null);
    return (
        <>
            <div className="tp-testimonial-area tp-testimonial-3-mlr pb-110 pb-sm-50">
               <div className="tp-testimonial-3-bg pt-110 fix pt-sm-50" 
               style={{backgroundImage: `url(${bg_img})`}}
               >
                  <div className="container">
                     <div className="row">
                        <div className="col-12">
                           <div className="tp-testimonial-3-section-box d-flex justify-content-between align-items-end mb-60">
                              <h3 className="tp-section-title-3 text-white">{title}</h3>
                              <div className="tp-test-arrow d-flex pb-10">
                                <button
                                  onClick={() => sliderRef.current?.slickPrev()}
                                  type="button" className="slick-prev"><i className="fal fa-angle-left"></i></button>
                                <button
                                  onClick={() => sliderRef.current?.slickNext()}
                                  type="button" className="slick-next"><i className="fal fa-angle-right"></i></button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="tp-testimonial-3-slider-wrapper">
                     <div className="container-fluid g-0">
                        <div className="row g-0">
                           <div className="col-12"> 
                                <Slider 
                                ref={sliderRef} {...settings}
                                className="tp-testimonial-3-slider-active"
                                >                                
                                {testimonial_data.map((item, i)  => 
                                    <div key={i} className="tp-testimonial-wrapper">
                                    <div className="tp-testimonial-3-item d-flex justify-content-between align-items-center">
                                       <div className="tp-testimonial-3-content-box">
                                          <div className="tp-testimonial-3-review">
                                             <span><i className="fas fa-star"></i></span>
                                             <span><i className="fas fa-star"></i></span>
                                             <span><i className="fas fa-star"></i></span>
                                             <span><i className="fas fa-star"></i></span>
                                             <span><i className="fas fa-star"></i></span>
                                          </div>
                                          <p>{item.description}</p>
                                          <div className="tp-testimonial-3-author-info d-flex align-items-center">
                                             <div className="tp-testimonial-3-sm-thumb d-md-none">
                                                <Image src={item.img} alt={item.name} />
                                             </div>
                                             <div>
                                                <h5>{item.name}</h5>
                                                <span>{item.job_title}</span>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="tp-testimonial-3-thumb d-none d-md-block">
                                          <Image src={item.img} alt="theme-pure" />
                                          {/* <video autoPlay muted loop width="300px">
                                             <source src="/assets/img/testimonial/test-video.webm" type="video/webm" />
                                          </video> */}
                                       </div>
                                    </div>
                                 </div>
                                    )
                                }
                                </Slider> 
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default TestimonialArea;