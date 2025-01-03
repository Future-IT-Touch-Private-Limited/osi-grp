"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
export default function HowWork() {
  const[bold,setBold]=useState(1)
  const [height,setHeight]=useState(4)
  

    useEffect(() => {
      const boldInterval = setInterval(() => {
        setHeight((preValue)=>{
          if(preValue<=12){
            return preValue+4
          }else{
            return 4;

          }
        })

        setBold((prevValue) => {
          if (prevValue < 4) {
            return prevValue + 1;
          } else {
            return 1; // Reset to 1 when it reaches 4
          }
        });

      }, 2000);
    
      return () => clearInterval(boldInterval);
    }, []);


  return (
    <div className="How-work py-10 ">
      <div className="px-5 md:px-15 lg:px-20">
        <div className="flex text-center flex-col items-center gap-3 lg:gap-5 py-10">
          <h2 className="text-2xl lg:text-5xl font-bold text-sky-950">How it works</h2>
          <p className=" font-normal  text-gray-700 text-lg  md:text-xl">
            Everything visa at one place, service fee
          </p>
          <p className="font-normal  text-gray-700 text-lg  md:text-xl ">starting from only ₹499.</p>
        </div>

        <div className="flex flex-col  justify-center md:flex-row items-center gap-5 lg:gap-20  ">
          <div className="left w-[100%] md:w-[70%] xl:w-[60%] flex lg:justify-end">
            <figure className="w-[100%] xl:max-w-[500px] ">
              <img
                className="w-[100%] h-auto object-cover"
                src="/img/imgpsh_fullsize_animhow.gif"
                width={120}
                height={120}
                alt="waitt for img"
              />
            </figure>
          </div>
          <div className="right  bg-resd-400 flex  gap-5  lg:gap-10">
          <div className="GreenLineParent rounded-3xl h-64 overflow-hidden">
          <div className="greenLine bg-[#038B00] duration-500 p-[0.1rem] lg:p-[0.2rem]  rounded " style={{height:`${height}rem`}}></div>

          </div>
            <div className="flex flex-col gap-5 text-base xl:text-2xl mt-2 lg:mt-5 md:w-[80%] lg:w-[100%] ">
              <h3 className={` text-gray-800 font-bold  ${bold==1 ? "opacity-100":"opacity-60"}`}>Fill Out Your Details & Pay</h3>
              <h3 className={` text-gray-800 font-bold  ${bold==2 ? "opacity-100":"opacity-60"}`}>Speedy Documentation with AI</h3>
              <h3 className={` text-gray-800 font-bold  ${bold==3 ? "opacity-100":"opacity-60"}`}>Expert & AI Double Check for a Perfect Application</h3>
              <h3 className={` text-gray-800 font-bold  ${bold==4 ? "opacity-100":"opacity-60"}`}>
                Sit Back as We Deliver Your Visa on Time. Your Worry-Free
                Journey Begins!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
