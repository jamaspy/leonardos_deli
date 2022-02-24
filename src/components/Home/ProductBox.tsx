import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"
import { FiChevronsRight } from "react-icons/fi"
import { Link } from "gatsby"

const ProductBox = ({ title, description, image }) => {
  const data = useStaticQuery(graphql`
    {
      meat: allFile(filter: { name: { eq: "meat_a" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              quality: 100
              width: 100

              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
            )
          }
        }
      }
      cheese: allFile(filter: { name: { eq: "cheese_1" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              quality: 100
              width: 100

              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
            )
          }
        }
      }
      wine: allFile(filter: { name: { eq: "drinks_1" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              quality: 100
              width: 100
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  `)
  const meatImage = data.meat.nodes[0].childImageSharp.gatsbyImageData
  const cheeseImage = data.cheese.nodes[0].childImageSharp.gatsbyImageData
  const wineImage = data.wine.nodes[0].childImageSharp.gatsbyImageData

  const renderImage = () => {
    switch (image) {
      case "meat":
        return <GatsbyImage image={meatImage} alt="meat" />
      case "cheese":
        return <GatsbyImage image={cheeseImage} alt="cheese" />
      case "wine":
        return <GatsbyImage image={wineImage} alt="wine" />
      default:
        return null
    }
  }
  return (
    <div className="container m-auto flex flex-col justify-center items-center md:justify-between md:flex-row w-full h-full px-2">
      <div className="flex-1 ml-2 bg-offWhite p-3 rounded-md shadow">
        <div className="border-2 border-black p-3 flex flex-col items-center">
          <div className="w-24 h-24">{renderImage()}</div>

          <h1 className="uppercase mb-6">{title}</h1>
          <p>{description}</p>
          <Link
            to="/menu"
            className="self-start flex flex-row items-center justify-center mt-6 text-gray-700 hover:text-jeans hover:cursor-pointer"
          >
            <h3 className="uppercase">See Menu</h3>
            <FiChevronsRight className="ml-2" />
          </Link>
        </div>
      </div>
      <div className="hidden md:flex flex-1 ml-2 bg-slate-900 text-white text-center w-full">
        IMAGE
      </div>
    </div>
  )
}

export default ProductBox
