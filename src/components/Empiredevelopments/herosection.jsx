import Image from "next/image";
import Link from 'next/link'
const HeroSection = () => {
  const title = (
    <>
  Empire <br />
Developments
    </>
  );

  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue enim, varius elementum nulla ut, accumsan tristique lacus. Donec quis dolor sed turpis finibus bibendum vel a nisl. Curabitur at diam justo. Quisque varius vestibulum quam, i'

  return (
    <div
      className="tw-h-screen md:tw-h-[90vh] md:tw-rounded-bl-[80px]  md:tw-rounded-br-[80px] tw-w-full tw-bg-cover tw-bg-center tw-flex tw-flex-col lg:tw-flex-row tw-items-center md:tw-pt-20 tw-justify-center  tw-relative"
      style={{ backgroundImage: "url('/assets/img/about2/ab-2.png')" }}
    >
      {/* Inner content */}
      <div className=" lg:tw-w-1/2   lg:tw-h-full tw-flex tw-flex-col lg:tw-pl-24 tw-justify-center tw-pt-10 md:tw-py-0 tw-px-12">
        <h1 className="tw-text-black tw-text-3xl md:tw-text-5xl tw-font-bold ">
          {title}
        </h1>
        <p className="">{text}</p>

        <div className="tw-flex tw-gap-4">
  <Link
    href="/casestudies"
    style={{whiteSpace:'nowrap'}}
    className="tw-inline-block tw-bg-white   md:tw-mt-8 tw-text-black tw-px-8 tw-py-2 tw-rounded-full tw-font-medium hover:tw-opacity-90 tw-transition"
  >
  Learn More
  </Link>

  <Link
   style={{whiteSpace:'nowrap'}}
    href="/contact"
    className="tw-inline-block  md:tw-mt-8 tw-bg-[#803DFF] tw-text-white tw-px-8 tw-py-2 tw-rounded-full tw-font-medium hover:tw-opacity-90 tw-transition"
  >
    Contact Us
  </Link>
</div>
      </div>

      {/* Hero image */}
      <div className="tw-flex tw-h-[35%] tw-w-full  lg:tw-h-full tw-items-end  tw-justify-end lg:tw-w-1/2 tw-translate-x-[10%]">
      
      <div className="  tw-h-[80%] tw-relative tw-w-full" > <Image
          src={"/assets/img/casestudies/cs-7.png"}
         fill
          className="tw-object-cover tw-rounded-2xl "
          alt="Hero Visual"
        />
        <div className="tw-absolute tw-h-full tw-right-0 tw-w-[60%] tw-blur-xl tw-bg-[linear-gradient(180deg,rgba(255,255,255,0)_65.78%,#FFFFFF_100%),linear-gradient(90deg,rgba(255,255,255,0)_62.72%,#FFFFFF_84.98%)]  tw-z-20" ></div>
        <div className="tw-absolute tw-h-[30%] tw-bottom-0 tw-right-0 tw-w-full tw-blur-xl tw-bg-[linear-gradient(180deg,rgba(255,255,255,0)_65.78%,#FFFFFF_100%),linear-gradient(90deg,rgba(255,255,255,0)_62.72%,#FFFFFF_84.98%)]  tw-z-20" ></div>

        </div> 
      </div>
    </div>
  );
};

export default HeroSection;
