import React from "react";
import SEO from "../common/seo";
import DesignPage from "../components/designPage";
import Wrapper from "../layout/wrapper";
import Head from "next/head";

const Index = () => {
  const [title, desc] = [
    `UI UX Design Services | Creative UI/UX Experts | DigiExpo`,
    ` DigiExpo offers professional UI UX Design services with creative, user-friendly, and responsive solutions to enhance user experience and boost engagement.`,
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What modern web design trends are dominating Dubai in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In 2025, Dubai's web design will focus on simplicity and boldness. Expect huge fonts, clear layouts, and standout colors. Design that works well on phones is a necessity because most people use them to browse. To keep things interesting, websites are incorporating small animations and even 3D elements. Some companies use augmented reality to let you try on things before you buy them. AI also changes what you see based on what you like. All this makes sites quick, nice to look at, and easy to use, which is something that Dubai businesses adore."
        }
      },
      {
        "@type": "Question",
        "name": "Why is mobile-first design essential for UAE businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A lot of people here use their phones to access the web first. Therefore, mobile-first design is quite important. When you design websites with phones in mind, they load quickly and are easy to use on small displays. It also helps the site get a better ranking on Google. Dubai businesses want to make sure that clients have a good experience no matter where they are. This keeps users on the site longer and increases revenue. In a market that moves quickly, mobile-first is no longer a choice; it's the standard."
        }
      },
      {
        "@type": "Question",
        "name": "How does AI personalization enhance web conversions for Dubai brands?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI personalization helps Dubai websites display things that are important to clients. AI learns what you like by watching what you click on or buy, not by giving you random product lists. Then it suggests goods that are comparable or go well with what you already have, which makes shopping faster and more fun. Customers are more inclined to come back since they have a personalized experience. For brands, this means more sales and happier customers in Dubai's very competitive online market."
        }
      },
      {
        "@type": "Question",
        "name": "What role do immersive technologies like 3D, AR, and AI chatbots play in website design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Websites in Dubai are getting a lot cooler because of 3D visuals, augmented reality, and AI chatbots. 3D makes things look real. AR allows you to try things out in a virtual world, and chatbots are always there to answer your queries. This technology makes shopping easier and more fun, which makes people feel good about what they buy. Dubai brands may stand out by using these technologies to create new, easy-to-use websites that customers want to visit again and again."
        }
      },
      {
        "@type": "Question",
        "name": "How important is accessible and sustainable web design for UAE enterprises?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Accessible web design makes it easy for everyone; even people with disabilities can use a website. Sustainable design makes sure that sites load quickly and don't waste energy. Companies in Dubai that do each of these things show that they care about both people and the earth. It helps them stay legal, get more consumers, and improve their brand image. Also, it matches Dubai's green aspirations. So, websites that are easy to use and last a long time are good for both businesses and customers."
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
          canonicalUrl="https://www.digiexpo.ae/best-web-design-company-dubai"
        />
        <DesignPage />
      </Wrapper>
    </>
  );
};

export default Index;
