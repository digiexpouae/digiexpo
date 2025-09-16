import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Critical resource hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://embed.tawk.to" />
        
        {/* Preload critical images */}
        <link
          rel="preload"
          as="image"
          href="/assets/img/herowebp/poster.webp"
          imageSrcSet="/assets/img/herowebp/poster.webp"
          imageSizes="100vw"
          fetchPriority="high"
        />
        
        {/* Preload critical CSS */}
        <link
          rel="preload"
          href="/assets/css/bootstrap.min.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        
        {/* Critical CSS for preventing layout shifts */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Prevent layout shifts */
            html { scroll-behavior: smooth; }
            body { margin: 0; padding: 0; }
            .preloader { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 9999; }
            .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
            @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
            /* Font display fallbacks */
            .font-dm-serif { font-family: var(--font-dm-serif), serif; }
            .font-montserrat { font-family: var(--font-montserrat-alt), sans-serif; }
            .font-jakarta { font-family: var(--font-plus-jakarta), sans-serif; }
            .font-urbanist { font-family: var(--font-urbanist), sans-serif; }
            .font-roboto { font-family: var(--font-roboto), sans-serif; }
          `
        }} />
        
        {/* Viewport and performance meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Google Analytics */}
        <Script
          strategy='lazyOnload'
          src='https://www.googletagmanager.com/gtag/js?id=G-KTZJ1X0WSB'
        
        />
        <Script
          strategy='lazyOnload'
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
          async
          defer
        />
      </body>
    </Html>
  );
}
