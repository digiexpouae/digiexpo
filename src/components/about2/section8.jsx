import Image from "next/image";

const Section8 = () => {
  return (
    <div className="tw-w-full tw-flex tw-flex-col tw-items-center tw-px-14 tw-justify-center tw-gap-4 md:tw-gap-0 md:tw-flex-row tw-py-10 tw-max-w-5xl tw-mx-auto">

      <h2 className="tw-text-4xl tw-text-center tw-font-bold tw-w-full md:tw-w-[40%]">
        Hear from <br /> Our Clients
      </h2>

      <div className="tw-w-full md:tw-w-[40%] tw-h-[250px] tw-relative">
        <Image
          src={'/assets/img/about2/ab-4.jpg'}
          fill
          className="tw-rounded-2xl tw-object-cover"
        />
      </div>
    </div>
  );
};

export default Section8;
