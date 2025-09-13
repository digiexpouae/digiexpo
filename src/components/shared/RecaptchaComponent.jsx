'use client';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), { ssr: false });

export default function RecaptchaComponent({ onChange }) {
  const [visible, setVisible] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (!formRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px', threshold: 0.1 }
    );

    observer.observe(formRef.current);

    return () => observer.disconnect();
  }, [formRef.current]);

  return (
    <div ref={formRef}>
      {/* Always render container to avoid hydration mismatch */}
      {visible ? (
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={onChange}
        />
      ) : (
        <div style={{ height: '78px' }} /> // reserve space so layout doesn't jump
      )}
    </div>
  );
}
