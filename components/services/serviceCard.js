import React from 'react'
import Image from 'next/image'
import { loader } from '../../utils/media'
import Link from 'next/link'

const ServiceCard = (props) => {
  // console.log("ServiceCard props", props)
  const { services} = props
  // console.log("ServiceCard services", services)
  return (

    <>
      {
        services.map((service, index) => {
          // console.log("service", service)
          const {name, description, cover} = service.attributes
          // console.log("service.attributes", cover)
          const { url, alternativeText, width, height } = cover.data.attributes

          return (
         
            <li className="service rounded-xl shadow-lg list-none ">
            <header>
              <div className="img-cont h-36 overflow-hidden rounded-xl">
              <Image
                    loader={loader}
                    layout="responsive"
                    src={url}
                    alt={alternativeText}
                    width={width}
                    height={height}
                    objectFit="contain"
                  />
              </div>
              <div className="text-wrapper p-4">
                 <h3 className="font-bold text-xl mb-2">{name}</h3> 
                <p className="mb-2">
                  {description} 
                </p>
              </div>
            </header>
          </li>
          )
        }
        )
      }
    </>
  )
}

export default ServiceCard

