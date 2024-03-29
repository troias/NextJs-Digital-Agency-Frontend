import React from 'react'
import Image from 'next/image'
import { loader } from '../../utils/media'
import Link from 'next/link'

const ServiceCard = (props) => {
  const { services } = props;

  console.log("services", services)

  return (
    <>
      {services &&
        services.map((service, index) => {
          const { name, description, cover, slug } = service.attributes;
          const { url, alternativeText, width, height } =
            cover?.data?.attributes || {};



          return (
            <li className="service rounded-xl shadow-lg list-none cursor-pointer" key={index}>
              <Link href={`/services/${slug}`} className="link-styling">
                <header>
                  {url && (
                    <div className="relative">
                      <div className="img-cont h-36 overflow-hidden rounded-xl">
                        <Image
                          loader={loader}
                          layout="responsive"
                          width={width || 250  }
                          height={height || 250 }
                          src={url}
                          alt={alternativeText}
        
                          objectFit="contain"
                          className=" filter grayscale-90 hover:grayscale-0 transition duration-300 ease-in-out "
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r  to-transparent opacity-30 hover:to-transparent hover:opacity-0 transition duration-300 ease-in-out"></div>
                    </div>
                  )}
                  <div className="text-wrapper p-4">
                    <h3 className="font-bold text-xl mb-2">{name}</h3>
                    {description && <p className="mb-2">{description}</p>}
                  </div>
                </header>
              </Link>
            </li>
          );
        })}
    </>
  );
};

export default ServiceCard;
