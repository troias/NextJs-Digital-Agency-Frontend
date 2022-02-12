import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <footer className="site-footer bg-gray-800 text-gray-50 p-4">
      <div className="cont py-12 m-auto max-w-6xl">
        <div className="wrapper md:grid grid-cols-5">
          <header className="grid col-start-1 col-end-3 mb-6 text-center md:text-left" >
            <figure
              className=" SiteLogo flex items-center justify-center md:justify-start gap-2 mb-2 " >
              {/* <nuxt-logo class="w-12" /> */}
              <h1 class="text-2xl font-black">Designli</h1>
            </figure>
  
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
                <li><Link href="/services#branding">Branding</Link></li>
                <li><Link href="/services#graphics">Graphics</Link></li>
                <li><Link href="/services#ui/ux">UI/UX</Link></li>
              </ul>
            </section>
            <section className="text-center md:text-left">
              <h1 className="text-xl font-extrabold">Contact</h1>
              <ul>
                <li><Link href="/contact">Send us a message</Link></li>
                <li><a href="tel:+00000000">+2345678900</a></li>
                <li><a href="mailto:mail@mail.com">mail@mail.com</a></li>
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
