import React from "react";
import SEO from "../common/seo";
import dynamic from "next/dynamic";  // Import dynamic for code splitting
// Dynamically import the DesignPage component
const DesignPage = dynamic(() => import("../components/designPage"), {
  ssr: true,  // This ensures the component is server-side rendered for SEO purposes
});import Wrapper from "../layout/wrapper";
import Head from "next/head";

const Index = () => {
  const [title, desc] = [
    `UI UX Design Services | Creative UI/UX Experts | DigiExpo`,
    ` DigiExpo offers professional UI UX Design services with creative, user-friendly, and responsive solutions to enhance user experience and boost engagement.`,
  ];

  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How can UI/UX boost Dubai conversions?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Strong UI/UX design has a direct impact on conversions. At DigiExpo, we design interfaces that naturally lead the user to action—whether it’s a purchase, sign-up, or inquiry. Our approach focuses on clarity, consistency, and emotional connection. DigiExpo helps Dubai companies transform visitors into loyal customers with a blend of psychology and responsive design. This method boosts customer engagement and drives measurable revenue growth with every online interaction."
    }
  },{
    "@type": "Question",
    "name": "Why Dubai websites fail to engage users?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Many Dubai websites fail to engage users because of cluttered designs, slow loading speeds, and confusing navigation. At DigiExpo, we identify these engagement issues and redesign sites with a clean layout, meaningful visuals, and intuitive navigation. We focus on aligning brand emotion with user intent so that every design element has purpose. DigiExpo’s approach keeps audiences engaged and turns passive visitors into active participants."
    }
  },{
    "@type": "Question",
    "name": "Best way to improve UAE site navigation?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DigiExpo enhances website navigation by making it simple, structured, and user-centered. We refine menus, improve labeling, and reduce unnecessary clicks on key pages. Our UX designers test navigation flows with real users to ensure they can find what they need easily. DigiExpo applies smart hierarchies and visual cues, making UAE websites seamless and intuitive to explore."
    }
  },{
    "@type": "Question",
    "name": "How UI/UX design affects SEO in Dubai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "UI/UX and SEO are deeply connected. At DigiExpo, we design interfaces that increase engagement metrics like dwell time and click-through rate—key factors in better rankings. A clear structure helps search engines crawl pages more effectively, while fast-loading and responsive designs improve satisfaction for both users and algorithms. DigiExpo ensures your Dubai website not only looks great but also performs exceptionally in Google’s evolving SEO landscape."
    }
  },{
    "@type": "Question",
    "name": "Why mobile-friendly UI/UX matters in Dubai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DigiExpo understands that most Dubai audiences browse through smartphones. A mobile-friendly UI/UX ensures your website loads quickly, looks great, and functions flawlessly on any device. It improves engagement, reduces bounce rates, and increases conversions. Our responsive layouts automatically adapt to all screen sizes, giving Dubai brands the ability to deliver smooth and memorable digital experiences everywhere."
    }
  },{
    "@type": "Question",
    "name": "Common UI/UX mistakes Dubai startups make?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Many Dubai startups skip user testing, overload designs with unnecessary visuals, or neglect mobile optimization—hurting engagement and credibility. Effective UI/UX must be practical, accessible, and goal-oriented. DigiExpo helps startups avoid poor navigation, slow loading, and confusing layouts, ensuring from the start that their websites are professional, emotional, and user-focused."
    }
  },{
    "@type": "Question",
    "name": "How do you test UX before site launch?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DigiExpo performs comprehensive UX testing before any website goes live. We use usability studies, behavioral analysis, and A/B testing to observe real user interactions. Every click, scroll, and navigation path is analyzed to identify friction points early. This ensures that the final product is intuitive, engaging, and optimized for Dubai’s diverse digital audience."
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
          canonicalUrl="https://www.digiexpo.ae/ui-ux-design-services-dubai"
        />
        <DesignPage />
      </Wrapper>
    </>
  );
};

export default Index;
