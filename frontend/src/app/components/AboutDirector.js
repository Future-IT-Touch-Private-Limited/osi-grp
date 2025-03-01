"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function AboutDirector() {
  const directore = [
    {
      id:1,
      img: "/img/directore.webp",
      name: "Gurbinder Singh Gill",
      position: "   Director of OIC Global Your Dream our mission",
      desc: "Welcome to our immigration company, where your dreams of a better future become a reality. At OIC Global, we understand the challenges and complexities that come with the immigration process. Our team of dedicated professionals is here to guide and support you every step of the way. We believe in building long-term relationships with our clients based on trust, honesty, and open communication. ",
    },
    {
      id:2,
      img: "/img/Paramveer.webp",
      name: "Paramveer Singh Tiwana",
      position: "   Director of OIC Global Your Dream our mission",
      desc: "At OIC Global, we believe that every journey begins with a dream. As directors, we strive to simplify the immigration process with expert insights and dedicated assistance. Our goal is to empower individuals with the right opportunities while fostering trust, clarity, and long-term relationships with our clients. ",
    },
  ];
  return (
    <>
      <Swiper
      loop={true}
      autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[ Autoplay]}
       className="mySwiper">
      {directore.map((elm, index) => (  
        <SwiperSlide   key={index} className="lg:pb-5 xl:pb-0">
        <div
        
          className="relative xl:h-[80vh] bg-[url(/img/aboutDirector.webp)] bg-cover bg-center pb-28 pt-16 md:py-0 md:mt-10 lg:mt-20"
        >
          <div className="absolute inset-0 bg-[#be6d6e1e] blur-2xl  md:blur-3xl"></div>

          <div className="relative h-full w-full px-5 md:px-16 xl:px-32  flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row items-center md:items-center justify-between  xl:py-24 text-white">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={elm.img}
                alt="Director"
                className={`w-[250px] h-[250px] md:w-[350px] md:h-[350px] xl:w-[450px] xl:h-[450px] object-cover  drop-shadow-2xl  rounded-full border-4 border-red-200 aspect-square ${elm.id==1?"object-[50%_30%]":"object-top"}`}
              />
            </div>

            {/* Right Section - Director Info */}
            <div className="w-full lg:w-1/2 mt-1 md:mt-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-orange-300">
                {elm.name}
              </h2>
              <p className="text-sm md:text-base xl:text-lg mt-2 text-gray-400 italic">
                {elm.desc}
              </p>
              
            </div>
          </div>
        </div>
        </SwiperSlide>
      ))}
      </Swiper>
    
    </>
  );
}
