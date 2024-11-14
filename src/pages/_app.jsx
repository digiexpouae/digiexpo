import "../styles/index.scss"; 
import { useRouter } from 'next/router';
import { useEffect } from 'react';

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const allowedPaths = ['/', '/blogs/how-to-dominate-the-uae-market-with-effective-social-media-strategies', '/contact', '/digital-marketing-agency-dubai', '/website-development-company-in-dubai', '/best-web-design-company-dubai', '/mobile-app-development-company-dubai', '/dubai-ecommerce-agency', '/emerging-technology'];

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Redirect to 404 if the current path is not in the allowed list
    if (!allowedPaths.includes(router.pathname)) {
      router.replace('/404'); // Redirects to custom 404 page
    }
  }, [router.pathname]);

  return <Component {...pageProps} />;
}
