"use client"
import React, { useState } from 'react'
import { BsFillStarFill } from "react-icons/bs";
import { storageurl } from '../Store/Rooturl';
export default function TestMonialCard({elm}) {
    const {heading,review,image,name,position,stars}=elm
    const stararry=[]
    for(let i=1;i<=stars;i++){
      stararry.push(i)
    }

  return (
    <div className="Reviw mt-5  ">
    <div className="review-box relative border-2 border-[#FFD115] px-2 py-3 md:p-6  min-h-[320px] rounded-lg shadow-lg bg-white">
     <div className="absolute -top-5 border p-3 rounded-full w-10 bg-[#F0F5F8]">
     <img src="/img/left-quote.png" alt="reviews " className="w-[100%]   " />
     </div>
      <div className="review-conten flex flex-col gap-5 md:gap-4">
        <h2 className="text-lg md:text-2xl font-bold text-gray-800">{heading}</h2>
        <div className="flex gap-2 items-center ">
          {stararry && stararry.map((d,ind)=><BsFillStarFill key={ind} className='text-[#FFD115]' />)}
         
        </div>
        <p className="text-gray-600 md:text-lg leading-relaxed">
          {review}
        </p>
        <div className="py-[0.5px] bg-slate-300"></div>
        <div>
          <div className="reviewUserDetails flex gap-4 items-center">
            <figure className="w-16 h-16">
              {/* <img
                src={`${storageurl}/${image}`}
                alt="user review"
                className="rounded-full object-cover"
              /> */}
              <img
                src={`/img/TeamMember1.webp`}
                alt="user review"
                className="rounded-full object-cover object-right h-16 w-16"
              />
            </figure>
            <div className="flex flex-col">
              <h3 className="capitalize font-semibold text-gray-800">{name}</h3>
              <p className="text-sm text-gray-500">{position}</p>
            </div>
            <img className="w-8 ml-auto" src={`/img/search.png`} alt="reviews" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
