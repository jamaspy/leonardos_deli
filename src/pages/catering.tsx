// Gatsby supports TypeScript natively!
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Catering = () => {
  const data = useStaticQuery(graphql`
    {
      web: allFile(filter: { name: { eq: "catering1" } }) {
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
      mobile: allFile(filter: { name: { eq: "cateringmobile" } }) {
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
        <h1 className="mt-8 mb-4">Beautiful catering from our deli</h1>
        <p>
          Yes, we cater and love doing it. Available for all sorts of events;
          private, corporate, and picnics. We can arrange beautiful pre-prepared
          platters or wrap-up produce for you to arrange yourself. We offer
          baguettes, our full deli range, and (with notice) soups, chilli and
          stews. Delivery or pick-up. Text us on 0430 175 155 to chat about your
          next work event or gathering. Text us on{" "}
          <span className="text-blue-500">0430 175 155</span> to chat about your
          next event or gathering.
        </p>
      </div>
    </Layout>
  )
}

export default Catering
