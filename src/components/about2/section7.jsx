import React from "react";
import Image from "next/image";

const HowWeMakeItHappen = () => {
  const steps = [
    {
      title: "Discovery",
      text: "Understanding your goals and needs.",
    },
    {
      title: "Strategy",
      text: "Planning a roadmap for success.",
    },
    {
      title: "Design & Development",
      text: "Creating impactful solutions.",
    },
    {
      title: "Testing",
      text: "Ensuring quality and performance.",
    },
    {
      title: "Launch & Support",
      text: "Delivering growth and long-term success.",
    },
  ];

  return (
    <section className="tw-w-full tw-flex tw-justify-center tw-py-20 tw-px-6">
      <div className="tw-w-full md:tw-w-11/12 lg:tw-w-4/5 tw-rounded-2xl">
        {/* Inner content with subtle card effect */}
        <div
          className="tw-rounded-2xl tw-p-8 lg:tw-p-14 xl:tw-p-20 tw-text-white tw-bg-cover tw-bg-center"
          style={{ backgroundImage: 'url(/assets/img/about2/ab-7.png)' }}
        >
          <h2 className="tw-text-3xl md:tw-text-4xl tw-text-white tw-font-semibold tw-mb-10">
            How We Make It Happen
          </h2>

          <div className="tw-grid tw-grid-cols-1 tw-relative tw-flex tw-flex-wrap md:tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-14">
            {steps.map((item, index) => (
              <div key={index} className="tw-flex tw-flex-col tw-justify-center tw-relative">
                <div className="tw-absolute tw-left-0 tw-h-20 tw-w-20">
                  <Image
                    src={'/assets/img/about2/Gradient.svg'}
                    fill
                    className="tw-object-cover"
                  />
                </div>

                <h3 className="tw-text-lg tw-pl-4 tw-text-white tw-m-0   tw-font-semibold">{item.title}</h3>
                <p className="tw-text-xs tw-pl-4 tw-text-white tw-opacity-90" style={{whiteSpace:'nowrap'}}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeMakeItHappen;
