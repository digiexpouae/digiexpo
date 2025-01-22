'use client'

import React, { useState } from "react";
import NiceSelect from "../ui/nice-select";
import { useRouter } from 'next/navigation';
import ReCAPTCHA from "react-google-recaptcha";
import { sendDataToZoho } from "../pages/api/auth";
const ContactUsFormMuz = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "Your Inquiry about",
    messreage: "",
  });

const [recapchatoken, setrecapchatoken] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send form data to the PHP backend
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
    } else {
      // Show error message if something went wrong
      alert("Failed to send message.");
    }
  }
catch(error){
  console.log('Error')
}
  };

  const capchahandlechange =(value)=>{
    setrecapchatoken(value)
  }
  const selectHandler = (selectedOption) => {
    setFormData({
      ...formData,
      inquiry: selectedOption.value,
    });
  };

  return (
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
        {/* <div>
          <ReCAPTCHA
            sitekey='6LcgnLEqAAAAACc6SGBFLzOKkoIlwzNnfDllZSrh' // Replace with your reCAPTCHA site key
            onChange={capchahandlechange}
          />
        </div> */}
        <div className='col-xl-12'>
          <div className='tp-contact-btn'>
            <button className='tp-btn-yellow-lg w-100' type='submit'>
              Get a free consultation
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactUsFormMuz;