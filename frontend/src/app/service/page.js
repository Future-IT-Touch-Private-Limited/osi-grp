import React from "react";
import Link from "next/link";
import SearchPlaces from "../components/SearchPlaces/SearchPlaces";
import TestiMonial from "../components/testimonials/TestiMonial";

export default function page() {
  return (
    <>
     <div className="about-banner relative h-[40vh] md:h-[60vh] w-full overflow-hidden">
  <img
    src="/img/serviceBanner.webp"
    alt="OIC Global Services"
    className="absolute top-0 left-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-16 text-white">
    <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4">
      Our Services
    </h1>
    <p className="text-lg md:text-xl max-w-3xl mb-6">
      At OIC Global, we specialize in delivering tailored immigration, education, and visa solutions to empower individuals and families for a successful international future.
    </p>
  </div>
</div>

      <SearchPlaces />
          <TestiMonial/>
      
    </>
  );
}
