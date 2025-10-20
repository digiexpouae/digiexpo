import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="tw-w-full tw-bg-white tw-text-gray-800">
      {/* Intro Text */}
      <div className="tw-max-w-5xl tw-mx-auto tw-py-16 tw-px-6 md:tw-px-16 lg:tw-px-6">
        <p className="tw-text-2xl tw-font-semibold tw-tracking-tighter tw-pr-12 tw-text-black tw-leading-relaxed">
          DigiExpo is a Dubai-based digital agency transforming ideas into
          digital success stories. We specialize in Web Design, Development,
          Digital Marketing, and Emerging Technologies — helping brands create
          measurable growth and a strong online presence.
        </p>

        <h3 className="tw-mt-10 tw-mb-6 tw-text-xl tw-font-semibold">
          Below, include four quick stats:
        </h3>

        {/* Stats */}
        <div className="tw-flex tw-flex-wrap tw-gap-14 md:tw-gap-0 md:tw-justify-between md:tw-w-[85%] lg:tw-w-[70%]">
          {/* Stat 1 */}
          <div className="tw-flex tw-flex-col tw-items-center">
            <div
              className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-2 tw-rounded-full tw-h-20 tw-w-20"
              style={{
                backgroundImage:
                  "linear-gradient(145.27deg, rgba(128, 61, 255, 0.1) 15.55%, rgba(128, 61, 255, 0) 86.81%)",
              }}
            >
              <span className="tw-text-4xl tw-font-bold tw-pt-6 lg:tw-pt-0 tw-ml-6  md:tw-ml-4">
                150+
              </span>
              <span className="tw-ml-2 tw-text-gray-700">
                Projects <br /> Delivered
              </span>
            </div>
          </div>

          {/* Stat 2 */}
          <div
            className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-4 tw-rounded-full tw-h-20 tw-w-20"
            style={{
              backgroundImage:
                "linear-gradient(145.27deg, rgba(128, 61, 255, 0.1) 15.55%, rgba(128, 61, 255, 0) 86.81%)",
            }}
          >
            <span className="tw-text-4xl tw-font-bold lg:tw-pt-0 tw-pt-6 tw-ml-6  md:tw-ml-4">
              10+
            </span>
            <span className="tw-text-gray-700">
              Countries <br /> Served
            </span>
          </div>

          {/* Stat 3 */}
          <div
            className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-4 tw-rounded-full tw-h-20 tw-w-20"
            style={{
              backgroundImage:
                "linear-gradient(145.27deg, rgba(128, 61, 255, 0.1) 15.55%, rgba(128, 61, 255, 0) 86.81%)",
            }}
          >
            <span className="tw-text-4xl tw-font-bold tw-pt-6 lg:tw-pt-0 tw-ml-6  md:tw-ml-4">
              08+
            </span>
            <span className="tw-text-gray-700">
              Years of <br /> Experience
            </span>
          </div>

          {/* Stat 4 */}
          <div
            className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-4 tw-rounded-full tw-h-20 tw-w-20"
            style={{
              backgroundImage:
                "linear-gradient(145.27deg, rgba(128, 61, 255, 0.1) 15.55%, rgba(128, 61, 255, 0) 86.81%)",
            }}
          >
            <span className="tw-text-4xl tw-font-bold tw-pt-6 lg:tw-pt-0 tw-ml-12 md:tw-ml-4">
              4.9/5
            </span>
            <span className="tw-text-gray-700">
              Client <br /> Rating
            </span>
          </div>
        </div>
      </div>

      {/* Mission / Vision */}
      <div className="tw-grid md:tw-grid-cols-2">
        {/* Mission */}
        <div className="tw-bg-[#F7F9FB] tw-p-10">
          <div className="tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-3 lg:tw-px-32">
            <div className="tw-relative">
              <Image
                src={"/assets/img/about2/mission 1.svg"}
                width={30}
                height={30}
                alt="Mission icon"
              />
            </div>
            <div className="tw-text-3xl tw-font-semibold">Mission</div>
            <p className="tw-max-w-sm tw-text-sm  tw-text-start tw-text-gray-700">
              To deliver creative, data-driven, and scalable digital solutions
              that empower businesses globally.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="tw-bg-[#F4EFFF] tw-p-10">
          <div className="tw-flex tw-flex-col tw-items-start tw-gap-3 md:tw-px-12">
            <div className="tw-relative">
              <Image
                src={"/assets/img/about2/vision (1) 1.svg"}
                width={40}
                height={40}
                alt="Vision icon"
              />
            </div>
            <div className="tw-text-3xl tw-font-semibold">Vision</div>
            <p className="tw-max-w-sm tw-text-sm tw-text-start  tw-text-gray-700">
              To be the most trusted and result-focused digital partner in the
              UAE.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
