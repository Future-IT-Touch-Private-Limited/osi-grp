import React from 'react'
import Image from 'next/image'
export default function WhatsapContact() {
  return (
    <div className='md:hidden fixed  bottom-2 right-2 z-50'>
        <div className="  bg-[#60A765]  flex gap-2 items-center w-fit px-3 py-3 rounded-full ">
              <figure>
                <img
                  className="w-full h-5"
                  src="/img/asset 2.svg"
                  width={200}
                  height={200}
                  alt="waitt for img"
                />
              </figure>
              {/* <a href="" className="opacity-80 text-md">Chat with us</a> */}
            </div>
    </div>
  )
}
