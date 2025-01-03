"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";

const CountryFlagSwiper = () => {

  const flagdata=[
    {
      id:1,
      image:"/img/usaLogin.webp",
      name:"usa"
    },
    {
      id:2,
      image:"/img/login4.avif",
      name:"uk"
    },
    {
      id:1,
      image:"/img/loginflag1.webp",
      name:"india"
    },
    {
      id:1,
      image:"/img/usaLogin.webp",
      name:"usa"
    },
    {
      id:2,
      image:"/img/login4.avif",
      name:"uk"
    },
    {
      id:1,
      image:"/img/loginflag1.webp",
      name:"india"
    },
    {
      id:1,
      image:"/img/usaLogin.webp",
      name:"usa"
    },
    {
      id:2,
      image:"/img/login4.avif",
      name:"uk"
    },
    {
      id:1,
      image:"/img/loginflag1.webp",
      name:"india"
    },
    {
      id:1,
      image:"/img/usaLogin.webp",
      name:"usa"
    },
    {
      id:2,
      image:"/img/login4.avif",
      name:"uk"
    },
    {
      id:1,
      image:"/img/loginflag1.webp",
      name:"india"
    },
    
  ]
  return (
    <div className="swiper-container w-[100%]">
      <Swiper
        spaceBetween={10}
        loop={true}
        autoplay={{
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {flagdata.map((elm,index)=>{
          return(
            <SwiperSlide key={index}>

              <div  className="flex flex-col justify-center items-center text-center " >
              <img src={elm.image} alt={elm.name} className="rounded-full h-20 w-20" />
                <h2 className="text-center  font-bold capitalize py-2">{elm.name}</h2>


              </div>
              
            </SwiperSlide>

          )
        })}
       
      </Swiper>
    </div>
  );
};

export default CountryFlagSwiper;
