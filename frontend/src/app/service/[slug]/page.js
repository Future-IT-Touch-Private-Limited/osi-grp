import React from "react";

import { serviceData } from "@/app/serviceData";

import ServiceInner from "@/app/components/ServiceInner";

export default function page({ params: { slug } }) {
  const singleService = serviceData.find(
    (elm) => elm.service.toLowerCase().split(" ").join("-") == slug
  );
  return (
    <div>
      {serviceData.map((service, index) => (
        <ServiceInner key={index} service={service} />
      ))}
    </div>
  );
}
