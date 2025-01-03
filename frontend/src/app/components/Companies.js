"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Companies() {
  const sliderData = [
    {
      imgSrc: "/img/asset 5.png",
    },
    {
      imgSrc: "/img/asset 6.png",
    },
    {
      imgSrc: "/img/asset 7.png",
    },
    {
      imgSrc: "/img/asset 8.png",
    },
  ];

  return (
    <div className="Companies">
      <div className="px-5 lg:w-[70%] mx-auto   mt-10  ">
        <div className="flex  flex-col gap-5 bg-rsed-400 md:flex-row md:gap-10  md:items-center">
          <h4 className="font-bold text-slate-600  text-xl w-fit text-nowrap">
            FEATURED ON
          </h4>

          <div className="flex w-[100%]  gap-10  items-center comapines-images">
            {/* {sliderData.map((elm, index) => {
              {
                console.log(elm);
              }
              return (
                <img
                  key={index}
                  src={elm.imgSrc}
                  className="w-[40%] md:w-[20%] h-auto  "
                  width={600}
                  height={500}
                  alt="waitt for img"
                />
              );
            })} */}
            <img
            className='w-[60%] sm:w-[30%] xl:w-[30%] h-auto  '
            src="/img/asset 5.png"
              width={700}
              height={100}
              alt="waitt for img"
            />

            <img
            className='w-[30%] sm:w-[20%] xl:w-[13%] h-auto  '
            src="/img/asset 6.png"
              width={700}
              height={100}
              alt="waitt for img"
            />
               <img
            className='w-[20%] xl:w-[13%] h-auto  '
            src="/img/asset 7.png"
              width={700}
              height={100}
              alt="waitt for img"
            />
               <img
            className='w-[30%] xl:w-[13%] h-auto  '
            src="/img/asset 8.png"
              width={700}
              height={100}
              alt="waitt for img"
            />
          </div>
        </div>

        {/* <Swiper
        spaceBetween={20} // Space between slides (in pixels)
        slidesPerView={1} // Default slides per view
        loop={true} // Enable infinite loop
        autoplay={{ delay: 3000 }} // Auto slide every 3 seconds
        pagination={{ clickable: true }} // Enable pagination bullets
        navigation={{ clickable: true }} // Enable navigation arrows
        breakpoints={{
          640: {
            slidesPerView: 2, // Show 2 slides on small screens
          },
          768: {
            slidesPerView: 3, // Show 3 slides on medium screens
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10// Show 5 slides on very large screens
             // Show 4 slides on larger screens
          },
          1280: {
            slidesPerView: 5, 
            spaceBetween: 10// Show 5 slides on very large screens
          },
        }}
        className="mySwiper"
      >

      
      {
        sliderData?.map((data,ind)=>{
          
          return (<>

          <SwiperSlide >
         { console.log('hh',data)}
          <img
            className='w-[200px] h-auto  '
            src={`${data.imgSrc}`}
              width={700}
              height={100}
              alt="waitt for img"
            /> 
          </SwiperSlide>



          </>)
        })
      }

       
      </Swiper> */}
      </div>
    </div>
  );
}
