import React, { useState, useEffect, useRef } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SuccessStoryAbove() {
  const swiperRef = useRef(null);

 
  const ourstroyCounter = [
    {
      count: 30,
      countVal: "+",
      name: "Visa Categories",
      img: "/img/direct-flight.webp",
    },
    {
      count: 68,
      countVal: "K",
      name: "Visa Process",
      img: "/img/parents.webp",
    },
    {
      count: 99,
      countVal: "%",
      name: "Success Rate",
      img: "/img/ticket-flight.webp",
    },
  ];

  // Counter state variables to hold the animated values
  const [counterValues, setCounterValues] = useState(
    ourstroyCounter.map(() => ({ current: 0 }))
  );

  // Function to animate the counter
  useEffect(() => {
    ourstroyCounter.forEach((item, index) => {
      const target = item.count;
      let count = 0;
      const interval = setInterval(() => {
        if (count < target) {
          count += Math.ceil(target / 100); // Increment step
          setCounterValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = { current: count };
            return newValues;
          });
        } else {
          clearInterval(interval);
        }
      }, 20); // Interval speed
    });
  }, []);

  return (
    <>
      <div className=" relative">
      <section className=" group ">
            <div className="dedicated-team  pt-10 md:pt-0 lg:pt-10 shadow-lg bg-cover  bg-no-repeat bg-center bg-[url('/img/icon-city.webp')] bg-[#FAF8F7]">
              <div className=" px-5 xl:px-10">
                <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center md:items-end lg:items-center  justify-items-center">
                  <div className="text-center md:self-center xl:text-left lg:ml-5">
                    <h5 className="text-2xl lg:text-3xl xl:text-4xl   lg:px-4 font-bold text-black mb-4 md:text-start">
                      Take off to your dream destination
                    </h5>
                    <p className="text-slate-800 border-l-4 hidden lg:text-start lg:block border-red-400 lg:px-4">
                      Your ideal getaway is within reach. Let us help you
                      explore new destinations with tailored assistance and
                      expert advice, turning your travel dreams into reality.
                    </p>
                    <div className="lg:px-4 mt-4 hidden md:block">
                      <a
                        href="tel:+91-000000"
                        className="text-black uppercase font-bold flex items-center gap-x-2 "
                      >
                        Talk to expert{" "}
                        <FaArrowAltCircleRight className="text-[#C71F1F]" />
                      </a>
                    </div>
                  </div>

                  <div className="  ">
                    <img
                      src="/img/slider/visa.webp"
                      alt="Visa"
                      className="w-full h-auto object-cover rounded-lg "
                    />
                  </div>

                  <div className="col-span-1  w-full flex flex-col xl:flex-row items-center  xl:justify-center xl:items-start space-y-4 xl:space-y-0 ">
                    <div className=" space-y-5 lg:space-y-10 flex items-baseline   md:block  mt-5 md:pt-0">
                      {ourstroyCounter.map((elm, index) => (
                        <div
                          key={index}
                          className="flex   flex-col md:flex-row items-center space-x-4 border-b-2 pb-4 xl:border-b-0 xl:pb-0"
                        >
                          <div className="text-lg text-black">
                            <img
                              src={elm.img}
                              alt={elm.name}
                              className="h-10 w-10 lg:h-16 lg:w-16 sccuessStory-testmonail-filter "
                            />
                          </div>
                          <div className="text-center xl:text-left">
                            <h6 className="text-2xl  lg:text-5xl font-bold text-black">
                              {counterValues[index]?.current}
                              {elm.countVal}
                            </h6>
                            <p className="text-sm text-gray-700">{elm.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>









        {/* <Swiper
        spaceBetween={20}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper overflow-hidden  "
        >
          <SwiperSlide className=" group ">
            <section className="dedicated-team  pt-10 md:pt-0 lg:pt-10 shadow-lg bg-cover  bg-no-repeat bg-center bg-[url('/img/icon-city.webp')] bg-[#FAF8F7]">
              <div className=" px-5 xl:px-10">
                <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center md:items-end lg:items-center  justify-items-center">
                  <div className="text-center md:self-center xl:text-left lg:ml-5">
                    <h5 className="text-2xl lg:text-3xl xl:text-4xl   lg:px-4 font-bold text-black mb-4 md:text-start">
                      Take off to your dream destination
                    </h5>
                    <p className="text-slate-800 border-l-4 hidden lg:text-start lg:block border-red-400 lg:px-4">
                      Your ideal getaway is within reach. Let us help you
                      explore new destinations with tailored assistance and
                      expert advice, turning your travel dreams into reality.
                    </p>
                    <div className="lg:px-4 mt-4 hidden md:block">
                      <a
                        href="tel:+91-000000"
                        className="text-black uppercase font-bold flex items-center gap-x-2 "
                      >
                        Talk to expert{" "}
                        <FaArrowAltCircleRight className="text-[#C71F1F]" />
                      </a>
                    </div>
                  </div>

                  <div className="  ">
                    <img
                      src="/img/slider/visa.webp"
                      alt="Visa"
                      className="w-full h-auto object-cover rounded-lg "
                    />
                  </div>

                  <div className="col-span-1  w-full flex flex-col xl:flex-row items-center  xl:justify-center xl:items-start space-y-4 xl:space-y-0 ">
                    <div className=" space-y-5 lg:space-y-10 flex items-baseline   md:block  mt-5 md:pt-0">
                      {ourstroyCounter.map((elm, index) => (
                        <div
                          key={index}
                          className="flex   flex-col md:flex-row items-center space-x-4 border-b-2 pb-4 xl:border-b-0 xl:pb-0"
                        >
                          <div className="text-lg text-black">
                            <img
                              src={elm.img}
                              alt={elm.name}
                              className="h-10 w-10 lg:h-16 lg:w-16 sccuessStory-testmonail-filter "
                            />
                          </div>
                          <div className="text-center xl:text-left">
                            <h6 className="text-2xl  lg:text-5xl font-bold text-black">
                              {counterValues[index]?.current}
                              {elm.countVal}
                            </h6>
                            <p className="text-sm text-gray-700">{elm.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className=" group  ">
            <section className="dedicated-team  pt-10 md:pt-0 lg:pt-10 shadow-lg bg-cover  bg-no-repeat bg-center bg-[url('/img/icon-city.webp')] bg-[#FAF8F7]">
              <div className=" px-5 xl:px-10">
                <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center md:items-end lg:items-center  justify-items-center">
                  <div className="text-center md:self-center xl:text-left lg:ml-5">
                    <h5 className="text-2xl lg:text-3xl xl:text-4xl   lg:px-4 font-bold text-black mb-4 md:text-start">
                    Fly away to your dream escape!
                    </h5>
                    <p className="text-slate-800 border-l-4 hidden lg:text-start lg:block border-red-400 lg:px-4">
                    Your perfect escape is closer than you think. Let us guide you to new destinations with personalized support and expert insights, making your travel dreams come true.
                    </p>
                    <div className="lg:px-4 mt-4 hidden md:block">
                      <a
                        href="tel:+91-000000"
                        className="text-black uppercase font-bold flex items-center gap-x-2 "
                      >
                        Talk to expert{" "}
                        <FaArrowAltCircleRight className="text-[#C71F1F]" />
                      </a>
                    </div>
                  </div>

                  <div className="  ">
                    <img
                      src="/img/slider/familyVisa.webp"
                      alt="Visa"
                      className="w-full h-auto object-cover rounded-lg "
                    />
                  </div>

                  <div className="col-span-1  w-full flex flex-col xl:flex-row items-center  xl:justify-center xl:items-start space-y-4 xl:space-y-0 ">
                    <div className=" space-y-5 lg:space-y-10 flex items-baseline   md:block  mt-5 md:pt-0">
                      {ourstroyCounter.map((elm, index) => (
                        <div
                          key={index}
                          className="flex   flex-col md:flex-row items-center space-x-4 border-b-2 pb-4 xl:border-b-0 xl:pb-0"
                        >
                          <div className="text-lg text-black">
                            <img
                              src={elm.img}
                              alt={elm.name}
                              className="h-10 w-10 lg:h-16 lg:w-16 sccuessStory-testmonail-filter "
                            />
                          </div>
                          <div className="text-center xl:text-left">
                            <h6 className="text-2xl lg:text-5xl font-bold text-black">
                              {counterValues[index]?.current}
                              {elm.countVal}
                            </h6>
                            <p className="text-sm text-gray-700">{elm.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className=" group ">
            <section className="dedicated-team  pt-10 md:pt-0 lg:pt-10 shadow-lg bg-cover  bg-no-repeat bg-center bg-[url('/img/icon-city.webp')] bg-[#FAF8F7]">
              <div className=" px-5 xl:px-10">
                <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center md:items-end lg:items-center  justify-items-center">
                  <div className="text-center md:self-center xl:text-left lg:ml-5">
                    <h5 className="text-2xl lg:text-3xl xl:text-4xl   lg:px-4 font-bold text-black mb-4 md:text-start">
                    Fly away to your perfect getaway
                    </h5>
                    <p className="text-slate-800 border-l-4 hidden lg:text-start lg:block border-red-400 lg:px-4">
                    Your dream escape is closer than ever. Let us guide you to new places with expert advice and personalized support, making your journey unforgettable.
                    </p>
                    <div className="lg:px-4 mt-4 hidden md:block">
                      <a
                        href="tel:+91-000000"
                        className="text-black uppercase font-bold flex items-center gap-x-2 "
                      >
                        Talk to expert{" "} ss
                        <FaArrowAltCircleRight className="text-[#C71F1F]" />
                      </a>
                    </div>
                  </div>

                  <div className="  ">
                    <img
                      src="/img/slider/visa4.webp"
                      alt="Visa"
                      className="w-full h-[40vh] lg:h-auto object-cover rounded-lg "
                    />
                  </div>

                  <div className="col-span-1  w-full flex flex-col xl:flex-row items-center  xl:justify-center xl:items-start space-y-4 xl:space-y-0 ">
                    <div className=" space-y-5 lg:space-y-10 flex items-baseline   md:block  mt-5 md:pt-0">
                      {ourstroyCounter.map((elm, index) => (
                        <div
                          key={index}
                          className="flex   flex-col md:flex-row items-center space-x-4 border-b-2 pb-4 xl:border-b-0 xl:pb-0"
                        >
                          <div className="text-lg text-black">
                            <img
                              src={elm.img}
                              alt={elm.name}
                              className="h-10 w-10 lg:h-16 lg:w-16 sccuessStory-testmonail-filter "
                            />
                          </div>
                          <div className="text-center xl:text-left">
                            <h6 className="text-2xl  lg:text-5xl font-bold text-black">
                              {counterValues[index]?.current}
                              {elm.countVal}
                            </h6>
                            <p className="text-sm text-gray-700">{elm.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        
        </Swiper>
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="hidden lg:block absolute z-10 left-4 top-[45%] transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md hover:bg-slate-100 hover:text-black transition"
        >
          <MdArrowBackIos />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="hidden lg:block absolute z-10 right-4 top-[45%] transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md hover:bg-slate-100 hover:text-black transition"
        >
          <IoIosArrowForward />
        </button> */}
      </div>
    </>
  );
}
