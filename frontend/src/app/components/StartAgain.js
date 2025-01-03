"use client";

import Image from "next/image";
export default function StartAgain() {
  return (
    <div className=" Scratch-Again mt-10 py-5 px-5 md:px-15  lg:px-28 xl:px-60">
      <div className=" px-5 bg-[#E7F4F6]  xl:px-20 py-10 md:py-0 md:pt-10  lg:pt-0 flex flex-col items-center gap-5  md:gap-0 md:flex-row md:justify-between rounded-3xl">
        <div className="left md:self-end ">
          <figure className="md:w-60 lg:w-64">
            <img
              src="/img/asset 21.png"
              alt="wait"
              className="w-[100%] h-auto object-cover"
              height={100}
              width={1000}
            />
          </figure>
        </div>

        <div className="right  text-center md:text-start md:py-5 lg:py-10 ">
          <div className="flex flex-col  gap-3 ">
            <h2 className="font-bold md:text-xl ">
              Never Start from Scratch Again
            </h2>
          <div className="flex flex-col gap-3">
          <h2 className="capitalize text-slate-700 text-xs sm:text-sm   xl:text-xl">
              🔒 Securely save your data for future use
            </h2>
            <h2 className="capitalize text-slate-700 text-xs sm:text-sm xl:text-xl">
              🌏 Be visa-ready for over 21 countries
            </h2>
          </div>
            <div className="">
              <button className="bg-[#006251] text-white px-10 py-2 rounded">
                Apply now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
