'use client'

import React, { useState, useEffect } from "react";
import NiceSelect from "../ui/nice-select";
import { useRouter } from 'next/navigation';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

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

  useEffect(() => {
    loadCaptchaEnginge(6, undefined, undefined, 'numbers');
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      captchaValue: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate captcha first
    const userValue = formData.captchaValue;
    if (!validateCaptcha(userValue)) {
      alert('Captcha Does Not Match');
      return;
    }

    // Send form data to the PHP backend
    fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
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
            <div className="captcha-container mb-3">
              <LoadCanvasTemplate reloadText="↻ Reload" reloadColor="blue" />
            </div>
            <div className="tp-contact-input w-50">
              <input
                type="text"
                placeholder="Enter Captcha"
                name="captcha"
                className="text-center"
                onChange={handleCaptchaChange}
                value={formData.captchaValue}
                maxLength={6}
              />
            </div>
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