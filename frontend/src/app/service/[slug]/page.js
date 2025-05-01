
import React from 'react'

import { serviceData } from '@/app/serviceData';



import ServiceInner from '@/app/components/ServiceInner';


const page = () => {
  return (
    <div>
      {serviceData.map((service, index) => (
        <ServiceInner 
          key={index}
          service={service} 
        />
      ))}
    </div>
  );
};

export default page;
