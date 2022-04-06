import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import WhatsOnList from "../components/WhatsOn"
const WhatsOn = () => {
  return (
    <Layout>
      <Seo title="What's On" />
      <WhatsOnList />
    </Layout>
  )
}

export default WhatsOn
