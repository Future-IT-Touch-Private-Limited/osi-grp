"use client";

import React, { useState } from "react";
import CountryFlagSwiper from "./CountryFlagSwiper";
import axios from "axios";
import { rooturl } from "../components/Store/Rooturl";
import Swal from "sweetalert2";
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from "react-icons/fa";
const LoginPage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
   const router = useRouter();
  const loginhandel = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${rooturl}/login`, { email, password });

    localStorage.setItem("user_id", res.data.user_id);
    if (res.data.status) {
      Swal.fire({
        title: "Success!",
        text: res.data.message,
        icon: "success",
        confirmButtonText: "ok",
      });
      router.push('/')
      // setname("") ;setemail("");setpassword("")
    } else {
      Swal.fire({
        title: "Error!",
        text: res.data.message,
        icon: "error",
        confirmButtonText: "fail",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="Login  px-5 py-10 md:py-20 md:px-15 lg:px-20 xl:px-40 lg:py-1   ">
      <div className="flex flex-col gap-20 lg:flex-row  items-center justify-between ">
        <div className="flex flex-col w-[100%] gap-5 lg:w-[50%]">
          <div className="text-center font-bold text-base md:text-lg lg:text-xl">
            <h3>500+ people like you trust</h3>
            <h3> Travels Deals for their visa application</h3>
          </div>
          <div className=" ">
            <CountryFlagSwiper />
          </div>
        </div>
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Welcome to Visa Deals
          </h1>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="mt-1 block p-1 w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute  bottom-[8px] right-0 pr-3 flex items-center cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={loginhandel}
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Log In
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <a
                href="/signup"
                className="text-indigo-600 hover:text-indigo-700"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
