"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { GiAirplaneDeparture } from "react-icons/gi";
import { BiRupee } from "react-icons/bi";
import TestiMonial from "../components/testimonials/TestiMonial";
import SearchPlaceCardSkeleton from "../components/SearchPlaces/SearchPlaceCardSkeleton";
import { serviceData } from "../serviceData";
export default function Page() {
  const [inpuValue, setInpuValue] = useState("");
  const [mainindex, setmainindex] = useState(4);
  const [flagsData, setFlagsData] = useState([]);
  const storageurl = "https://your-storage-url.com"; // Replace with actual URL

  return (
    <>
      <div className="about-banner relative h-[40vh] md:h-[60vh] w-full overflow-hidden">
        <img
          src="/img/serviceBanner.webp"
          alt="OIC Global Services"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-16 text-white">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-6">
            At OIC Global, we specialize in delivering tailored immigration,
            education, and visa solutions to empower individuals and families
            for a successful international future.
          </p>
        </div>
      </div>

      <div className="SearchPlace bg-[url(/img/placeTravel.webp)] bg-cover bg-center mt-10 md:mt-0 py-10 overflow-hidden">
        <div className="px-5 md:px-16 xl:px-32 py-2">
          <div className="navigation-links-parent flex justify-between flex-col items-center gap-5 lg:flex-row">
            <div className="w-full xl:w-[30%] relative flex flex-col">
              <div className="w-full z-40 text-black bg-white py-2 flex items-center gap-5 rounded-full px-5 shadow-md">
                <label htmlFor="searchPlace">
                  <GiAirplaneDeparture className="text-[#E96525] text-xl" />
                </label>
                <input
                  className="w-full border-0 outline-none"
                  value={inpuValue}
                  onChange={(e) => setInpuValue(e.target.value)}
                  maxLength="30"
                  id="searchPlace"
                  type="text"
                  placeholder="Where to, captain?"
                  autoComplete="off"
                />
                <label
                  htmlFor="searchPlace"
                  className="bg-[#E96525] p-3 rounded-full text-white cursor-pointer"
                >
                  <IoSearch />
                </label>
              </div>

              {inpuValue && flagsData.length > 0 && (
                <div className="absolute z-20 w-full flex flex-col gap-1 bg-white rounded-tl-2xl rounded-tr-2xl pt-20 pb-5">
                  {flagsData.map((elm, idx) => (
                    <Link
                      key={idx}
                      href={`/${elm.slug}`}
                      className="flex justify-between px-5 hover:bg-zinc-100 py-3 duration-150"
                    >
                      <img
                        className="w-10 h-10"
                        src={`${storageurl}/${elm.flag}`}
                        alt={elm.Countryname}
                      />
                      {elm.Countryname}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="cards-parent">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 py-10">
              {serviceData && serviceData.length > 0
                ? serviceData.slice(0, mainindex).map((elm, index) => {
                    const { Countryname, image } = elm;
                    return (
                      <Link
                        key={index}
                        href={`/service/${service
                          .toLowerCase()
                          .split(" ")
                          .join("-")}`}
                        className="group overflow-hidden relative card bg-white rounded-xl flex flex-col gap-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                      >
                        <figure className="relative">
                          <img
                            className="w-full h-60 rounded-t-xl object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
                            src={image}
                            alt={Countryname}
                          />
                        </figure>

                        <div className="absolute inset-0 text-white bg-[rgba(0,0,0,.5)] px-5 py-4 flex items-center justify-center  gap-4">
                          <div className="flex text-center justify-between items-center">
                            <h5 className="text-lg font-bold tracking-tight">
                              {service}
                            </h5>
                          </div>
                          <div></div>
                        </div>
                      </Link>
                    );
                  })
                : [...Array(mainindex)].map((_, index) => (
                    <SearchPlaceCardSkeleton key={index} />
                  ))}
            </div>
          </div>

          {serviceData && mainindex < serviceData.length && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setmainindex(mainindex + 4)}
                className="bg-[#E96525] text-white px-6 py-2 rounded-full hover:bg-[#cf541e] transition"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>

      <TestiMonial />
    </>
  );
}
