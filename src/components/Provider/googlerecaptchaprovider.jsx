"use client";
import dynamic from 'next/dynamic';

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
const DynamicGoogleReCaptchaProvider = dynamic(
  () => import("react-google-recaptcha-v3").then(mod => mod.GoogleReCaptchaProvider),
  { ssr: false } // Only load on the client-side
);
export default function RecaptchaWrapper({ children }) {
  return (
    <DynamicGoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "body",
      }}
    >
      {children}
    </DynamicGoogleReCaptchaProvider>
  );
}
