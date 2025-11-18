import React from "react";
import SEO from "../common/seo";
import dynamic from "next/dynamic";
const DigitalMarketing = dynamic(() => import("../components/digitalMarketing"),{ssr:true});
import Wrapper from "../layout/wrapper";
import Head from "next/head";

const Index = () => {
  const [pageTitle, pageDescription] = [
    `Digital Marketing Agency Dubai | SEO, SMM & PPC | DigiExpo`,
    `DigiExpo is a trusted Digital Marketing Agency Dubai providing SEO, PPC, social media, and online marketing services to help businesses grow across UAE.`,
  ];

  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Why choose DigiExpo for marketing Dubai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "At DigiExpo, we combine creative strategy and data-driven implementation to provide effective marketing outcomes. Our skilled team is aware of the trends in the region and the trends of consumer behavior, and helps brands stand out in Dubai’s competitive market. We prioritize measurable growth through campaign identification, open communication, and ongoing optimization to make sure that each marketing campaign creates visibility, interaction, and long-term achievement for your business."
    }
  },{
    "@type": "Question",
    "name": "What digital marketing services you offer Dubai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DigiExpo digital marketing services include SEO, PPC, social media management, and content marketing. Our email automation solutions, as well as brand strategy solutions, are focused on making your campaigns more engaging and driving conversions, and each campaign will be tailored to your audience and purpose. DigiExpo supports Dubai brands by strengthening them online using innovative, targeted, and result-driven digital strategies."
    }
  },{
    "@type": "Question",
    "name": "How you help Dubai brands grow online?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "How you help Dubai brands grow online? DigiExpo helps Dubai brands grow online by using innovative design and smart digital marketing. Our websites are a good fit, being optimized for SEO, speed, and our team works with content, advertising, and analytics to measure and improve performance. DigiExpo provides tools and expertise to boost your online success."
    }
  },{
    "@type": "Question",
    "name": "How fast marketing shows results in Dubai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "At DigiExpo, we develop the marketing policies that ensure short-term and long-term visibility. It will take you a few weeks to start showing results, depending on the kind of campaign you have chosen: SEO, PPC, or social media. Nevertheless, brand recognition is sustainable with time. Our team is tracking each campaign to maximize the campaigns to meet the competitive market in Dubai so that the team can provide faster engagements, qualified leads, and ROI."
    }
  },{
    "@type": "Question",
    "name": "What makes you different from Dubai agencies?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The uniqueness of DigiExpo is our individual approach and creativity supported by data. We do not use a template; each of the strategies and designs is tailored to the brand vision and purpose of each client. Unlike many agencies in Dubai, we also apply human creativity with AI insights to be smarter in execution. We are determined to deliver quality, transparency, and quantifiable growth that ensures that every client will have a trust-driven and innovative partnership."
    }
  },{
    "@type": "Question",
    "name": "Do you offer marketing for UAE startups?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, DigiExpo offers end-to-end marketing to start-ups in the UAE. We assist the new companies to gain visibility based on specific digital campaigns, content marketing, and optimization of search engines. Our team is conscious of the specifics of startups, including low budgets, market entry barriers, and provides strategies that bring the highest value to the startups. Through DigiExpo, startups receive the appropriate exposure to be able to compete effectively in the UAE market."
    }
  },{
    "@type": "Question",
    "name": "Do you use AI in marketing Dubai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, in our market plans, DigiExpo uses AI-based strategies. In predictive analytics and content recommendations, AI helps us to make smarter decisions, engagement, and personalized suggestions on content. These technologies allow the opportunity to offer more precise, faster marketing outcomes that respond to the actions of the users and tendencies in the market in real-time."
    }
  }]
}
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
          pageTitle={pageTitle}
          pageDesc={pageDescription}
          canonicalUrl="https://www.digiexpo.ae/digital-marketing-agency-dubai"
        />
        <DigitalMarketing />
      </Wrapper>
    </>
  );
};

export default Index;
