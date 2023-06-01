import React from 'react'
import Image from 'next/image'
import { loader } from '../../utils/media'
import Link from 'next/link'

const ServiceCard = (props) => {
  // console.log("ServiceCard props", props)
  const { services } = props
  // console.log("ServiceCard services", services)
  return (

    <>
      {
        services.map((service, index) => {
          // console.log("service", service)
          const { name, description, cover, slug } = service.attributes
          // console.log("service.attributes", cover)
          const { url, alternativeText, width, height } = cover.data.attributes

          return (

            <li className="service rounded-xl shadow-lg list-none cursor-pointer" key={index}>
            <Link href={`/services/${slug}`} className="link-styling">
              <header>
              <div className="relative">
      <div className="img-cont h-36 overflow-hidden rounded-xl">
        <Image
          loader={loader}
          layout="responsive"
          src={url}
          alt={alternativeText}
          width={width}
          height={height}
          objectFit="contain"
          className="filter grayscale-90 hover:grayscale-0 transition duration-300 ease-in-out"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-green-100 via-green-300 to-transparent opacity-30 hover:opacity-30 hover:to-transparent hover:opacity-0 transition duration-300 ease-in-out"></div>
    </div>
                <div className="text-wrapper p-4">
                  <h3 className="font-bold text-xl mb-2">{name}</h3>
                  <p className="mb-2">{description}</p>
                </div>
              </header>
            </Link>
          </li>

  )
}
        )
      }
    </>
  )
}

export default ServiceCard

