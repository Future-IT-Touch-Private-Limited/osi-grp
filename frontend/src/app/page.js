import Companies from "./components/Companies";
import Herosection from "./components/HeroSection";
import SearchPlaces from "./components/SearchPlaces/SearchPlaces";
import TestiMonial from "./components/testimonials/TestiMonial";
import HowWork from "./components/HowWork";
import StartAgain from "./components/StartAgain";
import SuccessStory from "./components/SuccessStory";
import AboutDirector from "./components/AboutDirector";
import OurBranches from "./components/OurBranches";

const page = () => {
  return (
    <>
      <Herosection />
      <SearchPlaces />
      <Companies />
      <AboutDirector />
      <SuccessStory />

      <HowWork />
      <TestiMonial />
      <StartAgain />
      <OurBranches />
    </>
  );
};

export default page;
