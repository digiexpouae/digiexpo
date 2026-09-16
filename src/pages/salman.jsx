import React, { useEffect } from 'react';
import SEO from "../common/seo";
import FooterFour from "@/layout/footers/footer-4";

import Header from "@/layout/headers/header-3";

const VCARD_URL = "/assets/Salman-Hussain-1.vcf";

export default function SalmanContactPage() {

  return (
    <>
      <SEO pageTitle={"Salman Hussain"} canonicalUrl={"https://www.digiexpo.ae/salman"} />
     
     <Header />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <h1 style={{ marginBottom: "8px" }}>Salman Hussain</h1>
        <p style={{ marginBottom: "4px" }}>CEO, DigiExpo.ae</p>
        <p style={{ marginBottom: "24px" }}>
          Your contact card download should start automatically.
        </p>
        <a
          href={VCARD_URL}
          download="Salman-Hussain-1.vcf"
          className="tp-btn-inner tp-btn-hover alt-color-black"
        >
          <span>Download Contact Card</span>
          <b></b>
        </a>
      </div>
      <FooterFour />
    </>
  );
}
