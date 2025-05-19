"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function BookNowFormSection() {
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

    const url = "https://sendingmail-6znv.onrender.com/sendmail";
    const data = new URLSearchParams();
    data.append("S_name", name);
    data.append("S_phone", phone);
    data.append("S_email", email);
    data.append("S_services", service);
    data.append("userEmailsir", "info@oicglobal.in");

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
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong, please try again!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "An error occurred. Please try again.",
      });
    }
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" id="book-now">
      <h2 className="text-3xl font-bold text-center text-[#D92024] mb-8">Book Now</h2>
      <form className="space-y-6" onSubmit={formSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#D92024]"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#D92024]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#D92024]"
            required
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#D92024]"
            required
          >
            <option value="">Select Service Type</option>
            <option value="study-visa">Study Visa</option>
            <option value="super-visa">Super Visa</option>
            <option value="pgwp">Post Graduate Work Permit</option>
            <option value="visitor-extension">Visitor Visa Extension</option>
            <option value="visitor-to-study">Visitor to Study Pathway</option>
            <option value="spouse-open-work">Spouse Open Work Permit</option>
            <option value="tour-travel">Tour and Travel</option>
            <option value="air-ticketing">Air Ticketing</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-[#D92024] text-white font-semibold py-3 rounded-lg hover:bg-[#b81c1e] transition-all"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
