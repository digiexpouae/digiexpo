import React, { useState } from "react";
import Image from 'next/image'
const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("Website");

  const tabs = [
    "Website",
    "Ecommerce",
    "Web App Development",
    "SEO",
    "Branding",
    "Content Writing",
    "Digital Marketing",
  ];

  const plans = [
    {
      title: "Starter",
      price: "$399.99",
      features: [
        "3 Stock Photos",
        "3 Banner Designs",
        "1 Page Static Website",
        "1 jQuery Slider Banner",
        "FREE Google-Friendly Sitemap",
      ],
      text:'Explore our tailored pricing plans designed for startups.',
      button: "Get in Touch",
    },
    {
      title: "Entrepreneur",
      price: "$999.99",
      features: [
        "5 Unique Page Website",
        "CMS / Admin Panel Support",
        "5 Stock Images",
        "5 Banner Designs",
        "Mobile Responsive",
      ],
      text:'Ideal for growing businesses looking for scalability.',
      button: "Get in Touch",
    },
    {
      title: "Business Plus",
      price: "$1999.99",
      features: [
        "Conceptual and Dynamic Website",
        "Mobile Responsive",
        "Online Reservation / Appointment Tool",
        "10 Pages Custom Website",
        "Social Media Integration",
      ],
      text:'Designed for established brands needing full customization.',
      button: "Get in Touch",
    },
  ];

  return (
    <section className="tw-bg-[url('/assets/img/client/background.png')] tw-bg-cover tw-bg-center tw-text-white tw-py-20 tw-relative">
      <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4 tw-text-center">
        <h2 className="tw-text-4xl tw-text-white tw-font-bold tw-mb-2">Choose Your Pricing Plan</h2>
        <p className="tw-text-lg tw-text-[#FFFFFF99] tw-leading-[1.2] tw-mb-10">
          Explore our tailored pricing plans designed to suit your specific <br /> needs,
          providing flexibility and value for every budget.
        </p>

        {/* Tabs */}
        <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-3 tw-mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tw-px-5 tw-py-2 tw-rounded-full tw-text-sm tw-font-medium tw-transition-all ${
                activeTab === tab
                  ? "tw-bg-white tw-text-purple-700"
                  : "tw-bg-white/20 hover:tw-bg-white/30"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-items-center tw-justify-center tw-gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={` tw-text-gray-900 tw-rounded-2xl tw-flex tw-p-6 tw-flex-col tw-items-start tw-shadow-xl tw-transition-transform hover:tw-scale-105 ${
                index === 1 ? "tw-bg-white tw-border-4 tw-border-purple-600 tw-justify-between tw-h-[450px]" : " tw-h-[420px] tw-justify-between tw-bg-[#E8DCFD] "
              }`}
            >
                <div className="tw-flex tw-flex-col">
              <h3 className="tw-text-lg tw-text-left tw-font-semibold ">{plan.title}</h3>
              <p className="tw-text-4xl tw-text-black tw-font-bold tw-text-black tw-mb-4">
                {plan.price}
              </p>
              </div>

              <p className="tw-text-left tw-text-black">{plan.text}</p>
              <ul className="tw-text-gray-600  tw-space-y-2 tw-list-none  tw-text-left tw-w-full tw-mb-6" style={{listStyle:'none'}}>
                {plan.features.map((feature, i) => (
                  <li key={i} className="tw-flex tw-text-black tw-items-center tw-gap-2">
                    {/* <span className="tw-w-2 tw-h-2 tw-bg-purple-600 tw-rounded-full"></span> */}
                    <div className="tw-relative tw-w-4 tw-h-4"><Image src={'/assets/img/client/Vector.svg'} fill className="object-cover"/></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="tw-bg-[#803DFF] tw-text-white tw-font-semibold tw-px-6 tw-py-2 tw-w-full tw-rounded-full hover:tw-bg-purple-800 tw-transition">
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
