// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
const Catering = () => {
  const data = useStaticQuery(graphql`
    {
      web: allFile(filter: { name: { eq: "web_about" } }) {
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
      mobile: allFile(filter: { name: { eq: "mobile_about" } }) {
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
    }
  `)

  const heroData = data.web.nodes[0].childImageSharp.gatsbyImageData
  const heroMobileData = data.mobile.nodes[0].childImageSharp.gatsbyImageData

  return (
    <Layout>
      <Seo title="Catering" />
      <div className="container px-4 lg:px-0">
        <div className="hidden md:block">
          <GatsbyImage image={heroData} alt={`leo store front`} />
        </div>
        <div className="block md:hidden">
          <GatsbyImage image={heroMobileData} alt={`leo store front`} />
        </div>
        <h1 className="mt-8">Quality Catering</h1>
      </div>
    </Layout>
  )
}

export default Catering
