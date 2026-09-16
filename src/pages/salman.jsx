import React, { useEffect } from 'react';
import SEO from "../common/seo";

const VCARD_URL = "/assets/Salman-Hussain-1.vcf";

export default function SalmanContactPage() {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = VCARD_URL;
    link.download = "Salman-Hussain-1.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <>
      <SEO pageTitle={"Salman Hussain"} canonicalUrl={"https://www.digiexpo.ae/salman"} />
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
    </>
  );
}
