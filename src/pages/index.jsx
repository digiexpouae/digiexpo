
'use client';

import React from "react";
import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";
import Head from "next/head";
const Home = () => {
  const seoMetaData = {
    pageTitle: "Web Design Dubai | Website Development Company – DigiExpo",
    pageDesc:"DigiExpo is a trusted Web Design Dubai & website development company. We offer ecommerce, digital marketing, and SEO-optimized websites across UAE."
  }
  const faqSchema=
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the most in-demand digital marketing services for UAE businesses in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO, PPC, and social marketing are the most in-demand digital marketing services in the UAE in 2025. Businesses are also interested in content marketing and influencer marketing. These services help businesses catch the audience's eye and stand out in a busy market. AI automation and data analysis are also essential for a personalized customer experience. They help in tracking campaign performance. This ensures that every dirham invested gets the best potential return."
      }
    },
    {
      "@type": "Question",
      "name": "How does DigiExpo create high-converting websites for the modern Dubai business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DigiExpo creates websites that look good but also work well. We focus on our clients' requirements, which helps them turn visitors into customers. We put a lot of effort into making websites that load quickly, are easy to use, and work well on all devices. We prioritize mobile-friendly websites because many people use their phones all the time. Our expert team helps businesses reach their target audiences. Our continuing support keeps websites up to date and competitive as industry trends change."
      }
    },
    {
      "@type": "Question",
      "name": "Why is UI/UX design a game-changer for customer experience in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "UI/UX design changes the game by changing how people see and interact with a business online. Users in 2025 want websites and apps to be easy to use and look good. Businesses need to make sure that navigation is simple, responses are quick, and layouts are interesting. A good user experience increases trust and makes people want to spend more time exploring your website. It also ensures that they will become loyal customers. UI/UX can be the thing that makes one business stand out from another in a world full of options."
      }
    },
    {
      "@type": "Question",
      "name": "Can DigiExpo build scalable mobile apps for startups and enterprises?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DigiExpo uses modern development frameworks that encourage growth to make mobile apps that can expand with both small and large businesses. Our apps can manage more users or new features without crashing or slowing down. Our team works hard and understands our clients' goals. We create apps tailored to their needs, easy to use, and dependable. This adaptability lets organisations stay on top of changing market needs and keep up their excellent performance as they grow."
      }
    },
    {
      "@type": "Question",
      "name": "How is DigiExpo using emerging tech to future-proof businesses in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DigiExpo helps Dubai businesses stay competitive and ready for the future by using new technologies like artificial intelligence, machine learning, and blockchain. The whole point of DigiExpo is to keep ahead of the game. We're already leveraging AI to make things more personal, AR to make purchasing more involved, and automation to make work go more smoothly. That means that if you hire us, you'll get a website or app that looks good now, but it will still be useful in two or three years."
      }
    }
  ]
}


  return (
    <>
    <Head>
<script type="application/ld+json"  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

    </Head>
    <Wrapper>
      <SEO
        pageTitle={seoMetaData.pageTitle}
        pageDesc={seoMetaData.pageDesc}
        canonicalUrl={"https://www.digiexpo.ae"}
      />
      <HomeOne />
    </Wrapper>
    </>
  );
};

export default Home;
