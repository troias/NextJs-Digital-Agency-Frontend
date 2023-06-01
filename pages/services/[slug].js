import React from "react";
import { getServiceBySlug, getAllServices, getServices, getServiceDataBySlug } from "../../utils/api";
import ServiceCard from "../../components/services/serviceCard";
import Image from 'next/image';
import { loader } from '../../utils/media'

export const ServiceItem = (props) => {
  console.log("ServiceItem props", props);
  const { name, description, cover } = props.services.attributes;

 




  return (
    <div className="">
      <li className="service rounded-xl shadow-lg list-none cursor-pointer ">
          <div className="flex  justify-center">
        <header className="w-4/5 ">
        <div className="h-36 overflow-hidden rounded-xl relative">
      <Image
        loader={loader}
        src={cover.data.attributes.url}
        alt={cover.data.attributes.alternativeText}
        width={cover.data.attributes.width}
        height={cover.data.attributes.height}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-green-100 via-green-300 to-transparent opacity-50"></div>
    </div>
          <div className=" flex  justify-center m-auto py-6 max-w-6xl text-wrapper p-4 wrapper   ">
            <p className="mb-2  w-2/3">
              <h3 className="font-bold text-xl mb-2 pb-10">{name}</h3>
              {description}
            </p>
          </div>
        </header>
          </div>
      </li>
    </div>
  );
};

export default ServiceItem;

export const getStaticPaths = async () => {
  const services = await getServices();


  

  const paths = services.map((service) => ({
    params: { slug: service.attributes.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  //  console.log("getServiceBySlug", await getServiceBySlug(params.slug))
  const services = await getServiceDataBySlug(params.slug);
  // console.log("getStaticPropsproject", services)
  const servicesData = await getServices()
  return {
    props: {
      services,
      servicesData
    },
  };
};
