import Image from "next/image";
import Section2 from './section2'
const HeroSection = () => {
  const title = (
    <>
     Real Projects. Real Results.
    </>
  );

  const text =
    "Discover how DigiExpo helped brands grow through creativity, strategy, and innovation.";

  return (
    <div
      className="tw-h-[100vh] md:tw-rounded-bl-[80px] md:tw-rounded-br-[80px] tw-w-full tw-bg-cover tw-bg-center tw-flex tw-flex-col tw-items-center tw-justify-center tw-relative"
      style={{ backgroundImage: "url('/assets/img/about2/ab-2.png')" }}
    >
      {/* Inner content */}
      <div className="tw-flex  tw-h-1/2 tw-px-2 md:tw-px-0 tw-w-full tw-flex-col tw-gap-2 tw-items-center tw-justify-end">
        <h1 className="tw-text-black tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-center">
          {title}
        </h1>
        <p className="tw-text-center">{text}</p>

        <div className="tw-flex tw-gap-4 tw-mb-4">
          <button className="tw-bg-[#FFFFFF] hover:tw-bg-zinc-400 tw-font-medium tw-rounded-full tw-text-black tw-px-4 tw-py-2">
            View Our Work
          </button>
          <button className="tw-bg-[#803DFF] hover:tw-bg-purple-700 tw-font-medium tw-rounded-full tw-text-white tw-px-4 tw-py-2">
          Start Your Project
          </button>
        </div>
      </div>

      {/* Hero image */}
  {/* <div className="tw-hidden md:tw-flex tw-items-end tw-justify-center tw-h-[40%] tw-w-full">
        <Image
          src={"/assets/img/about2/ab-1.png"}
          height={500}
          width={850}
          className="tw-object-cover"
          alt="Hero Visual"
        />
      </div>     */}
<div className="md:tw-translate-y-24 tw-w-full tw-h-1/2">
      <Section2 />
      </div>
    </div>
  );
};

export default HeroSection;
