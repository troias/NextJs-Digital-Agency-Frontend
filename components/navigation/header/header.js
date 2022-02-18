import React from 'react'
import SiteNav from './siteNav'
import Link from 'next/link'
import NextLogo from '../.././ui/nextLogo'

const Header = (props) => {
  console.log("props", props)
  return (
    <>
   
      <header className=" fixed top-4 w-full flex px-4 z-20">
        <div className="wrapper relative w-full flex flex-nowrap justify-between items-center bg-white bg-opacity-60 shadow-md rounded-lg py-2 backdrop-filter backdrop-blur-lg px-4 m-auto max-w-5xl">
          <Link href="/" passHref>
            <figure className="SiteLogo flex items-center gap-2">
              <NextLogo className="w-8" />
              <h1 className=" text-lg font-black cursor-pointer">Designli</h1>
            </figure>
          </Link>
          <SiteNav />
        </div>
      </header>
    </>
  )
}

export default Header
