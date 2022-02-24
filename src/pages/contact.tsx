import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MyMap from "../components/Contact/MyMap"
const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <MyMap lat={-33.63688594503681} lng={151.32926023619473} />
    </Layout>
  )
}

export default Contact
