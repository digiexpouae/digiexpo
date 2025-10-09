import Service from "@/components/service";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
const Services = () => {
  return (
    <>
      <Wrapper>
        <SEO
          pageTitle={`Web Design Company Dubai | Web Design Services | DigiExpo`}
          pageDesc={`DigiExpo is a trusted Web Design Company in Dubai offering professional web design services, website development, and SEO-friendly solutions in UAE.`}
          canonicalUrl={'https://www.digiexpo.ae/services'}
        />
        <Service />
      </Wrapper>
    </>
  );
};

export default Services;
