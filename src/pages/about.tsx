// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
const About = () => {
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
      <SEO title="About" />
      <div className="container px-4 lg:px-0">
        <div className="hidden md:block">
          <GatsbyImage image={heroData} alt={`leo store front`} />
        </div>
        <div className="block md:hidden">
          <GatsbyImage image={heroMobileData} alt={`leo store front`} />
        </div>
        <h1 className="mt-8">Welcome to Leonardo's</h1>
        <p className="mt-8">
          We are a take-away deli and dine-in bar with a menu from deli produce
          located in the heart of Avalon Beach. We have bench seating inside, in
          the courtyard and alfresco on Friday and Saturday with full table
          service. Dogs are welcome in the courtyard!
        </p>
        <h3 className="mt-8">Our Principles</h3>
        <ul>
          <li className="ml-2"> - Excellent and simple produce</li>
          <li className="ml-2"> - Trying new delightful things</li>
          <li className="ml-2"> - Making memories for our community</li>
          <li className="ml-2"> - Finding joy and being present</li>
        </ul>
      </div>
    </Layout>
  )
}

export default About
