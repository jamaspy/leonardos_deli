import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import Button from "../components/Button"
import WhatsOn from "../components/WhatsOn"
import ProductsRows from "../components/Home/ProductsRows"
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      web: allFile(filter: { name: { eq: "hero" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              quality: 100
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
            )
          }
        }
      }
      mobile: allFile(filter: { name: { eq: "hero_mobile_2" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              quality: 100
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
            )
          }
        }
      }
      whatson: allContentfulEvent {
        nodes {
          title
          date
          description
          image {
            gatsbyImageData(
              quality: 100
              width: 300
              height: 300
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF]
              # layout: FULL_WIDTH
            )
          }
        }
      }
    }
  `)

  const heroData = data.web.nodes[0].childImageSharp.gatsbyImageData
  const heroMobileData = data.mobile.nodes[0].childImageSharp.gatsbyImageData

  return (
    <Layout>
      <Seo title="Home" />
      <div className="hidden md:block">
        <GatsbyImage image={heroData} alt={`leo store front`} />
      </div>
      <div className="block md:hidden">
        <GatsbyImage image={heroMobileData} alt={`leo store front`} />
      </div>
      <div className="text-center my-8">
        <h1 className="uppercase font-black text-2xl text-center mb-6 md:mb-2">
          a new deli and bar in avalon beach
        </h1>
        <p className="uppercase mx-12">
          Open now for dine-in, delivery and pick-up
        </p>
        <Button label="Make Booking" />
      </div>
      <ProductsRows />
      <WhatsOn />
    </Layout>
  )
}
export default IndexPage
