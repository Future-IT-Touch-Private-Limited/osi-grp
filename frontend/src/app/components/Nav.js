"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

import { LuMenu } from "react-icons/lu";
import SideBar from "./SideBar";
import { useState, useEffect } from "react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { serviceData } from "@/app/serviceData";
import TopNav from "./TopNav";
import BookNowPop from "./BookNowPop";
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const [toggler, setToggler] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userId, setUserId] = useState(null);

  const pathname = usePathname();

  useEffect(() => {
    // Only access localStorage if window is defined (on the client-side)
    if (typeof window !== "undefined") {
      setUserId(localStorage.getItem("user_id"));
    }
  }, []);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(userId);
  }, [userId]);

  const handleLogout = () => {
    localStorage.removeItem("user_id");

    setuserId(null);

    router.push("/");
  };
  console.log(pathname, "check");

  const [studyAbroad, setAbroad] = useState(false);

  const studyVisaCountries = [
    { name: "UK" },
    { name: "Canada" },
    { name: "USA" },
    { name: "Germany" },
    { name: "Australia" },
    { name: "Finland" },
    { name: "Cyprus" },
    { name: "Sweden" },
    { name: "Denmark" },
    { name: "New Zealand" },
  ];

  const [popOpen, setPopOpen] = useState(true);

  return (
    <>
      <BookNowPop popOpen={popOpen} setPopOpen={setPopOpen} />

      <TopNav setPopOpen={setPopOpen} />

          <div
            className={`NavParent sticky top-0 w-full  z-[10000000]   px-5  md:px-16 xl:px-32 py-2  xl:py-2 ${
              isScrolled
                ? "fixed top-0 left-0 w-full bg-[#FAF5EE]  md:bg-[#FAF5EE  md:text-black border  border-white/20  z-50  "
                : "text-black bg-[#FAF5EE] lg:bg-[#FAF5EE] "
            } `}
          >
            <div className="flex flex-col md:gap-2">
              <div className="flex justify-between md:gap-2 items-center">
                <Link href="/" className=" ">
                  <img
                    className="h-[50px] lg:h-[65px] object-cover -translate-x-3 md:-translate-x-5"
                    src="/img/newSiteEditLogo.png"
                    alt="Site Logo"
                  />
                </Link>
                <div className="flex gap-1 md:gap-1 items-center">
                  <ul className="hidden lg:flex items-center gap-x-4 capitalize">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">about</Link>
                    </li>
                    <li
                      onMouseEnter={() => setAbroad(true)}
                      onMouseLeave={() => setAbroad(false)}
                      className="relative flex items-center gap-x-1 cursor-pointer"
                    >
                      Study Abroad{" "}
                      <IoIosArrowDown
                        className={`${showDropdown ? "rotate-180" : ""}`}
                      />
                      {studyAbroad && (
                        <ul className="absolute top-full left-0 bg-white shadow-lg w-64 rounded z-50 text-sm text-gray-700">
                          {studyVisaCountries.map((item, index) => (
                            <li
                              key={index}
                              className="border-b last:border-none hover:bg-gray-100 transition-colors"
                            >
                              <Link
                                href={`/${item.name
                                  .toLowerCase()
                                  .split(" ")
                                  .join("-")}`}
                                className="flex items-center px-4 py-2 gap-2"
                              >
                                {/* <img src={item.image} alt={item.service} className="w-6 h-6 object-cover rounded" /> */}
                                <span className="text-gray-700">
                                  {item.name}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>

                    <li
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                      className="relative flex items-center gap-x-1 cursor-pointer"
                    >
                      service{" "}
                      <IoIosArrowDown
                        className={`${showDropdown ? "rotate-180" : ""}`}
                      />
                      {showDropdown && (
                        <ul className="absolute top-full left-0 bg-white shadow-lg w-64 rounded z-50 text-sm text-gray-700">
                          {serviceData.map((item, index) => (
                            <li
                              key={index}
                              className="border-b last:border-none hover:bg-gray-100 transition-colors"
                            >
                              <Link
                                href={`/service/${item.service
                                  .toLowerCase()
                                  .split(" ")
                                  .join("-")}`}
                                className="flex items-center px-4 py-2 gap-2"
                              >
                                <img
                                  src={item.image}
                                  alt={item.service}
                                  className="w-6 h-6 object-cover rounded"
                                />
                                <span>{item.service}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                    <li>
                      <Link href="/blog">blog</Link>
                    </li>
                    <li>
                      <Link href="/contact">contact us</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center gap-5">
                  {!userId ? (
                    <Link
                      href="/login"
                      className="hidden md:block text-white font-bold bg-gradient-to-t from-blue-800 to-blue-800 px-3 py-2 md:px-5 md:py-2 rounded"
                    >
                      Login
                    </Link>
                  ) : (
                    <div className="flex items-center space-x-4">
                      <FaUserCircle className="text-black text-3xl cursor-pointer" />
                      <FaSignOutAlt
                        className="text-black text-2xl cursor-pointer"
                        onClick={handleLogout}
                      />
                    </div>
                  )}

                  <div
                    onClick={() => setToggler(!toggler)}
                    className="bg-[#ffff] lg:hidden text-black  cursor-pointer font-bold p-3 rounded-full"
                  >
                    <LuMenu />
                  </div>
                </div>
              </div>

              {/* Mobile Contact Section */}
              <div className="flex md:hidden justify-between">
                <div className="hidden md:flex gap-2 items-center">
                  <figure>
                    <img
                      className="w-full"
                      src="/img/asset 2.svg"
                      width={120}
                      height={120}
                      alt="Chat Icon"
                    />
                  </figure>
                  <span className="opacity-80 text-md">Chat With Us</span>
                </div>
                <div className="hidden md:flex gap-2 items-center">
                  <figure>
                    <img
                      className="w-full"
                      src="/img/asset 3.svg"
                      width={120}
                      height={120}
                      alt="Phone Icon"
                    />
                  </figure>
                  <span className="opacity-80">+91 75085 75015 </span>
                </div>
              </div>
            </div>
            <SideBar toggler={toggler} setToggler={setToggler} />
          </div>
     
    </>
  );
};

export default Navbar;
