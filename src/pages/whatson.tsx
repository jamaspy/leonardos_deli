import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WhatsOnList from "../components/WhatsOn"
const WhatsOn = () => {
  return (
    <Layout>
      <SEO title="What's On" />
      <WhatsOnList />
    </Layout>
  )
}

export default WhatsOn
