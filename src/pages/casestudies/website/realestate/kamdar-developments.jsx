import Kamdar from '../../../../components/kamdardevelopments/index'
import SEO from '../../../../common/seo'

const kamdardevelopments = () => {
    const seoMetaData = {
        pageTitle: " Kamdar Developments Website Design & Development | DigiExpo Case Study",
        pageDesc:" See how DigiExpo transformed Kamdar Developments’ luxury-real-estate brand with a sleek, high-performance website that boosts visibility, engagement and conversions."
      }
    return (
        <div>
              <SEO pageTitle={seoMetaData.pageTitle} pageDesc={seoMetaData.pageDesc}
                  
                  canonicalUrl="https://www.digiexpo.ae/casestudies/website/realestate/kamdar-developments"
                  />
            <Kamdar />
        </div>
    )
}       
export default kamdardevelopments