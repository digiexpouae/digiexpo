import Link from "next/link";
import { useState } from "react";
import ContactUsFormMuz from "@/forms/contact-us-form-muz";

const social_links = [
  {
    link: "https://wa.me/971501435647?text=Hello%20DigiExpo!%20%F0%9F%91%8B",
    target: "_blank",
    icon: (
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 1.44 1.44"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#7b41f9"
          d="M1.167 0.243A0.627 0.627 0 0 0 0.096 0.684 0.6 0.6 0 0 0 0.18 0.996L0.09 1.32l0.333 -0.087a0.6 0.6 0 0 0 0.3 0.075A0.624 0.624 0 0 0 1.167 0.243m-0.444 0.96a0.5 0.5 0 0 1 -0.285 -0.084L0.24 1.173l0.054 -0.192a0.54 0.54 0 0 1 -0.093 -0.297 0.522 0.522 0 1 1 0.522 0.519"
        ></path>
        <path
          fill="#7b41f9"
          d="M1.008 0.816a0.99 0.99 0 0 0 -0.108 -0.051c-0.012 -0.006 -0.024 -0.009 -0.033 0.006s-0.042 0.051 -0.051 0.063a0.024 0.024 0 0 1 -0.033 0.003 0.501 0.501 0 0 1 -0.126 -0.078 0.501 0.501 0 0 1 -0.087 -0.108 0.02 0.02 0 0 1 0.006 -0.03l0.024 -0.03 0.015 -0.024a0.03 0.03 0 0 0 0 -0.027c-0.006 -0.009 -0.036 -0.084 -0.048 -0.117s-0.027 -0.027 -0.036 -0.027h-0.03a0.05 0.05 0 0 0 -0.042 0.021 0.17 0.17 0 0 0 -0.054 0.129 0.3 0.3 0 0 0 0.063 0.162c0.009 0.009 0.111 0.168 0.267 0.234a0.501 0.501 0 0 0 0.09 0.033 0.2 0.2 0 0 0 0.099 0.006c0.03 -0.003 0.093 -0.036 0.105 -0.072s0.015 -0.069 0.009 -0.075a0.099 0.099 0 0 0 -0.03 -0.018"
        ></path>
      </svg>
    ),
  },
  {
    link: "tel:+971501435647",
    target: "_blank",
    icon: (
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 0.72 0.72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.115 0.12h0.135L0.293 0.229l-0.07 0.046A0.03 0.03 0 0 0 0.21 0.3c0 0.003 0 0 0 0v0.001a0.06 0.06 0 0 0 0 0.004q0 0.004 0.001 0.01c0.001 0.008 0.003 0.019 0.008 0.032 0.009 0.026 0.026 0.061 0.06 0.094s0.068 0.051 0.094 0.06c0.013 0.004 0.024 0.007 0.032 0.008a0.12 0.12 0 0 0 0.014 0.001l0 0h0s0.003 0 0 0a0.03 0.03 0 0 0 0.027 -0.017l0.02 -0.04 0.133 0.022v0.13c-0.063 0.009 -0.234 0.018 -0.369 -0.116S0.106 0.183 0.115 0.12m0.157 0.195 0.054 -0.036a0.06 0.06 0 0 0 0.022 -0.072L0.305 0.098A0.06 0.06 0 0 0 0.25 0.06H0.113c-0.027 0 -0.053 0.019 -0.057 0.049 -0.01 0.067 -0.024 0.266 0.133 0.423s0.355 0.143 0.423 0.133c0.03 -0.004 0.049 -0.03 0.049 -0.057v-0.131a0.06 0.06 0 0 0 -0.05 -0.059l-0.133 -0.022a0.06 0.06 0 0 0 -0.064 0.032l-0.01 0.021a0.15 0.15 0 0 1 -0.011 -0.003c-0.019 -0.006 -0.044 -0.019 -0.071 -0.045s-0.039 -0.052 -0.045 -0.071a0.15 0.15 0 0 1 -0.004 -0.013z"
          fill="#7b41f9"
        />
      </svg>
    ),
  },
];

const StickyButtons = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="mobile-only">
        <div className="mobile-social-wrapper">
          {social_links.map((l, i) => (
            <Link
              key={i}
              href={l.link}
              className={l.color}
              target={l.target ? l.target : ""}
            >
              {l.icon}
            </Link>
          ))}
        </div>
        <div className="mobile-quote-wrapper">
          <button onClick={toggleForm}>Get A Quote</button>
        </div>
        <div
        id="formContainer"
        className={`form-container ${isFormOpen ? "open" : ""}`}
      >
        <p className="tp-section-title-4 text-white">Let's Talk</p>
        <span onClick={toggleForm} className="close-btn">
          &times;
        </span>
        <div className="form-content">
          <ContactUsFormMuz />
        </div>
      </div>
      </div>
    </>
  );
};

export default StickyButtons;
