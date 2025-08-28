import ReCAPTCHA from "react-google-recaptcha";

export default function RecaptchaComponent({ onChange }) {
  return (
    <ReCAPTCHA
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      onChange={onChange}
    />
  );
}






