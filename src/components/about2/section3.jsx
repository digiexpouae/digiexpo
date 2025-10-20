const Section3 = () => {
  // Data array to map over
  const items = [
    { title: "Innovation", text: "We believe in creative ideas that create real impact." },
    { title: "Integrity", text: "We deliver what we promise." },
    { title: "Collaboration", text: "We grow together with our clients." },
    { title: "Growth", text: "We continuously learn and evolve." },
    { title: "Results-Oriented", text: "Every action leads to measurable outcomes." },
    { title: "Passion", text: "We care deeply about every project." },
  ];

  return (
    <div
      className="tw-w-full tw-py-20 tw-bg-center tw-bg-cover tw-flex tw-flex-col tw-justify-center"
      style={{ backgroundImage: 'url(/assets/img/about2/ab-sv.svg)' }}
    >
      <div className="tw-px-2 md:tw-px-8 tw-max-w-4xl tw-flex tw-flex-col">
        <h2 className="tw-text-4xl tw-pl-6 tw-font-bold tw-text-white tw-mb-12">
          What We Stand For
        </h2>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="tw-flex tw-flex-col tw-text-white tw-px-4 tw-py-2 tw-rounded-2xl tw-backdrop-blur-sm hover:tw-bg-black/60 tw-transition"
            >
              <h2 className="tw-text-2xl tw-text-white tw-font-semibold tw-mb-2">
                {item.title}
              </h2>
              <p className="tw-text-base tw-text-white">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
