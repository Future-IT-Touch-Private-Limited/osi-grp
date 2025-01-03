"use client";
import React from "react";
import { PiFileArchiveDuotone } from "react-icons/pi";

export default function AllApplication() {
  return (
    <>
      <div className="applicationsss flex flex-col gap-5 p-3">
        <div className="grid grid-cols-1 md:grid-cols-2  md:gap-5">
          <div className="flex justify-between p-3">
            <div className="flex items-center gap-5">
              <span className="hidden md:block">GB</span>
              <div className="flex flex-col ">
                <span className="text-sm">United Kingdom(UK)</span>
                <span className="text-xs">#iz83mp</span>
              </div>
            </div>
            <div className="flex gap-1  items-center">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <p className="text-xs">1 day ago</p>
            </div>
          </div>
       
          <div className='flex justify-center gap-5 lg:justify-end items-center'>
            <button className="text-[#4352CC] bg-[#D1E5FF] text-xs w-full  md:w-fit md:px-14 py-2  rounded">
              <span className="md:hidden">Resume application</span>
              <span className="hidden md:block">Resume</span>
             
              <span className="hidden md:block">application</span>
            </button>
            <button className="md:text-3xl">
              <PiFileArchiveDuotone />
            </button>
           
          </div>

        </div>

        <div className="hidden md:flex gap-5 lg:gap-2 lg:items-center  bg-[#FFFACB] py-5 px-2 rounded">
          <h4 className="font-bold text-[#9A4A0F]">Note:</h4>
          <p className="text-xs md:text-sm">
            Visa approval from UK embassy takes about 3 to 5 weeks, once an
            application is submitted.
          </p>
        </div>

        <div className="flex md:hidden gap-5 lg:gap-2 lg:items-center  bg-[#FFFACB] py-5 px-2 rounded">
          <p className="text-xs md:text-sm">
          <span className="font-bold text-sm text-[#9A4A0F]">Note:</span> Visa approval from UK embassy takes about 3 to 5 weeks, once an
            application is submitted.
          </p>
        </div>
      </div>
    </>
  );
}
