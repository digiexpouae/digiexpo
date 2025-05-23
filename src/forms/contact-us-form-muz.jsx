'use client'
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import NiceSelect from "../ui/nice-select";
import { useRouter } from 'next/navigation';
import { sendDataToZoho } from "../pages/api/auth";
import { Value } from "sass";
const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { ssr: false });
const ContactUsFormMuz = () => {
  const [loadReCAPTCHA, setLoadReCAPTCHA] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setLoadReCAPTCHA(true);
      window.removeEventListener("scroll", handleScroll); // Remove listener inside function
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []);

  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [formSubmitted, setformSubmitted] = useState(false);
  const [isSubmitted, setisSubmitted] = useState(false)
  const [submissionError, setSubmissionError] = useState(null);
  const [isSubmitDisabled, setisSubmitDisabled] = useState(true);
  const [recaptchaError, setRecaptchaError] = useState(null); 
  const router = useRouter();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisSubmitted(true); // Set loading state

    // Send form data to the PHP backend
    if(isSubmitDisabled){
      setSubmissionError('Please complete the reCAPTCHA first')
      setisSubmitted(false); // Set loading state
      
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
     if (res &&  res.ok){
      // Redirect to thank you page if successful
      console.log('sucess')
      router.push('/thank-you');
      setformSubmitted(true);
      setisSubmitDisabled(true); 
    } else {
      // Show error message if something went wrong
      alert("Failed to send message."); 
    }
  }
catch(error){
  setSubmissionError(error.message || "Form submission failed.")
  alert("Failed to send message.");
  console.log('Error')
}
finally {
  setisSubmitted(false); // Reset loading state after request completion
}
  };

  const capchahandlechange = async (value)=>{
  setRecaptchaValue(value)
setRecaptchaError(null)
if(!value){
  setisSubmitDisabled(true)
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
const data =await response.json()
if(data.success){
setisSubmitDisabled(false) 
console.log(data)
}

}catch (error){
  setisSubmitDisabled(true)
  setRecaptchaValue(null)
  setRecaptchaError('Recapcha verification failed.Try again')
}

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
        <div>
            {loadReCAPTCHA && <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
         onChange={capchahandlechange}
          className="recap"/> }
        </div>
        <div className='col-xl-12'>
          <div className='tp-contact-btn'>
            
    
            <button

className={`tp-btn-yellow-lg w-100 flex items-center justify-center ${isSubmitted ? 'disable' : ''}`}
  type="submit"


   // Disable the button when submitting
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
  );
};

export default ContactUsFormMuz;