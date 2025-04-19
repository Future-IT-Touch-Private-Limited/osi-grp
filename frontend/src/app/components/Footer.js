"use client";
import Image from "next/image";
import {useEffect} from 'react'
import TravelDesination from "./TravelDesination";
import Link from "next/link";


import { getCountry } from "../components/Store/Slices/countryslices";

import { useDispatch, useSelector } from "react-redux";
export default function Footer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.countryslices);
    useEffect(() => {
  
      dispatch(getCountry());
    }, []);





  const countries = [
    { name: "France", href: "/blog/france" },
    { name: "Turkey", href: "/blog/turkey" },
    { name: "Hong Kong", href: "/blog/hongkong" },
    { name: "Switzerland", href: "/blog/switzerland" },
    { name: "Australia", href: "/blog/australia" },
    { name: "United Arab Emirates", href: "/blog/united-arab-emirates" },
    { name: "Malaysia", href: "/blog/malaysia" },
    { name: "Japan", href: "/blog/japan" },
    { name: "Singapore", href: "/blog/singapore" },
    { name: "Indonesia", href: "/blog/indonesia" },
    { name: "Vietnam", href: "/blog/vietnam" },
    { name: "Azerbaijan", href: "/blog/azerbaijan" },
    { name: "United Kingdom", href: "/blog/united-kingdom" },
    { name: "Spain", href: "/blog/spain" },
    { name: "Greece", href: "/blog/greece" },
    { name: "United States", href: "/blog/united-states" },
    { name: "South Korea", href: "/blog/southkorea" },
    { name: "Poland", href: "/blog/poland" },
    { name: "Germany", href: "/blog/germany" },
    { name: "Georgia", href: "/blog/georgia" },
    { name: "Hungary", href: "/blog/hungary" },
    { name: "Finland", href: "/blog/finland" },
    { name: "Italy", href: "/blog/italy" },
    { name: "China", href: "/blog/china" },
    { name: "Norway", href: "/blog/norway" },
    { name: "Egypt", href: "/blog/egypt" },
    { name: "Oman", href: "/blog/oman" },
    { name: "Sweden", href: "/blog/sweden" },
    { name: "Austria", href: "/blog/austria" },
    { name: "Denmark", href: "/blog/denmark" },
    { name: "Uzbekistan", href: "/blog/uzbekistan" },
    { name: "Czech Republic", href: "/blog/czech-republic" },
    { name: "Cambodia", href: "/blog/cambodia" },
    { name: "Morocco", href: "/blog/morocco" },
    { name: "New Zealand", href: "/blog/newzealand" },
    { name: "Bahrain", href: "/blog/bahrain" },
    { name: "Netherlands", href: "/blog/netherlands" },
    { name: "Russia", href: "/blog/russia" },
    { name: "Philippines", href: "/blog/philippines" },
    { name: "Brazil", href: "/blog/brazil" },
    { name: "Saudi Arabia", href: "/blog/saudi-arabia" },
    { name: "Kenya", href: "/blog/kenya" },
    { name: "Portugal", href: "/blog/portugal" },
    { name: "Belgium", href: "/blog/belgium" },
    { name: "Croatia", href: "/blog/croatia" },
    { name: "Lithuania", href: "/blog/lithuania" },
    { name: "Ireland", href: "/blog/ireland" },
    { name: "Luxembourg", href: "/blog/luxembourg" },
    { name: "Romania", href: "/blog/romania" },
    { name: "Bulgaria", href: "/blog/bulgaria" },
    { name: "Slovakia", href: "/blog/slovakia" },
    { name: "Latvia", href: "/blog/latvia" },
    { name: "Estonia", href: "/blog/estonia" },
  ];
  

