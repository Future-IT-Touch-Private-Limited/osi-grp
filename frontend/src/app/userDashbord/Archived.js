import React from 'react'

export default function Archived() {
  return (
    <>
            <div className="applicationsss flex flex-col gap-5 p-3 my-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:justify-between">
          <div className="flex justify-between p-3">
            <div className="flex items-center gap-5">
              <span className='hidden md:block'>Uk</span>
              <div className="flex flex-col ">
                <span className='text-sm md:text-md'>United Kingdom(UK)</span>
                <span className="text-xs">#iz83mp</span>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <p className="text-xs">1 day ago</p>
            </div>
          </div>
          <div className='flex justify-center lg:justify-end items-center'>
            <button className="text-[#4352CC] bg-[#D1E5FF] text-xs w-full max-w-60  py-4  md:px-2 rounded">
              <span>Restore application</span>
              
            </button>
           
          </div>
        </div>
     
      </div>
    </>
  )
}
