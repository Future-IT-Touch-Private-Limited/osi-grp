import React from "react";
import { serviceData } from "@/app/serviceData";
import ServiceInner from "@/app/components/ServiceInner";

export async function generateStaticParams() {
  return serviceData.map((service) => ({
    slug: service?.service?.toLowerCase().split(" ").join("-"),
  }));
}

export default function Page({ params: { slug } }) {
  const singleService = serviceData.find(
    (elm) => elm.service?.toLowerCase().split(" ").join("-") === slug
  );

  return (
    <div>
      {singleService ? (
        <ServiceInner service={singleService} />
      ) : (
        <p>Service not found</p>
      )}
    </div>
  );
}
