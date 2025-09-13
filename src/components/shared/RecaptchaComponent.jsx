import { useEffect, useRef, useState } from "react";

import dynamic from "next/dynamic";

const ReCAPTCHA  = dynamic(
  () => import( "react-google-recaptcha"),
  { ssr: false }
);
export default function RecaptchaComponent({ onChange,formref }) {
  const [visible, setVisible] = useState(false); // control when to mount ReCAPTCHA
  // const formRef = useRef(null);

  useEffect(() => {
    if (!formref) return;
  
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // start loading BEFORE the form is actually visible
        threshold: 0,        // trigger as soon as it enters the viewport
      }
    );
  
    observer.observe(formref.current);
  
    return () => observer.disconnect();
  }, []);
  
  return (
    <div>
      {visible &&(
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={onChange}
        />
      ) }
    </div>
  );
}
