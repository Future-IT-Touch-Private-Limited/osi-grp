"use client";
import Head from "next/head";
import HeroSection from "../components/LandingPage/HeroSection";
import ProgramsSection from "../components/LandingPage/ProgramsSection";
import WhyChooseUs from "../components/LandingPage/WhyChooseUs";
import InternationalTieups from "../components/LandingPage/InternationalTieups";
import Testimonials from "../components/LandingPage/Testimonials";
import CounsellingForm from "../components/LandingPage/CounsellingForm";
import BookNowPop from "../components/LandingPage/BookNowPop";
import { useState } from "react";

export default function ConsultancyChandigarh () {
  const [popOpen, setPopOpen] = useState(true);
  return (
    <div className="font-sans">
      <BookNowPop popOpen={popOpen} setPopOpen={setPopOpen} />
      <Head>
        <title>CGC Mohali | North India's Premier Institute</title>
        <meta
          name="description"
          content="UG & PG Programs Admissions Open 2025-26 with scholarships up to 100%"
        />
      </Head>

      <HeroSection setPopOpen={setPopOpen} />
      <ProgramsSection setPopOpen={setPopOpen} />
      <WhyChooseUs />
      <InternationalTieups />
      <Testimonials />
      <CounsellingForm />
    </div>
  );
}
