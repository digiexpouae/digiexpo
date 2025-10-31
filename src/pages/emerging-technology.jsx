import React from "react";
import SEO from "../common/seo";
import NextGen from "../components/nextGen";
import Wrapper from "../layout/wrapper";
import Head from "next/head";

const Index = () => {
  const title = `Emerging Technologies | AI, AR & IoT Experts | DigiExpo`;
  const desc = `DigiExpo offers innovative Emerging Technologies services in AI, AR, and IoT, delivering smart, scalable, and future-ready solutions for businesses.`;

  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What new technologies lead Dubai in 2025?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Dubai is leading the way in 2025 with AI, blockchain, IoT, and cloud-based solutions taking center stage. At DigiExpo, we apply these innovations to future-proof our clients’ businesses. These technologies improve efficiency and user experience — from AI-driven analytics to IoT-powered automation. DigiExpo helps Dubai companies stay ahead by adopting and adapting to the latest technologies, turning innovation into measurable business growth."
    }
  },{
    "@type": "Question",
    "name": "How is AI changing Dubai businesses now?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "AI is transforming Dubai businesses — from automated customer support to predictive analytics. At DigiExpo, we integrate AI to power smarter marketing campaigns, responsive websites, and data-driven decision-making. AI helps personalize user journeys, save time, and deliver better results. We help Dubai brands embrace AI to evolve from traditional models into intelligent, adaptive systems that drive performance and sustainable growth."
    }
  },{
    "@type": "Question",
    "name": "Why does blockchain matter for UAE companies?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Blockchain provides UAE companies with transparency, security, and trust in digital transactions. DigiExpo integrates blockchain into business solutions to enhance efficiency and safeguard data. We help Dubai organizations leverage blockchain’s decentralized power to innovate, improve accountability, and strengthen online presence — ensuring safer and smarter operations in a rapidly evolving digital economy."
    }
  },{
    "@type": "Question",
    "name": "How do 5G and IoT grow Dubai’s smart cities?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Dubai’s smart city evolution is powered by 5G and IoT technologies. At DigiExpo, we implement these systems to build connected, intelligent infrastructures for businesses and government sectors. 5G enables real-time data transfer, while IoT automates operations and increases efficiency. Together, they create the foundation for a responsive, data-driven Dubai that leads the world in innovation and smart living."
    }
  },{
    "@type": "Question",
    "name": "What’s AR/VR’s role in Dubai’s tech future?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "AR and VR are redefining how Dubai businesses engage customers. At DigiExpo, we integrate immersive technologies into apps, eCommerce, and web experiences. These tools make digital interactions more engaging, emotional, and memorable. We help brands harness AR and VR for storytelling, product visualization, and training — turning imagination into powerful user engagement across Dubai’s digital space."
    }
  },{
    "@type": "Question",
    "name": "Why invest in emerging technologies in Dubai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Investing in emerging technologies future-proofs your business. At DigiExpo, we help companies use AI, blockchain, and IoT to improve efficiency, cut costs, and unlock new revenue streams. Dubai’s tech-driven ecosystem rewards early adopters, and DigiExpo ensures your business stays competitive by applying the right innovations at the right time to secure growth and sustainability."
    }
  },{
    "@type": "Question",
    "name": "What future tech will impact Dubai companies next?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "AI-driven automation, digital twins, and sustainable smart systems represent Dubai’s next wave of innovation. DigiExpo tracks these emerging trends to prepare our clients for what’s coming. We help integrate forward-thinking solutions that enhance customer experience, logistics, and energy management. With our strategic guidance, Dubai companies stay ready for tomorrow’s technology — today."
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
          pageTitle={title}
          pageDesc={desc}
          canonicalUrl="https://www.digiexpo.ae/emerging-technology"
        />
        <NextGen />
      </Wrapper>
    </>
  );
};

export default Index;
