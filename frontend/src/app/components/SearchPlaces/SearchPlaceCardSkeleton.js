import React from 'react'

export default function SearchPlaceCardSkeleton() {
  return (
    <>
        <div className="animate-pulse overflow-hidden relative bg-gray-200 rounded-xl flex flex-col gap-4 shadow-lg">
      {/* Image Skeleton */}
      <div className="w-full h-60 bg-gray-300 rounded-t-xl"></div>
      
      {/* Discount Badge */}
      <div className="bg-gray-300 h-10 w-10 absolute top-2 right-2 rounded-full"></div>
      
      {/* Country Status Badge */}
      <div className="bg-gray-300 absolute bottom-0 left-0 px-4 rounded-tr-full h-6 w-24"></div>
      
      {/* Content Skeleton */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,.2)] px-5 py-4 flex flex-col justify-end gap-4">
        {/* Country Name */}
        <div className="w-1/2 h-5 bg-gray-400 rounded"></div>
        
        {/* Divider */}
        <div className="h-[1px] bg-gray-500 w-full"></div>
        
        {/* Price & Visa Info */}
        <div className="flex justify-between text-sm opacity-80">
          <div className="w-1/3 h-4 bg-gray-400 rounded"></div>
          <div className="w-1/3 h-4 bg-gray-400 rounded"></div>
        </div>
        
        <div className="flex justify-between items-center mt-1">
          {/* Price */}
          <div className="w-1/4 h-6 bg-gray-400 rounded"></div>
          <div className="w-1/4 h-6 bg-gray-400 rounded"></div>
        </div>
      </div>
    </div>
    </>
  )
}
