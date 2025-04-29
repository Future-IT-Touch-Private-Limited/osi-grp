"use client";
import React from "react";
import { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaBlog,
  FaUsers,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { BsBuildings } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineErrorOutline } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { TbBuildingEstate } from "react-icons/tb";
import { FaHouse } from "react-icons/fa6";
import { LuReplaceAll } from "react-icons/lu";


const SideBar = ({ toggler ,setToggler}) => {
  const [mobileDropdown, setMobileDropdown] = useState(false); // for mobile
  const serviceData = [
    { Countryname: "Canada", image: "/img/service/1.webp", service: "Study Visa" },
    { Countryname: "Australia", image: "/img/service/2.webp", service: "Visitor visa" },
    { Countryname: "United Kingdom", image: "/img/service/3.webp", service: "Super visa" },
    { Countryname: "New Zealand", image: "/img/service/4.webp", service: "Post Graduate work permit" },
    { Countryname: "Canada", image: "/img/service/5.webp", service: "Visitor Visa extension" },
    { Countryname: "Canada", image: "/img/service/6.webp", service: "Visitor to study oy for canada" },
    { Countryname: "Canada", image: "/img/service/7.webp", service: "Spouse open work permit" },
    { Countryname: "United Kingdom", image: "/img/service/8.webp", service: "Tour and travel" },
    { Countryname: "Australia", image: "/img/service/9.webp", service: "Air ticketing" },
  ];
  return (
    <div  className={`${toggler?"translate-x-0":"translate-x-full "} left-0  absolute  w-screen bg-[rgba(0,0,0,)] flex justify-end h-screen transition-all duration-300 ease-in-out pt-2 lg:hidden`}>
      <div
        className={`SideBar  border w-[100%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[25%] h-screen top-30   bg-[#FAF5EE] text-gray-800 z-50 s   p-6`}
      >
       
        <div className="side-bar-content px-2 py-3 flex flex-col gap-5 md:gap-3">
          <div className="singleContent flex gap-2 items-center cursor-pointer">
            <div>
            <FaHouse />

            </div>
            <Link
              href={"/"}
              className="flex  justify-between items-center  w-full px-3 py-2 border-b-2"
            >
              <h2>Home</h2>
              <IoIosArrowForward />
            </Link>
          </div>
          <div className="singleContent flex gap-2 items-center cursor-pointer">
            <div>
              <BsBuildings />
            </div>
            <Link
              href={"/contact"}
              className="flex  justify-between items-center  w-full px-3 py-2 border-b-2"
            >
              <h2>Contact Us</h2>
              <IoIosArrowForward />
            </Link>
          </div>

          

          <div className="singleContent flex gap-2 items-center cursor-pointer">
            <div>
              <IoNewspaperOutline />
            </div>
            <Link 
              href="/blog"
             className="flex  justify-between items-center  w-full px-3 py-2 border-b-2  ">
              <h2>Visa Blog</h2>
              <IoIosArrowForward />
            </Link>
          </div>

          <Link
            href={"/about"}
            className="singleContent flex gap-2 items-center cursor-pointer  "
          >
            <div>
              <MdOutlineErrorOutline className="rotate-180" />
            </div>
            <div className="flex  justify-between items-center  w-full px-3 py-2 border-b-2">
              <h2>About Us</h2>
              <IoIosArrowForward />
            </div>
          </Link>


       


          <div className="lg:hidden">
        <div
          className="singleContent flex gap-2 items-center cursor-pointer"
          onClick={() => setMobileDropdown(!mobileDropdown)}
        >
          <div>
            <LuReplaceAll className="rotate-180" />
          </div>
          <div className="flex justify-between items-center w-full px-3 py-2 border-b-2">
            <h2>service</h2>
            {mobileDropdown ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </div>
        </div>

        {mobileDropdown && (
          <ul className="pl-10 space-y-4 text-base py-2  text-gray-700  mt-2">
            {serviceData.map((item, index) => (
              <li key={index}>
                <Link
                  href={`/service/${item.service.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block hover:text-blue-500 border-b-2"
                >
                  {item.service}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>


          <a href="tel:+917508575015" className="singleContent flex gap-2 items-center cursor-pointer ">
            <div>
              <MdOutlineSupportAgent />
            </div>
            <div className="flex  justify-between items-center  w-full px-3 py-2 border-b-2  ">
              <h2>Help and Support</h2>
              <IoIosArrowForward />
            </div>
          </a>

         

          <div className="flex justify-around md:flex-col items-center mb-4 md:mt-8 ">
            <div>
              <Link
                href="/login"
                className=" md:hidden text-white text-xs font-bold bg-[#006251] px-3 py-2  rounded"
              >
                Login
              </Link>
            </div>
          </div>

          <div className="mb-1 md:mb-8 text-center py-14 bgAdresssLogo relative text-md font-bold text-zinc-950">
            <div className="flex flex-col md:flex-row md:justify-center  items-center gap-3 text-gray-600 mb-3">
              <FaPhoneAlt />
              <a href="tel:+917508575015" className="hover:text-gray-700">
        +91 7508575015
      </a>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-start justify-center    gap-3 text-gray-600">
              <FaMapMarkerAlt className="mt-1" />
              <span>
              SCO-327,1st floor, Sector 40D, Chandigarh
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
