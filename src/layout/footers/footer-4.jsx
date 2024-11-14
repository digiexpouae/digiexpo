import { CopyRight, SocialLinksTwo } from '@/common/social-links';
import EmailIcon from '@/svg/email';
import EmailThree from '@/svg/email-3';
import LocationTwo from '@/svg/location-2';
import PhoneThree from '@/svg/phone-3';
import RightArrow from '@/svg/right-arrow';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import footer_shape from "../../../public/assets/img/footer/footer-bottom-shape-4-1.png";
// import footer_logo from "../../../public/assets/img/logo/logo-white.png";
import footer_logo from "../../../public/assets/img/logo/logo-footer.png";


const footer_content = {
   sub_title: "Reach out to our team and we'll get back to you within a day.",
   policy_text: <>By subscribing, you accepted the our <a href="#">Policy</a></>,
   phone: "+971 501 435 647",
   email: "Info@digiexpo.ae",
   location: <>Ontario Tower - Office no 1801<br />18th Floor - Business Bay <br/> Dubai - United Arab Emirates</>,

   footer_links1: [
      { name: "SMM", link: "#" },
      { name: "SEO", link: "#" },
      { name: "PPM", link: "#" },
      { name: "Email Marketing", link: "#" },
      { name: "Influencer Marketing", link: "#" },
      { name: "Public Relation (PR)", link: "#" },
      { name: "PPC", link: "#" },

   ],
   footer_links2: [
      { name: "Web Design", link: "#" },
      { name: "Wordpress Development", link: "#" },
      { name: "Web Application", link: "#" },
      { name: "CMS Development", link: "#" },
      { name: "Laravel Development", link: "#" },
      { name: "Webflow Development", link: "#" },
      { name: "Website Maintanance", link: "#" },
   ],
   footer_links3: [
      { name: "Hybrid Apps", link: "#" },
      { name: "Android App Development", link: "#" },
      { name: "IOS App Development", link: "#" },
      { name: "React Native Apps", link: "#" },
      { name: "Flutter Apps", link: "#" },
      { name: "Progressive Web Apps (PWAs)", link: "#" },
   ],
}
const {sub_title, policy_text, phone, email, location, footer_links1, footer_links2, footer_links3 } = footer_content



const FooterFour = () => {
   return (
      <>
         <footer>
            <div className="tp-footer__pl-pr black-bg z-index fix">
               <div className="tp-footer__area tp-footer__border-bottom-4 fix">
                  {/* <div className="tp-footer-bottom-shape">
                     <Image src={footer_shape} alt="theme-pure" />
                  </div> */}
                  <div className="container">
                     <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 pb-45 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                           <div className="tp-footer__widget footer-widget-4 footer-col-4-1">
                              <div className="tp-footer__logo mb-25">
                                 <Link href="/">
                                    <Image src={footer_logo} alt="theme-pure" />
                                 </Link>
                              </div>
                              <h3 className="footer-subtitle-3">{sub_title}</h3>
                              <div className="tp-contact-info-box">
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
                                       <LocationTwo />  <Link href="https://maps.app.goo.gl/3yY7Bj8aZ75oYWbUA" target="_blank">{location}</Link>
                                    </li>
                                 </ul>
                              </div>
                              {/* <div className="tp-footer__input mb-15 p-relative">
                                 <form onSubmit={(e) => e.preventDefault()}>
                                    <input type="text" placeholder="Business email adress" required />
                                    <span>
                                       <EmailIcon />
                                    </span>
                                    <button>
                                       <RightArrow />
                                    </button>
                                 </form>
                              </div>
                              <p>{policy_text}</p>
                              <div className="tp-team-social">
                                 <SocialLinksTwo />
                              </div> */}
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 pb-45 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                           <div className="tp-footer__widget footer-widget-4 footer-col-4-2">
                              <h4 className="tp-footer__widget-title">Digital Marketing</h4>
                              <div className="tp-footer__content">
                                 <ul>
                                    {footer_links1.map((item, i) =>
                                       <li key={i}><Link href={item.link}>{item.name}</Link></li>
                                    )}
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 pb-45 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                           <div className="tp-footer__widget footer-widget-4 footer-col-4-2">
                              <h4 className="tp-footer__widget-title">
                              Web Development</h4>
                              <div className="tp-footer__content">
                                 <ul>
                                    {footer_links2.map((item, i) =>
                                       <li key={i}><Link href={item.link}>{item.name}</Link></li>
                                    )}
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 pb-45 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                           <div className="tp-footer__widget footer-widget-4 footer-col-4-2">
                              <h4 className="tp-footer__widget-title">Mobile Development</h4>
                              <div className="tp-footer__content">
                                 <ul>
                                    {footer_links3.map((item, i) =>
                                       <li key={i}><Link href={item.link}>{item.name}</Link></li>
                                    )}
                                 </ul>
                              </div>
                           </div>
                        </div>
                        {/* <div className="col-xl-3 col-lg-3 col-md-6 pb-45 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                           <div className="tp-footer__widget footer-widget-4 footer-col-4-3">
                              <h4 className="tp-footer__widget-title">Contact Info</h4>
                              <div className="tp-contact-info-box">
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
                                       <LocationTwo />  <Link href="https://www.google.com/maps/place/Argentina,+Santiago+del+Estero+Province,+Argentina/@-28.9465488,-65.3732971,7.53z/data=!4m5!3m4!1s0x9436ede70248f47b:0x3bdbc4e928700c2a!8m2!3d-29.5355289!4d-62.2664853" target="_blank">{location}</Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div> */}
                     </div>
                  </div>
               </div>
               <div className="tp-copyright__area pt-20 pb-20 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                           <div className="tp-copyright__text tp-copyright__text-4 text-center">
                              <span><CopyRight /></span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </footer>
      </>
   );
};

export default FooterFour;