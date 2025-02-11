import blog_data from "@/data/blog-data";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
const blog_content = {
  sub_title: "Get Tips, Trends, and Insights from Our Digital Marketing Blogs",
  title: "Our Digital Marketing Digest",
};
const { sub_title, title } = blog_content;

const BlogArea = () => {

  return (
    <>
      <div className='tp-blog-area pb-90 pb-sm-50'>
        <div className='container'>
          <div className='row align-items-end tp-blog-four-section-space'>
            <div className='col-xl-6 col-lg-6'>
              <div className='tp-blog-four-section-box'>
                <h3 className='tp-section-title-4 text-purple'>{title}</h3>
                <h4 className='tp-section-subtitle-4 pt-10 text-purple'>
                  {sub_title}
                </h4>
              </div>
            </div>
            {/* <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-blog-four-btn text-start text-lg-end">
                <Link
                  className="tp-btn tp-btn-hover alt-color-black"
                  href="/blog-details"
                >
                  <span>View All</span>
                  <b></b>
                </Link>
              </div>
            </div> */}
          </div>
          <div className='row'>
            <div
              className='col-xl-6 col-lg-6 col-md-6 mb-40 wow tpfadeUp'
              data-wow-duration='.9s'
              data-wow-delay='.7s'
            >
              <div className='tp-blog-four-item p-relative fix'>
                <div className='tp-blog-four-img fix' >
                  <Link href='/blogs/how-to-dominate-the-uae-market-with-effective-social-media-strategies'>
                
                    <video autoPlay muted loop playsInline width="570px">
                      <source src="/assets/img/hero/herosection.mp4" type="video/mp4" />
                    </video>
                  {/* {Blogvideo && <video autoPlay muted loop playsInline width='570px'>
                  //     <source
                  // src='/assets/img/hero/herosection.mp4'                        
                  // type='video/mp4'
                  //     /> */}
                      {/* <source
                        src='/assets/img/hero/hero-video.mov'
                        type='video/quicktime'
                      /> */}
                    {/* </video>} */}
                    {/* <iframe src="https://player.vimeo.com/video/1051407991?h=2a87efaafb&autoplay=1&muted=1&loop=1&background=1" 
        width="640" height="360" frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
        allowfullscreen title="hero-video compress">
</iframe> */}
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/MqffbpjhriQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

                  </Link>
                </div>
                <div className='tp-blog-four-content-wrapper'>
                  <div className='tp-blog-four-meta'>
                    <span className='child-1'>Social Media Marketing</span>
                    {/* <span className="child-2">{item.date}</span> */}
                  </div>
                  <div className='tp-blog-four-info'>
                    <h4 className='tp-blog-four-title-sm'>
                      <Link href='/blogs/how-to-dominate-the-uae-market-with-effective-social-media-strategies'>
                        How to Dominate the UAE Market with Effective Social
                        Media Strategies
                      </Link>
                    </h4>
                    <p>
                      The United Arab Emirates (UAE) is a fast-developing market
                      with great potential. It is a well-organized country with
                      people of different origins and one of the developed
                      economies.
                    </p>
                  </div>
                  <div className='tp-blog-four-btn'>
                    <Link
                      className='tp-btn-yellow-lg'
                      href='/blogs/how-to-dominate-the-uae-market-with-effective-social-media-strategies'
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='col-xl-6 col-lg-6 col-md-6 mb-40 wow tpfadeUp'
              data-wow-duration='.9s'
              data-wow-delay='.7s'
            >
              <div className='tp-blog-four-item p-relative fix'>
                <div className='tp-blog-four-img fix' >
                  <Link href='/blogs/boost-your-roi-proven-digital-marketing-tactics-for-uae-businesses'>
                 
                    // Load Video Only After Scroll
                    <video autoPlay muted loop playsInline width="570px">
                      <source src="/assets/img/hero/herosection.mp4" type="video/mp4" />
                    </video>
                    {/* {Blogvideo && <video autoPlay muted loop playsInline width='570px'>
                      <source
                  src='/assets/img/hero/herosection.mp4'                        
                  type='video/mp4'
                      /> </video>} */}
                      {/* <source
                        src='/assets/img/hero/hero-video.mov'
                        type='video/quicktime'
                      /> */}
                   
                    {/* <iframe src="https://player.vimeo.com/video/1051407991?h=2a87efaafb&autoplay=1&muted=1&loop=1&background=1" 
        width="640" height="360" frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
        allowfullscreen title="hero-video compress">
</iframe> */}
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/MqffbpjhriQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

                  </Link>
                </div>
                <div className='tp-blog-four-content-wrapper'>
                  <div className='tp-blog-four-meta'>
                    <span className='child-1'>Digital Marketing</span>
                    {/* <span className="child-2">{item.date}</span> */}
                  </div>
                  <div className='tp-blog-four-info'>
                    <h4 className='tp-blog-four-title-sm'>
                      <Link href='/blogs/boost-your-roi-proven-digital-marketing-tactics-for-uae-businesses'>
                        Boost Your ROI: Proven Digital Marketing Tactics for UAE
                        Businesses
                      </Link>
                    </h4>
                    <p>
                      With increased competition in today’s market, especially
                      in the UAE. It has become essential for business
                      practitioners to partner with the best digital marketing
                      agency in UAE.
                    </p>
                  </div>
                  <div className='tp-blog-four-btn'>
                    <Link
                      className='tp-btn-yellow-lg'
                      href='/blogs/boost-your-roi-proven-digital-marketing-tactics-for-uae-businesses'
                    >
                      Read More
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

export default BlogArea;
