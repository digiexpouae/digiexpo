import Image from "next/image";

const Section3 = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Empire Developments",
      category: "Real Estate / Website",
      img: "/assets/img/casestudies/cs-7.png", // Foreground image (project)
      bg: "/assets/img/casestudies/Rectangle 6900.png", // Background behind it
    },
    {
      id: 2,
      title: "Empire Developments",
      category: "Real Estate / Website",
      img: "/assets/img/casestudies/cs-7.png",
      bg: "/assets/img/casestudies/Rectangle 6900.png",
    },
    {
      id: 3,
      title: "Empire Developments",
      category: "Real Estate / Website",
      img: "/assets/img/casestudies/cs-7.png",
      bg: "/assets/img/casestudies/Rectangle 6900.png",
    },
  ];

  return (
    <section className="tw-bg-[#F4EFFF] tw-py-20  tw-w-full">
      <div className="tw-max-w-6xl tw-mx-auto tw-px-4">
        {/* Header */}
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-start md:tw-items-center tw-gap-6 tw-mb-12">
          <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold">
            Case Studies
          </h2>

          <div className="tw-flex tw-gap-3">
            <button className="tw-bg-white flex items-center gap-2 hover:tw-bg-zinc-300 tw-font-bold tw-rounded-full tw-text-black  tw-px-4 tw-py-2 tw-transition">
              <span className="tw-mr-2">Filter by Service </span> <Image src={'/assets/img/casestudies/Vector.svg'} width={10} height={10}/>
            </button>
            <button className="tw-bg-white flex gap-2 hover:tw-bg-zinc-300 tw-font-bold tw-rounded-full tw-text-black tw-px-4 tw-py-2 tw-transition">
             <span className="tw-mr-2"> Filter by Industry </span> <Image src={'/assets/img/casestudies/Vector.svg'} width={10} height={10}/>
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {caseStudies.map((item) => (
            <div
              key={item.id}
              className="tw-relative tw-rounded-2xl tw-overflow-hidden tw-shadow-md tw-transition-transform tw-duration-300 hover:tw-scale-[1.03] hover:tw-shadow-lg "
            >
              {/* Background image */}
              <div className="tw-relative  tw-h-[225px] tw-w-full">
                <Image
                  src={item.bg}
                  alt="background gradient"
                  fill
                  className="tw-object-cover tw-rounded-2xl"
                />

                {/* Foreground project image */}
                <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center">
                  <div className="tw-relative tw-w-[90%] tw-translate-y-4 tw-h-[90%] tw-transition-transform tw-duration-300 hover:tw-scale-105">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="tw-object-cover tw-rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div className="tw-p-4 tw-bg-[#F4EFFF] tw-relative tw-z-20">
                <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900">
                  {item.title}
                </h3>
                <p className="tw-text-sm tw-text-gray-500">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
