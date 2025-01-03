"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineCloudDownload } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuCheckSquare, LuSignalHigh } from "react-icons/lu";
import CheckListAnswerFirst from "./CheckListAnswerFirst";
import { CiCircleList } from "react-icons/ci";
import { MdCalendarMonth } from "react-icons/md";
import { PiHeadlightsLight } from "react-icons/pi";
import CheckListAnswerTwo from "./CheckListAnswerTwo";
import { GoTag } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaSimCard } from "react-icons/fa6";

import { BiCopyAlt } from "react-icons/bi";

import CheckListAnswerThree from "./CheckListAnswerThree";
import AeAnswerfirst from "./AeFaqChildAnswer/AeAnswerfirst";
import AeAnswerTwo from "./AeFaqChildAnswer/AeAnswerTwo";
import AeAnswerthird from "./AeFaqChildAnswer/AeAnswerthird";
import AeAnswerfourth from "./AeFaqChildAnswer/AeAnswerfourth";
import AeAnswerfifth from "./AeFaqChildAnswer/AeAnswerfifth";
import Link from "next/link";

import { storageurl } from "../components/Store/Rooturl";

export default function CheckList({ data }) {
  // console.log(data.mandatory_docs,"listttttttrtr")
  const [show, setShow] = useState(false);
  const [faqShow, setFaqShow] = useState("");
  const [answeplace, setanswerPlace] = useState("");

  // const [activeSection, setActiveSection] = useState('');
  // const [activeItem, setActiveItem] = useState('');

  // const toggleSection = (key) => {
  //   setActiveSection((prev) => (prev === key ? '' : key));
  // };

  // const toggleItem = (key) => {
  //   setActiveItem((prev) => (prev === key ? '' : key));
  // };

  const faqHandler = (match) => {
    setFaqShow((prev) => (prev === match ? "" : match));
  };

  const setAnswerPlaceHandler = (place) => {
    setanswerPlace((prev) => (prev == place ? "" : place));
  };
  // checkListFaqsss-age-empoyesss-documentsss state

  const [emFawShow, setEmFaqShow] = useState("");
  const [emFawShowPlace, setEmFawShowPlace] = useState("");
  const emFaqHandler = (match) => {
    setEmFaqShow((prev) => (prev === match ? "" : match));
  };

  const setAeChildAnswerHandler = (place) => {
    setEmFawShowPlace((prev) => (prev == place ? "" : place));
    console.log("chilld");
  };

  const handleDownload = (e, pdfUrl) => {

    console.log("HHWWWL")
    e.preventDefault(); // Prevent default link navigation
    if (pdfUrl) {
      // Create a temporary anchor element to trigger the download
      const link = document.createElement("a");
      link.href = `${storageurl}/${pdfUrl}`; 
      link.download = pdfUrl.split("/").pop(); // Extract the filename for download
      document.body.appendChild(link); // Append to body
      link.click(); // Trigger the download
      document.body.removeChild(link); // Clean up
    } else {
      console.error("PDF URL is not defined."); // Log error for missing file URL
    }
  };

  const [activeSection, setActiveSection] = useState("");
  const [activeItem, setActiveItem] = useState("");

  const toggleSection = (contentKey) => {
    setActiveSection((prev) => (prev === contentKey ? "" : contentKey));
  };

  const toggleItem = (key) => {
    setActiveItem((prev) => (prev === key ? "" : key));
  };

  return (
    <div id="document-checklist" className="checkList">
      <div className="px-5 py-5 md:px-15 lg:px-60 md:py-2">
        <div className="flex flex-col items-center text-center gap-5">
          <h3 className="md:text-3xl font-bold">
            Save time and hassle with our document checklist
          </h3>
          <p className="text-xs flex gap-1">
            Showing documents for
            <button
              onClick={() => setShow(!show)}
              className="font-bold cursor-pointer flex items-center gap-2"
            >
              Tourist sticker
              <MdKeyboardArrowDown
                className={`text-base transition-transform ${
                  show && "rotate-180"
                }`}
              />
            </button>
          </p>
        </div>

        <div className="CheckList-documents my-10 border">
          <div className="checkList-headlines">
            <div className="border p-3 bg-[#F5F9FF]">
              <div className="flex text-center md:text-start gap-5 md:gap-0 flex-col md:flex-row justify-center md:justify-between items-center">
                <h4 className="font-bold md:text-lg lg:text-2xl">
                  Documents for {data?.Countryname}
                </h4>
                {console.log(data.pdf)}
                <button
         
                  className="text-[#0052cc] md:text-sm flex items-center gap-1 cursor-pointer"
                  onClick={(e) => handleDownload(e, data.pdf)}
                >
                  <MdOutlineCloudDownload className="md:text-lg" />
                  Download Checklist
                </button>
              </div>
            </div>
          </div>

          <div className="border   ">
            {console.log("wfrwfwfwfr32r3223", data?.mandatory_docs)}
            {data?.mandatory_docs[0]?.heading && (
              <div className="EmploymentSection">
                <div
                  className="Age px-5 py-3 border cursor-pointer bg-[#F5F9FF] rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  onClick={() => toggleSection("vfev")}
                >
                  <h3 className="text-xl flex items-center justify-between">
                    Mandatory docs
                    <MdKeyboardArrowDown
                      className={`text-xl transition-transform ${
                        activeSection === "vfev" ? "rotate-180" : ""
                      }`}
                    />
                  </h3>
                </div>

                {activeSection === "vfev" && (
                  <div className="AeAnswerTwo mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3">
                      {data.mandatory_docs.map((item) => (
                        <div
                          key={item.text}
                          onClick={() => toggleItem(item.text)}
                          className="cursor-pointer flex items-center gap-3 p-3 border rounded-lg bg-white shadow-md hover:shadow-lg transition-transform"
                        >
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold">
                              {item.heading}
                            </h3>
                          </div>
                          <MdKeyboardArrowDown
                            className={`text-xl transition-transform ${
                              activeItem === item.text ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="hidden md:block mt-4">
                      {activeItem && <AeAnswerTwo emFawShow={activeItem} />}
                    </div>
                  </div>
                )}
              </div>
            )}

            {data?.Age_lessthen_18[0]?.heading && (
              <div className="EmploymentSection">
                <div
                  className="Age px-5 py-3 border cursor-pointer bg-[#F5F9FF] rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  onClick={() => toggleSection("ageLessThan18")}
                >
                  <h3 className="text-xl flex items-center justify-between">
                    Age Less Than 18
                    <MdKeyboardArrowDown
                      className={`text-xl transition-transform ${
                        activeSection === "ageLessThan18" ? "rotate-180" : ""
                      }`}
                    />
                  </h3>
                </div>

                {activeSection === "ageLessThan18" && (
                  <div className="AeAnswerTwo mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3">
                      {data.Age_lessthen_18.map((item) => (
                        <div
                          key={item.text}
                          onClick={() => toggleItem(item.text)}
                          className="cursor-pointer flex items-center gap-3 p-3 border rounded-lg bg-white shadow-md hover:shadow-lg transition-transform"
                        >
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold">
                              {item.heading}
                            </h3>
                          </div>
                          <MdKeyboardArrowDown
                            className={`text-xl transition-transform ${
                              activeItem === item.text ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="hidden md:block mt-4">
                      {activeItem && <AeAnswerTwo emFawShow={activeItem} />}
                    </div>
                  </div>
                )}
              </div>
            )}

            {data?.Employed[0]?.heading && (
              <div className="EmploymentSection">
                <div
                  className="Age px-5 py-3 border cursor-pointer bg-[#F5F9FF] rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  onClick={() => toggleSection("employed")}
                >
                  <h3 className="text-xl flex items-center justify-between">
                    Employed
                    <MdKeyboardArrowDown
                      className={`text-xl transition-transform ${
                        activeSection === "employed" ? "rotate-180" : ""
                      }`}
                    />
                  </h3>
                </div>

                {activeSection === "employed" && (
                  <div className="AeAnswerTwo mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3">
                      {data.Employed.map((item) => (
                        <div
                          key={item.text}
                          onClick={() => toggleItem(item.text)}
                          className="cursor-pointer flex items-center gap-3 p-3 border rounded-lg bg-white shadow-md hover:shadow-lg transition-transform"
                        >
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold">
                              {item.heading}
                            </h3>
                          </div>
                          <MdKeyboardArrowDown
                            className={`text-xl transition-transform ${
                              activeItem === item.text ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="hidden md:block mt-4">
                      {activeItem && <AeAnswerTwo emFawShow={activeItem} />}
                    </div>
                  </div>
                )}
              </div>
            )}

            {data?.isFunded[0]?.heading && (
              <div className="EmploymentSection">
                <div
                  className="Age px-5 py-3 border cursor-pointer bg-[#F5F9FF] rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  onClick={() => toggleSection("isFunded")}
                >
                  <h3 className="text-xl flex items-center justify-between">
                    Funded
                    <MdKeyboardArrowDown
                      className={`text-xl transition-transform ${
                        activeSection === "isFunded" ? "rotate-180" : ""
                      }`}
                    />
                  </h3>
                </div>

                {activeSection === "isFunded" && (
                  <div className="AeAnswerTwo mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3">
                      {data.isFunded.map((item) => (
                        <div
                          key={item.text}
                          onClick={() => toggleItem(item.text)}
                          className="cursor-pointer flex items-center gap-3 p-3 border rounded-lg bg-white shadow-md hover:shadow-lg transition-transform"
                        >
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold">
                              {item.heading}
                            </h3>
                          </div>
                          <MdKeyboardArrowDown
                            className={`text-xl transition-transform ${
                              activeItem === item.text ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="hidden md:block mt-4">
                      {activeItem && <AeAnswerTwo emFawShow={activeItem} />}
                    </div>
                  </div>
                )}
              </div>
            )}

            {data?.Self_employed[0]?.heading && (
              <div className="EmploymentSection">
                {/* Self Employed Section */}
                <div
                  className="Age px-5 py-3 border cursor-pointer bg-[#F5F9FF] rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  onClick={() => toggleSection("Self_employed")}
                >
                  <h3 className="text-xl flex items-center justify-between">
                    Self Employed
                    <MdKeyboardArrowDown
                      className={`text-xl transition-transform ${
                        activeSection === "Self_employed" ? "rotate-180" : ""
                      }`}
                    />
                  </h3>
                </div>

                {activeSection === "Self_employed" && (
                  <div className="AeAnswerTwo mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3">
                      {data.Self_employed.map((item) => (
                        <div
                          key={item.text}
                          onClick={() => toggleItem(item.text)}
                          className="cursor-pointer flex items-center gap-3 p-3 border rounded-lg bg-white shadow-md hover:shadow-lg transition-transform"
                        >
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold">
                              {item.heading}
                            </h3>
                          </div>
                          <MdKeyboardArrowDown
                            className={`text-xl transition-transform ${
                              activeItem === item.text ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="hidden md:block mt-4">
                      {activeItem && <AeAnswerTwo emFawShow={activeItem} />}
                    </div>
                  </div>
                )}
              </div>
            )}
            {/*  */}
            {data?.Student[0]?.heading && (
              <div className="EmploymentSection">
                {/* Student Section */}
                <div
                  className="Age px-5 py-3 border cursor-pointer bg-[#F5F9FF] rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  onClick={() => toggleSection("Student")}
                >
                  <h3 className="text-xl flex items-center justify-between">
                    Student
                    <MdKeyboardArrowDown
                      className={`text-xl transition-transform ${
                        activeSection === "Student" ? "rotate-180" : ""
                      }`}
                    />
                  </h3>
                </div>

                {activeSection === "Student" && (
                  <div className="AeAnswerTwo mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3">
                      {data.Student.map((item) => (
                        <div
                          key={item.text}
                          onClick={() => toggleItem(item.text)}
                          className="cursor-pointer flex items-center gap-3 p-3 border rounded-lg bg-white shadow-md hover:shadow-lg transition-transform"
                        >
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold">
                              {item.heading}
                            </h3>
                          </div>
                          <MdKeyboardArrowDown
                            className={`text-xl transition-transform ${
                              activeItem === item.text ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="hidden md:block mt-4">
                      {activeItem && <AeAnswerTwo emFawShow={activeItem} />}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
