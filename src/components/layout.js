/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        className="flex flex-col justify-between"
        style={
          {
            // margin: `0 auto`,
            // maxWidth: 960,
            // padding: `0 1.0875rem 1.45rem`,
          }
        }
      >
        <main className="container m-auto">{children}</main>
        <footer className="text-center text-xs mt-12 pb-8 flex flex-col w-full">
          <div className="mb-4">
            <div className="flex flex-col w-full items-center justify-center">
              <p className="mr-2">Mon/Tues: 4-Late</p>
              <p className="mr-2">Wed: Closed</p>
              <p className="mr-2 block">Thurs/Fri: 12-Late</p>

              <p className="mr-2">Sat: 11-Late</p>
              <p className="mr-2">Sun: 4-Late</p>
            </div>
          </div>
          <div className="">
            {" "}
            © {new Date().getFullYear()}, Built by{" "}
            <a href="https://www.disi.au/" target="_blank" rel="noreferrer">
              desi digital
            </a>
          </div>
          <div className="flex flex-row items-center justify-center mt-3 text-lg">
            <FiInstagram className="mr-2" /> <FiFacebook className="mr-2" />
            <FiTwitter className="mr-2" /> <FiYoutube className="mr-2" />
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
