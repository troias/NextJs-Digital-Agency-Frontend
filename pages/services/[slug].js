import React from 'react'
import {getServiceBySlug, getAllServices } from '../../utils/api'
import ServiceCard from '../../components/services/serviceCard'

export const ServiceItem = (props) => {
  console.log("ServiceItem props", props)
  const { name, description, cover } = props.services.attributes
  return (
    <>
      <li className="service rounded-xl shadow-lg list-none cursor-pointer ">
        <header>
          <div className="img-cont h-36 overflow-hidden rounded-xl">
            <img src={cover.data.url} alt={cover.data.alternativeText} />
          </div>
          <div className="text-wrapper p-4">
            <h3 className="font-bold text-xl mb-2">{name}</h3>
            <p className="mb-2">
              {description}
            </p>
          </div>
        </header>
      </li>
    </>
  )
}

export default ServiceItem

export const getStaticPaths = async () => {
     const services = await getAllServices()
  
   const paths = services.map(service => ({
     params: { slug: service.attributes.slug },
   }))
   return { paths, fallback: false }

}

export const getStaticProps = async ({ params }) => {
  //  console.log("getServiceBySlug", await getServiceBySlug(params.slug))
    const services = await getServiceBySlug(params.slug)
    console.log("getStaticPropsproject", services)
  return {
    props: {
      services,
    },
  }
}