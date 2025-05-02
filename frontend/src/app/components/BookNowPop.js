import React from "react";
import { IoClose } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa6";

export default function BookNowPop({ popOpen, setPopOpen }) {
  return (
    <>
<button
  className="fixed z-40 right-4 bottom-10 bg-[#D92024] text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-[#b81c1e] transition-all duration-300"
  onClick={() => setPopOpen(true)}
>
  <FaRegCalendarCheck className="text-lg" />
  Book Now
</button>

      {popOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  {/* Form Container */}
  <div className="relative bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6">
    {/* Close Icon */}
    <button
      onClick={() => setPopOpen(false)}
      className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl"
    >
      <IoClose />
    </button>

    <h2 className="text-xl font-bold mb-4 text-center text-[#D92024]">Book Now</h2>

    {/* Form */}
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D92024]"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D92024]"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D92024]"
      />
      <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D92024]">
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
</div>
      )}
    </>
  );
}
