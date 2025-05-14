"use client";

import { FaPhoneAlt } from "react-icons/fa";

const ContactInfromation = () => {
  return (
    <section className="px-5 md:mx-10 lg:mx-20 py-10 ">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col lg:flex-row relative">

        {/* Red Content Section */}
        <div className="bg-red-600 text-white px-6 py-10 w-full lg:w-1/2 flex flex-col justify-center gap-6 
                        rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl">
          <h2 className="text-2xl md:text-3xl font-bold">
            Have any Questions? Ask a Specialist
          </h2>
          <p className="text-sm md:text-base">Feel Free to Contact</p>

          <div className="flex items-center gap-4 mt-4">
            <div className="bg-white text-red-600 p-3 rounded-full">
              <FaPhoneAlt className="text-xl" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold">
              <a href="tel:+919988003342" className="text-white hover:underline">
                +91 7508575015
              </a>
            </h3>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl overflow-hidden">
          <img
            src="/img/customer_service.png"
            alt="Customer Support"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Diagonal Overlay */}
        <div className="hidden lg:flex absolute inset-0 justify-center items-center pointer-events-none">
          <div
            className="h-full w-14 ml-14"
            style={{
              clipPath: "polygon(0 0, 100% 0, 0 100%)",
              backgroundColor: "#dc2626",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactInfromation;
