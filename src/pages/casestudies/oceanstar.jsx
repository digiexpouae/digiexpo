
import Ocean from '../../components/ocean star/ocean'
import SEO from '../../common/seo'

const oceanstar=()=>{
    const seoMetaData = {
        pageTitle: " Ocean Star Shipping Website Design & Social Media | DigiExpo Case Study",
        pageDesc:" See how DigiExpo boosted Ocean Star Shipping Logistics’ brand with a data-driven social media campaign and optimized online presence that drives engagement and visibility."
      }
    return(
        <div>
            <SEO pageTitle={seoMetaData.pageTitle} pageDesc={seoMetaData.pageDesc}
                canonicalUrl="https://www.digiexpo.ae/casestudies/website/logistics-and-supply-chain/oceanstar"
            />
            <Ocean />
        </div>
    )
}
export default oceanstar