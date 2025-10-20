import React from "react";

const Section4 = () => {
  const milestones = [
    { year: "2016", text: "DigiExpo founded with a vision for creative digital growth." },
    { year: "2018", text: "Expanded into a full-service digital agency." },
    { year: "2020", text: "Reached 100+ successful client projects." },
    { year: "2022", text: "Recognized as one of the top agencies in the UAE." },
    { year: "2024", text: "Introduced AI-powered digital solutions for better performance." },
  ];

  return (
    <div className="tw-flex tw-flex-col tw-gap-10 tw-py-20 tw-max-w-7xl tw-mx-auto tw-items-center">
      <h2 className="tw-text-3xl md:tw-text-5xl  tw-font-semibold tw-text-center">
        Our Journey So Far
      </h2>

      <div className="tw-flex tw-flex-wrap tw-items-center tw-px-4 tw-justify-center tw-gap-4  m:dtw-gap-8">
        {milestones.map((item, index) => (
          <div
            key={index}
            className="tw-bg-[#F7F9FB] tw-flex tw-flex-col tw-justify-between tw-gap-1 md:tw-gap-3 tw-px-4 tw-py-6 tw-rounded-2xl tw-w-36  tw-h-36 md:tw-w-44 md:tw-h-48 tw-shadow-md hover:tw-shadow-lg tw-transition-all"
          >
            <p className="tw-text-3xl tw-text-black tw-font-bold">{item.year}</p>
            <span className="tw-text-black tw-leading-tight tw-text-xs ">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
