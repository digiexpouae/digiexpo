import { urlForImage } from "@/sanityConfig";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from './blogCard.module.scss'
const BlogCard = ({ title, mainImage, slug, date }) => {
  const mapper = Object.freeze({
    bannerImg: mainImage,
    slugUrl: slug,
    createdAt: date,
  });

  const { createdAt, bannerImg, slugUrl } = mapper;
 return (
    <div className="col-xl-4 col-lg-6 col-md-6 mb-30 grid-item cat1 cat4 cat3 cat5">
      <div className={styles['tp-blog-item']}>
        <div
          className={`${styles['tp-blog-thumb']} fix w-full`}
          style={{ aspectRatio: '4/2' }}
        >
          <Link href={`/blogs/${slugUrl}`}>
            <Image
              src={urlForImage(bannerImg).url()}
              width={500}
              height={250}
              className="object-cover !w-full !h-full"
              alt="theme-pure"
            />
          </Link>
        </div>
        <div className={styles['tp-blog-content']}>
          <div className={`${styles['tp-blog-meta']} d-flex align-items-center`}>
            <div className={styles['tp-blog-date']}>
              <span>{createdAt}</span>
            </div>
          </div>
          <div className={styles['tp-blog-title-box']}>
            <Link
              className={styles['tp-blog-title-sm']}
              href={`/blogs/${slugUrl}`}
            >
              {title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BlogCard;
