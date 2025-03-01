"use client";

import Link from "next/link";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import seaarchData from "./SearachPlacesData";
import SearchPlaceCard from "./SearchPlaceCard";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../Store/Slices/countryslices";
import { storageurl } from "../Store/Rooturl";
import SearchPlaceCardSkeleton from "./SearchPlaceCardSkeleton";

export default function SearchPlaces() {
  // const [loadMore, setLoadMore] = useState(8);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.countryslices);

  const [flagsData, setFlagsData] = useState();
  const [ApiData, setApiData] = useState();

  const [filterCard, setFilterCard] = useState();

  const [cardbtnFilter, setCardbtnFilter] = useState("");

  const [inpuValue, setInpuValue] = useState("");
  const [searchCounty, setSearchCounty] = useState(true);
  const fetchflagData = async () => {
    const res = await axios.get(
      "https://api.countrystatecity.in/v1/countries",
      {
        headers: {
          "X-CSCAPI-KEY":
            "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==",
        },
      }
    );

    setApiData(res.data);
  };
  const [mainindex, setmainindex] = useState(8);

  useEffect(() => {
    if (cardbtnFilter.toLowerCase() == "all") {
      setFilterCard(state);
    } else if (cardbtnFilter) {
      const filterCard = seaarchData.filter((elm) => {
        return (
          elm.visa.toLowerCase().trim() == cardbtnFilter.toLowerCase().trim()
        );
      });

      setFilterCard(filterCard);
    } else {
      setFilterCard(seaarchData);
    }
  }, [cardbtnFilter]);

  useEffect(() => {
    fetchflagData();
    dispatch(getCountry());
  }, []);
  useEffect(() => {
    setFilterCard(state.data);
  }, [state]);
  useEffect(() => {
    let filterDataaa =
      state.data &&
      state.data.filter((elm) => {
        return elm.Countryname.toLowerCase().includes(inpuValue.toLowerCase());
      });
    console.log(filterDataaa);
    setFlagsData(filterDataaa);
  }, [inpuValue]);

  // const cardBtns = [
  //   "All",
  //   "Popular",
  //   "Visa in a Week",
  //   "Easy Visa",
  //   "Schengen Visa",
  //   "Visa Free",
  //   "Free Season",
  // ];

  function countryCodeToEmoj(countryCode) {
    // Ensure the countryCode is in uppercase and has exactly 2 characters

    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => char.charCodeAt(0) + 127397);

    return String.fromCodePoint(...codePoints);
  }

  countryCodeToEmoj("IN");

  console.log(flagsData, "flag");

  return (
    <div className="SearchPlace bg-[url(/img/placeTravel.webp)] bg-cover bg-center mt-10 md:mt-0 py-10 overflow-hidden">
      <div className="px-5 md:px-16 xl:px-32 py-2">
        <div className="navigation-links-parent  flex justify-between flex-col items-center gap-5  lg:flex-row ">
          <div className="w-full xl:w-[30%] relative flex flex-col ">
            <div className="w-full  z-40   text-black bg-white py-2 flex items-center gap-5 rounded-full px-5 shadow-md">
              <label htmlFor="searchPlace">
                <GiAirplaneDeparture className="text-[#E96525] text-xl " />
              </label>
              <input
                className="w-[100%] h-full border-0 outline-none"
                value={inpuValue}
                onChange={(e) => {
                  setInpuValue(e.target.value);
                }}
                maxLength="30"
                id="searchPlace"
                type="text"
                placeholder="Where to, captain?"
                autoComplete="off"
              />
              <label
                htmlFor="searchPlace"
                className="bg-[#E96525] p-3 rounded-full text-white"
              >
                <IoSearch className="" />
              </label>
            </div>
            {inpuValue && flagsData && (
              <div
                className={`SearchReasult absolute z-20  w-full  flex flex-col gap-1   bg-white rounded rounded-tl-2xl rounded-tr-2xl ${
                  flagsData.length && "pt-20 pb-5"
                } `}
              >
                {flagsData &&
                  flagsData.map((elm) => {
                    return (
                      <>
                        <Link
                          href={`/${elm.slug}`}
                          className="flex justify-between px-5 hover:bg-zinc-100 py-3 duration-150"
                        >
                          <img
                            className="w-10 h-10"
                            src={`${storageurl}/${elm.flag}`}
                            alt=""
                          />

                          {elm.Countryname}
                        </Link>
                      </>
                    );
                  })}
              </div>
            )}
          </div>
        </div>

        <div className="cards-parent">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 py-10">
            {filterCard && filterCard.length > 0
              ? filterCard.map((elm, index) => {
                  return (
                    <>
                      {index < mainindex && (
                        <SearchPlaceCard key={elm.id} cardElment={elm} />
                      )}
                    </>
                  );
                })
              : [...Array(mainindex)].map((_, index) => (
                  <SearchPlaceCardSkeleton key={index} />
                ))}
          </div>
        </div>
        {filterCard && mainindex < filterCard.length && (
          <div className={` flex justify-center`}>
            <button onClick={() => setmainindex(mainindex + 8)}>
              load more
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
