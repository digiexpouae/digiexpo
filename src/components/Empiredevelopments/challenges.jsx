export default function FeatureList() {
  const features = [
    {
      title: "Attractive Layout",
      description:
        "Our web designers built a customized layout design for Initiative Management Consultancy. They wanted their website to look unique and personalized so that they could stand out among their competitors.",
    },
    {
      title: "Easy-to-Use Website",
      description:
        "Initiative Management required an easy-to-use website so that their visitors would have a seamless navigation experience and would easily find any page they are looking for on the website.",
    },
    {
      title: "Adjustable Design",
      description:
        "These days, people mostly use their phones to access any site as it is convenient and simple to do. We developed a responsive website for IMC so that they could reach all of their target audience regardless of their devices.",
    },
    {
      title: "Bilingual Site",
      description:
        "We developed a bilingual website for Initiative Management Consultancy which was available in both Arabic and English to cater to a wide range of audience. This helped in adding a personalized touch to their website.",
    },
  ];

  return (
    <section className="tw-w-full tw-text-white tw-rounded-2xl tw-py-16 tw-flex  tw-flex-col tw-items-center tw-justify-center">
      <h2 className="tw-text-4xl tw-text-left tw-mb-4">Challenges We Overcame</h2>
      <div className="tw-w-[90%] tw-bg-[#803dff] tw-border tw-border-[zinc]-800 tw-rounded-2xl tw-overflow-hidden tw-divide-y tw-divide-zinc-800">
        {features.map((feature, index) => (
          <div
            key={index}
            className="tw-flex tw-flex-col md:tw-flex-row tw-gap-6 tw-items-start tw-justify-between tw-px-6 md:tw-px-10 tw-py-8 tw-transition-colors hover:tw-bg-[hsla(261.2,72.6%,22.9%,0.15)]"
          >
            {/* Left side (Title + Glow dot) */}
            <div className="tw-flex tw-items-center tw-gap-3 md:tw-w-[30%]">
              <span className="tw-w-3 tw-h-3 tw-rounded-full tw-bg-[radial-gradient(circle_at_center,hsla(283,100%,61%,1)_0%,hsla(261.2,72.6%,22.9%,1)_80%)] tw-shadow-[0_0_12px_rgba(164,76,255,0.8)]"></span>
              <h3 className="tw-text-xl tw-font-medium tw-text-white">
                {feature.title}
              </h3>
            </div>

            {/* Right side (Description) */}
            <p className="tw-text-gray-300 tw-text-base md:tw-w-[65%] tw-leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
