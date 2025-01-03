"use client";

import { useState } from "react";
import ProgressBar from "../depature/ProgressBar";
import { FaPlusCircle } from "react-icons/fa"; 
import { MdCheck } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";

export default function Page() {
  const [adressVerify, SetAdressVerify] = useState(false);
  return (
    <div>
      {/* <ProgressBar /> */}
      <div className="w-full bg-gray-100 h-40 flex flex-col justify-end items-center">
        <div className="w-full lg:w-[90%] bg-white p-5 rounded border-b-2">
          <button className="flex items-center gap-2 px-5 py-2 text-[#0052CC] text-xs rounded-full bg-[#D1E5FF]">
            <FaPlusCircle />
            Add Traveller
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full lg:w-[90%] py-5 border    bg-white ">
          <div className="flex flex-col lg:flex-row xl:gap-5">
            <div className=" md:p-5 lg:w-[40%] flex flex-col md:flex-row lg:flex-col items-center gap-5 md:gap-2 lg:justify-between m-5 md:m-0">
              <div className="w-[100%] lg:w-full  md:h-[50%] lg:min-h-[50%] md:p-2  border-2 border-dashed border-blue-500">
                <div className="p-3">
                  <figure>
                    <img
                      src="/img/Sample.jpeg"
                      alt="sample img"
                      className="w-full h-40"
                    />
                  </figure>
                  <div className=" text-xs flex gap-2 justify-center items-center my-3">
                  <button className="bg-blue text-nowrap
                   capitalize bg-[#006251] text-xs py-3 px-3 md:px-16 rounded text-white">
                      Upload passport front
                    </button>

                    <p>OR</p>
                    <BsFillCameraFill className="md:text-2xl" />
                  </div>
                  <p className="text-center text-xs">
                    Upload in a pdf, jpeg, jpg or a png format only
                  </p>
                </div>
              </div>
              <div className="w-[100%] lg:w-full md:h-[50%] lg:min-h-[50%] md:p-2 border-2 border-dashed border-blue-500">
              <div className="p-3">
              <figure>
                    <img
                      src="/img/sampleBack.png"
                      alt="sample img"
                      className="w-full h-40"
                    />
                  </figure>
                  <div className=" text-xs flex gap-2 justify-center items-center my-3">
                  <button className="bg-blue text-nowrap
                   capitalize bg-[#006251] text-xs py-3 px-3 md:px-16 rounded text-white">
                      Upload passport front
                    </button>

                    <p>OR</p>
                    <BsFillCameraFill className="md:text-2xl" />
                  </div>
                  <p className="text-center text-xs">
                    Upload in a pdf, jpeg, jpg or a png format only
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-[60%] flex flex-col gap-5 m-5">
              <div className="flex flex-col gap-5">
                <h4>Review Customer&apos;s basic details:</h4>
                <div className="grid grid-cols-1">
                  <label htmlFor="passport-number" className="text-xs">
                    Passport number
                  </label>
                  <div className=" ">
                  <input
                      id="passport-number"
                      type="text"
                      className="w-full border text-xs border-gray-500 py-2 px-2"
                      placeholder="Passport number"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {/* <div className="flex flex-col gap-5"> */}
                  <div className="flex flex-col">
                    <label htmlFor="given-name" className="text-xs">
                      Given name (as on Passport)
                    </label>
                    <div className=" ">
                      <input
                        id="given-name"
                        type="text"
                        className="w-full border text-xs border-gray-500 py-2 px-2"
                        placeholder="Given name"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="sex" className="text-xs">
                      Sex
                    </label>
                    <div className=" ">
                      <select
                        id="sex"
                        className="w-full border text-xs border-gray-500 py-2 px-2"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <label htmlFor="place-of-birth" className="text-xs">
                      Place of birth
                    </label>
                    <div className=" ">
                      <input
                        id="place-of-birth"
                        type="text"
                        className="w-full border text-xs border-gray-500 py-2 px-2"
                        placeholder="Place of birth"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="passport-issue-date" className="text-xs">
                      Passport issue Date
                    </label>
                    <div className=" ">
                      <input
                        id="passport-issue-date"
                        type="text"
                        className="w-full border text-xs border-gray-500 py-2 px-2"
                        placeholder="17/04/2023"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="surname" className="text-xs">
                      Surname (as on Passport)
                    </label>
                    <div className=" ">
                      <input
                        id="surname"
                        type="text"
                        className="w-full border text-xs border-gray-500 py-2 px-2"
                        placeholder="Surname"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="dob" className="text-xs">
                      Date of birth
                    </label>
                    <div className=" ">
                      <input
                        id="dob"
                        type="text"
                        className="w-[100%] border text-xs border-gray-500 py-2 px-2"
                        placeholder="7/07/2000"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="passport-expiry-date" className="text-xs">
                      Passport expiry date
                    </label>
                    <div className=" ">
                      <input
                        id="passport-expiry-date"
                        type="text"
                        className="w-full border text-xs border-gray-500 py-2 px-2"
                        placeholder="29/04/2029"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="passport-issue-place" className="text-xs">
                      Passport issue place
                    </label>
                    <div className=" ">
                      <input
                        id="passport-issue-place"
                        type="text"
                        className="w-full border text-xs border-gray-500 py-2 px-2"
                        placeholder="Issue Place"
                      />
                    </div>
                  </div>

                {/* </div> */}

                
              </div>

              {/* Address */}
              <div className="Address mt-5 flex flex-col gap-4">
                <h4 className="font-bold">Current residential address:</h4>
                <div className="flex gap-2 items-center">
                  <div
                    onClick={() => SetAdressVerify(!adressVerify)}
                    className="h-4 w-4 border-2 flex justify-center items-center font-bold "
                  >
                    {adressVerify && (
                      <MdCheck className="bg-[#006251] text-white" />
                    )}
                  </div>
                  <p className="text-sm">
                    My address in passport is same as current residential
                    address
                  </p>
                </div>

                <div className="flex gap-2">
                  <div className="flex flex-col gap-2 w-[50%]">
                    <label htmlFor="address1" className="text-xs">
                      Address 1
                    </label>
                    <div className="w-full">
                      <input
                        id="address1"
                        type="text"
                        className="w-full border text-xs border-gray-500 py-2 px-2"
                        placeholder="Address 1"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-[50%]">
                    <label htmlFor="address2" className="text-xs">
                      Address 2
                    </label>
                    <div>
                      <input
                        id="address2"
                        type="text"
                        className="w-full border text-xs border-gray-500 py-2 px-2"
                        placeholder="Address 2"
                      />
                    </div>
                  </div>
                </div>

                <div className="city-state-pincode grid grid-cols-3 items-center gap-2">
                  <div>
                    <label htmlFor="city" className="text-xs">
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      className="w-full border text-xs border-gray-500 py-2 px-2"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="text-xs">
                      State
                    </label>
                    <select
                      id="state"
                      className="w-full border text-xs border-gray-500 py-2 px-2"
                    >
                      <option value="">Select State</option>
                      <option value="andhra-pradesh">Andhra Pradesh</option>
                      <option value="arunachal-pradesh">
                        Arunachal Pradesh
                      </option>
                      <option value="assam">Assam</option>
                      <option value="bihar">Bihar</option>
                      <option value="chhattisgarh">Chhattisgarh</option>
                      <option value="goa">Goa</option>
                      <option value="gujarat">Gujarat</option>
                      <option value="haryana">Haryana</option>
                      <option value="himachal-pradesh">Himachal Pradesh</option>
                      <option value="jharkhand">Jharkhand</option>
                      <option value="karnataka">Karnataka</option>
                      <option value="kerala">Kerala</option>
                      <option value="madhya-pradesh">Madhya Pradesh</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="manipur">Manipur</option>
                      <option value="meghalaya">Meghalaya</option>
                      <option value="mizoram">Mizoram</option>
                      <option value="nagaland">Nagaland</option>
                      <option value="odisha">Odisha</option>
                      <option value="punjab">Punjab</option>
                      <option value="rajasthan">Rajasthan</option>
                      <option value="sikkim">Sikkim</option>
                      <option value="tamil-nadu">Tamil Nadu</option>
                      <option value="telangana">Telangana</option>
                      <option value="tripura">Tripura</option>
                      <option value="uttar-pradesh">Uttar Pradesh</option>
                      <option value="uttarakhand">Uttarakhand</option>
                      <option value="west-bengal">West Bengal</option>
                      <option value="andaman-and-nicobar-islands">
                        Andaman and Nicobar Islands
                      </option>
                      <option value="Mohali">Mohali</option>
                      <option value="dadra-and-nagar-haveli-and-daman-and-diu">
                        Dadra and Nagar Haveli and Daman and Diu
                      </option>
                      <option value="lakshadweep">Lakshadweep</option>
                      <option value="delhi">Delhi</option>
                      <option value="puducherry">Puducherry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="pincode" className="text-xs">
                      Enter PinCode
                    </label>
                    <input
                      id="pincode"
                      type="text"
                      className="w-full border text-xs border-gray-500 py-2 px-2"
                      placeholder="PinCode"
                    />
                  </div>
                </div>
              </div>

              <div>
                <button className="bg-[#006251] w-full text-white py-3 rounded">
                  Verify User&apos;s Details
                </button>
              </div>
            </div>
          </div>

          <div className=" flex justify-end back-And-Next gap-5 mt-10 px-3">
            <div>
              <button className="bg-[#006252ba] text-white px-10 rounded py-2">
                Back
              </button>
            </div>
            <div>
              <button className="text-gray-400 bg-gray-100 px-10 rounded py-2 border">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
