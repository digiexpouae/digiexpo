import EmailThree from '@/svg/email-3';
import LocationTwo from '@/svg/location-2';
import PhoneThree from '@/svg/phone-3';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import contact_img from "../../../../public/assets/img/hero/hero-4-3.png"
import shape_1 from "../../../../public/assets/img/contact/shape-4-1.png"
import NiceSelect from '@/ui/nice-select';
import ContactUsFormMuz from '@/forms/contact-us-form-muz';

const contact_content = {
    sub_title: "CONTACT US",
    title: <>Your Business Deserves The DigiExpo Touch</>,
    phone: "(+806)0008899",
    email: "contact@info.com",
    location: <>1811 Silverside Rd, Wilmington, DE 19810, USA</>,
}
const {sub_title, title , phone, email, location}  = contact_content

const ContactArea2 = () => {
    const selectHandler = (e) => {};
    return (
        <>
            <div className="tp-contact-area pt-120 pb-120 pb-sm-50 pt-sm-50 purple-bg z-index p-relative fix">
               <div className="tp-contact-glob-img">
                  <Image src={contact_img} alt="theme-pure" />
               </div>
               <div className="container">
                  <div className="row align-items-center">
                     <div className='col-12 text-center'>
                        <h3 className="tp-section-title-4 pb-50">{title}</h3>
                     </div>
                     <div className="col-xl-5 col-12 z-index-3 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                        <div className="tp-contact-section-box pb-25">
                           {/* <h5 className="tp-section-subtitle-4 pb-10 ">{sub_title}</h5> */}
                           <video autoPlay muted loop width="500px">
                              <source src="/assets/img/contact/contact-video.webm" type="video/webm" /> 
                           </video>
                           {/* <p className=''>Looking for the best digital marketing agency in Dubai? DigiExpo team of specialists will help to grow your online business by offering multi-channel digital marketing services.  We deliver measurable results through data-driven strategies and innovative solutions. Let's grow your brand together.</p> */}
                        </div>
                        {/* <div className="tp-contact-info-box tp-title-anim">
                           <ul>
                              <li>
                                <PhoneThree />                                   
                                 <Link href={`tel:${phone}`}>{phone}</Link>
                              </li>
                              <li>
                                <EmailThree /> 
                                 <Link href={`mailto:${email}`}>{email}</Link>
                              </li>
                              <li>
                                <LocationTwo /> 
                                 <Link href="https://www.google.com/maps/place/Argentina,+Santiago+del+Estero+Province,+Argentina/@-28.9465488,-65.3732971,7.53z/data=!4m5!3m4!1s0x9436ede70248f47b:0x3bdbc4e928700c2a!8m2!3d-29.5355289!4d-62.2664853"
                                    target="_blank">{location}</Link>
                              </li>
                           </ul>
                        </div> */}
                     </div>

                     <div className="col-xl-7 col-12 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-contact-input-wrapper p-relative">
                           <div className="tp-contact-shape">
                              <Image src={shape_1} alt="theme-pure" />
                           </div>
                           <ContactUsFormMuz/>
                           {/* <div className="row">
                              <div className="col-xl-6">
                                 <div className="tp-contact-input mb-20">
                                    <input type="text" placeholder="Full name"  required/>
                                 </div>
                              </div>
                              <div className="col-xl-6">
                                 <div className="tp-contact-input mb-20">
                                    <input type="email" placeholder="Email address" required />
                                 </div>
                              </div>
                              <div className="col-xl-6">
                              <div className="tp-contact-input mb-20">
                                    <input type="tel" placeholder="Phone Number" required />
                                 </div>
                              </div>
                              <div className="col-xl-6">
                                 <div className="tp-contact-select">
                                    <div className="tp-select-icon"> 
                                       <NiceSelect
                                        options={[ 
                                            { value: "-", text: "Budget" },
                                            { value: "0 - 30,000 AED", text: "0 - 30,000 AED" },
                                            { value: "30,000 AED - 60,000 AED", text: "30,000 AED - 60,000 AED" },
                                            { value: "60,000 AED - 80,000 AED", text: "60,000 AED - 80,000 AED" }, 
                                            { value: "80,000 AED - 100,000 AED", text: "80,000 AED - 100,000 AED" },
                                            { value: "100,000 AED - 200,000 AED", text: "100,000 AED - 200,000 AED" },
                                            { value: "200,000+ AED", text: "200,000+ AED" },
                                        ]}
                                        defaultCurrent={0}
                                        onChange={selectHandler}
                                        />
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-12">
                                 <div className="tp-contact-input mb-20">
                                    <textarea placeholder="Enter your message"></textarea>
                                 </div>
                              </div>
                              <div className="col-xl-12">
                                 <div className="tp-contact-btn">
                                    <button type="submit" className="tp-btn-yellow-lg w-100"><span></span>Get a free consultation</button>
                                 </div>
                              </div>
                           </div> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default ContactArea2;