import Image from "next/image";

const tools = [
  { id: 1, tools: [
      { src: "/assets/img/payment-logo/logo-1.png", alt: "Payment Logo 1" },
      { src: "/assets/img/payment-logo/logo-2.png", alt: "Payment Logo 2" }
    ]
  },
  { id: 2, tools: [
      { src: "/assets/img/payment-logo/logo-3.png", alt: "Payment Logo 3" },
      { src: "/assets/img/payment-logo/logo-4.png", alt: "Payment Logo 4" }
    ]
  },
  { id: 3, tools: [
      { src: "/assets/img/payment-logo/logo-5.png", alt: "Payment Logo 5" },
      { src: "/assets/img/payment-logo/logo-6.png", alt: "Payment Logo 6" }
    ]
  },
  { id: 4, tools: [
      { src: "/assets/img/payment-logo/logo-7.png", alt: "Payment Logo 7" },
      { src: "/assets/img/payment-logo/logo-8.png", alt: "Payment Logo 8" }
    ]
  },
  { id: 5, tools: [
      { src: "/assets/img/payment-logo/logo-9.png", alt: "Payment Logo 9" },
      { src: "/assets/img/payment-logo/logo-10.png", alt: "Payment Logo 10" }
    ]
  },
  { id: 6, tools: [
      { src: "/assets/img/payment-logo/logo-11.png", alt: "Payment Logo 11" },
      { src: "/assets/img/payment-logo/logo-12.png", alt: "Payment Logo 12" }
    ]
  },
  { id: 7, tools: [
      { src: "/assets/img/payment-logo/logo-13.png", alt: "Payment Logo 13" },
      { src: "/assets/img/payment-logo/logo-14.png", alt: "Payment Logo 14" }
    ]
  },
];

const ToolsSection = () => {
  return (
    <section className="tw-bg-[#F4EFFF] tw-py-20 tw-w-full tw-px-2 md:tw-px-0">
      <div className="tw-max-w-4xl tw-mx-auto tw-text-center">
        <h2 className="tw-text-2xl md:tw-text-4xl tw-font-semibold tw-mb-16">
          Tools & Technologies Used
        </h2>

        {/* Tools Grid */}
        <div className="tw-grid tw-grid-cols-4 md:tw-grid-cols-7 tw-justify-items-center ">
          {tools.map((pair, index) => {
            // Calculate translation for wave effect
            const translate = index % 2 === 0 ? `tw-mb-4 md:tw-mb-0 tw-translate-y-100` : "tw-mb-4 md:tw-mb-0 -tw-translate-y-10";
            return (
              <div
                key={pair.id}
                className={`tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2 ${translate}`}
              >
                {pair.tools.map((tool, i) => (
                  <div
                    key={i}
                    className={`tw-w-20 tw-h-20 sm:tw-w-24 tw-flex tw-items-center tw-justify-center sm:tw-h-24 lg:tw-w-28 lg:tw-h-28 
                                tw-rounded-lg tw-shadow-md 
                                ${i % 2 === 0 ? "tw-bg-white" : "tw-bg-[#E8D9FF]"}`}
                  >
                    <Image
                      src={tool.src}
                      alt={tool.alt}
                      width={65}
                      height={65}
                      className="tw-object-contain tw-transition-transform tw-duration-500 hover:tw-scale-110  tw-mx-auto tw-my-auto"
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
