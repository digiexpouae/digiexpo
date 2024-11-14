import React from 'react';


import img_1 from "../../../public/assets/img/contact/contact-icon-sm-5.png";
import img_2 from "../../../public/assets/img/contact/contact-icon-sm-6.png";
import img_3 from "../../../public/assets/img/contact/contact-icon-sm-7.png";
import img_4 from "../../../public/assets/img/contact/dubai-icon-sm.png";
import Image from 'next/image';
import Link from 'next/link';


// office location data
const office_data = [
    // {
    //     id: 1, 
    //     cls:"",
    //     img: img_1,
    //     location: "Colombia",
    //     address: <>Bogota D.C., Colombia, b. a 181 <br /> C No. 930 Ap 202</>,
    // },
    {
        id: 1, 
        cls:"p-relative",
        img: img_4,
        badge: "Main Office",
        location: "Dubai",
        address: <>Ontario Tower - Office no 1801<br />18th Floor - Business Bay</>,
    },
    // {
    //     id: 3, 
    //     cls:"",
    //     img: img_3,
    //     location: "Egypt",
    //     address: <>Av. Cordoba 1309, 3'A, City of <br /> Buenos Aires, Egypt</>,
    // },
]

const OfficeLocation = () => {
    return (
      <>
        <div className="contact-info-area pb-90 pb-sm-50">
          <div className="container">
            <div className="row justify-content-center">
              {office_data.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-4 mb-30">
                  <div className={`contact-info-item ${item.cls}`}>
                    {item.badge && (
                      <div className="contact-info-badge">
                        <span>Main Office</span>
                      </div>
                    )}
                    <div className="contact-info-img">
                      <Image src={item.img} alt="theme-pure" />
                    </div>
                    <div className="contact-info-title-box">
                      <h5 className="contact-info-title-sm">
                        <Link href="https://maps.app.goo.gl/3yY7Bj8aZ75oYWbUA">{item.location}</Link>
                      </h5>
                      <p>{item.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
};

export default OfficeLocation;