import { urlForImage } from "@/sanityConfig";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ title, mainImage, slug, date }) => {
  const mapper = Object.freeze({
    bannerImg: mainImage,
    slugUrl: slug,
    createdAt: date,
  });

  const { createdAt, bannerImg, slugUrl } = mapper;
  return (
    <div className='col-xl-4 col-lg-6 col-md-6 mb-30 grid-item cat1 cat4 cat3 cat5'>
      <div className='tp-blog-item' > 
        <div className='tp-blog-thumb fix w-full' style={{aspectRatio:'4/2'}}>
          <Link href={`/blogs/${slugUrl}`}>
            <Image src={urlForImage(bannerImg).url()} width={500} height={250}   className="object-cover  !w-full !h-full" alt='theme-pure' />
          </Link>
        </div>
        <div className='tp-blog-content'>
          <div className='tp-blog-meta d-flex align-items-center'>
            {/* <div className='tp-blog-category category-color-1'>
              <span>{item.category}</span>
            </div> */}
            <div className='tp-blog-date'>
              <span>{createdAt}</span>
            </div>
          </div>
          <div className='tp-blog-title-box'>
            <Link className='tp-blog-title-sm' href={`/blogs/${slugUrl}`}>
              {title}
            </Link>
          </div>
          {/* <div className='tp-blog-author-info-box d-flex align-items-center'>
            <div className='tp-blog-avata'>
              <Image src={item.avata_img} alt='theme-pure' />
            </div>
            <div className='tp-blog-author-info'>
              <h5>{item.name}</h5>
              <span>{item.job_title}</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
