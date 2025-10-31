import Service from "@/components/service";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Head from "next/head";

const Services = () => {
  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Why best web design company Dubai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DigiExpo is considered one of the leading web design companies in Dubai, because we not only create websites, but we also create digital experiences that convert. Aesthetics, strategy, and speed optimization are combined in our designs to make a great user experience and business development more active. Each project is handled carefully and innovatively, and we ensure that clients get designs that exemplify the vision of their brand and work across all devices without glitches in Dubai's fast-paced online environment."
    }
  },{
    "@type": "Question",
    "name": "Do you offer full web design Dubai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, DigiExpo offers complete web design services in Dubai. Our process starts with the development of concepts, wireframing, UI/UX design, and responsive development. Our team ensures that each element fits into your brand image and the needs of the users. It is not important whether you need a business site, a startup portal, or an eCommerce site; DigiExpo will design a site that not only appeals to the eye but also delivers measurable business results."
    }
  },{
    "@type": "Question",
    "name": "How do you help Dubai startups?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "At DigiExpo, we assist companies in creating a robust digital presence for the Dubai-based startups through cost-effective web design, branding, and marketing plans, depending on their objectives. We specialize in rapid deployments, intuitive applications, and scalable systems. We also provide startup assistance on how to be visible online, how to attract and keep leads, and how to have people engage with your brand, so that your brand grows from day one."
    }
  },{
    "@type": "Question",
    "name": "Which Dubai industries do you serve?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DigiExpo has been working in diverse business areas across the Dubai market, such as real estate, hotel, healthcare, education, retail, and technology. We create web design and marketing strategies in line with the needs and goals of each of our clients. We also create e-commerce and commercial sites based on the vision and the demand of the business."
    }
  },{
    "@type": "Question",
    "name": "Do you build mobile-friendly websites?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we build web-friendly mobile websites. DigiExpo makes all the websites mobile-first responsive to make sure that they perform without any glitches on all devices. We are layout-optimistic, graphic-friendly, and load fast, so the user finds ease in navigation, whether it is through a smartphone or a tablet. DigiExpo ensures that your site is spectacular, yet gives a coherent, interesting experience across all screen sizes."
    }
  },{
    "@type": "Question",
    "name": "Do you offer post-launch website support?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, DigiExpo provides website maintenance services and support after the launch of your website. DigiExpo will keep up to date on all available security patches for your website, perform routine backups, and modify the content of your website as needed to ensure that your website is running smoothly and safely. We work with our clients over time as we work together toward reaching their digital goals and achieving success in this rapidly changing Dubai marketplace."
    }
  },{
    "@type": "Question",
    "name": "Why choose you for web design Dubai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We at DigiExpo believe that the best way to deliver innovative digital experiences that drive engagement and conversion is by combining a deep understanding of the marketplace and an understanding of how users interact with your website or mobile application. Our team of experts will create tailor-made solutions that suit your business's objectives. DigiExpo is the digital agency that you want to hire if you want a reliable partner to enable your digital growth to new levels."
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
          pageTitle="Web Design Company Dubai | Web Design Services | DigiExpo"
          pageDesc="DigiExpo is a trusted Web Design Company in Dubai offering professional web design services, website development, and SEO-friendly solutions in UAE."
          canonicalUrl="https://www.digiexpo.ae/services"
        />
        <Service />
      </Wrapper>
    </>
  );
};

export default Services;
