"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MdWatchLater } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";



const HeroSection = () => {
  const [chnageText, setChangeText] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setChangeText((prev) => (prev === 3 ? 1 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="HeroSection md:mt-12">
      <div className="px-5 md:px-15 lg:px-20 flex flex-col md:flex-row  md:items-center gap-5 lg:gap-8 justify-between">
        <div className="left w-full md:w-[50%] flex flex-col text-center  items-center justify-center lg:items-start  gap-5 pt-8">
          <h2 className="text-xl  text-center md:text-start ">
            India &rsquo; s most loved visa platform ❤️
          </h2>

          <h2 className="  text-2xl lg:text-3xl xl:text-5xl font-bold  relative">
            Visas made{" "}
            <span className="">
              {" "}
              <span
                className={`text-[#6255BA]   absolute top-0 ${
                  chnageText === 1 ? "opacity-100" : "opacity-0 "
                } duration-500`}
              >
                fast
              </span>
              <span
                className={`text-[#59B6D6]  absolute top-0 ${
                  chnageText === 2 ? "opacity-100" : "opacity-0 "
                } duration-500`}
              >
                smart
              </span>
              <span
                className={`text-[#5DB182]   ${
                  chnageText === 3 ?  "opacity-100" : "opacity-0 "
                } duration-500`}
              >
                guaranteed
              </span>
            </span>
          </h2>

          <div className="relative  sm:w-fit  ">
            <div
              className={`absolute py-1 top-0 flex w-[100%]  px-3 text-xl items-center text-[#6255BA] gap-3 bg-[#6255ba20] rounded-full ${
                chnageText == 1 ? "opacity-100" : "opacity-0"
              }  duration-500 `}
            >
              <MdWatchLater className="text-xl" />
              On time,every time
            </div>
            <div
              className={` flex w-[100%] py-1 px-3 gap-3 text-xl items-center text-[#52B5D5] bg-[#52b4d523] rounded-full ${
                chnageText == 2 ? "opacity-100" : "opacity-0"
              } duration-500`}
            >
              <FaUserAlt />
              Dedicated visa expert
            </div>
           
          </div>
        </div>

        <div className="right md:w-[50%] ">
       
          <figure className="flex justify-center md:justify-end">
            <img
              className="w-[100%] h-[100%] sm:w-[80%] sm:h-[80%] rounded-2xl"
              src="/img/imgpsh_fullsize_animnew.gif"
              width={400}
              height={400}
              alt="wait for img"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
