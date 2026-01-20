import Header from "@/layout/headers/header-2"
import Footer from "@/layout/footers/footer-4"
import Section from '../components/casestudiestwo/section'
import ContactArea from "@/components/homes/home/contact-area"
import Section2 from '../components/casestudiestwo/section2'
import Section3 from '../components/casestudiestwo/section3'
import Section1 from "@/components/casestudiestwo/section1"
import SEO from "@/common/seo"
const casestudies = () => {
  return (
    <>

      <SEO pageTitle={"Case Studies | Website Design Dubai Projects – DigiExpo"} pageDesc={"Explore DigiExpo case studies on Website Design Dubai projects, showcasing custom websites, digital solutions, and client success stories."} canonicalUrl={"https://www.digiexpo.ae/casestudies"} />

      <Header />
      <Section />
      <Section1 />
      <Section3 />
      <ContactArea />
      <Footer />


    </>
  )
}
export default casestudies