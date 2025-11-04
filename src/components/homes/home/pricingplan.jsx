import React, { useState } from "react";
import Image from 'next/image';
import Link from "next/link";

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("Website");

const tabs = [
    "Website",
    "Ecommerce",
    "Application Development",
    "SEO",
    "Branding",
    "Content Writing",
    "Social Media Marketing",
  ];

  // Define plans per tab
// Define plans per tab
const tabPlans = {
  Website: [
    {
      title: "Starter",
      price: "1,500 AED",
      features: [
        "1–5 Page Responsive Website",
        "Basic UI/UX Design",
        "Contact Form & Google Map Integration",
        "1 Month Basic Support",
        "Domain & Hosting Guidance",
      ],
      text: "Explore our tailored pricing plans designed for startups.",
      button: "Get in Touch",
    },
    {
      title: "Professional",
      price: "3,500 AED",
      features: [
        "Up to 10 Pages",
        "Custom Design + CMS (WordPress/Custom)",
        "Mobile Optimization",
        "Basic On-Page SEO",
        "3 Months Support & Maintenance",
      ],
      text: "Ideal for growing businesses looking for scalability.",
      button: "Get in Touch",
    },
    {
      title: "Premium",
      price: "6,000 AED",
      features: [
        "Fully Customized Website",
        "CMS + Blog Setup",
        "SEO Optimization",
        "Speed Optimization",
        "6 Months Maintenance & Analytics Setup",
      ],
      text: "Designed for established brands needing full customization.",
      button: "Get in Touch",
    },
  ],
  Ecommerce: [
    {
      title: "Starter",
      price: "3,000 AED",
      features: [
        "10 Product Listings",
        "Shopify/WooCommerce Setup",
        "Payment Gateway Integration",
        "Responsive Design",
        "Basic Store Training",
      ],
      text: "Perfect for small online stores starting out.",
      button: "Get in Touch",
    },
    {
      title: "Professional",
      price: "6,500 AED",
      features: [
        "Up to 50 Products",
        "Inventory & Order Management",
        "Custom Design Discount/Offer Setup",
        "3 Months Store Maintenance",
      ],
      text: "For growing e-commerce businesses.",
      button: "Get in Touch",
    },
    {
      title: "Premium",
      price: "10,000 AED",
      features: [
        "Unlimited Products",
        "Multi-Vendor / Marketplace Option",
        "Full Automation (Email, Invoices, CRM)",
        "Advanced SEO & Analytics",
        "6 Months Priority Support",
      ],
      text: "For large online stores with complex requirements.",
      button: "Get in Touch",
    },
  ],
  "Application Development": [
    {
      title: "Basic",
      price: "6,500 AED",
      features: [
        "Simple Functional App",
        "Up to 5 Screens",
        "Basic UI",
        "User Authentication",
        "1 Month Support",
      ],
      text: "Ideal for small, functional applications.",
      button: "Get in Touch",
    },
    {
      title: "Professional",
      price: "10,000 AED",
      features: [
        "Built on React Native",
        "API Integration",
        "Push Notifications",
        "App Store / Play Store Deployment",
        "3 Months Support",
      ],
      text: "For scalable apps with multiple features.",
      button: "Get in Touch",
    },
    {
      title: "Enterprise (Custom Coded)",
      price: "15,000 AED+",
      features: [
        "Fully Custom App (iOS + Android)",
        "Admin Panel + Dashboard",
        "Advanced Features & APIs",
        "Database & Cloud Setup",
        "6 Months Maintenance",
      ],
      text: "Custom enterprise-level solutions with advanced features.",
      button: "Get in Touch",
    },
  ],
  "SEO": [
    {
      title: "Starter",
      price: "800 AED / month",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Meta Tags Optimization",
        "Monthly Report",
      ],
      text: "Ideal for businesses starting SEO campaigns.",
      button: "Get in Touch",
    },
    {
      title: "Professional",
      price: "1,500 AED / month",
      features: [
        "10 Target Keywords",
        "On & Off-Page SEO",
        "Backlink Creation",
        "Google Business Optimization",
      ],
      text: "For businesses looking to improve search visibility.",
      button: "Get in Touch",
    },
    {
      title: "Premium",
      price: "2,800 AED / month",
      features: [
        "20+ Keywords",
        "Advanced Link Building",
        "Blog & Content Optimization",
        "Monthly Analytics Report & Strategy Meeting",
      ],
      text: "Comprehensive SEO services for maximum results.",
      button: "Get in Touch",
    },
  ],
  "Branding": [
    {
      title: "Starter",
      price: "500 AED",
      features: [
        "Logo Design (2 Concepts)",
        "Basic Brand Colors & Fonts",
        "Social Media Profile Kit",
      ],
      text: "Basic branding solutions for new businesses.",
      button: "Get in Touch",
    },
    {
      title: "Professional",
      price: "1,200 AED",
      features: [
        "3 Logo Concepts + Final Files",
        "Brand Guidelines (Colors, Fonts, Usage)",
        "Business Card & Letterhead Design",
      ],
      text: "Complete branding solutions for growing businesses.",
      button: "Get in Touch",
    },
    {
      title: "Premium",
      price: "2,500 AED",
      features: [
        "Complete Brand Identity Pack",
        "Social Media Template Kit",
        "Stationery & Mockups",
        "Brand Strategy Consultation",
      ],
      text: "Advanced branding for established businesses.",
      button: "Get in Touch",
    },
  ],
 "Content Writing": [
  {
    title: "Starter",
    price: "300 AED",
    features: [
      "Up to 500 Words",
      "Website or Blog Content",
      "1 Revision",
      "SEO Optimized",
    ],
    text: "Perfect for small content requirements.",
    button: "Get in Touch",
  },
  {
    title: "Professional",
    price: "700 AED",
    features: [
      "Up to 1500 Words",
      "2 Revisions",
      "Keyword Optimization",
      "Tone & Style Customization",
    ],
    text: "For comprehensive content creation needs.",
    button: "Get in Touch",
  },
  {
    title: "Premium",
    price: "1,200 AED",
    features: [
      "Up to 3000 Words",
      "Deep Research + SEO",
      "3 Revisions",
      "Brand Voice Consistency",
    ],
    text: "Advanced content solutions for detailed projects.",
    button: "Get in Touch",
  },
],
// Social Media Marketing Plans
"Social Media Marketing" :[
  {
    title: "Starter",
    price: "1,200 AED / month",
    features: [
      "8 Posts Per Month",
      "Basic Design & Captions",
      "3 Platforms",
      "Monthly Report",
    ],
    text: "Ideal for businesses starting their social media journey.",
    button: "Get in Touch",
  },
  {
    title: "Professional",
    price: "2,500 AED / month",
    features: [
      "16 Posts Per Month",
      "5 Platforms",
      "Ad Campaign Setup",
      "Hashtag Strategy + Engagement",
    ],
    text: "For growing businesses looking to scale social presence.",
    button: "Get in Touch",
  },
  {
    title: "Premium",
    price: "5,000 AED / month",
    features: [
      "25+ Posts & Reels",
      "Unlimited Platforms",
      "Paid Ads Management",
      "Full Strategy + Monthly Analysis",
    ],
    text: "Complete social media management for maximum impact.",
    button: "Get in Touch",
  }]
}

  // Get the plans for the current active tab
  const plans = tabPlans[activeTab] || [];

  return (
    <section className="tw-bg-[url('/assets/img/client/background.png')] tw-bg-cover tw-bg-center tw-text-white tw-py-20 tw-relative">
      <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4 tw-text-center">
        <h2 className="tw-text-4xl tw-text-white tw-font-bold tw-mb-2">
          Choose Your Pricing Plan
        </h2>
        <p className="tw-text-lg tw-text-[#FFFFFF99] tw-leading-[1.2] tw-mb-10">
          Explore our tailored pricing plans designed to suit your specific <br /> needs,
          providing flexibility and value for every budget.
        </p>

        {/* Tabs */}
  {/* Tabs */}
<div className="tw-flex tw-overflow-x-auto tw-whitespace-nowrap tw-gap-3 tw-mb-12 tw-px-2">
  {tabs.map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`tw-inline-block tw-px-5 tw-py-2 tw-rounded-full tw-text-sm tw-font-medium tw-transition-all ${
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
                index === 1
                  ? "tw-bg-white tw-border-4 tw-border-purple-600 tw-justify-between tw-h-[450px]"
                  : " tw-h-[420px] tw-justify-between tw-bg-[#E8DCFD] "
              }`}
            >
              <div className="tw-flex tw-flex-col">
                <h3 className="tw-text-lg tw-text-left tw-font-semibold">{plan.title}</h3>
                <p className="tw-text-3xl tw-text-black tw-font-bold tw-text-black tw-mb-4">
                  {plan.price}
                </p>
              </div>

              <p className="tw-text-left tw-text-black">{plan.text}</p>
              <ul
                className="tw-text-gray-600 tw-space-y-2 tw-list-none tw-text-left tw-w-full tw-mb-6"
                style={{ listStyle: "none" }}
              >
                {plan.features.map((feature, i) => (
                  <li key={i} className="tw-flex tw-text-black tw-items-center tw-gap-2">
                    <div className="tw-relative tw-w-4 tw-h-4">
                      <Image src={"/assets/img/client/Vector.svg"} fill className="object-cover" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
 <button className="tw-bg-[#803DFF] tw-text-white tw-font-semibold tw-px-6 tw-py-2 tw-w-full tw-rounded-full hover:tw-bg-purple-800 tw-transition">
                             <Link href='/contact'>{plan.button}</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
