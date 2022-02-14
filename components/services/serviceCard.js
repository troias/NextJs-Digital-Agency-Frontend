import React from 'react'

const ServiceCard = (props) => {
  return (

    <>
      <li className="service rounded-xl shadow-lg">
        <header>
          <div className="img-cont h-36 overflow-hidden rounded-xl">
            {/* <img v-if="coverImageUrl" :src="coverImageUrl" alt="" /> */}
          </div>
          <div className="text-wrapper p-4">
            <h3 className="font-bold text-xl mb-2">{service.name}</h3>
            <p className="mb-2">
              {service.description}
            </p>
          </div>
        </header>
      </li>
    </>
  )
}

export default ServiceCard
