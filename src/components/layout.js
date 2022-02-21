/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"
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
            //  margin: `0 auto`,
            // maxWidth: 960,
            // padding: `0 1.0875rem 1.45rem`,
          }
        }
      >
        <main className="container m-auto">{children}</main>
        <footer className="text-center  text-xs mt-12 pb-8 flex flex-col w-full">
          <div className="mb-4">
            <p>Mon: Closed</p>
            <div className="flex flex-row w-full items-center justify-center">
              <p className="mr-2">Tues/Weds: 11-7</p>
              <p className="mr-2">Thurs: 11-9</p>
            </div>
            <div className="flex flex-row w-full items-center justify-center">
              <p className="mr-2">Fri: 11-10</p>
              <p className="mr-2">Sat: 10-10</p>
              <p className="mr-2">Sun: 10-4</p>
            </div>
          </div>
          <div className="">
            {" "}
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> by{" "}
            <a href="https://www.dapperdesigner.com">dapper_designer</a>
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
