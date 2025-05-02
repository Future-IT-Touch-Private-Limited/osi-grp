"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import TravelDesination from "./TravelDesination";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

import { getCountry } from "../components/Store/Slices/countryslices";

import { useDispatch, useSelector } from "react-redux";
export default function Footer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.countryslices);
  useEffect(() => {
    dispatch(getCountry());
  }, []);

  const countries = [
    { name: "France", href: "/blog/france" },
    { name: "Turkey", href: "/blog/turkey" },
    { name: "Hong Kong", href: "/blog/hongkong" },
    { name: "Switzerland", href: "/blog/switzerland" },
    { name: "Australia", href: "/blog/australia" },
    { name: "United Arab Emirates", href: "/blog/united-arab-emirates" },
    { name: "Malaysia", href: "/blog/malaysia" },
    { name: "Japan", href: "/blog/japan" },
    { name: "Singapore", href: "/blog/singapore" },
    { name: "Indonesia", href: "/blog/indonesia" },
    { name: "Vietnam", href: "/blog/vietnam" },
    { name: "Azerbaijan", href: "/blog/azerbaijan" },
    { name: "United Kingdom", href: "/blog/united-kingdom" },
    { name: "Spain", href: "/blog/spain" },
    { name: "Greece", href: "/blog/greece" },
    { name: "United States", href: "/blog/united-states" },
    { name: "South Korea", href: "/blog/southkorea" },
    { name: "Poland", href: "/blog/poland" },
    { name: "Germany", href: "/blog/germany" },
    { name: "Georgia", href: "/blog/georgia" },
    { name: "Hungary", href: "/blog/hungary" },
    { name: "Finland", href: "/blog/finland" },
    { name: "Italy", href: "/blog/italy" },
    { name: "China", href: "/blog/china" },
    { name: "Norway", href: "/blog/norway" },
    { name: "Egypt", href: "/blog/egypt" },
    { name: "Oman", href: "/blog/oman" },
    { name: "Sweden", href: "/blog/sweden" },
    { name: "Austria", href: "/blog/austria" },
    { name: "Denmark", href: "/blog/denmark" },
    { name: "Uzbekistan", href: "/blog/uzbekistan" },
    { name: "Czech Republic", href: "/blog/czech-republic" },
    { name: "Cambodia", href: "/blog/cambodia" },
    { name: "Morocco", href: "/blog/morocco" },
    { name: "New Zealand", href: "/blog/newzealand" },
    { name: "Bahrain", href: "/blog/bahrain" },
    { name: "Netherlands", href: "/blog/netherlands" },
    { name: "Russia", href: "/blog/russia" },
    { name: "Philippines", href: "/blog/philippines" },
    { name: "Brazil", href: "/blog/brazil" },
    { name: "Saudi Arabia", href: "/blog/saudi-arabia" },
    { name: "Kenya", href: "/blog/kenya" },
    { name: "Portugal", href: "/blog/portugal" },
    { name: "Belgium", href: "/blog/belgium" },
    { name: "Croatia", href: "/blog/croatia" },
    { name: "Lithuania", href: "/blog/lithuania" },
    { name: "Ireland", href: "/blog/ireland" },
    { name: "Luxembourg", href: "/blog/luxembourg" },
    { name: "Romania", href: "/blog/romania" },
    { name: "Bulgaria", href: "/blog/bulgaria" },
    { name: "Slovakia", href: "/blog/slovakia" },
    { name: "Latvia", href: "/blog/latvia" },
    { name: "Estonia", href: "/blog/estonia" },
  ];

  const quickLink = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Services", link: "/service" },
    { title: "Blogs", link: "/blog" },
    { title: "Contact Us", link: "/contact" },
  ];

  const SocialIcon = ({ Icon, link }) => (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="w-9 h-9 bg-[#d82023] hover:bg-[#d82023e2] rounded flex items-center justify-center text-white"
    >
      <Icon className="text-lg" />
    </a>
  );

  console.log("state", state.data);

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


  return (
    <div className="Footer relative     mt-16 md:mt-40  ">
      <div className="pt-5  xl:pt-20 bg-cover bg-center   bg-[url('/img/successstory-bg.webp')]">
        <div className="relative -mt-24 md:-mt-36  xl:-mt-40 ">
          <TravelDesination />
        </div>

        <div className="text-white z-30 relative">
          <div className="container mx-auto relative z-10 px-5 md:px-16 xl:px-32 mt-10">
            <div className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-10 justify-between mb-8">
              {/* Brand Info */}
              <div className="space-y-4 lg:w-[30%]">
                <Link href="/">
                  <img
                    className="h-[75px] object-cover -translate-x-3 md:-translate-x-5"
                    src="/img/newSiteEditLogo.png"
                    alt="Site Logo"
                  />
                </Link>
                <p className="text-sm text-gray-300">
                  Enjoy a smooth, affordable visa process with our special
                  offers — whether you're traveling for leisure, work, or study.
                  Our expert team ensures a hassle-free experience, guiding you
                  every step of the way to make your journey stress-free and
                  successful.
                </p>
                <div className="flex gap-2">
                  <SocialIcon
                    Icon={RiInstagramFill}
                    link="https://www.instagram.com"
                  />
                  <SocialIcon
                    Icon={FaFacebook}
                    link="https://www.facebook.com"
                  />
                  <SocialIcon Icon={FaTwitter} link="https://www.twitter.com" />
                  <SocialIcon Icon={FaYoutube} link="https://www.youtube.com" />
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4 lg:w-[20%]">
                <h5 className="font-bold text-xl text-white">Quick Links</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  {quickLink.map((item, idx) => (
                    <li key={idx} className="py-2 border-b border-gray-700">
                      <Link href={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Address Section */}
              <div className="space-y-4 lg:w-[30%]">
                <h5 className="font-bold text-xl text-white">Our Address</h5>
                <p className="text-gray-300">❤️ Chandigarh</p>
                <div className="flex items-start gap-2 text-gray-300">
                  <IoLocationOutline className="text-xl mt-1" />
                  <p>
                    Sco-327, First Floor, 40D, Sector 40D, Chandigarh, 160039
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-gray-300">
                  <a
                    href="tel:+91750857505"
                    className="flex items-center gap-2 hover:text-white"
                  >
                    <MdOutlineLocalPhone />
                    +91 75085 75015
                  </a>
                  <a
                    href="mailto:info@oicglobal.in"
                    className="flex items-center gap-2 hover:text-white"
                  >
                    <HiOutlineMail />
                    info@oicglobal.in
                  </a>
                </div>
                <div className="bg-[#60A765] flex gap-2 items-center w-fit px-3 py-2 rounded text-white cursor-pointer hover:bg-green-700 transition">
                  <img
                    src="/img/asset 2.svg"
                    alt="Chat Icon"
                    className="w-6 h-6"
                  />
                  <a href="#" className="text-sm">
                    Chat with us
                  </a>
                </div>
                <p>Mon - Sat 09:30 -06:00</p>
              </div>

              {/* Map & Chat */}
              <div className="space-y-4 lg:w-[35%]">
                <h5 className="font-bold text-xl text-white">Location Map</h5>
                <div className="w-full h-[250px]  lg:h-[250px] rounded overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13717.016073243036!2d76.71233148715822!3d30.739365499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef982b302523%3A0x34465ec6b1a743d7!2sOIC%20Global!5e0!3m2!1sen!2sin!4v1745919113712!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <hr className="mt-8 broder border-dotted" />

          <div className=" px-5 md:px-16 xl:px-32 pt-10 ">
            <h2 className="mb-5 text-2xl font-semibold">
              Study visa countries
            </h2>

            <ul
              className="flex flex-row text-white flex-wrap gap-y-2 pb-6"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(10%, 1fr))",
              }}
            >
              {studyVisaCountries.map((elm, index) => {
                return (
                  <Link key={index} className="shrink-0 gap-x-3" href={`/${elm.name.toLowerCase().split(" ").join("-")}`}>
                    {elm.name}
                    <span className="mx-2">•</span>
                  </Link>
                );
              })}
            </ul>
          </div>

          <hr className="mt-8 broder border-dotted" />

          <div className=" px-5 md:px-16 xl:px-32 pt-10 ">
            <h2 className="mb-5 text-2xl font-semibold">
              Read more about visas
            </h2>

            <ul
              className="flex flex-row flex-wrap gap-y-2 pb-6"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(10%, 1fr))",
              }}
            >
              {state.data.map((elm, index) => {
                return (
                  <Link
                    key={index}
                    className="shrink-0 gap-x-3"
                    href={`/${elm.slug}`}
                  >
                    {elm.Countryname}
                    <span className="mx-2">•</span>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="py-4  px-5 md:px-16 lg:px-32 ">
          <div className="md:flex flex-wrap  lg:grid lg:grid-cols-3 lg:justify-items-center  xl:flex xl:justify-between  items-center text-sm text-white justify-center md">
            <p className="text-center">
              © {new Date().getFullYear()} OIC Global Your Dream Our Mission.
              All rights reserved.
            </p>
            <p className="">
              <span className="flex md justify-center md">
                Designed by&nbsp;
                <a
                  href="https://www.futuretouch.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Future IT Touch ❤️
                </a>
              </span>
            </p>
            <div className="space-x-4 mb-2 md:mb-0  flex md justify-center md">
              <Link href="/privacy-policy">Privacy Policy | </Link>
              <Link href="/terms-conditions">Terms & Conditions </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
