import Image from "next/image";
import Link from 'next/link'
const HeroSection = ({ text1, text2, image, imagemob, bgVariant }) => {
  const title = text1

  const text = text2


  const BG_VARIANTS = {
    empire: `
    tw-bg-[url('/assets/img/herowebp/empiredevelopment.webp')]
    md:tw-bg-[url('/assets/img/herowebp/casestudy-bg.webp')]
  `,
    kamdar: `
    tw-bg-[url('/assets/img/herowebp/kamdar.webp')]
    md:tw-bg-[url('/assets/img/herowebp/casestudy-bg.webp')]
  `,
    ocean: `
    tw-bg-[url('/assets/img/herowebp/ocean.webp')]
    md:tw-bg-[url('/assets/img/herowebp/casestudy-bg.webp')]
  `,
    saami: `
    tw-bg-[url('/assets/img/herowebp/saami.webp')]
    md:tw-bg-[url('/assets/img/herowebp/casestudy-bg.webp')]
  `,

    // add more variants here
  };
  return (
    <div
      className={`tw-h-screen md:tw-h-screen md:tw-rounded-bl-[80px]  md:tw-rounded-br-[80px] tw-w-full tw-bg-cover tw-bg-center tw-flex tw-flex-col lg:tw-flex-row tw-items-center md:tw-pt-20 tw-justify-center         ${BG_VARIANTS[bgVariant]}
    tw-bg-cover tw-bg-center tw-relative`}

    >
      {/* Inner content */}
      <div className=" lg:tw-w-1/2   lg:tw-h-full tw-flex tw-flex-col lg:tw-pl-24 tw-justify-center tw-mb-10 md:tw-py-0 tw-px-4">
        <h1 className="tw-text-white tw-text-center  md:tw-text-start tw-text-3xl md:tw-text-5xl tw-font-bold ">
          {title}
        </h1>
        <p className="tw-text-white tw-text-center md:tw-text-start tw-text-xs md:tw-text-base  ">{text}</p>

        {/* <div className="tw-flex tw-gap-4">
          <Link
            href="/casestudies"
            style={{ whiteSpace: 'nowrap' }}
            className="tw-inline-block tw-bg-white   md:tw-mt-8 tw-text-black tw-px-8 tw-py-2 tw-rounded-full tw-font-medium hover:tw-opacity-90 tw-transition"
          >
            Learn More
          </Link>

          <Link
            style={{ whiteSpace: 'nowrap' }}
            href="/contact"
            className="tw-inline-block  md:tw-mt-8 tw-bg-[#803DFF] tw-text-white tw-px-8 tw-py-2 tw-rounded-full tw-font-medium hover:tw-opacity-90 tw-transition"
          >
            Contact Us
          </Link>
        </div> */}
      </div>

      {/* Hero image */}
      <div className="tw-flex tw-h-[35%] tw-w-full  lg:tw-h-full tw-items-end  tw-justify-end lg:tw-w-1/2 tw-translate-x-[10%]">

        <div className="  tw-h-full  tw-hidden md:tw-block  tw-relative tw-w-full" > <Image
          src={image}
          fill
          className="tw-object-cover  "
        // alt="Hero Visual"
        />


          {/* <div className="tw-absolute tw-h-full tw-right-0 tw-w-[60%] tw-blur-xl tw-bg-[linear-gradient(180deg,rgba(255,255,255,0)_65.78%,#FFFFFF_100%),linear-gradient(90deg,rgba(255,255,255,0)_62.72%,#FFFFFF_84.98%)]  tw-z-20" ></div> */}
          {/* <div className="tw-absolute tw-h-[30%] tw-bottom-0 tw-right-0 tw-w-full tw-blur-xl tw-bg-[linear-gradient(180deg,rgba(255,255,255,0)_65.78%,#FFFFFF_100%),linear-gradient(90deg,rgba(255,255,255,0)_62.72%,#FFFFFF_84.98%)]  tw-z-20" ></div> */}

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
