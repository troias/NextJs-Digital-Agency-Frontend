import React from 'react'
import Link from 'next/link'
import NextLogo from '../.././ui/nextLogo'
import Image from 'next/image'

const Footer = ({
  data: {
    services,
    projects,
    articles,
    servicesData,
  },
}) => {
  console.log("Footer", servicesData)




  return (
    <>
    <footer className="site-footer bg-gray-800 text-gray-50 p-4">
      <div className="cont py-12 m-auto max-w-6xl">
        <div className="wrapper md:grid grid-cols-5">
          <header className="grid col-start-1 col-end-3 mb-6 text-center md:text-left" >
            <figure
              className=" SiteLogo flex items-center justify-center md:justify-start gap-2 mb-2" >
               {/* <NextLogo  />  */}
              <Image
                src="/roshan.svg"
                alt="RoshanStudios"
                width={50}
                height={50}
              />
              
            </figure>
            <h1 className="text-2xl font-black">RoshanStudios</h1>
            <p>Obsessed with beautiful innovation.</p>
          </header>
          <div className="link-group md:grid grid-cols-3 col-start-3 col-end-6">
            <section className="mb-4 text-center md:text-left">
              <h1 className="text-xl font-extrabold">Company</h1>
              <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </section>
            <section className="mb-4 text-center md:text-left">
              <h1 className="text-xl font-extrabold">Services</h1>
              <ul>
                {
                  servicesData && servicesData.map((service) => (
                 
                    <li key={service.id}><Link href={`/services/${service.attributes.slug}`}>{service.attributes.name}</Link></li>
                  ))
                }
                {/* <li><Link href="/services/branding">Shopify Developent</Link></li>
                <li><Link href="/services/ux-ui">UI/UX</Link></li> */}

              </ul>
            </section>
            <section className="text-center md:text-left">
              <h1 className="text-xl font-extrabold">Contact</h1>
              <ul>
                <li><Link href="/contact">Send us a message</Link></li>
                <li><a href="tel:+00000000">+64278494900</a></li>
                <li><a href="mailto:mail@mail.com">webdevincnz@gmail.com</a></li>
              </ul>
            </section>
          </div>
        </div>
        <hr className="w-full my-12" />
        <ul className="socials flex gap-6 justify-center">
          <li><a href="http://facebook.com">FB</a></li>
          <li><a href="http://instagram.com">IG</a></li>
          <li><a href="http://twitter.com">TW</a></li>
        </ul>
        <p className="text-center mt-4">© Designli. All rights reserved</p>
      </div>
    </footer>
  </>
  )
}

export default Footer



