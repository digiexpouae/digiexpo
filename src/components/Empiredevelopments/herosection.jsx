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
      className="tw-h-[100vh] md:tw-rounded-bl-[80px]  md:tw-rounded-br-[80px] tw-w-full tw-bg-cover tw-bg-center tw-flex tw-flex-col md:tw-flex-row tw-items-center md:tw-pt-20 tw-justify-center  tw-relative"
      style={{ backgroundImage: "url('/assets/img/about2/ab-2.png')" }}
    >
      {/* Inner content */}
      <div className=" md:tw-w-1/2   md:tw-h-full tw-flex tw-flex-col  tw-justify-center tw-pt-12 md:tw-py-0 tw-px-12">
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
      <div className="tw-flex tw-h-[35%]  md:tw-h-full tw-items-end md:tw-items-center tw-justify-end md:tw-justify-center md:tw-w-1/2 tw-translate-x-[10%]">
      
      <div> <Image
          src={"/assets/img/casestudies/cs-7.png"}
          height={500}
          width={850}
          className="tw-object-cover tw-rounded-2xl "
          alt="Hero Visual"
        /></div> 
      </div>
    </div>
  );
};

export default HeroSection;
