"use client";
import Image from "next/image";
import TravelDesination from "./TravelDesination";
import Link from "next/link";

export default function Footer() {
  const countries = [
    { name: "France", href: "/blog/france" },
    { name: "Turkey", href: "/blog/turkey" },
    { name: "Hong Kong", href: "/blog/hongkong" },
    { name: "Switzerland", href: "/blog/switzerland" },
    { name: "Australia", href: "/blog/australia" },
    { name: "United Arab Emirates", href: "/blog/united-arab-emirates" },
    { name: "Malaysia", href: "/blog/malaysia" },
    { name: "Japan", href: "/blog/japan" },
    { name: "Singapore", href: "/blog/singapore" },
    { name: "Indonesia", href: "/blog/indonesia" },
    { name: "Vietnam", href: "/blog/vietnam" },
    { name: "Azerbaijan", href: "/blog/azerbaijan" },
    { name: "United Kingdom", href: "/blog/united-kingdom" },
    { name: "Spain", href: "/blog/spain" },
    { name: "Greece", href: "/blog/greece" },
    { name: "United States", href: "/blog/united-states" },
    { name: "South Korea", href: "/blog/southkorea" },
    { name: "Poland", href: "/blog/poland" },
    { name: "Germany", href: "/blog/germany" },
    { name: "Georgia", href: "/blog/georgia" },
    { name: "Hungary", href: "/blog/hungary" },
    { name: "Finland", href: "/blog/finland" },
    { name: "Italy", href: "/blog/italy" },
    { name: "China", href: "/blog/china" },
    { name: "Norway", href: "/blog/norway" },
    { name: "Egypt", href: "/blog/egypt" },
    { name: "Oman", href: "/blog/oman" },
    { name: "Sweden", href: "/blog/sweden" },
    { name: "Austria", href: "/blog/austria" },
    { name: "Denmark", href: "/blog/denmark" },
    { name: "Uzbekistan", href: "/blog/uzbekistan" },
    { name: "Czech Republic", href: "/blog/czech-republic" },
    { name: "Cambodia", href: "/blog/cambodia" },
    { name: "Morocco", href: "/blog/morocco" },
    { name: "New Zealand", href: "/blog/newzealand" },
    { name: "Bahrain", href: "/blog/bahrain" },
    { name: "Netherlands", href: "/blog/netherlands" },
    { name: "Russia", href: "/blog/russia" },
    { name: "Philippines", href: "/blog/philippines" },
    { name: "Brazil", href: "/blog/brazil" },
    { name: "Saudi Arabia", href: "/blog/saudi-arabia" },
    { name: "Kenya", href: "/blog/kenya" },
    { name: "Portugal", href: "/blog/portugal" },
    { name: "Belgium", href: "/blog/belgium" },
    { name: "Croatia", href: "/blog/croatia" },
    { name: "Lithuania", href: "/blog/lithuania" },
    { name: "Ireland", href: "/blog/ireland" },
    { name: "Luxembourg", href: "/blog/luxembourg" },
    { name: "Romania", href: "/blog/romania" },
    { name: "Bulgaria", href: "/blog/bulgaria" },
    { name: "Slovakia", href: "/blog/slovakia" },
    { name: "Latvia", href: "/blog/latvia" },
    { name: "Estonia", href: "/blog/estonia" },
  ];
  



  return (
    <div className="Footer  bg-[#035D53] mt-32  ">
  <div className="relative -top-28">
    <TravelDesination/>
    </div>


    <div className="text-white">
      <div className=" px-5 md:px-15 lg:px-20 ">
      <Link href={"/"}>
      <figure className="w-[200px] bg-white rounded p-2">
            <img
              className="w-[100%] h-auto rounded-full object-cover"
              src="/img/travelCompanyLogo.png"
              width={200}
              height={100}
              alt="Site Logo"
            />
          </figure>
      </Link>
        <div className="flex flex-col gap-10  lg:grid  lg:grid-cols-3 mt-5 lg:justify-items-center">

          <div className="flex flex-col gap-8">
            <h6>Address</h6>
            <div>
              <h6>❤️ Mohali</h6>
              <p>
                {/* BHIVE Workspace - No.112, AKR Tech Park, &ldquo; B &ldquo; and, 7th Mile Hosur
                Rd Krishna Reddy Industrial Area, Bengaluru, Karnataka 560068 */}
                 SCO 45, FIRST FIRST, CITY HEART, SECTOR 125, MOHALI
              </p>
            </div>
            <div className="  bg-[#60A765]  flex gap-2 items-center w-fit px-2 py-2 rounded">
              <figure>
                <img
                  className="w-full"
                  src="/img/asset 2.svg"
                  width={120}
                  height={120}
                  alt="waitt for img"
                />
              </figure>
              <a href="" className="opacity-80 text-md">Chat with us</a>
            </div>
          </div>
         <div className="flex justify-between md:hidden">  
          <div className="flex flex-col gap-5">
            <h6>FAQs</h6>
            <h6 className="cursor-pointer">About us</h6>
            <h6>Contact us</h6>
            <h6>Blogs</h6>
          </div>
          <div className="flex flex-col gap-5">
            <h6>Privacy Policy</h6>
            <h6>Refund & cancellation policy</h6>
            <h6>Pricing</h6>
            <h6>Terms & conditions</h6>
          </div>
          </div>
          <div className="hidden md:flex flex-col gap-5">
            <h6>FAQs</h6>
            <a href="/about" className="cursor-pointer">About us</a>
            <a href="/contact">Contact us</a>
            <a href="/blog" className="cursor-pointerr">Blogs</a>
          </div>
          <div className="hidden md:flex flex-col gap-5">
            <h6>Privacy Policy</h6>
            <h6>Refund & cancellation policy</h6>
            <h6>Pricing</h6>
            <h6>Terms & conditions</h6>
          </div> 
        </div>
      </div>
        <hr className="mt-16" />

        <div className=" px-5 md:px-15 lg:px-20 py-10 lg:py-20 ">
        <h2 className="mb-5 text-2xl font-semibold">Read more about visas</h2>
      
        <ul
    className="flex flex-row flex-wrap gap-y-2 pb-6"
    style={{ gridTemplateColumns: "repeat(auto-fit, minmax(10%, 1fr))" }}
  >
   
    {countries.map((elm,index)=>{
      return  ( <Link key={index} className="shrink-0 gap-x-3" href={elm.href}>
      {elm.name}<span className="mx-2">•</span>
    </Link>)
    })}
  </ul>
       
    </div>
    </div>
    </div>
  );
}
