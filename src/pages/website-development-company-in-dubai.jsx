import React from "react";
import SEO from "../common/seo";
import WebDevelopment from "../components/webDevelopment";
import Wrapper from "../layout/wrapper";
import Head from "next/head";

const Index = () => {
  const [title, desc] = [
    `Website Development Dubai | Web Development Expert | DigiExpo`,
    `DigiExpo is a top Website Development Dubai expert offering custom web design, ecommerce sites, and SEO-ready solutions to boost your business online.`,
  ];

  // Schema as a JS object
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What modern website technologies are businesses in Dubai focusing on in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Progressive Web Apps (PWAs) are one of the newest website technologies that Dubai firms are focusing on in 2025. AI chatbots improve customer service by providing help right away. Cloud hosting ensures that websites can develop and stay safe, so they can handle more traffic. Accelerated Mobile Pages (AMP) are used to make content load faster, especially on mobile phones. Headless content management solutions let you show content in various ways across different channels."
        }
      },
      {
        "@type": "Question",
        "name": "How does a mobile-first development approach benefit users and SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A mobile-first development method ensures that websites are made for smartphones and tablets first, so they work well on smaller displays. This method lowers bounce rates and increases user engagement because most internet users are on mobile devices. Google prefers sites that are optimized for mobile. This helps businesses rank higher in search results. In the end, designing with mobile in mind makes websites easy to use, accessible, and competitive in today's digital world."
        }
      },
      {
        "@type": "Question",
        "name": "Why is accessibility and data privacy crucial for websites in Dubai today?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Websites in Dubai need to think about accessibility and data privacy because they ensure everyone can use them and follow the rules. Making websites accessible implies that people with disabilities can easily find their way around and use them. This opens up the site to a wider audience. Data privacy keeps consumers' personal information safe and builds trust. Accessibility and data privacy are very important in Dubai because the UAE has severe rules about data protection. These factors show that a corporation follows the law online and helps keep it out of trouble."
        }
      },
      {
        "@type": "Question",
        "name": "What are the steps involved in building a high-performing website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A clear plan is essential for creating an effective website. It should outline the business's goals and target audience. Designers make interfaces that are easy to use and focus on the user experience. Developers make sure that pages load quickly and work well on mobile devices. Content is made to keep visitors interested and is optimized for search engines to make it easier to find. After launch, ongoing monitoring helps find places that need to be improved. Regular upgrades maintain the website's safety and keep it up to date with changing user needs and technologies."
        }
      },
      {
        "@type": "Question",
        "name": "How do interactive and futuristic design trends elevate user engagement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Users are drawn to websites with interactive and futuristic design trends. These trends make websites more interesting and memorable. Micro-animations, 3D images, and fluid scrolling are some of the features that make visitors want to interact with content instead of just looking at it. These designs also show that a business is creative and innovative, which helps it stand out. These kinds of trends make the site better for users, which leads to more time spent on the site and more conversions."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <Wrapper>
        <SEO
          pageTitle={title}
          pageDesc={desc}
          canonicalUrl="https://www.digiexpo.ae/website-development-company-in-dubai"
        />
        <WebDevelopment />
      </Wrapper>
    </>
  );
};

export default Index;
