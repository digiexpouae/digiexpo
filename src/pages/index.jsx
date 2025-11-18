

import React from "react";
import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";
import Head from "next/head";
import client from "@/sanityConfig";
const Home = () => {
  const seoMetaData = {
    pageTitle: "Web Design Dubai | Website Development Company – DigiExpo",
    pageDesc:"DigiExpo is a trusted Web Design Dubai & website development company. We offer ecommerce, digital marketing, and SEO-optimized websites across UAE."
  }
  const faqSchema=
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Why do UAE brands trust this agency?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "UAE businesses trust DigiExpo because we don’t just build websites — we craft digital experiences that embody a brand’s story and vision. Our professional design team ensures every project reflects the client’s goals and values. DigiExpo merges creativity with strategy to turn ideas into impactful websites that attract attention and drive conversions. That’s why our clients see us as more than designers — they see us as long-term digital partners."
    }
  },{
    "@type": "Question",
    "name": "What makes your design process unique?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "At DigiExpo, our design process is rooted in teamwork, research, and precision. We begin by analyzing audience behavior, brand objectives, and market trends. Then we move through wireframing, UI/UX design, and testing. Unlike most agencies, we involve our clients in every stage — ensuring full transparency, collaboration, and satisfaction throughout the project."
    }
  },{
    "@type": "Question",
    "name": "Do you offer startup design packages UAE?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes! We provide affordable design packages tailored for startups and small businesses in the UAE. Each plan includes responsive web design, basic SEO setup, and brand essentials to kickstart your online presence. DigiExpo ensures that high-quality design isn’t limited to big enterprises — we help new brands build strong digital foundations from day one."
    }
  },{
    "@type": "Question",
    "name": "Do you build custom enterprise websites?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, DigiExpo develops enterprise-level websites that are secure, scalable, and high-performing. We work with advanced frameworks like React, Laravel, and WordPress to deliver tailored digital solutions. Whether it’s a corporate portal or a complex eCommerce platform, our focus remains on performance, functionality, and clean UX — enabling smooth digital operations for businesses in the UAE."
    }
  },{
    "@type": "Question",
    "name": "How does UX improve website results?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A great user experience (UX) determines whether visitors stay, explore, and convert. At DigiExpo, we study user behavior to design intuitive interfaces that guide users effortlessly. From button placement to content flow, every element is optimized for engagement. Our UX strategy helps reduce bounce rates, increase conversions, and build long-term trust with your audience."
    }
  },{
    "@type": "Question",
    "name": "Do you offer mobile-friendly design Dubai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Absolutely. Every DigiExpo website is built with a mobile-first approach to perform flawlessly across all devices. Since most UAE users browse on smartphones, we focus on speed, responsiveness, and visual consistency. Whether viewed on a phone, tablet, or desktop, your site will deliver the same seamless experience and drive engagement anywhere, anytime."
    }
  },{
    "@type": "Question",
    "name": "Can you rank websites on Google UAE?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we help businesses boost visibility and rankings on Google through strategic SEO and digital marketing. Our process includes on-page optimization, backlink building, and localized SEO targeting UAE audiences. At DigiExpo, we design websites that not only look great but are structured for high search performance — helping your brand attract quality traffic and achieve steady organic growth."
    }
  },{
    "@type": "Question",
    "name": "What’s trending in Dubai web design 2025?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "In 2025, Dubai’s web design trends emphasize minimalism, AI-driven personalization, and lightning-fast performance. There’s a growing demand for motion graphics, voice-enabled navigation, and interactive 3D visuals. DigiExpo stays ahead of the curve by blending these innovations with timeless UX principles — creating futuristic yet practical websites that delight users and strengthen brands."
    }
  },{
    "@type": "Question",
    "name": "Can you build custom web apps Dubai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, DigiExpo specializes in developing custom web applications built around your business processes. From internal dashboards to booking systems and eCommerce solutions, our apps are fast, secure, and scalable. We combine robust front-end interfaces with powerful back-end logic to deliver high-performing web apps that deliver measurable business value."
    }
  },{
    "@type": "Question",
    "name": "What digital marketing services do you offer?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DigiExpo provides comprehensive digital marketing services, including SEO, PPC advertising, content marketing, and social media management. Every campaign is customized to align with your brand’s voice and growth goals. Our data-driven approach ensures measurable success — from increasing awareness to generating leads and driving sustainable conversions across all platforms."
    }
  },{
    "@type": "Question",
    "name": "How do you ensure on-time delivery?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We maintain strict project schedules with clear milestones and continuous communication. Using Agile methodologies, we ensure steady progress and adaptability without sacrificing quality. Every phase — from design to testing — is strategically planned. At DigiExpo, we believe punctuality is professionalism, so we guarantee timely delivery without compromising performance or creativity."
    }
  },{
    "@type": "Question",
    "name": "Can experts fix my old website fast?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, at DigiExpo, we deal with the reprocessing of old websites and their replacement with the current levels. Our team identifies the problem areas of performance, remodels graphics, and increases the loading speed without interfering with your current content. We know that time is like money, and that is why we are efficient in providing a fully refreshed mobile-friendly site within record time and can assist your business to make a strong digital comeback in no time."
    }
  },{
    "@type": "Question",
    "name": "What services do you offer in Dubai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DigiExpo provides a full spectrum of digital services in Dubai, which includes web design, web development, eCommerce, branding, SEO, and performance marketing. DigiExpo's goal is to make businesses thrive on the internet. Whether you are starting a business or growing an established one, we will offer you the full package to help your brand stand out in the competitive digital market of Dubai."
    }
  }]
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
