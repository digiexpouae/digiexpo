'use client'

import React, { useRef, useState } from "react";
import NiceSelect from "../ui/nice-select";
import { useRouter } from 'next/navigation';
import { Value } from "sass";
import dynamic from "next/dynamic";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

// import RecaptchaComponent from '../components/shared/RecaptchaComponent'

const ContactUsForm = () => {
  const [formSubmitted, setformSubmitted] = useState(false);
  const [isSubmitted, setisSubmitted] = useState(false)
  const { executeRecaptcha } = useGoogleReCaptcha();
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

  const capchahandlechange = async (value) => {
    setRecaptchaValue(value);
    setRecaptchaError(null);
    if (!value) {
      setIsSubmitDisabled(true);
      return;
    }
    try {
      const response = await fetch('/api/verifyRecapcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recapchatoken: value })
      });
      const data = await response.json();
      if (data.success) {
        setIsSubmitDisabled(false);
      } else {
        setIsSubmitDisabled(true);
        setRecaptchaError('Recaptcha verification failed. Try again');
      }
    } catch (error) {
      setIsSubmitDisabled(true);
      setRecaptchaValue(null);
      setRecaptchaError('Recaptcha verification failed. Try again');
    }
  };

  return (
    <>
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
          {/* <div className='col-xxl-12 mb-30'>
            <RecaptchaComponent
              onChange={capchahandlechange} />
            {recaptchaError && (
              <div className="form_error" style={{ color: 'red', marginTop: 10 }}>{recaptchaError}</div>
            )}
          </div> */}
          <div className='col-xxl-12'>
            <div className='postbox__btn-box'>
              <button className={`submit-btn w-100 ${isSubmitted ? 'btndisable' : ''}`} type='submit' disabled={isSubmitDisabled}>
                {!isSubmitted ? (
                  'Send your Request'
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

export default ContactUsForm;