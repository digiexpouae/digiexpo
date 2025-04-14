import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
    
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Google Analytics */}
        <Script
          strategy='afterInteractive'
          src='https://www.googletagmanager.com/gtag/js?id=G-KTZJ1X0WSB'
          async
        />
        <Script
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KTZJ1X0WSB');
            `,
          }}
        />

        {/* Tawk.to Live Chat */}
        <Script
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1= document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/66bdc0460cca4f8a7a76520a/1i5aje5ns';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </Html>
  );
}
