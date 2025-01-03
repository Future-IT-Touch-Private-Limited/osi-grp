"use client";
import React, { useEffect } from "react";

import { IoMdStopwatch } from "react-icons/io";
import TouritsSingleProdcutVisa from "../components/TouritsSingleProdcutVisa";
import { useState } from "react";
import SingleProductFaq from "../components/SingleProductFaq";

import StepByStep from "./StepByStep";
import CheckList from "./CheckList";
import { useDispatch, useSelector } from "react-redux";
import { getSingleCountryvisa } from "../components/Store/Slices/singlecountryvisa";
import { getsinglecountry } from "../components/Store/Slices/singlecountryslice";
import { rooturl, storageurl } from "../components/Store/Rooturl";
import { Link } from "react-scroll";
import Swal from "sweetalert2";
import { FaWhatsapp } from "react-icons/fa";
import axios from "axios";
export function Realpage({ slug }) {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const [userId, setuserId] = useState();
  const [formData, setFormData] = useState({
    user_id: "",
    country_id: "",
    visa_type_id: "",
    applied_at: "",
    status: "pending",
  });

  const [visaCardFilter, setvisaCardFilter] = useState();
  const [countrydata, setcountrydata] = useState();
  const [trouristCard, setTouristCard] = useState("all");
  const dispatct = useDispatch();
  const state = useSelector((state) => state.singleCountryvisa);
  const state2 = useSelector((state) => state.singlecountry);

  useEffect(() => {
    if (trouristCard === "all") {
      setvisaCardFilter(state.data);
    } else {
      const newdata = state.data?.filter((info) => {
        return info.visa_type.toLocaleLowerCase() == trouristCard.toLowerCase();
      });
      setvisaCardFilter(newdata);
    }
  }, [trouristCard, state.data]);

  useEffect(() => {
    dispatct(getsinglecountry(slug));
  }, []);

  useEffect(() => {
    if (countrydata) {
      dispatct(getSingleCountryvisa(countrydata?.id));
    }
  }, [countrydata]);

  useEffect(() => {
    setvisaCardFilter(state.data);
  }, [state]);
  useEffect(() => {
    if (state2?.data && state2.data.length > 0) {
      setcountrydata(state2.data[0]);
    }
  }, [state2]);
  console.log(countrydata?.id);

  const handleSubmit = async (e, me) => {
    //  console.log(state.data)
    const localUserId = window.localStorage.getItem("user_id");

    if (!localUserId) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please login to submit visa application",
      });

      return;
    }

    e.preventDefault();

    console.log(me);
    const payload = {
      user_id: localUserId,
      country_id: countrydata?.id,
      visa_type_id: me,

      status: "pending",
    };

    console.log("Payload: ", payload);

    try {
      const response = await axios.post(`${rooturl}/appliedvisas`, payload);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Visa application submitted successfully!",
      });

      console.log(response);
    } catch (err) {
      console.log("Error submitting visa application. Please try again.", err);
    } finally {
      console.log(false);
    }
  };

  console.log(countrydata);


  const nemw = [
    {
      id:0
    },
    {
      id:2
    }
  ]

if (visaCardFilter?.length > 0) {
  console.log(visaCardFilter[0]?.processing_time || 30);


  let processingTime = visaCardFilter[0]?.processing_time || 30; 
  console.log(`Processing time: ${processingTime} days`);
  

  let today = new Date(2024, 8, 29); 
  console.log(`Today's date: ${today.toLocaleDateString('en-GB')}`); 
  
  
  let visaDate = new Date(today);
  visaDate.setDate(today.getDate() + 30); 
  console.log(visaDate);

  var date = new Date(); 
date.setDate(date.getDate() + processingTime); 
console.log(date);

  let options = { year: 'numeric', month: 'short', day: 'numeric' };
  let formattedDate = visaDate.toLocaleDateString('en-GB', options);
  console.log(`Visa date: ${formattedDate}`);
} else {
  console.error("visaCardFilter is undefined or empty");
}


  const currentDate = new Date();
  const visaDays = parseInt(countrydata?.GetVisaInDays); 
  currentDate.setDate(currentDate.getDate() + visaDays); // Add days to current date

  // Format date to "6 Sep 2024"
  const formattedDate = currentDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  
