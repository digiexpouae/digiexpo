import Head from "next/head";
import { useEffect } from "react";

const SEO = ({ pageTitle, pageDesc, canonicalUrl ,ogImage, ogDescription,ogTitle ,
  metaTags,

  }) => {
  useEffect(() => {
    // Facebook Pixel initialization
    window.fbq = function () {
      window.fbq.callMethod
        ? window.fbq.callMethod.apply(window.fbq, arguments)
        : window.fbq.queue.push(arguments);
    };

    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = "2.0";
    window.fbq.queue = [];

    window.fbq("init", "876212977413359"); // Your Pixel ID
    window.fbq("track", "PageView");
  }, []);
  return (
    <>
      <Head>
        <title>{pageTitle && `${pageTitle}`}</title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content={pageDesc && `${pageDesc}`} />
        {/* <meta name="robots" content="noindex, follow" /> */}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

        <meta name="og:Image" content={ogImage} />
        <meta name="og:Description" content={ogDescription} />
        <meta name="og:Title" content={ogTitle} />
        <meta name="google-site-verification" content="4OIjRBBSzprqzeFICro6NWDNkOGlWTIWvV_ixDoYCFM" />
        {Array.isArray(metaTags) && metaTags?.length> 0 && metaTags.map((item,index)=>{
          return <meta name="metaTags" content={item} key={index} />

        })}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "digiexpo.ae",
              url: "https://www.digiexpo.ae/",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.digiexpo.ae/search?query={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Digiexpo.ae",
              alternateName: "DigiExpo",
              url: "https://www.digiexpo.ae/",
              logo: "https://www.digiexpo.ae/_next/static/media/mainlogo.46431c48.png",
              sameAs: [
                "https://www.facebook.com/digiexpo.ae/",
                "https://www.instagram.com/digiexpo_/",
                "https://www.linkedin.com/company/digiexpo-ae/",
                "https://www.digiexpo.ae/",
              ],
            }),
          }}
        />
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "DigiExpo",
      "url": "https://www.digiexpo.ae/",
      "logo": "https://www.digiexpo.ae/path-to-logo.jpg",
      "image": "https://www.digiexpo.ae/path-to-image.jpg",
      "description": "DigiExpo is a leading digital marketing agency in Dubai, UAE, offering services in digital marketing, website development, UI/UX design, mobile apps, e-commerce, and emerging technologies.",
      "telephone": "+971 552 626 943",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ontario Tower - Office no 1801, 18th Floor, Business Bay",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "postalCode": "",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.1851,
        "longitude": 55.2644
      },
      "openingHours": "Mo-Fr 09:00-18:00",
      "sameAs": [
        "https://www.facebook.com/digiexpo",
        "https://www.linkedin.com/company/digiexpo",
        "https://twitter.com/digiexpo"
      ]
    }),
  }}
/>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=876212977413359&ev=PageView&noscript=1"
            alt="facebook-pixel"
          />
        </noscript>
        <meta
          name="google--verification"
          content="4OIjRBBSzprqzeFICro6NWDNkOGlWTIWvV_ixDoYCFM"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
    </>
  );
};

export default SEO;
