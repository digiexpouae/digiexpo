'use client'

import React, { useState } from "react";
import NiceSelect from "../ui/nice-select";
import { useRouter } from 'next/navigation';
import ReCAPTCHA from 'react-google-recaptcha';


const ContactUsForm = () => {
  const router = useRouter();
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "Your Inquiry about",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // const [verified, setVerified] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to the PHP backend
    fetch("/api/contact", {
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
        console.error("Error:", error);
        alert("An error occurred while sending the message.");
      });
  };

  const selectHandler = (selectedOption) => {
    setFormData({
      ...formData,
      inquiry: selectedOption.value,
    });
  };
  const handleRecaptchaChange = (value) => {
    setRecaptchaToken(value);
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

        {/* Add Google reCAPTCHA */}
        <div className='col-xxl-12 mb-30'>
          <ReCAPTCHA
   // Replace with your reCAPTCHA site key
   sitekey={process.env.SITE_KEY}
            onChange={handleRecaptchaChange}
          />
        </div>

        <div className='col-xxl-12'>
          <div className='postbox__btn-box'>
            <button className='submit-btn w-100' type='submit'>
              Send your Request
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactUsForm;