"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection({ setPopOpen }) {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener to change header style when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md py-2`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl md:text-3xl font-bold">
              <img
                className="h-[50px] lg:h-[65px] object-cover -translate-x-3 md:-translate-x-5"
                src="/img/newSiteEditLogo.png"
                alt="Site Logo"
              />
            </div>

            {/* Navigation buttons */}
            <button
              className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
              onClick={() => setPopOpen(true)}
            >
              Book Free Consultancy
            </button>
            <button
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
              onClick={() => setPopOpen(true)}
            >
              Apply Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with full-screen background image */}
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/LandingPage/poster.jpg"
            alt="Immigration Services Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay */}

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Best Immigration Consultants
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8">
                in Chandigarh, North India
              </h2>

              <div className="mb-8">
                <div className="inline-block bg-white text-blue-600 px-6 py-3 text-xl font-bold rounded-md">
                  Full Fee After Visa
                </div>
              </div>

              <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition"
              onClick={() => setPopOpen(true)}>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
