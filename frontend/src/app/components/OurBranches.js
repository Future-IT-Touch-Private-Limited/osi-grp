"use client";
import React, { useState } from "react";

export default function OurBranches() {
  const [curntBranch, setCurntBranch] = useState(null);

  const branches = [
    {
      barnchName: "Chandigarh",
      address: "Sco- 327, first floor, 40D, Sector 40D, Chandigarh, 160039",
    },
    {
      barnchName: "Dera Bassi",
      address:
        "#1248, first floor, near Punjab properties, Barwala Road, Dera Bassi",
    },
    {
      barnchName: "Ghanaur",
      address:
        "OIC Global Ghanaur (Near Maruti Agency, First Floor Rainbow Cafe)",
    },
    {
      barnchName: "Doraha",
      address: "Backside Honda Agency, Near Bus Stand, Doraha",
    },
    {
      barnchName: "Pehowa",
      address:
        "OIC Global Pehowa (1st Floor, Super Market Pehowa, Near Bus Stand)",
    },
  ];

  return (
    <div className="px-5 md:px-16 xl:px-32 pt-8 md:py-12 xl:pb-0 xl:pt-16">
      <h4 className="font-bold text-xl sm:text-2xl md:text-3xl mb-4">
        Our Branches
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mt-4 lg:mt-8">
        {branches.map((elm, index) => {
          const isActive = curntBranch === index;

          return (
            <div
              key={index}
              onClick={() => setCurntBranch((prev)=>prev==index?null:index)}
              className={`group h-[240px] sm:h-[260px] p-4 rounded-lg shadow-md cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-y-3
                ${
                  isActive
                    ? "bg-[#D92024] text-white"
                    : "bg-white text-black border-b-4 border-[#D92024] hover:bg-[#D92024] hover:text-white hover:border-0"
                }
              `}
            >
              <button
                className={`text-sm sm:text-base md:text-lg font-semibold px-4 py-2 rounded-full transition-all duration-300
                  ${
                    isActive
                      ? "bg-white text-[#D92024]"
                      : "border-2 border-[#D92024] text-[#D92024] group-hover:bg-white group-hover:text-[#D92024]"
                  }
                `}
              >
                {elm.barnchName}
              </button>
              <p
                className={`text-xs sm:text-sm text-center px-2 ${
                  isActive ? "text-white" : "group-hover:text-white"
                }`}
              >
                {elm.address}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
