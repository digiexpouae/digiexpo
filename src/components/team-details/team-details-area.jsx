import CheckboxIcon from '@/svg/checkbox-icon';
import EmailFive from '@/svg/email-5';
import LocationIconThree from '@/svg/location-icon-3';
import ShareIcon from '@/svg/share-icon';
import React from 'react';


import team_img from "../../../public/assets/img/team/team-details-1.jpg";
import Image from 'next/image';
import Link from 'next/link';


const team_details_content = {
    name: "Imdat Cimsit",
    feature_list1: [
        <>Personal Information: Your name, email address, phone number, and any other information you provide voluntarily.</>,
        <>Usage Data: Information such as your IP address, browser type, and pages you visit, collected through cookies and similar tracking technologies.</>,
        <>Marketing Data: Information you provide for email subscriptions, contact forms, or social media interactions.</>,
    ],
    feature_list2: [
        <>To provide, operate, and maintain our services.</>,
        <>To communicate with you regarding inquiries, promotions, and updates.</>,
        <>To improve our website and services based on user experience and analytics.</>,
        <>To manage our marketing campaigns and customer interactions.</>,
    ],
    feature_list3: [
        <>Service Providers: Third-party service providers who assist us in operating our website and services, such as analytics or email platforms.</>,
        <>Legal Obligations: If required by law, regulation, or court order to disclose information.</>,
    ],
    feature_list4: [
        <>Access, correct, or delete your personal information.</>,
        <>Opt-out of receiving marketing communications from us at any time.</>,
        <>Request that we restrict or cease processing your data.</>,
    ],
    expricence: [
        {id: 1, title: "Role:", info: "Design"},
        {id: 2, title: "Experience:", info: "14 years"},
    ],
    skill_title: "Superpower Skills:",
    details_skill: ["Interaction Design", "User Research", "Figma"],
    title1: "Introduction",
    about_info_1: <>DigiExpo ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website, use our services, or engage with us in any way. By using DigiExpo's services, you agree to the terms of this Privacy Policy.</>,
    title2: "1. Information We Collect",
    about_info_2: <>We may collect the following types of information:</>,
    title3: "2. How We Use Your Information",
    about_info_3: <>We may use your information for the following purposes:</>,
    title4: "3. Sharing Your Information",
    about_info_4: <>We do not sell or rent your personal information. However, we may share your data in the following scenarios:</>,
    title5: "4. Data Security",
    about_info_5: <>DigiExpo implements robust security measures to protect your personal data. We use encryption, secure servers, and other technologies to ensure your information is handled safely. However, no system can guarantee 100% security, so we urge you to protect your information as well.</>,
    title6: "5. Your Rights",
    about_info_6: <>You have the right to:</>,
    title7: "6. Cookies and Tracking Technologies",
    about_info_7: <>DigiExpo uses cookies to enhance your experience on our website. You can manage or disable cookies through your browser settings, though doing so may affect certain functionalities of our site.</>,
    title8: "7. External Links",
    about_info_8: <>Our website may contain links to third-party websites. DigiExpo is not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.</>,
    title9: "8. Changes to This Privacy Policy",
    about_info_9: <>DigiExpo reserves the right to update or modify this Privacy Policy at any time. Any changes will be reflected on this page, so we encourage you to review it periodically.</>,
   //  about_info_2: <>Cras sed felis eget velit aliquet. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Nibh tellus molestie nunc non blandit massa enim nec. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Posuere morbi leo urna molestie.
   //  </>,
}
const {
    name, 
    feature_list1,
    feature_list2,
    feature_list3,
    feature_list4,
    expricence,  
    skill_title, 
    details_skill, 
    title1, 
    about_info_1, 
    title2, 
    about_info_2, 
    title3, 
    about_info_3, 
    title4, 
    about_info_4, 
    title5, 
    about_info_5, 
    title6, 
    about_info_6, 
    title7, 
    about_info_7, 
    title8, 
    about_info_8, 
    title9, 
    about_info_9, 
}  = team_details_content

const TeamDetailsArea = () => {
    return (
        <>
            <div className="team-details-area pt-50 pb-100">
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-xl-8 col-lg-10">
                        <div className="team-details-text-wrapper pt-80">
                           <div className="team-details-text">
                              <h4 className="team-details-title">{title1}</h4>
                              <p>{about_info_1}</p>
                           </div>
                           <div className="team-details-text">
                              <h4 className="team-details-title">{title2}</h4>
                              <p>{about_info_2}</p>
                           </div>
                           <div className="team-details-feature-list">
                              <ul>
                              {feature_list1.map((item, i) => <li key={i}>{item}</li>)} 
                              </ul>
                              {/* <p>{about_info_2}</p> */}
                           </div>
                           <div className="team-details-text">
                              <h4 className="team-details-title">{title3}</h4>
                              <p>{about_info_3}</p>
                           </div>
                           <div className="team-details-feature-list">
                              <ul>
                              {feature_list2.map((item, i) => <li key={i}>{item}</li>)} 
                              </ul>
                              {/* <p>{about_info_2}</p> */}
                           </div>
                           <div className="team-details-text">
                              <h4 className="team-details-title">{title4}</h4>
                              <p>{about_info_4}</p>
                           </div>
                           <div className="team-details-feature-list">
                              <ul>
                              {feature_list3.map((item, i) => <li key={i}>{item}</li>)} 
                              </ul>
                              {/* <p>{about_info_2}</p> */}
                           </div>
                           <div className="team-details-text">
                              <h4 className="team-details-title">{title5}</h4>
                              <p>{about_info_5}</p>
                           </div>
                           <div className="team-details-text">
                              <h4 className="team-details-title">{title6}</h4>
                              <p>{about_info_6}</p>
                           </div>
                           <div className="team-details-feature-list">
                              <ul>
                              {feature_list4.map((item, i) => <li key={i}>{item}</li>)} 
                              </ul>
                              {/* <p>{about_info_2}</p> */}
                           </div>
                           <div className="team-details-text">
                              <h4 className="team-details-title">{title7}</h4>
                              <p>{about_info_7}</p>
                           </div>
                           <div className="team-details-text">
                              <h4 className="team-details-title">{title8}</h4>
                              <p>{about_info_8}</p>
                           </div>
                           <div className="team-details-text">
                              <h4 className="team-details-title">{title9}</h4>
                              <p>{about_info_9}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
         </div>
        </>
    );
};

export default TeamDetailsArea;