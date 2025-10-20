import Image from "next/image";
import Link from 'next/link'
const HeroSection = () => {
  const title = (
    <>
      Empowering Digital Growth <br /> Through Innovation and Design
    </>
  );

  const text =
    "We help brands grow with smart strategies, creative design, and result-driven technology.";

  return (
    <div
      className="tw-h-[100vh] md:tw-rounded-bl-[80px] md:tw-rounded-br-[80px] tw-w-full tw-bg-cover tw-bg-center tw-flex tw-flex-col tw-items-center tw-justify-between md:tw-justify-center tw-relative"
      style={{ backgroundImage: "url('/assets/img/about2/ab-2.png')" }}
    >
      {/* Inner content */}
      <div className="tw-flex tw-h-[70%] md:tw-h-[60%] tw-px-2 md:tw-px-0 tw-w-full tw-flex-col  tw-items-center tw-justify-end">
        <h1 className="tw-text-black tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-center">
          {title}
        </h1>
        <p className="tw-text-center">{text}</p>

        <div className="tw-flex tw-gap-4">
  <Link
    href="/casestudies"
    className="tw-inline-block tw-bg-white   tw-mt-8 tw-text-black tw-px-8 tw-py-2 tw-rounded-full tw-font-medium hover:tw-opacity-90 tw-transition"
  >
    Our Work
  </Link>

  <Link
    href="/contact"
    className="tw-inline-block  tw-mt-8 tw-bg-[#803DFF] tw-text-white tw-px-8 tw-py-2 tw-rounded-full tw-font-medium hover:tw-opacity-90 tw-transition"
  >
    Get In Touch
  </Link>
</div>
      </div>

      {/* Hero image */}
      <div className="tw-flex tw-items-end tw-justify-center tw-[30%] md:tw-h-[40%] tw-w-full">
        <Image
          src={"/assets/img/about2/ab-1.png"}
          height={500}
          width={850}
          className="tw-object-cover"
          alt="Hero Visual"
        />
      </div>
    </div>
  );
};

export default HeroSection;
