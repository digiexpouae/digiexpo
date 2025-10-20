import Header from "@/layout/headers/header-3"
import Footer from "@/layout/footers/footer-4"
import Section2 from "./section2"
import Herosection from "./herosection"
import Section3 from "./section3"
import Section4 from "./section4"
import Section5 from "./section5"
import Section6 from './section6'
import Section7 from './section7'
import Section8 from "./section8"
 import Brand from '../../components/about/brand'
 import ContactArea from '../../components/homes/home/contact-area'
const index=()=>{
    return (
    <> 
    <Header />
    <Herosection />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
    <Section8 />
    <Brand />
    <ContactArea />
    <Footer />
    
    
    </>
    )
}
export default index