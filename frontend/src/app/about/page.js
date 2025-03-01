"use client";
import React from "react";
import AboutDirector from "../components/AboutDirector";

const AboutSection = () => {
  return (
    <main className="min-h-screen relative  text-gray-800">
    <div className="absolute inset-0 bg-gray-50 blur-lg"/>
      {/* About Us Section */}
      <section className="text-center relative py-16 px-5 md:px-16 xl:px-32">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
          About OIC Global
        </h2>
        <p className="mt-4 text-sm lg:text-base text-gray-600 leading-relaxed">
          OIC Global is a technology-driven company committed to delivering innovative solutions that empower businesses to achieve their full potential. With a team of experienced professionals, we specialize in web development, digital marketing, and business transformation strategies that help our clients thrive in the digital age.
        </p>
      </section>

      <section>
        <AboutDirector/>
      </section>
    </main>
  );
};

export default AboutSection;
