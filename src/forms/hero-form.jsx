import React, { useState } from "react";
import EmailIcon from "../svg/email";

const HeroForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setSubmissionError(null);
    setSuccess(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Hero Form Lead",
          email,
          phone: "",
          inquiry: "Hero Form Lead",
          message: "Contact request from hero form."
        })
      });
      if (res && res.ok) {
        setSuccess(true);
        setEmail("");
      } else {
        setSubmissionError("Failed to send message.");
      }
    } catch (error) {
      setSubmissionError(error.message || "Form submission failed.");
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="p-relative">
          <input
            type="email"
            className="tw-text-white"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          {/* email icon */}
          <EmailIcon />
        </div>
        <button className="tp-btn-2 tp-btn-hover alt-color-black" type="submit" disabled={isSubmitted}>
          <span>{isSubmitted ? "Sending..." : "Get In Touch"}</span>
          <b></b>
        </button>
      </form>
      {success && <div style={{ color: 'green', marginTop: 10 }}>Thank you! We'll be in touch soon.</div>}
      {submissionError && <div className="form_error" style={{ color: 'red', marginTop: 10 }}>{submissionError}</div>}
    </>
  );
};

export default HeroForm;
