import ServiceInner from '@/app/components/ServiceInner';
import React from 'react'

import { serviceData } from '@/app/serviceData';




  export const generateStaticParams=()=>{
    return serviceData.map((elm)=>(
        {
            slug:elm.service.toLowerCase().split(" ").join("-")
        }
    ))
}

export default function page({params:{slug}}) {
    const singleService=serviceData.find((elm)=>elm.service.toLowerCase().split(" ").join("-")==slug)
  return (
    <div>
       
      <ServiceInner singleService={singleService}/>

    </div>
  )
}
