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
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the top eCommerce trends shaping Dubai in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The e-commerce scene in Dubai in 2025 is full of new and intriguing developments. AI-powered personalization is a big deal, making online shopping feel personalized. Retailers are focusing on faster mobile checkout. Social media, through short videos and influencer collaborations, is driving buying behavior. Sustainability is also key, with eco-friendly packaging and ethical sourcing becoming standard. These trends align with Dubai's fast pace and appeal to eco-conscious shoppers."
        }
      },
      {
        "@type": "Question",
        "name": "How can AI-powered personalization boost online sales for Dubai retailers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI helps Dubai retailers boost sales by analyzing customer preferences and recommending personalized products or offers. It also powers chatbots for instant assistance, improves inventory management, and sets competitive pricing. This smart personalization increases customer satisfaction and encourages repeat purchases."
        }
      },
      {
        "@type": "Question",
        "name": "Why is offering diverse payment options essential for UAE shoppers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Offering diverse payment options is essential in the UAE because shoppers prefer flexibility. Popular methods include credit cards, digital wallets like Apple Pay and Samsung Pay, 'Buy Now, Pay Later' plans, and local payment gateways. Providing multiple options reduces cart abandonment, builds trust, and helps businesses increase sales."
        }
      },
      {
        "@type": "Question",
        "name": "How is sustainability influencing eCommerce in Dubai today?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sustainability is a growing focus in Dubai's eCommerce industry. Businesses are adopting eco-friendly packaging, partnering with green delivery firms, and sourcing products responsibly. Customers increasingly prefer brands with environmental values. Retailers highlight sustainability efforts to build trust and align with Dubai's vision for a greener future."
        }
      },
      {
        "@type": "Question",
        "name": "What role do AR and immersive tech play in enhancing the online shopping journey?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Augmented reality (AR) and immersive technologies are transforming Dubai's online shopping experience. Shoppers can virtually try on clothes, accessories, or preview furniture at home, reducing uncertainty and product returns. Interactive 3D experiences boost buyer confidence and engagement. Retailers using AR stand out by offering a modern, interactive shopping journey."
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
          canonicalUrl="https://www.digiexpo.ae/dubai-ecommerce-agency"
        />
        <ECommerce />
      </Wrapper>
    </>
  );
};

export default Index;
