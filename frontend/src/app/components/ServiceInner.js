"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { serviceData } from "../serviceData";
export default function ServiceInner({ service }) {
  const leftFeatures = [
    {
      image: "/images/serviceLeft/1.svg",
      title: "tailored design solutions",
      desc: "We provide personalized interior design services that reflect your unique vision and lifestyle.",
    },
    {
      image: "/images/serviceLeft/2.svg",
      title: "Seamless Project Management",
      desc: "We handle the entire design process, from concept to completion, with flawless execution.",
    },
    {
      image: "/images/serviceLeft/3.svg",
      title: "Client-Centered Collaboration",
      desc: "Your input is valued throughout the entire process, ensuring your vision is fully realized.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // close if same index clicked
    } else {
      setActiveIndex(index); // open the clicked one
    }
  };

  const renderBox = ({ image, title, desc }) => (
    <article className="pbmit-miconheading-style-8 group">
      <div className="pbmit-ihbox-style-8">
        <div className="pbmit-ihbox-box flex flex-col lg:flex-row items-center text-center lg:text-start lg:items-start gap-4">
          <div className="bg-[#eaf0ec] group-hover:bg-black transition duration-300 flex  justify-center items-center h-16 w-16 rounded-full shrink-0">
            <img src={image} alt={title} className="h-8 w-8 object-contain" />
          </div>
          <div className="pbmit-ihbox-contents">
            <h2 className="pbmit-element-title capitalize font-semibold text-base sm:text-lg mb-1">
              {title}
            </h2>
            <div className="pbmit-heading-desc text-gray-600 text-sm">
              {desc}
            </div>
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <div>
      <div className="about-banner relative h-[40vh] md:h-[60vh] w-full overflow-hidden">
        <img
          src="/img/serviceBanner.webp"
          alt="OIC Global Services"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-16 text-white">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            {service?.service}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-6">
            At OIC Global, we specialize in delivering tailored immigration,
            education, and visa solutions to empower individuals and families
            for a successful international future.
          </p>
        </div>
      </div>

      <div className="px-5 md:px-12 xl:px-32 py-8 md:py-12 dxl:py-16">
        <div className="container mx-auto flex flex-col-reverse lg:grid  lg:grid-cols-3 gap-x-16 gap-y-8">
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-0">
              <div className="border border-gray-200 rounded-xl p-4 space-y-4 shadow-sm">
                <h5 className="text-xl lg:text-2xl capitalize font-semibold text-gray-800">
                  Services Category
                </h5>
                <hr className="border-gray-200" />
                <div className="space-y-3">
                  {serviceData.map((elm, index) => (
                    <Link
                      href={`/service/${elm.service
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                      key={index}
                      className="flex items-center justify-between text-gray-500 hover:text-black group transition-colors duration-300"
                    >
                      <span className="text-sm lg:text-base transition-colors duration-300">
                        {elm.service}
                      </span>
                      <FaArrowRightLong className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-in-out" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src="/img/service/help-now.webp"
                  alt="help"
                  className="w-full h-auto object-cover"
                />
                <div className="bg-white p-4 lg:p-6 space-y-4">
                  <h5 className="text-lg lg:text-xl capitalize font-semibold text-gray-800">
                    How can we help
                  </h5>
                  <p className="text-sm text-gray-600">
                    If you need any help, please feel free to contact us.
                  </p>

                  <div className="space-y-3">
                    {/* Phone */}
                    <div className="flex items-center gap-4 group">
                      <div className="bg-[#eaf0ec] group-hover:bg-black transition-all duration-300 flex justify-center items-center h-14 w-14 rounded-full shrink-0">
                        <img
                          src="/img/service/call.svg"
                          alt="call"
                          className="h-6 w-6 object-contain group-hover:invert transition duration-300"
                        />
                      </div>
                      <p className="text-sm text-gray-700 group-hover:text-black transition duration-300">
                        +91 75085 75015
                      </p>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-4 group">
                      <div className="bg-[#eaf0ec] group-hover:bg-black transition-all duration-300 flex justify-center items-center h-14 w-14 rounded-full shrink-0">
                        <img
                          src="/img/service/mail.svg"
                          alt="mail"
                          className="h-6 w-6 object-contain group-hover:invert transition duration-300"
                        />
                      </div>
                      <p className="text-sm text-gray-700 group-hover:text-black transition duration-300">
                        info@oicglobal.in
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6 lg:space-y-12">
            <img src={service.image} alt={service.title} />
            <div className="space-y-4 lg:space-y-6 text-justify">
              {service.description?.map((elm, index) => (
                <p key={index}>{elm}</p>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2">
              <img src={service.image} alt={service.title} />
              <div className="space-y-4 lg:space-y-4">
                {service.highlights.map((elm, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#A0A8A2]" />
                    <p>{elm}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="font-bold text-2xl md:text-3xl lg:text-3xl">
                Have any questions? Look here now
              </h5>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed ">
                Our dedicated team works closely with you to understand your
                vision and bring it to life with meticulous attention to detail
                and care.
              </p>

              {/* FAQ List */}
              <div className="mt-6 space-y-4">
                {service.faq.map((item, index) => (
                  <div key={item.srNo} className="border-b pb-4">
                    <button
                      onClick={() => handleToggle(index)}
                      className="flex items-center justify-between w-full text-left"
                    >
                      <h6 className="text-lg font-semibold text-gray-800">
                        {item.question}
                      </h6>
                      {activeIndex === index ? (
                        <FiChevronUp className="text-xl" />
                      ) : (
                        <FiChevronDown className="text-xl" />
                      )}
                    </button>
                    {activeIndex === index && (
                      <p className="text-sm text-gray-600 mt-2">
                        {item.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
