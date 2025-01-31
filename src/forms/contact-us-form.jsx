'use client'

import React, { useState } from "react";
import NiceSelect from "../ui/nice-select";
import { useRouter } from 'next/navigation';
import ReCAPTCHA from 'react-google-recaptcha';


const ContactUsForm = () => {
  
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [submissionError, setSubmissionError] = useState(null);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [recaptchaError, setRecaptchaError] = useState(null); 
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



  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send form data to the PHP backend
    if(isSubmitDisabled){
      setSubmissionError('Please complete the reCAPTCHA first')
      return;
    }
    try {
      const res = await fetch("/api/auth", {
        method:"POST", 
      body: JSON.stringify(formData)
    })
    // const res= await sendDataToZoho(formData)
    console.log(res)
     // Check if the response indicates success
     if (res && res.data && res.data.success) {
      // Redirect to thank you page if successful
      router.push('/thank-you');
      setFormSubmitted(true);
      setIsSubmitDisabled(true); 
    } else {
      // Show error message if something went wrong
      alert("Failed to send message.");
      const errorData = await response.json();
      setSubmissionError(errorData.message || "Form submission failed.")
    }
  }
catch(error){
  console.log('Error')
}
  };
  const selectHandler = (selectedOption) => {
    setFormData({
      ...formData,
      inquiry: selectedOption.value,
    });
  };
  const capchahandlechange = async (value)=>{
    setRecaptchaValue(value)
  setRecaptchaError(null)
  if(!value){
    setIsSubmitDisabled(true)
    return;
  }
  try{
    const response= await fetch('/api/verifyRecapcha',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify({recapchatoken:value})
  })
  const data =await response.json
  if(data.success){
  setIsSubmitDisabled(false)
  }
  else{
    setIsSubmitDisabled(true)
    setRecaptchaValue(null)
    setRecaptchaError('Recapcha verification failed.Try again')
  }
  }catch (error){
    setIsSubmitDisabled(true)
    setRecaptchaValue(null)
    setRecaptchaError('Recapcha verification failed.Try again')
  }
  
    }  


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
   sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={capchahandlechange}
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