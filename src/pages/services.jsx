import Service from "@/components/service";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
const Services = () => {
  return (
    <>
      <Wrapper>
        <SEO
          pageTitle={`Creative Web Design Services in UAE - DigiExpo`}
          pageDesc={`Explore DigiExpo's wide range of digital marketing services, including SEO, web development, social media management, and PPC, designed to elevate your business success.`}
          canonicalUrl={'https://www.digiexpo.ae/services'}
        />
        <Service />
      </Wrapper>
    </>
  );
};

export default Services;
