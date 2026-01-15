import useTitleAnimation from '@/hooks/useTitleAnimation';
import Brwoser from '@/common/brwoser';
import BounceLine from '@/svg/bounce-line';
const VideoSection = () => {
    return (
        <div className='tw-relative tw-w-full  tw-mx-auto tw-mt-24 mb-10'>
            <div className="tp-hero-browser-wrapper d-flex align-items-center justify-content-center wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                <Brwoser />
            </div>
            <div className="tp-hero-3-wrapper  d-flex d-flex-col align-items-center justify-content-center p-relative">
                <div className="tp-hero-3-border-wrap d-none d-md-block">
                    <span className="redius-shape-1"></span>
                    <span className="redius-shape-2"></span>
                    <span className="redius-shape-3"></span>
                </div>
                <div className="tp-hero-3-main-thumb z-index-5">
                    {/* <Image src={img_1} alt="them-pure" /> */}
                    <video autoPlay muted loop width="">
                        <source
                            src="/assets/img/hero/web-banner.webm"
                            type="video/webm"
                        />
                    </video>
                </div>
                {/* <div className="tp-hero-3-shape-5 d-none d-lg-block wow frist-img animated">
                           <Image src={img_2} alt="them-pure" />
                        </div> */}
                <div className="tp-hero-3-shape-6 d-none d-lg-block">
                    <span> <BounceLine /> </span>
                </div>
            </div>
        </div>
    )
}
export default VideoSection