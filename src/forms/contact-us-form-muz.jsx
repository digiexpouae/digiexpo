'use client'
import React, { useState,useRef } from "react";
import NiceSelect from "../ui/nice-select";
import { useRouter } from 'next/navigation';
import { Value } from "sass";
import dynamic from "next/dynamic";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import RecaptchaComponent from '../components/shared/RecaptchaComponent'
const ContactUsFormMuz = () => {
  const [visible, setVisible] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const handleUserIntent = () => {
    if (!visible) {
      setVisible(true);
    }
  };
  const [formSubmitted, setformSubmitted] = useState(false);
  const [isSubmitted, setisSubmitted] = useState(false)
  const [submissionError, setSubmissionError] = useState(null);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "Your Inquiry about",
    message: "",
  });
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setisSubmitted(true);
  setSubmissionError("");

  try {
    if (!executeRecaptcha) {
      console.log("reCAPTCHA not loaded yet!");
      setisSubmitted(false);
      return;
    }

    // 🔹 Get token from reCAPTCHA v3
    const token = await executeRecaptcha("submit_form");
console.log("recapcha"+token)
    // 🔹 Verify token with your API
    const verifyRes = await fetch("/api/verifyRecapcha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({  recaptchaToken: token }),
    });

    const verifyData = await verifyRes.json();
console.log(verifyRes+"response")
    if (!verifyRes.ok ) {
      setIsSubmitDisabled(true);
      setSubmissionError("Recaptcha verification failed. Try again.");
      setisSubmitted(false);
      return;
    }

    // ✅ Recaptcha passed — allow submission
    setIsSubmitDisabled(false);

    // 🔹 Now send form data to contact API
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push("/thank-you");
      setformSubmitted(true);
    } else {
      setSubmissionError("Failed to send message.");
    }
  } catch (error) {
    setSubmissionError(error.message || "Form submission failed.");
  } finally {
    setisSubmitted(false);
  }
};


  const selectHandler = (selectedOption) => {
    setFormData({
      ...formData,
      inquiry: selectedOption.value,
    });
  };

  // const capchahandlechange = async (tk) => {
  //   setRecaptchaValue(token);
  //   setRecaptchaError(null);
  //   if (!value) {
  //     setIsSubmitDisabled(true);
  //     return;
  //   }
    
  //   try {
  //     const response = await fetch('/api/verifyRecapcha', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ recapchatoken: token })
  //     });
  //     const data = await response.json();
  //     if (data.success) {
  //       setIsSubmitDisabled(false);
  //     } else {
  //       setIsSubmitDisabled(true);
  //       setRecaptchaError('Recaptcha verification failed. Try again');
  //     }
  //   } catch (error) {
  //     setIsSubmitDisabled(true);
  //     setRecaptchaValue(null);
  //     setRecaptchaError('Recaptcha verification failed. Try again');
  //   }
  // };

  return (
    <>
      <form onSubmit={handleSubmit} className='box' >
        <div className='row'>
          <div className='col-xl-6'>
            <div className='tp-contact-input mb-20'>
              <input
                type='text'
                className=''
                name='name'
                onFocus={handleUserIntent}  // Trigger when input is focused

                placeholder='Full name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className='col-xl-6'>
            <div className='tp-contact-input mb-20' >
              <input
                type='email'
                className=''
                name='email'
                onFocus={handleUserIntent}  // Trigger when input is focused
onClick={handleUserIntent}
                placeholder='Email address'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className='col-xl-6'>
            <div className='tp-contact-input mb-20'>
              <input
                type='text'
                className=''
                name='phone'
                placeholder='Phone Number'
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className='col-xl-6'>
            <div className='tp-contact-select'>
              <div className='tp-select-icon'>
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
          <div className='col-xl-12'>
            <div className='tp-contact-input mb-20'>
              <textarea
                className=''
                name='message'
                placeholder='Enter your message'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <div className='col-xl-12 mb-30'>
          {/* {visible ? (
            <RecaptchaComponent onChange={capchahandlechange} />
          ) : (
            <div style={{ height: '78px' }} />
          )}
            {recaptchaError && (
              <div className="form_error" style={{ color: 'red', marginTop: 10 }}>{recaptchaError}</div>
            )}
         */}
          </div>
          <div className='col-xl-12'>
            <div className='tp-contact-btn'>
              <button
                className={`tp-btn-yellow-lg w-100 flex items-center justify-center ${isSubmitted ? 'disable' : ''}`}
                type="submit"
                disabled={isSubmitDisabled}
              >
                {/* Button text */}
                {!isSubmitted ? (
                  'Get a free consultation'
                ) : (
                  <>
                    <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
                    <span>Loading...</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
      {submissionError && (
        <div className="form_error" style={{ color: 'red', marginTop: 10 }}>
          {submissionError}
        </div>
      )}
    </>
  );
};

export default ContactUsFormMuz;