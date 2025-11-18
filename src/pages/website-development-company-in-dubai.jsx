import React from "react";
import SEO from "../common/seo";
import dynamic from "next/dynamic";
const WebDevelopment = dynamic(() => import('../components/webDevelopment'), {
  ssr: true, // Enable SSR if needed, set to false if you want to disable SSR for this component
});
import Wrapper from "../layout/wrapper";
import Head from "next/head";

const Index = () => {
  const [title, desc] = [
    `Website Development Dubai | Web Development Expert | DigiExpo`,
    `DigiExpo is a top Website Development Dubai expert offering custom web design, ecommerce sites, and SEO-ready solutions to boost your business online.`,
  ];

  // Schema as a JS object
  const faqSchema ={
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How to fix a slow website development Dubai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DigiExpo specializes in diagnosing and repairing slow websites. Our developers examine the backend performance, image optimization, and code efficiency to determine the bottlenecks. We then optimize your site to be loaded faster and more stably. User retention and SEO ranking in the Dubai market directly depend on speed; therefore, we help your site run well, leaving users with a pleasant experience of a high-performing and smooth website."
    }
  },{
    "@type": "Question",
    "name": "Why is my Dubai site not getting traffic?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "If your Dubai site is failing to draw traffic, it is probably because of the low level of SEO, slow loading, or insufficient content strategy. We do a full audit at DigiExpo in order to find the visibility barriers and rectify them within a short time. We streamline site composition, content, and backlinks to conform to updated Google algorithms. Our tested SEO marketing techniques will assist Dubai brands to expand on organic coverage and attract specific visitors to the site."
    }
  },{
    "@type": "Question",
    "name": "Can you rebuild old Dubai business websites?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, DigiExpo rebuilds old Dubai business websites with a new design, fast, and with functionality. We keep your brand vision and make the platform look new and future-oriented. Everything is updated, including layout and the code standard, to the present market expectations of Dubai. Through DigiExpo, your out-of-date site is transformed into an asset that will run fast and convey the sense of innovation and authority."
    }
  },{
    "@type": "Question",
    "name": "How to make Dubai site mobile-friendly fast?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DigiExpo is fast to convert non-responsive sites into mobile-friendly ones. Our expert team optimizes designs, buttons, and content for each screen size without losing visual quality and also applies dynamic structures and testing systems to make sure that your Dubai site has a smooth operation on all devices. DigiExpo can help your business attract more customers and enhance engagement on mobile platforms."
    }
  },{
    "@type": "Question",
    "name": "Why my site ranks low on Google UAE?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Low ranks occur when you do not optimize for SEO very well, perform poorly, or cannot align good content. DigiExpo tackles all these issues with thorough audits and data-driven improvements. We focus on the most powerful keywords for the UAE market, boost website speed, and increase its authority with high-quality backlinks. With the SEO strategy provided by DigiExpo, your website will get increased visibility, higher rankings, and more organic traffic."
    }
  },{
    "@type": "Question",
    "name": "How to reduce website bounce rate Dubai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DigiExpo aims to enhance user experience and content relevance to reduce the bounce rate. We examine the actions of visitors, optimize the route of navigation, and enhance the aspects of design so that the continuity of the users is maintained. The interaction process will be enhanced by increasing the loading time and creating clear CTAs. DigiExpo transforms sites into easy-to-use and conversion-driven types of websites that users would love browsing."
    }
  },{
    "@type": "Question",
    "name": "How to improve Dubai website user experience?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "At DigiExpo, we enhance website user experience (UX) design by combining data-driven user behavior with creative design. We study the user’s behavior to find the point of friction and rebuild navigation, and make it simple and clear. We ensure that the images, content, and speed are all optimized to provide an uninterrupted surfing experience."
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
          canonicalUrl="https://www.digiexpo.ae/website-development-company-in-dubai"
        />
        <WebDevelopment />
      </Wrapper>
    </>
  );
};

export default Index;
