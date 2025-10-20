import React from "react";

const WhyTrustSection = () => {
  return (
    <section className="tw-relative tw-flex tw-flex-col tw-items-center tw-justify-center tw-my-4 tw-py-24 tw-bg-white tw-overflow-hidden">
      {/* Floating badges */}
      <div className="tw-hidden md:tw-block tw-absolute tw-top-10 tw-left-[20%] tw-bg-gray-50 tw-px-6 tw-py-2 tw-rounded-full tw-shadow-sm tw-text-sm tw-font-bold tw-text-gray-900">
        Expert Professionals
      </div>
      <div className="tw-hidden md:tw-block tw-absolute tw-top-10 tw-right-[20%] tw-bg-gray-50 tw-px-6 tw-py-2 tw-rounded-full tw-shadow-sm tw-text-sm tw-font-semibold tw-text-gray-900">
        Creative and Technical Balance
      </div>
      <div className="tw-hidden md:tw-block tw-absolute tw-top-1/3 tw-left-0 lg:tw-left-[10%] tw-bg-gray-50 tw-px-6 tw-py-2 tw-rounded-full tw-shadow-sm tw-text-sm tw-font-semibold tw-text-gray-900">
        Transparent Communication
      </div>
      <div className="tw-hidden md:tw-block tw-absolute tw-bottom-28 tw-left-[5%] lg:tw-left-[15%] tw-bg-gray-50 tw-px-6 tw-py-2 tw-rounded-full tw-shadow-sm tw-text-sm tw-font-semibold tw-text-gray-900">
        Data-Driven Results
      </div>
      <div className="tw-hidden md:tw-block tw-absolute tw-top-1/3 tw-right-0 lg:tw-right-[10%] tw-bg-gray-50 tw-px-6 tw-py-2 tw-rounded-full tw-shadow-sm tw-text-sm tw-font-semibold tw-text-gray-900">
        Transparent Communication
      </div>
      <div className="tw-hidden md:tw-block tw-absolute tw-bottom-28 tw-right-[5%] lg:tw-right-[20%] tw-bg-gray-50 tw-px-6 tw-py-2 tw-rounded-full tw-shadow-sm tw-text-sm tw-font-semibold tw-text-gray-900">
        Proven Success Stories
      </div>

      {/* Center Content */}
      <div className="tw-relative tw-z-10 tw-text-center">
        <h2 className="tw-text-4xl md:tw-text-5xl tw-font-semibold tw-leading-tight tw-text-gray-900">
          Why Brands <br />
          Trust <span className="tw-text-transparent tw-bg-clip-text tw-bg-[#803DFF]">DigiExpo</span>
        </h2>
        <button className="tw-hidden md:tw-inline-block  tw-mt-8 tw-bg-[#803DFF] tw-text-white tw-px-8 tw-py-2 tw-rounded-full tw-font-medium hover:tw-opacity-90 tw-transition">
          Let’s Work Together
        </button>

        {/* Mobile badges */}
        <div className="tw-block tw-mt-4 md:tw-hidden tw-bg-gray-50 tw-px-6 tw-py-2 tw-rounded-full tw-shadow-sm tw-text-sm tw-font-bold tw-text-gray-900">
          Expert Professionals
        </div>
        <div className="tw-block tw-mt-4 md:tw-hidden tw-bg-gray-50 tw-px-6 tw-py-2 tw-rounded-full tw-shadow-sm tw-text-sm tw-font-semibold tw-text-gray-900">
          Creative and Technical Balance
        </div>
        <div className="tw-block tw-mt-4 md:tw-hidden tw-bg-gray-50 tw-px-6 tw-py-2 tw-rounded-full tw-shadow-sm tw-text-sm tw-font-semibold tw-text-gray-900">
          Transparent Communication
        </div>
        <div className="tw-block tw-mt-4 md:tw-hidden tw-bg-gray-50 tw-px-6 tw-py-2 tw-rounded-full tw-shadow-sm tw-text-sm tw-font-semibold tw-text-gray-900">
          Data-Driven Results
        </div>
        <div className="tw-block tw-mt-4 md:tw-hidden tw-bg-gray-50 tw-px-6 tw-py-2 tw-rounded-full tw-shadow-sm tw-text-sm tw-font-semibold tw-text-gray-900">
          Transparent Communication
        </div>
        <div className="tw-block tw-mt-4 md:tw-hidden tw-bg-gray-50 tw-px-6 tw-py-2 tw-rounded-full tw-shadow-sm tw-text-sm tw-font-semibold tw-text-gray-900">
          Proven Success Stories
        </div>
        <div className="md:tw-hidden tw-flex  tw-w-full tw-items-center tw-justify-center ">
        <button className=" tw-mt-8 tw-bg-[#803DFF] tw-text-white tw-px-8 tw-py-2 tw-rounded-full tw-font-medium hover:tw-opacity-90 tw-transition">
          Let’s Work Together
        </button>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustSection;
