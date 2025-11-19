import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

// ✅ Recommended: Use next/font for better font loading
// Example:
// import { DM_Serif_Display, Montserrat } from "next/font/google";
// const dmSerif = DM_Serif_Display({ subsets: ["latin"], display: "swap" });
// const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        {/* Using next/font in _app.jsx, so no Google Fonts preconnects */}

        {/* ✅ DNS Prefetch for Tawk.to (non-blocking) */}
        <link rel="dns-prefetch" href="https://embed.tawk.to" />
<link rel="preload" as="image" href="/assets/img/herowebp/poster.webp" fetchpriority="high" />

        {/* ❌ Removed manual image preload - use next/image with `priority` instead */}

        {/* Removed Bootstrap preload: styles are bundled via SCSS */}

        {/* ✅ Inline critical CSS to prevent layout shifts */}

        <style
          dangerouslySetInnerHTML={{
            __html: `
              html { scroll-behavior: smooth; }
              body { margin: 0; padding: 0; }
              .preloader { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 9999; }
              .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
              @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
              /* Font display fallbacks (can remove if using next/font) */
              .font-dm-serif { font-family: var(--font-dm-serif), serif; }
              .font-montserrat { font-family: var(--font-montserrat-alt), sans-serif; }
              .font-jakarta { font-family: var(--font-plus-jakarta), sans-serif; }
              .font-urbanist { font-family: var(--font-urbanist), sans-serif; }
              .font-roboto { font-family: var(--font-roboto), sans-serif; }
            `,
          }}
        />


        {/* ✅ Viewport meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* ✅ Google Analytics (lazy load, doesn't block rendering) */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-KTZJ1X0WSB"
        />
        <Script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KTZJ1X0WSB');
            `,
          }}
        />
          <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.6/lottie.min.js"
          strategy="afterInteractive" // ✅ ensures it runs after page loads
        />

        {/* ✅ Tawk.to Live Chat - still lazy loaded to avoid blocking */}
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
