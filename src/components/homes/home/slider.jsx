import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image'
const TestimonialsSlider = () => {
  const testimonials = [
    {
      name: "John Doe",
      title: "CEO of Empire Developments",
      img: "/assets/img/client/client.jpg", // Replace with your actual image
    },
    {
      name: "John Doe",
      title: "CEO of Empire Developments",
      img: "/assets/img/client/client.jpg", // Replace with your actual image
    },
    {
      name: "John Doe",
      title: "CEO of Empire Developments",
      img: "/assets/img/client/client.jpg", // Replace with your actual image
    },
    {
      name: "John Doe",
      title: "CEO of Empire Developments",
      img: "/assets/img/client/client.jpg", // Replace with your actual image
    },
     {
      name: "John Doe",
      title: "CEO of Empire Developments",
      img: "/assets/img/client/client.jpg", // Replace with your actual image
    },
  ];

  return (
    <section className="tw-h-[80%]  tw-w-full">
      <div className="tw-relative">
                  <div className="tw-absolute  tw-left-0  tw-blur-[25px]   tw-h-full tw-w-[10%]  tw-z-[5]" style={{background: 'linear-gradient(270deg, rgba(102, 23, 229, 0) 0%, #6617E5 100%)'
}}></div>
                  <div className=" tw-absolute tw-shadow tw--right-10   tw-blur-[25px]  tw-h-full tw-w-[10%]  tw-z-[5] " style={{background: 'linear-gradient(270deg, rgba(102, 23, 229, 0) 0%, #6617E5 100%)',
}}></div>

        <Swiper
  
          spaceBetween={50}
          slidesPerView={4.5}
        //   navigation
        loop={true}
          breakpoints={{
            320: { slidesPerView: 1.5,spaceBetween: 10 },
            640: { slidesPerView: 3,spaceBetween: 20 },
            1024: { slidesPerView: 4,spaceBetween: 10 },
          }}
          className="tw-py-8 tw-w-full tw-h-full "
        >
          <div style={{background: 'linear-gradient(270deg, rgba(102, 23, 229, 0) 0%, #6617E5 100%)'}} className="tw-absolute tw-left-0 tw-h-full w-[20%] z-[999]"></div>
          {testimonials.map((person, index) => (
            <SwiperSlide key={index}>
              <div className="tw-bg-white tw-p-2 tw-w-[250px]  md:tw-w-full tw-rounded-xl tw-overflow-hidden tw-shadow-lg tw-transition-transform tw-duration-300 tw-ease-in-out md:hover:tw-scale-105">
                <div className="tw-relative tw-rounded-xl tw-overflow-hidden tw-h-[250px] md:tw-h-[400px]">
                  <Image
                    src={person.img}
                    alt={person.name}
                    width={350}
                    height={500}
                    className="tw-w-full tw-rounded-xl tw-h-full  tw-object-cover"
                  />
                  <div className="tw-absolute tw-inset-0 tw-bg-[#00000099] rounded-2xl tw-flex tw-items-center tw-justify-center">
                    <button className="tw-bg-white tw-rounded-full tw-p-4 tw-shadow-md hover:tw-scale-110 tw-transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="tw-w-6 tw-h-6 tw-text-gray-900"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 5.25v13.5l13.5-6.75L5.25 5.25z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className=" tw-text-left tw-p-2">
                  <h3 className="tw-font-semibold tw-text-lg tw-m-0 tw-text-gray-900">
                    {person.name}
                  </h3>
                  <p className="tw-text-sm tw-text-gray-500 tw-m-0">{person.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
