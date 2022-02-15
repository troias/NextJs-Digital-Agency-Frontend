import React from 'react'
import {getServiceBySlug, getAllServices } from '../../utils/api'

export const ServiceItem = (props) => {
  return (
    <div>
      
    </div>
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