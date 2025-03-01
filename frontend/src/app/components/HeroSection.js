"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MdWatchLater } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { SiGoogledataproc } from "react-icons/si";

import { FcProcess } from "react-icons/fc";

const HeroSection = () => {
  const [chnageText, setChangeText] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setChangeText((prev) => (prev === 3 ? 1 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="HeroSection relative  bg-[url(/img/travelDealsbg.webp)]  xl:h-screen">
      <div className="absolute  inset-0 bg-[rgba(7,8,19,0.9)] "/>
       
      <div className="px-5 relative z-40  pt-16  md:pt-20  xl:pt-24   h-full md:px-16 xl:px-32 flex flex-col lg:flex-row  md:items-center gap-5 lg:gap-8 justify-between">
          <div className=" left text-white w-full lg:w-[50%] flex flex-col text-center  items-center justify-center lg:items-start  gap-5 pt-8">
            <h2 className="text-xl   text-center md:text-start ">
              India &rsquo; s most loved visa platform ❤️
            </h2>

            <h2 className="  text-2xl lg:text-start lg:text-3xl xl:text-5xl font-bold  relative">
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
                    chnageText === 3 ? "opacity-100" : "opacity-0 "
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

              <div
                className={`absolute   py-1 top-0 flex w-[100%]  px-3 text-xl items-center text-[#5DB182] gap-3 bg-[#5db1817e] rounded-full ${
                  chnageText === 3 ? "opacity-100" : "opacity-0"
                }  duration-500 `}
              >
                <SiGoogledataproc className="text-xl " />
                Easy visa process
              </div>
            </div>

            <div className=" text-center lg:text-start text-lg lg:text-xl">
              <p>
                {" "}
                Get your visa processed quickly and affordably with our
                exclusive visa deals. Whether you’re planning a vacation,
                business trip
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2  flex justify-center lg:justify-end  relative overflow-hidden ">

                  <img src="/img/plane1.webp" alt="" className="w-28 h-10 hidden lg:block absolute left-0 top-[11rem] airplane" />
                  <img src="/img/ticket1.webp" alt="" className="w-28 h-10 hidden lg:block absolute left-0 top-[20rem] ticket"  />
                  <img src="/img/cloud1.webp" alt="" className="w-28 h-16 absolute hero-cloud left-0  " />

            <figure className="relative flex justify-center  lg:translate-x-20">

              <Image
                src="/img/banner_men.webp"
                width={400}
                height={400}
                alt="Visa Assistance"
                className="w-[90%] md:w-[70%] lg:w-[80%] h-auto rounded-2xl relative z-10 jump"
              />
            </figure>
          </div>
        </div>
        <div className="absolute inset-x-0 h-[32px] hero-mixing "></div>
    </div>
  );
};

export default HeroSection;

// <div className="HeroSection md:mt-12">
//   <div className="px-5 md:px-15 lg:px-20 flex flex-col md:flex-row  md:items-center gap-5 lg:gap-8 justify-between">
//     <div className="left w-full md:w-[50%] flex flex-col text-center  items-center justify-center lg:items-start  gap-5 pt-8">
//       <h2 className="text-xl  text-center md:text-start ">
//         India &rsquo; s most loved visa platform ❤️
//       </h2>

//       <h2 className="  text-2xl lg:text-3xl xl:text-5xl font-bold  relative">
//         Visas made{" "}
//         <span className="">
//           {" "}
//           <span
//             className={`text-[#6255BA]   absolute top-0 ${
//               chnageText === 1 ? "opacity-100" : "opacity-0 "
//             } duration-500`}
//           >
//             fast
//           </span>
//           <span
//             className={`text-[#59B6D6]  absolute top-0 ${
//               chnageText === 2 ? "opacity-100" : "opacity-0 "
//             } duration-500`}
//           >
//             smart
//           </span>
//           <span
//             className={`text-[#5DB182]   ${
//               chnageText === 3 ?  "opacity-100" : "opacity-0 "
//             } duration-500`}
//           >
//             guaranteed
//           </span>
//         </span>
//       </h2>

//       <div className="relative  sm:w-fit  ">
//         <div
//           className={`absolute py-1 top-0 flex w-[100%]  px-3 text-xl items-center text-[#6255BA] gap-3 bg-[#6255ba20] rounded-full ${
//             chnageText == 1 ? "opacity-100" : "opacity-0"
//           }  duration-500 `}
//         >
//           <MdWatchLater className="text-xl" />
//           On time,every time
//         </div>
//         <div
//           className={` flex w-[100%] py-1 px-3 gap-3 text-xl items-center text-[#52B5D5] bg-[#52b4d523] rounded-full ${
//             chnageText == 2 ? "opacity-100" : "opacity-0"
//           } duration-500`}
//         >
//           <FaUserAlt />
//           Dedicated visa expert
//         </div>

//       </div>
//     </div>

//     <div className="right md:w-[50%] ">

//       <figure className="flex justify-center md:justify-end">
//         <img
//           className="w-[100%] h-[100%] sm:w-[80%] sm:h-[80%] rounded-2xl"
//           src="/img/imgpsh_fullsize_animnew.gif"
//           width={400}
//           height={400}
//           alt="wait for img"
//         />
//       </figure>
//     </div>
//   </div>
// </div>
