
import service_data from '@/data/service-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import emailmarketing from '../../../public/animation/emailnews.json'
import dynamic from 'next/dynamic';
import target from '../../../public/animation/performance.json'
import contentcreation from '../../../public/animation/contentcreation.json'
import appstore from '../../../public/animation/appstore.json'
import SEO from '../../../public/animation/seo.json'
import service_icon_1 from "../../../public/assets/img/service/sv-icon-3-1.png"
import service_icon_2 from "../../../public/assets/img/service/service-shape-3-1.png"
import videomarketing from "../../../public/animation/videomarketing.json"
import presentation from '../../../public/animation/presentation.json'
import content from "../../../public/animation/content.json"
import SMM from "../../../public/animation/SMM.json"
import emailmarketing from "../../../public/animation/emailmarketing.json"
import influencer from '../../../public/animation/influencer.json'
import styles from '../service/service-area.module.scss'

const Lootie = dynamic(() => import('react-lottie'), { ssr: false });


const service_content = {
  title: (
    <>
      Accounting Software <br /> That Handles it All.
    </>
  ),
  btn_text: <>See All Features</>,

  bg_img: "/assets/img/service/service-3-bg.png",
  service_title: "Build a strong online presence.",
  service_info: (
    < >
Achieve Measurable Results With
      <br />
      <h1 style={{fontSize:'24px',color:'white'}}>the Best Digital Marketing Agency Dubai
</h1>
    </>
  ),

  sub_text: (
    <>
    Our <b>Digital Marketing Services</b> include PPC, SEO,<br />
content production, and social media marketing.<br /> 
We aim to help you in connect with your audience,<br />  
generate quality leads, and boost brand awareness.
    
     {/* DigiExpo is a <b>trusted web design company Dubai</b>. We build high-performing  {" "} and engaging websites <br />  to help brands grow.We specialize in web design and <br />development, UI/UX design,  e-commerce development,<br /> SEO, PPC, and content creation.  */}

    </>
  ),
};
 const {title, btn_text, bg_img, service_title, service_info, sub_text}  = service_content


