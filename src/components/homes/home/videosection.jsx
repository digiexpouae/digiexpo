const VideoSection = () => {
    return (
        <>
            <div className='tp-hero__bottom z-index-5 tw-mt-10  md:tw-mb-0 md:tw-mt-24'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-xl-10'>
                            <div className='tp-hero__thumb-wrapper-main p-relative'>
                                {/* {hero_shape_img.map((item, i) => (
                    <div
                      key={i}
                      className={`tp-hero__shape-img-${item.cls} d-none d-xl-block`}
                    >
                      <Image
                        src={item.img}
                        alt='decorative shape'
                        width={120}
                        height={150}
                        quality={85}
                        loading="lazy"
                        className="object-contain"
                      />
                    </div>
                  ))} */}

                                <div>
                                    <div className='tp-hero__thumb-wrapper p-relative'>
                                        <div className='row'>


                                            <video
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                preload="metadata"
                                                poster="/assets/img/herowebp/poster.webp"
                                                className="w-full h-[600px] object-cover"
                                                aria-hidden="true"
                                                disablePictureInPicture
                                                id="hero-video"
                                            >
                                                <source src="/assets/img/hero/hero-video.webm" type="video/webm" />
                                                <source src="/assets/img/hero/herosection.mp4" type="video/mp4" />
                                            </video>





                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default VideoSection