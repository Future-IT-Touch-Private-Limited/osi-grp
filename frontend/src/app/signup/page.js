'use client';
import React, { useState } from 'react';
import CountryFlagSwiper from '../login/CountryFlagSwiper';
import { rooturl } from '../components/Store/Rooturl';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation';

import { FaEye, FaEyeSlash } from "react-icons/fa";


export default function SignUpPage() {
const [name,setname]=useState("")
const [email,setemail]=useState("")
const [password,setpassword]=useState("")
const [phonenumber,setphone]=useState("")

const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();



const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};

const handelsignup=async(e)=>{
  e.preventDefault()
const res=await axios.post(`${rooturl}/signup`,{name,email,password,phonenumber})

console.log(res)


localStorage.setItem('user_id', res.data.user_id);


if(res.data.success){
  Swal.fire({
    title: 'Success!',
    text: res.data.message,
    icon: 'success',
    confirmButtonText: 'ok'
  })

  router.push('/')
  setname("") ;setemail("");setpassword("")

}

else{
  Swal.fire({
    title: 'Error!',
    text: res.data.message,
    icon: 'error',
    confirmButtonText: 'fail'
  })
}


}

  return (
    <div className="sign-up-page   px-5 py-10 md:py-20 md:px-15 lg:px-20 xl:px-40 lg:py-10  ">
        <div className='flex flex-col lg:flex-row items-center justify-between'>
        <div className='flex flex-col w-[100%] gap-5 lg:w-[50%]'>
            <div  className='text-center font-bold text-base md:text-lg lg:text-xl'>
            <h3>500+ people like you trust
           </h3>
           <h3> Travels Deals for their visa application</h3>
            </div>
            <div className=' '>
            <CountryFlagSwiper/>
            </div>
        </div>
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Welcome to Visa Deals</h1>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e)=>setname(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e)=>setemail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="setphone">
                  Phone Number
                </label>
                <input
                  type="number"
                  id="setphone"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your  Phone Number"
                  value={phonenumber}
                  onChange={(e)=>setphone(e.target.value)}
                />
              </div>


              <div className="relative mb-6">
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
                placeholder="Your Password"
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
              <div className="flex items-center justify-center">
                <button
                onClick={handelsignup}
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
}