const ServiceArea = () => {
    return (
      <>
        <div className={`${styles['tp-service-area']} pb-120 pt-120 z-index pb-sm-50 pt-sm-50`}>
          <div className='container'>
            {/* <div className="row">
                     <div className="col-xl-12">
                        <div className="tp-service-section-wrapper mb-60 d-flex justify-content-between align-items-end">
                           <h3 className="tp-section-title tp-title-anim">{title}</h3>
                              <Link className="tp-btn-inner tp-btn-hover alt-color-black wow tpfadeRight"
                                 data-wow-duration=".9s"
                                 data-wow-delay=".3s"
                                 href="/service-details">
                                 <span>{btn_text}</span>
                                 <b></b>
                              </Link>
                        </div>
                     </div>
                  </div> */}
            <div className='row'>
              <div
                className='col-xl-8 wow tpfadeUp'
                data-wow-duration='.9s'
                data-wow-delay='.3s'
              >
                <div
                  className={`${styles['tp-service-3-item']} mb-30 p-relative z-index`}
                  style={{ backgroundImage: `url(${bg_img})` }}
                >
                  <div className={styles['tp-service-3-icon']}>
                    <Image src={service_icon_1} alt='theme-pure' />
                  </div>
                  <div className={styles['tp-service-3-content']}>
                    <span>{service_title}</span>
                    <h4 className={styles['tp-service-3-title-sm']}>
                      <Link href='/service-details'>{service_info}</Link>
                    </h4>
                    <p  style={{color:'white'}}>{sub_text}</p>
                  </div>
                  <div className={styles['tp-service-3-btn']}>
                    <Link
                      className={styles['tp-btn-white-solid']}
                      href='/service-details'
                    >
                      Learn More
                    </Link>
                  </div>
                  <div className={styles['tp-service-3-shape']}>
                    <Image src={service_icon_2} alt='theme-pure' />
                  </div>
                </div>
              </div>

              <div
                className='col-xl-4 col-lg-6 col-md-6 wow tpfadeUp'
                data-wow-duration='.9s'
                data-wow-delay='.5s'
              >
                <div className={`${styles['tp-service-sm-item']} mb-30 d-flex flex-column justify-content-between d-xl-block mt-xl-140`}>
                  <div className={styles['tp-service-sm-icon']}>
                    {/* {item.icon} */}
                 {/* <video autoPlay muted loop width='125px'>
                      <source
                        src='/assets/img/service/smm.webm'
                        type='video/webm'
                      />
                    </video> */}
 
 <Lootie 
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: SMM,  // Animation for Digital Marketing
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice"
                        }
                      }}
                  style={{width:'132px',height:'100%'}}
                    />  
                  </div>
                  <div className={styles['tp-service-sm-content']} style={{height:'162px'}}>
                    <span style={{fontSize:'14px',whiteSpace:'nowrap'}}>Social Media Marketing (SMM)</span>
                    <h3 className={styles['tp-service-sm-title']}>
                      <Link href='/service-details'>
                        Transform casual clicks into loyal customers with our
                        expert SMM.
                      </Link>
                    </h3>
                    <div className={styles['tp-service-sm-link']}>
                      <Link href='/service-details'>
                        Learn More <i className='far fa-arrow-right'></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='col-xl-4 col-lg-6 col-md-6 wow tpfadeUp'
                data-wow-duration='.9s'
                data-wow-delay='.5s'
              >
                <div className={`${styles['tp-service-sm-item']} mb-30 d-flex flex-column justify-content-between`}>
                  <div className={styles['tp-service-sm-icon']}>
                    {/* {item.icon} */}
                    {/* <video autoPlay muted loop width='150px'>
                      <source
                        src='/assets/img/service/seo.webm'
                        type='video/webm'
                      />
                    </video> */}
                           <Lootie 
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: SEO,  // Animation for Digital Marketing
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice"
                        }
                      }}
                  style={{width:'122px',height:'100%'}}
                    />  
                  </div>
                  <div className={styles['tp-service-sm-content']} style={{height:'162px'}}>
                    <span style={{fontSize:'14px',whiteSpace:'nowrap'}}>Search Engine Optimization(SEO)</span>
                    <h3 className={styles['tp-service-sm-title']}>
                      <Link href='/service-details'>
                        Our SEO pros help you achieve top <br /> <div style={{whiteSpace:'nowrap'}}>search rankings and
                        outrank your rivals.</div>
                      </Link>
                    </h3>
                    <div className={styles['tp-service-sm-link']}>
                      <Link href='/service-details'>
                        Learn More <i className='far fa-arrow-right'></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='col-xl-4 col-lg-6 col-md-6 wow tpfadeUp'
                data-wow-duration='.9s'
                data-wow-delay='.5s'
              >
                <div className={`${styles['tp-service-sm-item']} mb-30 d-flex flex-column justify-content-between`}>
                  <div className={styles['tp-service-sm-icon']}>
                    {/* {item.icon} */}
                    {/* <video autoPlay muted loop width='150px'>
                      <source
                        src='/assets/img/service/performance.webm'
                        type='video/webm'
                      />
                    </video> */}
                         <Lootie 
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData:target,  // Animation for Digital Marketing
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice"
                        }
                      }}
                  style={{width:'152px',height:'100%'}}
                    />  
                  </div>
                  <div className={styles['tp-service-sm-content']} style={{height:'162px'}}>
                    <span style={{fontSize:'14px',whiteSpace:'nowrap'}}>Performance Marketing</span>
                    <h3 className={styles['tp-service-sm-title']}>
                      <Link href='/service-details'>
                        Boost Your ROI with our Performance Marketing Service
                      </Link>
                    </h3>
                    <div className={styles['tp-service-sm-link']}>
                      <Link href='/service-details'>
                        Learn More <i className='far fa-arrow-right'></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='col-xl-4 col-lg-6 col-md-6 wow tpfadeUp'
                data-wow-duration='.9s'
                data-wow-delay='.5s'
              >
                <div className={`${styles['tp-service-sm-item']} mb-30 d-flex flex-column justify-content-between`}>
                  <div className={styles['tp-service-sm-icon']}>
                    {/* {item.icon} */}
                 
                    
  <Lootie 
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: emailmarketing,  // Animation for Digital Marketing
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice"
                        }
                      }}
                  style={{width:'122px',height:'100%'}}
                    />  
                  </div>
                  <div className={styles['tp-service-sm-content']} style={{height:'162px'}}>
                    <span style={{fontSize:'14px',whiteSpace:'nowrap'}}>Email Marketing</span>
                    <h3 className={styles['tp-service-sm-title']}>
                      <Link href='/service-details'>
                        Reach more, convert more with our Email Marketing
                      </Link>
                    </h3>
                    <div className={styles['tp-service-sm-link']}>
                      <Link href='/service-details'>
                        Learn More <i className='far fa-arrow-right'></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='col-xl-4 col-lg-6 col-md-6 wow tpfadeUp'
                data-wow-duration='.9s'
                data-wow-delay='.5s'
              >
                <div className={`${styles['tp-service-sm-item']} mb-30 d-flex flex-column justify-content-between`}>
                  <div className={styles['tp-service-sm-icon']}>
                    {/* {item.icon} */}
                    {/* <video autoPlay muted loop width='125px'>
                      <source
                        src='/assets/img/service/app.webm'
                        type='video/webm'
                      />
                    </video> */}
                                               
                  <Lootie 
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: appstore,  // Animation for Digital Marketing
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice"
                        }
                      }}
                  style={{width:'142px',height:'100%'}}
                    />  
                  </div>
                  <div className={styles['tp-service-sm-content']} style={{height:'162px'}}>
                    <span style={{fontSize:'14px',whiteSpace:'nowrap'}}>App Store Optimization(ASO)</span>
                    <h3 className={styles['tp-service-sm-title']}>
                      <Link href='/service-details'>
                        Boost your app’s visibility with our ASO magic
                      </Link>
                    </h3>
                    <div className={styles['tp-service-sm-link']}>
                      <Link href='/service-details'>
                        Learn More <i className='far fa-arrow-right'></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='col-xl-4 col-lg-6 col-md-6 wow tpfadeUp'
                data-wow-duration='.9s'
                data-wow-delay='.5s'
              >
                <div className={`${styles['tp-service-sm-item']} mb-30 d-flex flex-column justify-content-between`}>
                  <div className={styles['tp-service-sm-icon']}>
                    {/* {item.icon} */}
                    {/* <video autoPlay muted loop width='125px'>
                      <source
                        src='/assets/img/service/writing.webm'
                        type='video/webm'
                      />
                    </video> */}
                      <Lootie 
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: content,  // Animation for Digital Marketing
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice"
                        }
                      }}
                  style={{width:'122px',height:'100%'}}
                    />  
                  </div>
                  <div className={styles['tp-service-sm-content']} style={{height:'162px'}}>
                    <span style={{fontSize:'14px',whiteSpace:'nowrap'}}>Content Writing</span>
                    <h3 className={styles['tp-service-sm-title']}> 
                      <Link href='/service-details'>
                        Connect with your audience through compelling content.
                      </Link>
                    </h3>
                    <div className={styles['tp-service-sm-link']}>
                      <Link href='/service-details'>
                        Learn More <i className='far fa-arrow-right'></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='col-xl-4 col-lg-6 col-md-6 wow tpfadeUp'
                data-wow-duration='.9s'
                data-wow-delay='.5s'
              >
                <div className={`${styles['tp-service-sm-item']} mb-30 d-flex flex-column justify-content-between`}>
                  <div className='tp-service-sm-icon'>
                    {/* {item.icon} */}
                    {/* <video autoPlay muted loop width='125px'>
                      <source
                        src='/assets/img/service/influence.webm'
                        type='video/webm'
                      />
                    </video> */}
                        <Lootie 
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData:contentcreation,  // Animation for Digital Marketing
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice"
                        }
                      }}
                  style={{width:'122px',height:'100%'}}
                    />  
                  </div>
                  <div className={styles['tp-service-sm-content']} style={{height:'162px'}}>
                    <span style={{fontSize:'14px',whiteSpace:'nowrap'}}>Influencer Marketing</span>
                    <h3 className={styles['tp-service-sm-title']}>
                      <Link href='/service-details'>
                        Connect with Your Target Audience Through Influencers.
                      </Link>
                    </h3>
                    <div className={styles['tp-service-sm-link']}>
                      <Link href='/service-details'>
                        Learn More <i className='far fa-arrow-right'></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='col-xl-4 col-lg-6 col-md-6 wow tpfadeUp'
                data-wow-duration='.9s'
                data-wow-delay='.5s'
              >
                <div className= {`${styles['tp-service-sm-item']} mb-30 d-flex flex-column justify-content-between`}>
                  <div className='tp-service-sm-icon'>
                    {/* {item.icon} */}
                    {/* <video autoPlay muted loop width='125px'>
                      <source
                        src='/assets/img/service/creating.webm'
                        type='video/webm'
                      />
                    </video> */}
                        <Lootie 
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData:presentation,  // Animation for Digital Marketing
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice"
                        }
                      }}
                  style={{width:'132px',height:'100%'}}
                    />  

                  </div>
                  <div className={styles['tp-service-sm-content']} style={{height:'162px'}}>
                    <span style={{fontSize:'14px',whiteSpace:'nowrap'}}>Content Creation</span>
                    <h3 className={styles['tp-service-sm-title']}>
                      <Link href='/service-details'>
                        Building Brand Connections Through Compelling Digital
                        Narratives
                      </Link>
                    </h3>
                    <div className={styles['tp-service-sm-link']}>
                      <Link href='/service-details'>
                        Learn More <i className='far fa-arrow-right'></i>
                      </Link>
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
