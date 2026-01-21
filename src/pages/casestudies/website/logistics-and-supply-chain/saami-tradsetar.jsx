import Saami from '../../../../components/saamitradestar/index'
import SEO from '../../../../common/seo'
const saamitradestar = () => {
    const seoMetaData = {
        pageTitle: "Saami Tradestar Website Design & Development | DigiExpo Case Study",
        pageDesc: " Discover how DigiExpo empowered Saami Tradestar with a sleek, high-impact website that elevates brand visibility, boosts user engagement and drives business growth."
    }
    return (
        <div>
            <SEO pageTitle={seoMetaData.pageTitle} pageDesc={seoMetaData.pageDesc}

                canonicalUrl="https://www.digiexpo.ae/casestudies/website/logistics-and-supply-chain/saami-tradestar"
            />
            <Saami />
        </div>
    )
}
export default saamitradestar
