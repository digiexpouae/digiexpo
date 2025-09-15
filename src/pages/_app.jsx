import "../styles/index.scss";
import "../styles/business-box.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DM_Serif_Display, Montserrat_Alternates, Plus_Jakarta_Sans, Urbanist, Roboto } from "next/font/google";

// Pick the weights/styles you need
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"], // normal weight only
  style: ["normal", "italic"], // include italic
  variable: "--font-dm-serif", // optional custom CSS variable
});
// 
const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat-alt",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
});
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

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