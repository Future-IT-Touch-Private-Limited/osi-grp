import Companies from "./components/Companies"
import Herosection from "./components/HeroSection"
import SearchPlaces from "./components/SearchPlaces/SearchPlaces"
import TestiMonial from "./components/testimonials/TestiMonial"
import HowWork from "./components/HowWork"
import StartAgain from "./components/StartAgain"


const page = () => {
  return (
    <>
    <Herosection/>
    <SearchPlaces/>
    <Companies/>
    <TestiMonial/>
    <HowWork/>
    <StartAgain/>
   

   
    </>
  )
}

export default page
