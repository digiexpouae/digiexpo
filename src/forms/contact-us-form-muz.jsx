'use client'

import React, { useState } from "react";
import NiceSelect from "../ui/nice-select";

const ContactUsFormMuz = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to the PHP backend
    fetch("/main.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            inquiry: "Your Inquiry about",
            message: "",
          });
        } else {
          alert("Failed to send message.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error sending your message.");
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