'use client'

import React, { useState } from "react";
import NiceSelect from "../ui/nice-select";

const ContactUsForm = () => {
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
      <div className="row gx-20">
        <div className="col-12">
          <div className="postbox__comment-input mb-30">
            <input
              type="text"
              className="inputText"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <span className="floating-label">Full Name</span>
          </div>
        </div>
        <div className="col-12">
          <div className="postbox__comment-input mb-30">
            <input
              type="email"
              className="inputText"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span className="floating-label">Your Email</span>
          </div>
        </div>
        <div className="col-12">
          <div className="postbox__comment-input mb-35">
            <input
              type="text"
              className="inputText"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <span className="floating-label">Phone Number</span>
          </div>
        </div>
        <div className="col-12">
          <div className="postbox__select mb-30">
            <NiceSelect
              options={[
                { value: "Your Inquiry about", text: "Your Inquiry about" },
                { value: "01 Year", text: "01 Year" },
                { value: "02 Year", text: "02 Year" },
                { value: "03 Year", text: "03 Year" },
                { value: "04 Year", text: "04 Year" },
                { value: "05 Year", text: "05 Year" },
              ]}
              defaultCurrent={0}
              onChange={selectHandler}
            />
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="postbox__comment-input mb-30">
            <textarea
              className="textareaText"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <span className="floating-label-2">Message...</span>
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="postbox__btn-box">
            <button className="submit-btn w-100" type="submit">
              Send your Request
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactUsForm;