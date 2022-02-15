import React from 'react'
import Link from 'next/link'

const SiteNav = () => {
  return (
    <>
      <nav className="SiteNav">
         {/* <button className="menu-btn ">Show</button>  */}
        <ul className="ul">
          <li ><Link href="/about">About</Link></li>
          <li ><Link href="/blog">Blog</Link></li>
          <li ><Link href="/projects">projects</Link></li>
          <li ><button className="cta"><Link href="/contact">  Contact Us </Link></button> </li>
        </ul>
      </nav>
    </>
  )
}

export default SiteNav
