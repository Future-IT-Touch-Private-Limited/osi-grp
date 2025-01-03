

"use client"
import React, { useState } from "react";
import { FaWpforms } from "react-icons/fa6";
import { IoIosArchive } from "react-icons/io";
import { RiArchiveDrawerLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import AllApplication from "./AllApplication";
import Archived from "./Archived";
import AllAplicationMap from "./AllAplicationMap";
export const Mydashi = () => {
    const [toogler, setToogler] = useState(false);
  return (
   <>
     <div className="userDashbord bg-[#F4F5F7] lg:py-20">
      <div className="px-5 md:px-15 lg:mx-40 xl:mx-80   py-1 md:py-5   flex flex-col gap-5 ">
        <div className="border-b-2 pb-5">
          <h3 className="text-xl text-center font-bold text-gray-500">
            Welcome to travels deals
          </h3>
        </div>
        <div className="border w-full lg:w-52 px-2 py-3 rounded bg-slate-200 flex gap-5 m-2">
          <input
            type="text"
            placeholder="Search by name , county"
            className="w-[100%] text-xs h-[100%] bg-transparent border-0 outline-0"
          />

          <IoSearchOutline />
        </div>

        <div className="All-application-and-archived">
          <div className="flex gap-5 border-b-2 mb-3">
            <button onClick={()=>setToogler(true)} className="flex gap-3 items-center  hover:border-b-2 border-blue-800">
              <FaWpforms />
              <span>All application</span>
            </button>
            <button onClick={()=>setToogler(false)} className="flex gap-3 items-center hover:border-b-2 border-blue-800">
              <RiArchiveDrawerLine />
              <span>Archived</span>
            </button>
          </div>
        </div>

        <div className="border bg-white ">
          <div className="YourDraftApplication border-b-2 p-3 ">
            <h4 className="text-light ">Your draft application (14)</h4>
          </div>

          {toogler ? <AllAplicationMap/>
           : (<><Archived /><Archived /><Archived /><Archived /><Archived /></>)}

          <div>
            
          </div>
        </div>
      </div>
    </div>
   </>
  )
}
