"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import SuccessStoryAbove from "./SuccessStoryAbove";

export default function SuccessStory() {
  const prevRef = useRef(null); // Ref for the previous button
  const nextRef = useRef(null); // Ref for the next button

  const VisaAndTravelsTeam = [
  
    {
      img: "/img/team/Harvindersingh.webp",
      name: "Harvinder singh ",
      position: "Manager",
    },
    {
      img: "/img/team/Bhupindersingh.webp",
      name: "Bhupinder singh",
      position: "Manager",
    },
    {
      img: "/img/team/Manpreet.webp",
      name: "Manpreet singh",
      position: "Manager",
    },
    {
      img: "/img/team/Amritpal.webp",
      name: "Amritpal singh",
      position: "Manager",
    },
    {
      img: "/img/team/Kuldeeep.webp",
      name: "Kuldeeep Kaur ",
      position: "Manager",
    },
  ];

  const [showDec, setShowDec] = useState(110);
  const [expan, setExpand] = useState(null);

  const setExpnadHandler = (id) => {
    setExpand((prev) => (prev == id ? null : id));
  };  

  return (
    <div className="relative mt-10  md:mt-40 ">
      <div className=" bg-[url('/img/successstory-bg.webp')]  bg-cover  bg-center space-y-10 lg:space-y-16 text-white py-5 lg:py-20">
        <div className="-mt-32 xl:-mt-40 h-auto px-5 md:px-16 xl:px-32  xl:block ">
          <SuccessStoryAbove />
        </div>

        <div className="px-5 md:pl-16 xl:pl-32 grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-y-0 gap-x-5 items-center">
          {/* Left Section */}
          <div className="col-span-1 space-y-5">
            <span className="relative tracking-wider border-[3px] text-xs py-[0.3rem] md:py-2 px-4 md:px-7 font-bold border-[#eee9e3]">
              MEET OUR TEAM{" "}
              <img
                src="/img/arrow.webp"
                className="absolute -top-2 left-14 md:left-[60px]"
                alt="arrow"
              />
            </span>
            <h3 className="text-xl md:text-3xl xl:text-5xl font-bold">
              {/* What people say  <br /> about us */}
              Our Dedicated <br /> Team Members
            </h3>
            <p className="text-sm md:text-base">
              We strongly believe in collaboration and excellence, bringing
              together a dedicated team of professionals from diverse
              backgrounds to drive innovation and success."
            </p>
            <div className="relative space-x-2 flex justify-start">
              <button
                ref={prevRef}
                className="w-10 h-10 md:w-12 md:h-12 text-[#F01D27] hover:bg-[#F01D27] hover:text-white flex items-center justify-center text-lg md:text-2xl bg-white group rounded-full transition-all duration-500 ease-in-out"
              >
                <IoArrowBack className="group-hover:-translate-x-1 transition-all duration-100 ease-in-out" />
              </button>
              <button
                ref={nextRef}
                className="w-10 h-10 md:w-12 md:h-12 text-[#F01D27] hover:bg-[#F01D27] hover:text-white flex items-center justify-center text-lg md:text-2xl bg-white group rounded-full transition-all duration-500 ease-in-out"
              >
                <IoArrowForward className="group-hover:translate-x-1 transition-all duration-100 ease-in-out" />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-2">
            <Swiper
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 15 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 20 },
                1280: { slidesPerView: 3, spaceBetween: 25 },
              }}
            >
              {VisaAndTravelsTeam.map((member, index) => (
                <SwiperSlide key={index} className="pb-10 md:pb-10">
                  <div className="relative h-[350px] md:h-[300px]   mx-auto md:mx-0 md:max-w-[250px]  border-2 border-white rounded">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="h-full w-full object-fill drop-shadow-xl rounded"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 flex items-end justify-center bg-[rgba(0,0,0,.1)] rounded   text-white text-center p-4">
                      <div className="relative -mb-10">
                        <h3 className="font-bold text-lg capitalize">{member.name}</h3>
                        <p className=" text-sm bg-white text-red-500 px-5 py-3 font-bold rounded">{member.position}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

