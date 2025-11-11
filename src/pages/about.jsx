
import dynamic from "next/dynamic";
const About = dynamic(() => import('../components/about2/index'), {
  ssr: true, // Enable SSR if needed, set to false if you want to disable SSR for this component
});
import SEO from '@/common/seo'
const about=()=>{
    return(
<div>
          <SEO pageTitle={"About Us | DigiExpo – Experts in Digital Marketing Dubai"} pageDesc={"Learn about DigiExpo, experts in digital marketing Dubai, helping brands grow online with strategy, creativity, and measurable results"} canonicalUrl={"https://www.digiexpo.ae/about"}/>

<About />
</div>
    )
}
export default about