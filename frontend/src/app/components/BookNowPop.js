"use client";
import React, { useEffect, useState } from "react";
import { IoClose, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import Swal from "sweetalert2"; // Import SweetAlert

export default function BookNowPop({ popOpen, setPopOpen }) {
  const [isMobile, setIsMobile] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setIsMobile(window.innerWidth < 1024);
  //   }
  // }, []);

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

        if (response) {
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

  return (
    <>
      <buttond
        onClick={() => setIsMobile(true)}
        className="fixed  lg:hidden bottom-5 right-5 z-[9999] bg-[#D92024] text-white p-3 rounded-full shadow-lg hover:bg-[#b81c1e] transition-all"
      >
        <IoChatbubbleEllipsesOutline size={24} />
      </buttond>

      {/* in large screen  */}

      {popOpen && (
        <div
          className={`
            fixed  z-[9999999999] hidden lg:block bg-white rounded-lg shadow-lg p-6 
            w-[90%] max-w-sm  bottom-5 right-2
          `}
        >
          {/* Close Button (Mobile Only) */}
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
      )}

      {/* in mobile screen  */}

      {isMobile && (
        <div
          className={`
            fixed z-[9999999999] block lg:hidden bg-white rounded-lg shadow-lg p-6 
            w-[90%] max-w-sm  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          `}
        >
          <button
            onClick={() => setIsMobile(false)}
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
      )}
    </>
  );
}
