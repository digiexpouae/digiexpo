import React from 'react';
import Image from 'next/image';
import brand_img from "../../../public/assets/img/blog/blog-details-1.jpg";
import styles from '../blog/blogCard.module.scss'

const Banner = ({imgUrl}) => {
    return (
      <>
        <div className={`${styles['blog-details-img-area']} mb-80`}>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className={`${styles['blog-details-big-img']}  z-index-2`}>
                  <Image
                    src={imgUrl ?? brand_img}
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{ width: "80%", height: "auto" }} 
                    alt='theme-pure'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Banner;