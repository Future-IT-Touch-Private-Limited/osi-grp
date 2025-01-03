"use client";
import React, { useEffect, useState,useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TiUploadOutline } from "react-icons/ti";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineCheck } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

export default function StepByStep() {
  const [show,setShow]=useState(false)
  const stepbystepRef = useRef(null);

  

  useEffect(() => {
    const checkHeight = () => {
      if (stepbystepRef.current) {
        const elementHeight = stepbystepRef.current.offsetHeight;
        const parentHeight = stepbystepRef.current.parentElement.offsetHeight;
  
        if (elementHeight >= parentHeight * 0.2) {
          setShow(true);
        } else {
          setShow(false);
        }
      }
    };
  
    const observer = new ResizeObserver(checkHeight);
    if (stepbystepRef.current) {
      observer.observe(stepbystepRef.current);
    }
  
    // Cleanup
    return () => {
      if (stepbystepRef.current) {
        observer.unobserve(stepbystepRef.current);
      }
    };
  }, []);
  
  const date = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateAndMonth = {
    year: date.getFullYear(),
    month: monthNames[date.getMonth()],
    day: date.getDate(),
  };
  return (
    <div id='types-of-process'  className="StepBySetop  px-5 py-5  md:px-15 lg:px-20    md:py-20 ">
      <div className="flex flex-col items-center text-center gap-5">
        <h3 className="md:text-3xl font-bold">
          Expert Visa Assistance in Just a Few Steps
        </h3>
        <p className="text-xs flex gap-1 ">
          Showing steps for
          <button
            onClick={() => setShow(!show)}
            className="font-bold  cursor-pointer flex items-center gap-2"
          >
            Tourist sticker
          </button>{" "}
          <MdKeyboardArrowDown
            className={`text-base ${show && "rotate-180"}`}
          />
        </p>
      </div>
      <div  className="stepTextAndAnimation relative flex justify-center   my-10 ">
        <div onMouseEnter={()=>setShow(true)} onMouseOut={()=>setShow(false)} className="group relative flex  h-full  flex-row items-start justify-center gap-7 md:max-w-[521px] md:gap-8">
          <div ref={stepbystepRef} className="absolute stepbystepSideLineAnimation  left-0 z-0 h-full w-16 overflow-hidden rounded-[60px] ">
            <div  className="absolute left-[32px] z-[5] h-full w-16 -translate-y-[100%] translate-x-[-50%] rounded-[60px] bg-royalblue-200 transition duration-[2000ms] ease-in-out group-hover:translate-y-[0%]"></div>
            <div className="absolute w-16"></div>
          </div>
          <div className="flex h-full w-full flex-col items-start justify-between py-4">
            <div className="flex w-full pb-[18px]">
              <div className="mr-[27px] flex min-w-[64px] items-center justify-center md:mr-[39px]">
                <div className="z-[15] h-[34px] w-[34px] rounded-full bg-[#FADB5F]"></div>
              </div>
              <div className="w-full">
                <p className="text-base font-normal text-slategray-200">
                  Today
                </p>
                <p className="text-xl font-semibold text-[#252D3D]">
                  {dateAndMonth.day} {dateAndMonth.month} {dateAndMonth.year}
                </p>
              </div>
            </div>

            <div>
              <div className="flex w-full py-[18px]">
                <div className="mr-[27px] flex min-w-[64px] items-start justify-center md:mr-[39px]">
                  <div className="relative">
                    <TiDocumentText className={`anim2 text-3xl `} />
                  </div>
                </div>
                <p className="flex w-full flex-col font-inter text-base">
                  <span className="inline-flex pb-2 font-inter font-bold leading-[20.99px] text-[#252D3D]">
                    Start & submit your application
                  </span>
                  <span className="font-inter font-normal text-slategray-200">
                    Complete your application accurately on our user-friendly
                    platform
                  </span>
                </p>
              </div>
              <div className="flex w-full py-[18px]">
                <div className="mr-[27px]  flex min-w-[64px] items-start justify-center md:mr-[39px]">
                  <div className="relative">
                    <IoCalendarNumberOutline className={`anim3 text-3xl`} />
                  </div>
                </div>
                <p className="flex w-full flex-col font-inter text-base">
                  <span className="inline-flex pb-2 font-inter font-bold leading-[20.99px] text-[#252D3D]">
                    Expert review and appointment booking
                  </span>
                  <span className="font-inter font-normal text-slategray-200">
                    Your designated visa expert reviews your application and
                    books your appointments at the visa centre.
                  </span>
                </p>
              </div>
              <div className="flex w-full py-[18px]">
                <div className="mr-[27px] flex min-w-[64px] items-start justify-center md:mr-[39px]">
                  <div className="relative">
                    <TiUploadOutline className={`anim4 text-3xl `} />
                  </div>
                </div>
                <p className="flex w-full flex-col font-inter text-base">
                  <span className="inline-flex pb-2 font-inter font-bold leading-[20.99px] text-[#252D3D]">
                    Visit visa application centre
                  </span>
                  <span className="font-inter font-normal text-slategray-200">
                    Visit the visa centre to submit biometrics with our guidance
                    and support.
                  </span>
                </p>
              </div>
              <div className="flex w-full py-[18px]">
                <div className="mr-[27px] flex min-w-[64px] items-start justify-center md:mr-[39px]">
                  <div className="relative">
                    <BiMessageDetail className={`anim5 text-3xl `} />
                  </div>
                </div>
                <p className="flex w-full flex-col font-inter text-base">
                  <span className="inline-flex pb-2 font-inter font-bold leading-[20.99px] text-[#252D3D]">
                    Visa delivered on time
                  </span>
                  <span className="font-inter font-normal text-slategray-200">
                    Relax as we ensure your visa is processed promptly and
                    delivered on time.
                  </span>
                </p>
              </div>
            </div>

            <div className="flex w-full pt-[18px]">
              <div className="mr-[27px] flex min-w-[64px] items-center justify-center md:mr-[39px]">
                <figure className={`absolute z-[10] flex h-[34px] w-[34px] items-center justify-center rounded-full  group-hover:z-[15] group-hover:bg-[#70CDA0] ${show?"bg-[#70CDA0]":"bg-[#D9E8FC]"}`}>
             <FaCheck className={`font-extrabold  text-white ${show?"block":"hidden"} `} />

                </figure>
              </div>
              <div className="w-full">
                <p className="flex w-full flex-col font-inter text-base">
                  <span className="inline-flex pb-2 font-inter leading-[20.99px] text-[#252D3D]">
                    Get visa by
                  </span>
                  <span className="text-xl font-semibold text-[#252D3D]">
                    4 Oct 2024
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
