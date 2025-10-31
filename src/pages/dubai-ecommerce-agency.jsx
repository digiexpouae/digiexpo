import React from "react";
import SEO from "../common/seo";
import ECommerce from "../components/eCommerce";
import Wrapper from "../layout/wrapper";
import Head from "next/head";

const Index = () => {
  const title = `Ecommerce Website Development Dubai | DigiExpo Experts`;
  const desc = `DigiExpo is a leading Ecommerce Website Development Dubai company delivering custom, scalable, and user-friendly online stores to grow your sales.`;

  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Who builds the best eCommerce sites in Dubai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DigiExpo is the best eCommerce development company in Dubai, building eCommerce stores that are fast, efficient, and visually appealing. We deliver a seamless shopping experience across devices by combining design intelligence, performance, and strategic functionality. Our solutions include local payment integrations and UAE-specific SEO. DigiExpo is your ideal partner if you want to scale your eCommerce business with a sustainable, long-term approach."
    }
  },{
    "@type": "Question",
    "name": "Why hire a Dubai agency for eCommerce sites?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "When you hire a Dubai-based agency, you work with experts who understand the region’s online shopping culture, local payment systems, and consumer behavior. DigiExpo designs conversion-driven eCommerce websites that connect emotionally and commercially with UAE shoppers. From development to maintenance, we ensure that your store runs smoothly, ranks well, and provides an exceptional buying experience for your customers."
    }
  },{
    "@type": "Question",
    "name": "Do you make fast eCommerce stores in Dubai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, DigiExpo develops high-speed eCommerce stores tailored to Dubai’s fast-paced market. Our developers focus on performance and aesthetics to ensure seamless browsing and faster load times. In a city where every second counts, we build eCommerce stores optimized for speed—keeping customers engaged, reducing bounce rates, and driving higher conversions."
    }
  },{
    "@type": "Question",
    "name": "Can you add UAE payment gateways?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DigiExpo integrates secure UAE payment gateways such as PayTabs, Telr, and Checkout.com to ensure smooth and trustworthy transactions. We enable multiple currencies and local banking options to enhance accessibility. With secure payment processing, your Dubai customers can shop confidently—boosting trust, purchase completion rates, and overall satisfaction."
    }
  },{
    "@type": "Question",
    "name": "Do you create mobile-friendly eCommerce sites in Dubai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, DigiExpo designs fully mobile-responsive eCommerce websites optimized for Dubai’s smartphone-driven market. We ensure flawless performance on every device, with thumb-friendly layouts, quick product loading, and secure transactions. Our mobile-first approach guarantees that your customers enjoy a convenient, beautiful shopping experience anytime, anywhere—driving more conversions on Android and iOS alike."
    }
  },{
    "@type": "Question",
    "name": "How do you secure Dubai eCommerce websites?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "At DigiExpo, eCommerce security is a top priority. We implement SSL encryption, firewalls, and malware protection to safeguard customer data and transactions. Dubai shoppers value trust and reliability, so we ensure your online store meets the highest security standards—offering a safe, worry-free experience that builds loyalty and confidence in your brand."
    }
  },{
    "@type": "Question",
    "name": "Can you redesign old eCommerce stores in Dubai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, DigiExpo can completely revamp outdated eCommerce websites in Dubai into modern, conversion-optimized platforms. We redesign layouts, improve speed, and streamline checkout processes to maximize sales. Your new store will align with your brand identity and customer needs. DigiExpo helps transform your eCommerce site into a high-performing, trustworthy, and visually appealing sales engine."
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
          canonicalUrl="https://www.digiexpo.ae/dubai-ecommerce-agency"
        />
        <ECommerce />
      </Wrapper>
    </>
  );
};

export default Index;
