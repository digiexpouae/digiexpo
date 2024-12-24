'use client'

import React, { useState, useRef } from "react";
import NiceSelect from "../ui/nice-select";
import { useRouter } from 'next/navigation';
import ReCAPTCHA from "react-google-recaptcha";

const ContactUsForm = () => {
  const router = useRouter();
  const recaptchaRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "Your Inquiry about",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;
    
    // Basic form validation
    if (!name || !email || !phone || !message) {
      alert("Please fill in all required fields.");
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }


    // Captcha validation
    if (!captchaToken) {
      alert("Please complete the reCAPTCHA verification.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // First, verify the captcha
      const captchaVerifyResponse = await fetch("/api/captcha-verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: captchaToken }),
      });

      // Check if the response is OK and is JSON
      if (!captchaVerifyResponse.ok) {
        logger.error("Captcha verification failed");
        const errorText = await captchaVerifyResponse.text();
        throw new Error(`Captcha verification failed: ${errorText}`);
      }

      const captchaVerifyData = await captchaVerifyResponse.json();

      if (!captchaVerifyData.success) {
        throw new Error("Captcha verification failed");
      }

      // If captcha is verified, proceed with form submission
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if the response is OK and is JSON
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Submission failed: ${errorText}`);
      }

      const data = await response.json();

      if (data.success) {
        router.push('/thank-you');
      } else {
        alert(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      
      // More detailed error handling
      if (error instanceof TypeError) {
        alert("Network error. Please check your internet connection.");
      } else {
        alert(error.message || "An error occurred while sending the message.");
      }
      
      // Reset captcha if submission fails
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectHandler = (selectedOption) => {
    setFormData({
      ...formData,
      inquiry: selectedOption.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className='box'>
      <div className='row gx-20'>
        <div className='col-12'>
          <div className='postbox__comment-input mb-30'>
            <input
              type='text'
              className='inputText'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <span className='floating-label'>Full Name</span>
          </div>
        </div>
        <div className='col-12'>
          <div className='postbox__comment-input mb-30'>
            <input
              type='email'
              className='inputText'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span className='floating-label'>Your Email</span>
          </div>
        </div>
        <div className='col-12'>
          <div className='postbox__comment-input mb-35'>
            <input
              type='text'
              className='inputText'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <span className='floating-label'>Phone Number</span>
          </div>
        </div>
        <div className='col-12'>
          <div className='postbox__select mb-30'>
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
        <div className='col-xxl-12'>
          <div className='postbox__comment-input mb-30'>
            <textarea
              className='textareaText'
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <span className='floating-label-2'>Message...</span>
          </div>
        </div>
        <div className='col-xxl-12 mb-30'>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={handleCaptchaChange}
          />
        </div>
        <div className='col-xxl-12'>
          <div className='postbox__btn-box'>
            <button 
              className='submit-btn w-100' 
              type='submit'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send your Request'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactUsForm;