"use client";
import React from "react";
import { FaEnvelope, FaWhatsapp, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactUsPage = () => {
  return (
    <div className="contactUs ">
      <div className="px-5 md:px-16    xl:px-32 py-1  md:py-20 rounded-lg ">
        <div className="flex flex-col items-center md:flex-row justify-between gap-20">
          <div className="w-full md:w-[40%]">
            <img
              src="/img/conatctairrrr.avif"
              alt="Contact Us"
              className="w-full h-full lg:w-[80%] lg:h-[100%] object-cover shadow-lg rounded-full shadow-orange-100"
            />
          </div>
          <div className="flex flex-col gap-5 w-full md:w-[50%]  px-3">
            <h3 className="text-4xl text-zinc-700 font-bold  mb-5">
              Contact Us
            </h3>
            <p className="text-lg flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              <a
                href="mailto:info@oicglobal.in"
                className="hover:text-blue-700 transition"
              >
              info@oicglobal.in
              </a>
            </p>
            <p className="text-lg flex items-center gap-2">
              <FaWhatsapp className="text-green-500" />
              WhatsApp us on
              <a
                href="https://wa.me/917508575015"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-700 transition"
              >
                +91 7508575015
              </a>
            </p>
            <p className="text-lg flex items-center gap-2">
              <FaPhone className="text-blue-500" />
              <a href="tel:+917508575015"  className="hover:text-gray-800">
              Call us on +91 7508575015
              </a>
            </p>
            <div className="flex flex-col gap-3 mt-5">
              <h5 className="font-bold text-xl flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                Address
              </h5>
              <p className="text-lg">
                {/* BHIVE Workspace - No.112, AKR Tech Park, &quot;B&quot; and, 7th Mile Hosur
                Rd Krishna Reddy Industrial Area, Bengaluru, Karnataka 560068 */}

                SCO-327,1st floor, Sector 40D, Chandigarh              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
