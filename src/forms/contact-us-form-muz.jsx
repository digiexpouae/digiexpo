'use client'
import React, { useState } from "react";
import NiceSelect from "../ui/nice-select";
import { useRouter } from 'next/navigation';
import { Value } from "sass";
import dynamic from "next/dynamic";

import RecaptchaComponent from "@/components/shared/RecaptchaComponent";
const ContactUsFormMuz = () => {
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
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
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
    if (isSubmitDisabled) {
      setSubmissionError('Please complete the reCAPTCHA first');
      setisSubmitted(false);
      return;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })
      console.log(res)
      if (res && res.ok) {
        console.log('sucess')
        router.push('/thank-you');
        setformSubmitted(true);
      } else {
        alert("Failed to send message.");
      }
    }
    catch(error){
      setSubmissionError(error.message || "Form submission failed.")
      alert("Failed to send message.");
      console.log('Error')
    }
    finally {
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
        <div className='row'>
          <div className='col-xl-6'>
            <div className='tp-contact-input mb-20'>
              <input
                type='text'
                className=''
                name='name'
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
            <RecaptchaComponent
       
              onChange={capchahandlechange}
            />
            {recaptchaError && (
              <div className="form_error" style={{ color: 'red', marginTop: 10 }}>{recaptchaError}</div>
            )}
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