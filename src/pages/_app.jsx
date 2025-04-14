import "../styles/index.scss";
import "../styles/business-box.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
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

  return (
    <main className={jakarta.className}>
      <Component {...pageProps} />
    </main>
  );
}
