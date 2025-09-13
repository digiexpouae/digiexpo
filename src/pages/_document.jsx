import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link
          rel="preload"
          as="image"
          href="/assets/img/hero/Hero BG Image.webp"
          imagesrcset="/assets/img/hero/Hero BG Image.webp?w=640 640w,
                       /assets/img/hero/Hero BG Image.webp?w=960 960w,
                       /assets/img/hero/Hero BG Image.webp?w=1280 1280w"

        /> */}

<link
          rel="preload"
          as="image"
          href="/assets/img/hero/hero_frame.webp"
          imagesrcset="/assets/img/hero/poster.webp"
          imagesizes="100vw"
            fetchpriority="high"
        />


     <link
          rel="preload"
          as="image"
          href="/assets/img/hero/poster.webp"
          imagesrcset="/assets/img/hero/poster.webp"
          imagesizes="100vw"
            fetchpriority="high"
        />


      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Google Analytics */}
        <Script
          strategy='afterInteractive'
          src='https://www.googletagmanager.com/gtag/js?id=G-KTZJ1X0WSB'
          async
          defer
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
          strategy="lazyOnload"
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
