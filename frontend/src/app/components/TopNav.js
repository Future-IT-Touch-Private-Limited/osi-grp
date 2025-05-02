import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaRegCalendarCheck } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function TopNav() {
    const SocialIcon = ({ Icon, link }) => (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="w-9 h-9 bg-[#d82023] hover:bg-[#d82023e2] rounded-full flex items-center justify-center text-white"
        >
          <Icon className="text-lg" />
        </a>
      );
  return (
    <div className="bg-[#211F20] text-white px-5 hidden  md:px-16 xl:px-32 py-2  xl:py-2 lg:flex items-center justify-between">


<button
  className="  text-white hover:px-5 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-[#b81c1e] transition-all duration-300"
  onClick={() => setPopOpen(true)}
>
  <FaRegCalendarCheck className="text-lg" />
  Book Free Consultancy

</button>

      <div className="hidden md:flex">
        <div className="px-4 py-1 rounded-full flex gap-2 items-center md:text-nowrap">
          <figure>
            <img
              className="w-7 h-7"
              src="/img/asset 2.svg"
              width={120}
              height={120}
              alt="Chat Icon"
            />
          </figure>
          <Link href="tel:75085 75015">
            <span className="opacity-80">Chat With us</span>
          </Link>
        </div>
        <div className="hidden md:flex md:text-nowrap px-4 py-1 rounded-full  gap-2 items-center">
          <FaPhoneAlt className="= lg:text-xl" />

          <a href="tel:+75085 75015">
            <span className="opacity-80  ">+91 75085 75015</span>
          </a>
        </div>

         <div className="flex gap-2">
                          <SocialIcon
                            Icon={RiInstagramFill}
                            link="https://www.instagram.com"
                          />
                          <SocialIcon
                            Icon={FaFacebook}
                            link="https://www.facebook.com"
                          />
                          <SocialIcon Icon={FaTwitter} link="https://www.twitter.com" />
                          <SocialIcon Icon={FaYoutube} link="https://www.youtube.com" />
                        </div>
      </div>
    </div>
  );
}
