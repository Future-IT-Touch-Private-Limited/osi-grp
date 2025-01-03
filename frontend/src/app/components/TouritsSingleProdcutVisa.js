import React from 'react'
import { GiCommercialAirplane } from "react-icons/gi";
import Link from 'next/link';
import { Button } from '@chakra-ui/react';

export default function TouritsSingleProdcutVisa({elm,onAppliedfrom}) {

  
  const {visa_type,pay_per_aduit,visa_validity,processing_time,visa_duration,}=elm


 
  return (
    <div>
       <section className="flex w-full justify-center bg-[#F5F9FF] mt-5 p-3 md:p-0">
      <div className="relative  w-full  " id="demo1">
      
      
        <div className="relative flex flex-col gap-y-3 md:gap-y-6">
          <section className="rounded-2xl border-4 border-[#5DB18233]  overflow-hidden">
            <section className="flex h-fit flex-col rounded-2xl bg-white text-left shadow-lg border border-[#5DB182]">
              <section className="flex w-full flex-col md:flex-row">
                <section className="flex w-full flex-col text-sm md:mr-8 md:w-2/3">
                  <div className="flex items-center gap-3  rounded-tl-2xl rounded-tr-2xl p-4 pr-12 md:rounded-tr-none bg-[#006251] rounded-br-full text-white">
                   
                    <GiCommercialAirplane className='text-2xl text-[#ff8c6a]' />

                    <div className="flex flex-col">
                      <p className="text-md md:text-lg font-extrabold capitalize "> Visa Type- {visa_type}</p>
                      <div className="sticker-tag mt-1"></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3 border-b border-gainsboro-200 p-5 md:border-none">
                    <div className="flex font-inter">
                      <img alt="Visa Types" loading="lazy" width={20} height={20} className="mr-4" src="/img/VisaMiniIMg1.svg" />
                      <div className="flex w-full justify-between">
                        <p className="font-inter text-[15px] font-normal text-slategray-200">Visa Types</p>
                        <p className="font-inter text-[15px] font-bold text-[#252D3D]">{visa_type}</p>
                      </div>
                    </div>
                    <div className="flex font-inter">
                      <img alt="Stay duration" loading="lazy" width={20} height={20} className="mr-4" src="/img/VisaMiniIMg1.svg" />
                      <div className="flex w-full justify-between">
                        <p className="font-inter text-[15px] font-normal text-slategray-200">Stay duration</p>
                        <p className="font-inter text-[15px] font-bold text-[#252D3D]">{visa_duration} </p>
                      </div>
                    </div>
                    <div className="flex font-inter">
                      <img alt="Visa validity" loading="lazy" width={20} height={20} className="mr-4" src="/img/VisaMiniIMg1.svg" />
                      <div className="flex w-full justify-between">
                        <p className="font-inter text-[15px] font-normal text-slategray-200">Visa validity</p>
                        <p className="font-inter text-[15px] font-bold text-[#252D3D]">{visa_validity}</p>
                      </div>
                    </div>
                    <div className="flex font-inter">
                      <img alt="Processing time" loading="lazy" width={20} height={20} className="mr-4" src="/img/VisaMiniIMg1.svg"/>
                      <div className="flex w-full justify-between">
                        <p className="font-inter text-[15px] font-normal text-slategray-200">Processing time</p>
                        <p className="font-inter text-[15px] font-bold text-[#252D3D]">{processing_time}</p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="flex w-full flex-col-reverse px-3 py-4 font-inter md:w-1/3 md:flex-col">
                  <div className="relative flex items-center justify-center  w-full  ">
                    <button onClick={(e) => onAppliedfrom(e, elm.id)}  className="w-full h-fit px-3 py-3 md:px-7 cursor-pointer rounded-md bg-[#F16035] font-semibold text-white opacity-90 text-base  bg-blue text-nowrap">Start Application </button>
                  </div>
                  <div className="my-2 flex md:mt-6">
                    <div className="flex h-[22.5px] w-5 items-center justify-center"></div>
                    <div className="flex flex-col gap-y-1">
                      <p className="mb-2 font-inter text-[15px] font-normal text-slategray-200 md:mb-0">Pay us</p>
                      <div className="relative flex h-[1.5rem] shrink-0 font-inter text-lg font-bold leading-[100.2%] tracking-[-0.03em] text-royalblue-300">₹{pay_per_aduit} per adult</div>
                     
                    </div>
                  </div>
                </section>
              </section>
            </section>
          </section>
          {/* Additional Sections can be added similarly */}
        </div>
      
      </div>
    </section>
    </div>
  )
}
