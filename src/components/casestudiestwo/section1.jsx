const Section1 = () => {
    const elements = [
      { title: "150+", text: "Successful Projects" },
      { title: "100+", text: "International Clients" },
      { title: "200+", text: "Average ROI Growth" },
      { title: "4.9/5", text: "Client Satisfaction" },
    ];
  
    return (
      <section className="tw-flex tw-items-center tw-justify-center tw-h-[70vh] tw-bg-white tw-py-16">
        <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-8 tw-max-w-5xl tw-mx-auto tw-text-center">
          {elements.map((elem, index) => (
            <div
              key={index}
              className="tw-flex tw-flex-col tw-items-center  tw-transition-transform tw-duration-300 hover:tw-scale-105"
            >
              <h4 className="tw-text-3xl tw-font-bold tw-text-primary">{elem.title}</h4>
              <p className="tw-text-gray-600 tw-text-base md:tw-text-md">{elem.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Section1;
  