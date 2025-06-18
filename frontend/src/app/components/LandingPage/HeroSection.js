"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";

export default function HeroSection({ setPopOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                className="h-[40px] sm:h-[50px] lg:h-[65px] object-cover -translate-x-3 md:-translate-x-5"
                src="/img/newSiteEditLogo.png"
                alt="Site Logo"
              />
            </div>

            {/* Desktop Navigation buttons */}
            <div className="hidden md:flex space-x-3">
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

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <BiMenu size={24} />
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-3 px-2 bg-white rounded-md shadow-lg">
              <div className="flex flex-col space-y-3">
                <button
                  className="w-full px-4 py-2 text-center rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
                  onClick={() => {
                    setPopOpen(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  Book Free Consultancy
                </button>
                <button
                  className="w-full px-4 py-2 text-center rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                  onClick={() => {
                    setPopOpen(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  Apply Now
                </button>
              </div>
            </div>
          )}
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
    className="object-cover object-right" // This will show the right side on mobile
    priority
  />
  {/* Dark overlay for better text readability */}
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
</div>

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4">
                Best Immigration Consultants
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8">
                in Chandigarh, North India
              </h2>

              <div className="mb-4 md:mb-8">
                <div className="inline-block bg-white text-blue-600 px-4 py-2 sm:px-6 sm:py-3 text-lg sm:text-xl font-bold rounded-md">
                  Full Fee After Visa
                </div>
              </div>

              <button
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition"
                onClick={() => setPopOpen(true)}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
