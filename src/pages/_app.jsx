import '../styles/globals.css'
import "../styles/index.scss";
import "../styles/business-box.scss";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DM_Serif_Display, Montserrat_Alternates, Plus_Jakarta_Sans, Urbanist, Roboto } from "next/font/google";

// Optimized font loading with display: swap and preload
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
  preload: true,
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "600"], // Reduced weights for better performance
  variable: "--font-montserrat-alt",
  display: "swap",
  preload: true,
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"], // Reduced weights for better performance
  variable: "--font-plus-jakarta",
  display: "swap",
  preload: true,
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600"], // Reduced weights for better performance
  variable: "--font-urbanist",
  display: "swap",
  preload: true,
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Reduced weights for better performance
  style: ["normal"],
  variable: "--font-roboto",
  display: "swap",
  preload: true,
}); 

import client from "@/sanityConfig";

const allowedPaths = [
  "/",
  "/contact",
  "/digital-marketing-agency-dubai",
  "/website-development-company-in-dubai",
  "/best-web-design-company-dubai",
  "/mobile-app-development-company-dubai",
  "/dubai-ecommerce-agency",
  "/emerging-technology",
];

export async function getAllowedPaths() {
  const query = `*[_type == "blog"]{ "slug": slug.current }`;
  const blogs = await client.fetch(query);

  const blogPaths = blogs.map((blog) => `/blogs/${blog.slug}`);
  return [...allowedPaths, ...blogPaths];
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [allowedPaths, setAllowedPaths] = useState([]);

  // Lazy load Bootstrap to prevent forced reflows
  useEffect(() => {

    
    const loadBootstrap = async () => {
      if (typeof window !== "undefined") {
        // Use dynamic import to defer Bootstrap loading
        await import("bootstrap/dist/js/bootstrap");
      }
    };
    
    // Load Bootstrap after initial render to prevent blocking
    const timer = setTimeout(loadBootstrap, 100);
    return () => clearTimeout(timer);
  }, []);
   useEffect(() => {
    // ✅ Crisp Chat
    if (typeof window !== "undefined" && !window.$crisp) {
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "51aaf20a-6a00-46fa-8a7b-918ce1c4cbd1";

      const s = document.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = true;
      document.head.appendChild(s);
    }
  },[])

  // useEffect(() => {
  //   async function fetchPaths() {
  //     const paths = await getAllowedPaths();
  //     setAllowedPaths(paths);
  //   }
  //   fetchPaths();
  // }, []);

  // useEffect(() => {
  //   if (allowedPaths.length > 0) {
  //     const isAllowed =
  //       allowedPaths.includes(router.pathname) || // Check exact paths
  //       router.pathname.startsWith("/blogs/"); // Allow dynamic blog routes

  //     if (!isAllowed) {
  //       router.replace("/404");
  //     }
  //   }
  // }, [router.pathname, allowedPaths]);

  return     <main
  className={`${dmSerif.variable} ${montserratAlternates.variable} ${plusJakarta.variable} ${urbanist.variable} ${roboto.variable}`}
>
     {/* 🔹 reCAPTCHA v3 wrapper */}
        <Component {...pageProps} />
</main>
}