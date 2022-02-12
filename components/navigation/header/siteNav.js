import React from 'react'
import Link from 'next/link'

const SiteNav = () => {
  return (
    <template>
      <nav className="SiteNav">
        <button className="menu-btn ">Show</button>
        <ul className="">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/projects">projects</Link></li>
          <li>
            <Link href="/contact">
              <button className="cta">Contact Us</button>
            </Link>
          </li>
        </ul>
      </nav>
    </template>
  )
}

export default SiteNav
