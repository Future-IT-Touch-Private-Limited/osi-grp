"use client";
import React, { useState } from "react";
import { IoClose, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import Swal from "sweetalert2";

export default function BookNowPop({ popOpen, setPopOpen }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, email, service } = formData;
    console.log(formData);

    const postData = async () => {
      const url = "https://sendingmail-6znv.onrender.com/sendmail";
      const data = new URLSearchParams();
      data.append("S_name", name);
      data.append("S_phone", phone);
      data.append("S_email", email);
      data.append("S_services", service);
      data.append("userEmailsir", "info@oicglobal.in");

      console.log(data);

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: data.toString(),
        });

        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Form Submitted!",
            text: "Your information has been submitted successfully.",
          });
          setFormData({
            name: "",
            phone: "",
            email: "",
            service: "",
          });
          // Close popup after successful submission
          setPopOpen(false);
        } else {
          console.error("Error:", response.statusText);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong, please try again!",
          });
        }
      } catch (error) {
        console.error("Network error:", error);
        Swal.fire({
          icon: "error",
          title: "Network Error",
          text: "An error occurred. Please try again.",
        });
      }
    };

    postData();
  };

  const togglePopup = () => {
    setPopOpen(!popOpen);
  };

  return (
    <>
      {/* Enquire button - responsive for all screen sizes */}
      <button
        onClick={togglePopup}
        className={`
          fixed z-[40] flex items-center justify-center
          top-1/2 -translate-y-1/2 
          bg-[#D92024] text-white font-medium rounded-l-lg
          shadow-lg hover:bg-[#b81c1e] transition-all duration-300
          ${popOpen ? "right-[320px]" : "right-0"}
          
          /* Mobile styles (default) */
          py-3 px-4 text-sm
          
          /* Desktop styles */
          lg:py-6 lg:px-3
        `}
      >
        {/* <span className="lg:hidden">ENQUIRE NOW</span> */}
        <span 
          className="block"
          style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
        >
          ENQUIRE NOW
        </span>
      </button>

      {/* Single popup - responsive for all screen sizes */}
      <div
        className={`
          fixed z-[99998] bg-white rounded-l-lg shadow-lg p-6 
          top-1/2 -translate-y-1/2 right-0
          transform transition-transform duration-300 ease-in-out
          ${popOpen ? "translate-x-0" : "translate-x-full"}
          
          /* Responsive width */
          w-[90%] max-w-[320px] sm:max-w-[320px]
        `}
        style={{ height: "fit-content", maxHeight: "90vh", overflowY: "auto" }}
      >
        {/* Close Button */}
        <button
          onClick={() => setPopOpen(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl"
          aria-label="Close Booking Form"
        >
          <IoClose />
        </button>

        <h2 className="text-xl font-bold mb-4 text-center text-[#D92024]">
          Book Now
        </h2>

        <form className="space-y-4" onSubmit={formSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D92024]"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D92024]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D92024]"
            required
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D92024]"
            required
          >
            <option value="">Select Service Type</option>
            <option value="study-visa">Study Visa</option>
            <option value="super-visa">Super Visa</option>
            <option value="pgwp">Post Graduate Work Permit</option>
            <option value="pgwp">Post Graduate Work Permit</option>
            <option value="visitor-extension">Visitor Visa Extension</option>
            <option value="visitor-to-study">Visitor to Study Pathway</option>
            <option value="spouse-open-work">Spouse Open Work Permit</option>
            <option value="tour-travel">Tour and Travel</option>
            <option value="air-ticketing">Air Ticketing</option>
          </select>
          <button
            type="submit"
            className="w-full bg-[#D92024] text-white font-semibold py-2 rounded-lg hover:bg-[#b81c1e] transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}