console.log('fewrffr4wr42er234',countrydata)
  return (
    <div className="SingleProductData mt-10 md:mt-20">
      <section className="px-5 md:px-10 lg:px-32  md:my-20">
        <section className="flex flex-col items-center gap-10 md:flex-row justify-between">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl lg:text-3xl xl:text-[2.5rem] text-slate-700 font-bold text-center md:text-start">
              Get your {countrydata && countrydata.Countryname} visa
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-5 ">
              <div className="flex gap-5 items-center bg-[#F16035] lg:w-fit text-white py-3 px-5 rounded-3xl">
                <div>
                  <IoMdStopwatch className="text-2xl" />
                </div>
                <div className=" flex flex-col gap-2">
                  <h2 className="font-bold text-md ">
                    Get your visa by {formattedDate}
                  </h2>
                  <p className="text-xs">if you apply today</p>
                </div>
              </div>

              <div className=" flex w-full  items-center justify-center md:w-fit md:flex-col xl:flex-row">
                <div className="relative mb-0 mr-2 h-6 w-14">
                  <img
                    alt="review image person 0"
                    src="/img/asset 13.png"
                    width={24}
                    height={24}
                    className="absolute top-0 h-6 w-6 rounded-full border border-whitesmoke-700 object-cover"
                  />
                  <img
                    alt="review image person 1"
                    src="/img/asset 16.png"
                    width={24}
                    height={24}
                    className="absolute top-0 h-6 w-6 rounded-full border border-whitesmoke-700 object-cover"
                    style={{ left: "18px" }}
                  />
                  <img
                    alt="review image person 2"
                    src="/img/asset 12.png"
                    width={24}
                    height={24}
                    className="absolute top-0 h-6 w-6 rounded-full border border-whitesmoke-700 object-cover"
                    style={{ left: "36px" }}
                  />
                </div>
                <p className="text-xs text-slategray-200">
                  20+ applied recently
                </p>
              </div>
            </div>
          </div>

          <section className="relative flex h-[216px] w-full flex-col self-center align-middle md:w-[30%] lg:min-w-[386px]">
            <img
              alt="Banner Image"
              src={`${storageurl}/${countrydata && countrydata.Cardimage}`}
              width={386}
              height={216}
              className="h-full xl:w-full rounded-lg border border-whitesmoke-700 object-cover"
            />

            <div className="absolute right-2 top-2 rounded-lg bg-[#F7E499] px-2 py-1 font-inter text-xs font-semibold text-[#5B4C0D]">
              Last issued 2hrs ago
            </div>
            <div className="absolute -right-4 top-20 flex w-[146px] flex-col overflow-hidden rounded-lg border border-whitesmoke-700 bg-white drop-shadow-sm">
              <img
                alt="Recommendation Image"
                src="/img/VisaMiniCard.avif"
                width={146}
                height={86}
                className="h-[86px] w-[146px] object-cover"
              />
              <p className="p-2 pb-5 text-xs font-normal text-slategray-200">
                “Applied for UK visa, had a super smooth experience with
                Teleport services.”
              </p>
            </div>
          </section>
        </section>
      </section>

      <div className=" singleCardBtns top-0 z-20 flex  w-full gap-x-5 bg-white px-5 text-gray-900 sticky md:justify-center cursor-pointer my-10">
        <div className="mx-1.5 min-w-max border-b-2 border-transparent py-4 text-sm font-medium text-slategray-200 hover:border-blue-700 hover:text-[#0747A6] sm:text-base">
           <Link
            to="types-of-visa"
            smooth={true}
            duration={500}
           >
            Types of Visa
           </Link>
        </div>
        <div className="mx-1.5 min-w-max border-b-2 border-transparent py-4 text-sm font-medium text-slategray-200 hover:border-blue-700 hover:text-[#0747A6] sm:text-base">
         

          <Link
            to="types-of-process"
            smooth={true}
            duration={500}
           >
            Process
           </Link>
        </div>
        <div className="mx-1.5 min-w-max border-b-2 border-transparent py-4 text-sm font-medium text-slategray-200 hover:border-blue-700 hover:text-[#0747A6] sm:text-base">
         
          <Link
            to="document-checklist"
            smooth={true}
            duration={500}
           >
            Document Checklist
           </Link>
        </div>
        <div className="mx-1.5 min-w-max border-b-2 border-transparent py-4 text-sm font-medium text-slategray-200 hover:border-blue-700 hover:text-[#0747A6] sm:text-base">
    

          <Link
            to="faqs"
            smooth={true}
            duration={500}
           >
           FAQs
           </Link>
        </div>
      </div>

      <div className="SingleMultipleEntry">
        {/* <div className="md:my-6 w-full grid grid-cols-2 gap-5 sm:flex justify-center gap-x-3 px-5 md:py-3 text-gray-500 SingleMultipleEntryBtnsParent">
          <button
            onClick={() => setTouristCard("all")}
            className={`min-w-max cursor-pointer rounded-lg px-6 py-2 text-sm ${
              trouristCard == "all"
                ? "bg-[#006251] text-white"
                : "bg-[#DFDFDF] text-gray-500"
            }  `}
          >
            All
          </button>
          <button
            onClick={() => setTouristCard("Tourist")}
            className={`min-w-max cursor-pointer rounded-lg px-6 py-2 text-sm ${
              trouristCard == "Tourist"
                ? "bg-[#006251] text-white"
                : "bg-[#DFDFDF] text-gray-500"
            } `}
          >
            Tourist
          </button>
          <button
            onClick={() => setTouristCard("Business")}
            className={`min-w-max cursor-pointer rounded-lg px-6 py-2 text-sm ${
              trouristCard == "Business"
                ? "bg-[#006251] text-white"
                : "bg-[#DFDFDF] text-gray-500"
            }`}
          >
            Business
          </button>
          <button
            onClick={() => setTouristCard("Study")}
            className={`min-w-max cursor-pointer rounded-lg px-6 py-2 text-sm ${
              trouristCard == "Study"
                ? "bg-[#006251] text-white"
                : "bg-[#DFDFDF] text-gray-500"
            }`}
          >
            Study
          </button>
        </div> */}

        <div id="types-of-visa"  className="grid lg:grid-cols-2 justify-items-center-center md:px-10 lg:px-20 ">
          {visaCardFilter ? (
            visaCardFilter.map((elm, index) => {
              return (
                <TouritsSingleProdcutVisa
                  onAppliedfrom={handleSubmit}
                  key={index}
                  elm={elm}
                />
              );
            })
          ) : (
            <div className="text-center">Visa Not Found</div>
          )}
        </div>
      </div>

      <StepByStep id="types-of-process"  />

      {countrydata && <CheckList data={countrydata} />}

      <div  className="grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-0  items-center md:px-20 ">
        <div className="flex justify-center w-full h-fit">
          <img
            src="/img/visaImg.jpg"
            alt="visaa"
            className="rounded md:w-[35rem] h-fit"
          />
        </div>
        <div id="faqs"  className=" w-full h-[100%]">
          {countrydata && countrydata.FAQ && (
            <SingleProductFaq data={countrydata} />
          )}
        </div>
      </div>

      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={toggleChat}
          className="bg-green-500 p-3 rounded-full text-white shadow-lg hover:bg-green-600 focus:outline-none"
        >
          <FaWhatsapp size={28} />
        </button>

        {/* Chat box will appear when chatOpen is true */}
        {chatOpen && (
          <div className="bg-white p-4 rounded-lg shadow-lg mt-3 w-72">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-green-500">
                Chat with Us!
              </h3>
              <button
                onClick={toggleChat}
                className="text-gray-400 hover:text-gray-600"
              >
                X
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Hi there! How can we help you?
            </p>
            <a
              href={`https://wa.me/${
                countrydata.phone_number
                  ? countrydata.phone_number
                  : "+919915048409"
              }`} // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 bg-green-500 text-white text-center py-2 rounded-lg"
            >
              Start Chat
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
