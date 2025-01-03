"use client";
import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div className="About-Us AboutUs   ">
      <div className="px-5 py-10 md:px-16 xl:px-40    md:py-13">
        <div className="flex flex-col gap-5 md:gap-10  xl:flex-row justify-between items-center">
            <div className="w-[100%] md:w-[50%]">
            <img
              src="/img/aboutUspic.jpg"
              alt="Contact Us"
              className="w-full h-full xl:w-[80%] lg:h-[90%] object-cover shadow-lg rounded-full shadow-orange-100"
            />
            </div>
          <div className="w-[100%] xl:w-[50%] flex flex-col gap-5 ">
            <div className="w-full ">
              <h3 className="text-xl md:text-3xl   text-zinc-500 font-bold text-center  ">
                About Us
              </h3>
            </div>

            <div className="text-md flex flex-col gap-3">
            <p>
              Travel deals is a travel tech startup that simplifies travel visa
              applications, owned by Tropelet Technologies Private Limited (the
              “Company”).
            </p>
            <p>
              Do you love to travel but hate the process of applying for visas?
              So did we. Our platform is fast, easy to use, and provides
              real-time status updates so you can track your application
              progress and avoid any stressful surprises. We reduce the time to
              apply for a visa from hours to a few minutes!
            </p>
            <p>
              The Company is a private limited company, incorporated in the year
              2022, having its registered office in Mumbai. The next time you
              need a visa, give us a try 
              
              <Link target="_blank" href="https://travelDeals.com">
                   https://travelDeals.com
              </Link>
            </p>
            <p>Contact Us</p>
            <p>
            SCO 45, FIRST FIRST, CITY HEART, SECTOR 125, MOHALI
            </p>
            <p>Email us at  <Link target="_blank" href="mailto:INFO@TRAVELDEALSIND.COM">
            INFO@TRAVELDEALSIND.COM
            </Link>  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
