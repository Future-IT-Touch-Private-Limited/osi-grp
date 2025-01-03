"use client";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";


const TravelDesination = () => {
  return (
    <div className="TravelDesination px-5 md:px-15 lg:px-20 py-5 ">
      <div className="bg-[#F6F5EE] px-5 lg:px-20 py-10  border-8  border-white rounded-2xl flex flex-col gap-10 md:gap-5 lg:gap-0 lg:flex-row md:justify-between">
        <div className="flex flex-col gap-5 md:gap-11">
            <div className="flex flex-col gap-2 md:text-center lg:text-start">
            <h5 className="text-bold lg:text-2xl font-bold">Ready to get started? Enter your travel destination</h5>
          <h5 className=" font-semibold text-slate-500 text-xs xl:text-base">
            Know your visa process • Get document checklist • FREE Sign up!
          </h5>
            </div>
          <div className="w-full xl:w-[100%] text-black bg-white py-1 md:py-2 flex items-center gap-5 rounded-full px-2 md:px-5 shadow-md">
            <label htmlFor="searchPlace">
              <GiAirplaneDeparture className="text-[#E96525] text-xl  " />
            </label>
            <input
              className="w-[100%] text-xs md:text-base h-full border-0 outline-none   md:text-center lg:text-start"
            //   maxLength="30"
              id="searchPlace"
              type="text"
              placeholder="Where to, captain?"
            />
            <label
              htmlFor="searchPlace"
              className="bg-[#E96525] p-3 rounded-full text-white"
            >
              <IoSearch />
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:items-end md:text-center lg:text-start ">
            <div className="bg-[#EAE8D7] w-[100%] lg:w-[65%] h-[50%] px-5 py-3 rounded-xl">
                <p>Faster than 10-min grocery delivery</p>
            </div>
            <div className="bg-[#E3E0C6] w-[100%]  lg:w-[65%] h-[50%] px-5 py-3 rounded-xl ">
                <p >Safer than a state-run bank</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TravelDesination;