//Countryname
  console.log('state',state.data)
  return (
      <div className="Footer relative     mt-16 md:mt-40  ">

{/* <div className="absolute  inset-0  "/> */}


  <div className="pt-5  xl:pt-20 bg-cover bg-center   bg-[url('/img/successstory-bg.webp')]">
  <div className="relative -mt-24 md:-mt-36  xl:-mt-40 ">
    <TravelDesination/>
    </div>


    <div className="text-white z-30 relative">
      <div className=" px-5 md:px-16 xl:px-32 ">
      <Link href="/" className=" ">
        <img
          className="h-[80px] lg:h-[75px] object-cover -translate-x-3 md:-translate-x-5"
          src="/img/newSiteEditLogo.png"
        
          alt="Site Logo"
        />
    </Link>
        <div className="flex flex-col gap-10  lg:grid  lg:grid-cols-3 mt-5 lg:justify-items-center">

          <div className="flex flex-col gap-8">
            <h6>Address</h6>
            <div>
              <h6>❤️ Chandigarh</h6>
              <p>
                {/* BHIVE Workspace - No.112, AKR Tech Park, &ldquo; B &ldquo; and, 7th Mile Hosur
                Rd Krishna Reddy Industrial Area, Bengaluru, Karnataka 560068 */}
                Sco- 327, first floor, 40D, Sector 40D, Chandigarh, 160039
              </p>
            </div>
            <div className="  bg-[#60A765]  flex gap-2 items-center w-fit px-2 py-2 rounded">
              <figure>
                <img
                  className="w-full"
                  src="/img/asset 2.svg"
                  width={120}
                  height={120}
                  alt="waitt for img"
                />
              </figure>
              <a href="" className="opacity-80 text-md">Chat with us</a>
            </div>
          </div>
         <div className="flex justify-between md:hidden">  
          <div className="flex flex-col gap-5">
            {/* <h6>FAQs</h6> */}
            {/* <h6 className="cursor-pointer">About us</h6>
            <h6>Contact us</h6>
            <h6>Blogs</h6> */}
          </div>
          <div className="flex flex-col gap-5">
            {/* <h6>Privacy Policy</h6>
            <h6>Refund & cancellation policy</h6> 
            <h6>Pricing</h6>
            <h6>Terms & conditions</h6> */}
          </div>
          </div>
          <div className="hidden md:flex flex-col gap-5">
            {/* <h6>FAQs</h6> */}
            <a href="/about" className="cursor-pointer">About us</a>
            <a href="/contact">Contact us</a>
            <a href="/blog" className="cursor-pointerr">Blogs</a>
          </div>
          <div className="hidden md:flex flex-col gap-5 cursor-pointer">
            {/* <h6>Privacy Policy</h6> */}
            {/* <h6>Refund & cancellation policy</h6> */}
            {/* <h6>Pricing</h6> */}
            {/* <h6>Terms & conditions</h6> */}
          </div> 
        </div>
      </div>
        <hr className="mt-16" />

        <div className=" px-5 md:px-16 xl:px-32 pt-10 ">
        <h2 className="mb-5 text-2xl font-semibold">Read more about visas</h2>
      
        <ul
    className="flex flex-row flex-wrap gap-y-2 pb-6"
    style={{ gridTemplateColumns: "repeat(auto-fit, minmax(10%, 1fr))" }}
  >
   
    {state.data.map((elm,index)=>{
      return  ( <Link key={index} className="shrink-0 gap-x-3" href={`/${elm.slug}`}>
      {elm.Countryname}<span className="mx-2">•</span>
    </Link>)
    })}
  </ul>
       
    </div>
    </div>
    <div className="py-4  px-5 md:px-16 lg:px-32 ">
          <div className="md:flex flex-wrap  lg:grid lg:grid-cols-3 lg:justify-items-center  xl:flex xl:justify-between  items-center text-sm text-white justify-center md">
            <p className="text-center">
              © {new Date().getFullYear()}  OIC Global  Your Dream Our Mission. All rights
              reserved.
            </p>
            <p className="">
              <span className="flex md justify-center md">
                Designed by&nbsp;
                <a
                  href="https://www.futuretouch.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Future IT Touch ❤️
                </a>
              </span>
            </p>
            <div className="space-x-4 mb-2 md:mb-0  flex md justify-center md">
              <Link href="/privacy-policy">Privacy Policy  | </Link>
              <Link href="/terms-conditions">Terms & Conditions </Link>
            </div>
          </div>
        </div>
  </div>
  
    </div>
  );
}
