import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

function Header() {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-white">
      <div className="container m-auto">
        <div className="lg:hidden w-full flex items-center justify-between">
          <Link to="/" className="flex flex-col items-center justify-center">
            <StaticImage src="../images/Logo_Black.svg" width="110" />
            <p className="text-gray-700 mt-1 text-xs">Avalon Beach</p>
          </Link>
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 text-black border border-black rounded hover:text-jeans hover:border-jeans hover:border-b hover:border-b-jeans"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:justify-between lg:w-auto`}
        >
          <div className="text-sm lg:flex-1 text-center lg:text-left uppercase">
            <Link
              to={`/`}
              href="#responsive-header"
              className="block mt-4 mr-6 text-gray-700 lg:inline-block lg:mt-0 hover:text-black"
            >
              Home
            </Link>
            <Link
              to={`/about`}
              className="block mt-4 mr-6 text-gray-700 lg:inline-block lg:mt-0 hover:text-jeans hover:underline"
            >
              About
            </Link>
            <Link
              to={`/menu`}
              className="block mt-4 mr-6 text-gray-700 lg:inline-block lg:mt-0 hover:text-jeans hover:underline"
            >
              Menu
            </Link>
            <Link
              to={`/catering`}
              className="block mt-4 mr-6 text-gray-700 lg:inline-block lg:mt-0 hover:text-jeans hover:underline"
            >
              Catering
            </Link>
            <Link
              to={`/whatson`}
              className="block mt-4 mr-6 text-gray-700 lg:inline-block lg:mt-0 hover:text-jeans hover:underline"
            >
              What's On
            </Link>
            <a
              href="https://www.thefork.com.au/restaurant/leonardo-s-r714169"
              target="_blank"
              rel="noreferrer"
              className=" mt-4 mr-6 text-gray-700 inline-block lg:mt-0 hover:text-jeans hover:underline lg:hidden"
            >
              Book a Table
            </a>
            <Link
              to={`/contact`}
              className="block mt-4 mr-6 text-gray-700 lg:inline-block lg:mt-0 hover:text-jeans hover:underline"
            >
              Contact
            </Link>
            {/* SHOP LINK  */}
            {/* <p className="block mt-4 mr-6 text-gray-700 lg:inline-block lg:mt-0 hover:text-jeans hover:underline">
              Shop <span className="text-xs">(coming soon)</span>
            </p> */}
          </div>
          <Link
            to={`/`}
            style={{ maxWidth: `150px` }}
            className="hidden lg:flex lg:flex-col flex-1 items-center justify-center mr-8 w-full "
          >
            <StaticImage src="../images/Logo_Black.svg" />
            <p className="text-gray-700 mt-2 text-xs">Avalon Beach</p>
          </Link>
          <div className="relative flex lg:items-end lg:justify-end items-center justify-center mt-6 lg:mt-0 flex-1">
            <a
              href="https://www.thefork.com.au/restaurant/leonardo-s-r714169"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-block mt-4 text-sm  text-gray-700 hover:underline hover:text-jeans lg:mt-0 uppercase"
            >
              {/* <BsCart3 className="text-white text-2xl" /> */}
              Book a table
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
