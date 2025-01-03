import React from 'react'

const ProgressBar = () => {
  return (
    <div className='ProgresssBar py-5'>

     <div className='ProgressParent flex items-center justify-center gap-2'>
     <div className='flex justify-center gap-2 items-center'>
        <div className='border-2 rounded px-3 py-1 border-gray-200 text-gray-300'>1</div>
        <p className='font-normal text-gray-500'>Basic Details</p>
      </div>
      <div>
        -
      </div>
     <div className='flex justify-center gap-2 items-center'>
        <div className='border-2 rounded px-3 py-1 border-gray-200 text-gray-300'>2</div>
        <p className='font-normal text-gray-500'>Payment</p>
      </div>
      <div>
        -
      </div>
     <div className='flex justify-center gap-2 items-center'>
        <div className='border-2 rounded px-3 py-1 border-gray-200 text-gray-300'>3</div>
        <p className='font-normal text-gray-500'>Visa Details</p>
      </div>
      <div>
        -
      </div>
     <div className='flex justify-center gap-2 items-center'>
        <div className='border-2 rounded px-3 py-1 border-gray-200 text-gray-300'>4</div>
        <p className='font-normal text-gray-500'>Appointment</p>
      </div>
      <div>
        -
      </div>
     <div className='flex justify-center gap-2 items-center'>
        <div className='border-2 rounded px-3 py-1 border-gray-200 text-gray-300'>5</div>
        <p className='font-normal text-gray-500'>Documnet CheckList</p>
      </div>
    
     </div>
    </div>
  )
}

export default ProgressBar