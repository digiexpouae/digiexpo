import React from "react";
import SEO from "../common/seo";
import DigitalMarketing from "../components/digitalMarketing";
import Wrapper from "../layout/wrapper";
import Head from "next/head";

const Index = () => {
  const [pageTitle, pageDescription] = [
    `Best Digital Marketing Agency In UAE | Digital Marketing Agency`,
    `Increase your company's growth with the best Digital Marketing agency in UAE. DigiExpo is your top choice for digital marketing agency services in Dubai.`,
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What’s the most effective digital marketing approach for businesses in Dubai right now?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dubai businesses combine SEO, PPC, and social media ads. It is the most effective marketing strategy. This mix lets businesses target many customers through a variety of channels. Personalization is important, and data analytics may help you provide the right message at the right moment. Working with influencers and doing content marketing can help people trust your business and learn more about it. These strategies combine to create a strong online presence. This presence helps your business thrive."
        }
      },
      {
        "@type": "Question",
        "name": "How does SEO help local businesses rank higher on Google in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO enables local companies to appear higher in Google search results by optimizing their website content and profiles for keywords specific to their area. This means keeping Google My Business listings up to date and asking for good ratings. Better local SEO implies that people in the region can rapidly find the business when they search for services that are related to it. SEO not only helps your website rank higher, but it also makes it easier to use and more trustworthy."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of using PPC advertising for lead generation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PPC advertising helps generate leads by targeting those who are actively looking for goods or services. This means that ads get to those who are very interested, which makes it more likely that clicks will turn into leads. Businesses can control their spending and try out different ad styles with PPC campaigns to see what performs best. Companies can get the most out of their money with PPC because the outcomes can be measured. This makes it a sensible way to get good leads quickly."
        }
      },
      {
        "@type": "Question",
        "name": "Which social media platforms should UAE businesses focus on in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In 2025, UAE businesses should focus on Instagram, LinkedIn, TikTok, and Facebook because they have a lot of active users. Instagram works well for picture-based campaigns and influencer collaborations. LinkedIn is great for B2B marketing. TikTok is growing quickly, which gives you a chance to reach younger people with creative content. Facebook is still a good way to contact a lot of different types of people. Pick the right platforms based on where your ideal clients hang out online."
        }
      },
      {
        "@type": "Question",
        "name": "How can email marketing automation increase customer retention?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Email marketing automation sends personalized communications depending on what users do and like. It helps in keeping customers. Automated emails, for instance, can suggest things based on what a consumer has bought in the past or remind them about carts they left behind. This constant, personalized communication keeps the brand in people's minds. It also motivates them to buy from you again without you having to do anything. Automation also gives businesses information on how customers behave, which helps them improve their strategy and provide customers with even more useful content."
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
