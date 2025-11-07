import React from 'react'
import Empire from '../../components/Empiredevelopments/empire'

import SEO from '../../common/seo'
const Empiredevelopments = () => {
    const seoMetaData = {
    pageTitle: "Empire Developments Website Design & Development | DigiExpo Case Study",
    pageDesc:"Discover how DigiExpo transformed Empire Developments’ digital presence with a modern, responsive website that enhances user experience and drives real results."
  }
  return (
    <div>
      <SEO pageTitle={seoMetaData.pageTitle} pageDesc={seoMetaData.pageDesc}
      
      canonicalUrl="https://www.digiexpo.ae/casestudies/website/realestate/empire-developments"
      />
      <Empire />
    </div>
  )
}

export default Empiredevelopments
