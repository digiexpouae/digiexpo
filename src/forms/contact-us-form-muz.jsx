'use client'

import React, { useState, useRef } from "react";
import NiceSelect from "../ui/nice-select";
import { useRouter } from 'next/navigation';
import HCaptcha from "@hcaptcha/react-hcaptcha";

const ContactUsFormMuz = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "Your Inquiry about",
    message: "",
    captchaValue: "",
  });

  const captchaRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaChange = (token) => {
    setFormData(prevState => ({
      ...prevState,
      captchaValue: token,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate captcha first
    const userValue = formData.captchaValue;
    if (!userValue) {
      alert('Please complete the hCaptcha verification');
      return;
    }

    // Send form data to the PHP backend
    fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        'h-captcha-response': userValue // Add hCaptcha token to the payload
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          router.push('/thank-you');
        } else {
          alert("Failed to send message.");
        }
      })
      .catch((error) => {
        alert("An error occurred while sending the message.");
      });
  };

  const selectHandler = (selectedOption) => {
    setFormData({
      ...formData,
      inquiry: selectedOption.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="box">
      <div className="row">
        <div className="col-xl-6">
          <div className="tp-contact-input mb-20">
            <input
              type="text"
              className=""
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-xl-6">
          <div className="tp-contact-input mb-20">
            <input
              type="email"
              className=""
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-xl-6">
          <div className="tp-contact-input mb-20">
            <input
              type="text"
              className=""
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-xl-6">
        <div className="tp-contact-select">
          <div className="tp-select-icon">
            <NiceSelect
              options={[
                { value: "Your Inquiry about", text: "Your Inquiry about" },
                { value: "Digital Marketing", text: "Digital Marketing" },
                { value: "Website Development", text: "Website Development" },
                { value: "UI / UX Design", text: "UI / UX Design" },
                { value: "Mobile Apps", text: "Mobile Apps" },
                { value: "E-Commerce", text: "E-Commerce" },
                { value: "Emerging Technology", text: "Emerging Technology" },
              ]}
              defaultCurrent={0}
              onChange={selectHandler}
            />
          </div>
          </div>
        </div>
        <div className="col-xl-12">
          <div className="tp-contact-input mb-20">
            <textarea
              className=""
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        <div className="col-xl-12 mb-20">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <HCaptcha
              ref={captchaRef}
              sitekey="cee46b90-4e4c-4a04-8f6e-f3bc510c277a"
              onVerify={handleCaptchaChange}
            />
          </div>
        </div>
        <div className="col-xl-12">
          <div className="tp-contact-btn">
            <button className="tp-btn-yellow-lg w-100" type="submit">
              Get a free consultation
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactUsFormMuz;