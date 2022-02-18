import React from 'react'
import { getAllServices } from '../../utils/api'
import ServiceCard from '../../components/services/serviceCard'

 const Index = (props) => {
  const {services} = props
  console.log("services props", services)
  return (
    <section className="site-section services-section">
    <div className="wrapper m-auto py-6 max-w-6xl">
      <header className="relative grid md:grid-cols-3 gap-6 z-10 text-center">
        <div className="wrapper col-start-2">
          <h1 className="header-text">Our Services</h1>
          <p className="mb-16">
            We at Designli are obsessed with beautiful innovation.
          </p>
        </div>
      </header>
      <div className="">
      <ul className="services grid md:grid-cols-3 gap-6 transform md:-translate-y-20 mt-10">
        <ServiceCard services={services} />
      </ul>
      </div>
    </div>
  </section>
  )
}
export default Index

export const getStaticProps = async () => {
  const services = await getAllServices()
  // console.log("services", services)
  return {
    props: {
      services
    }
  }
}
