import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/assets/img/casestudies/cs-6.png",
  "/assets/img/casestudies/cs-3.png",
  "/assets/img/casestudies/cs-1.png",
  "/assets/img/casestudies/cs-4.png",
  "/assets/img/casestudies/cs-5.png",
];


const imagestwo = [
  "/assets/img/casestudies/cs-6.png",
  "/assets/img/casestudies/cs-3.png",
  "/assets/img/casestudies/cs-9.png",
  "/assets/img/casestudies/cs-4.png",
  "/assets/img/casestudies/cs-5.png",
];
const imageHeights = {
  0: "tw-h-52 md:tw-h-72   ", // same as first desktop image
  1: "tw-h-56 md:tw-h-80  ",
  2: "tw-h-64 md:tw-h-96  ",
  3: "tw-h-56 md:tw-h-80  ",
  4: "tw-h-52 md:tw-h-72 ",
};
const Section2 = () => {
  return (
    <>
      {/* Desktop Layout */}
      <div className="tw-hidden lg:tw-flex tw-items-center tw-max-w-5xl tw-mx-auto tw-justify-center">
        <div className="tw-flex tw-items-center tw-justify-center tw-relative tw-max-w-5xl">
          <div className="tw-relative tw-transition-transform tw-duration-500 hover:tw-scale-110 tw-z-[14] tw-translate-x-8">
            <div className="tw-h-56 tw-w-52 tw-relative">
              <Image
                src={images[0]}
                fill
                className="tw-object-cover tw-rounded-2xl tw-bg-center"
              />
            </div>
          </div>
          <div className="tw-relative tw-transition-transform tw-duration-500 hover:tw-scale-110 tw-translate-x-4 tw-z-[20]">
            <div className="tw-h-72 tw-w-52 tw-relative">
              <Image
                src={images[1]}
                fill
                className="tw-object-cover tw-bg-center tw-rounded-2xl"
              />
            </div>
          </div>
          <div className="tw-relative tw-transition-transform tw-duration-500 hover:tw-scale-110 tw-z-[42]">
            <div className="tw-h-80 tw-w-64 tw-relative">
              <Image
                src={images[2]}
                fill
                className="tw-object-cover tw-rounded-2xl tw-bg-center"
              />
            </div>
          </div>
          <div className="tw-relative tw-transition-transform tw-duration-500 hover:tw-scale-110 tw-z-[18] tw--translate-x-8">
            <div className="tw-h-72 tw-w-52 tw-relative">
              <Image
                src={images[3]}
                fill
                className="tw-object-cover tw-bg-center tw-rounded-2xl"
              />
            </div>
          </div>
          <div className="tw-relative tw-transition-transform tw-duration-500 hover:tw-scale-110 tw-z-[14] tw--translate-x-12">
            <div className="tw-h-56 tw-w-52 tw-relative">
              <Image
                src={images[4]}
                fill
                className="tw-object-cover tw-rounded-2xl tw-bg-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="tw-flex lg:tw-hidden  md:tw-translate-y-10 tw-w-full tw-h-full ">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={4}
          slidesPerView={2}         // 1.2-1.4 is nice on phones
          // centeredSlides={true}
          loop={false}
          // pagination={{ clickable: true }}
          // observer={true}             // help Swiper recalc when mount/layout changes
          // observeParents={true}
          className="tw-w-full tw-h-full"
        >
          {imagestwo.map((elem, index) => (
            <SwiperSlide
              key={index}
              className="tw-flex tw-items-center gap-4 tw-justify-center"
            >
              {/* parent must have explicit height for Image fill */}
              <div
          className={`tw-relative ${imageHeights[index] || "tw-h-72"} tw-w-full tw-rounded-2xl `}
        >
                <Image
                  src={elem}
                  alt={`Case study ${index + 1}`}
                    fill
                  className={`tw-object-cover tw-rounded-2xl tw-object-center     `}
                  style={{
                    border: index === 2 ? "4px solid black" : "none",
                  }}
             
             />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop: keep your existing stacked layout (hidden on mobile)
          Put your original md:flex content here (unchanged) */}
        {/* ...your desktop stacked images... */}
  

    </>
  );
};

export default Section2;
