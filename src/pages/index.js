import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { FiChevronsRight } from "react-icons/fi"
import Button from "../components/Button"
import WhatsOn from "../components/WhatsOn"
import ProductBox from "../components/Home/ProductBox"
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

      <div className="container m-auto flex flex-col justify-center items-center md:justify-between md:flex-row w-full h-full px-2">
        <div className="flex-1 mr-2 bg-offWhite p-3 rounded-md shadow">
          <div className="border-2 border-black p-3 flex flex-col items-center">
            <StaticImage src="../images/cheese_1.png" width="100" />
            <h1 className="uppercase mb-6">Cheese</h1>
            <p>
              Consectetur veniam in culpa consectetur nostrud adipisicing Lorem
              enim laborum Lorem. Laborum sint velit aliqua laborum fugiat Lorem
              aliquip deserunt. Incididunt laborum eiusmod dolor tempor qui. Qui
              ut ipsum labore irure aute. In cillum elit fugiat enim eiusmod eu.
            </p>
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
      <div className="container m-auto flex flex-col justify-center items-center md:justify-between md:flex-row w-full h-full mt-12 px-2">
        <div className="hidden md:flex flex-1 ml-2 bg-slate-900 text-white text-center w-full">
          IMAGE
        </div>
        <div className="flex-1 ml-2 bg-offWhite p-3 rounded-md shadow">
          <div className="border-2 border-black p-3 flex flex-col items-center">
            <StaticImage src="../images/meat_a.png" width="100" />
            <h1 className="uppercase mb-6">Meat</h1>
            <p>
              Consectetur veniam in culpa consectetur nostrud adipisicing Lorem
              enim laborum Lorem. Laborum sint velit aliqua laborum fugiat Lorem
              aliquip deserunt. Incididunt laborum eiusmod dolor tempor qui. Qui
              ut ipsum labore irure aute. In cillum elit fugiat enim eiusmod eu.
            </p>
            <Link
              to="/menu"
              className="self-start flex flex-row items-center justify-center mt-6 text-gray-700 hover:text-jeans hover:cursor-pointer"
            >
              <h3 className="uppercase">See Menu</h3>
              <FiChevronsRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container m-auto flex flex-col justify-center items-center md:justify-between md:flex-row w-full h-full mt-12 px-2">
        <div className="flex-1 mr-2 bg-offWhite p-3 rounded-md shadow">
          <div className="border-2 border-black p-3 flex flex-col items-center">
            <StaticImage src="../images/drinks_1.png" width="100" />
            <h1 className="uppercase mb-6">Wine</h1>
            <p>
              Consectetur veniam in culpa consectetur nostrud adipisicing Lorem
              enim laborum Lorem. Laborum sint velit aliqua laborum fugiat Lorem
              aliquip deserunt. Incididunt laborum eiusmod dolor tempor qui. Qui
              ut ipsum labore irure aute. In cillum elit fugiat enim eiusmod eu.
            </p>
            <Link
              to="/menu"
              className="self-start flex flex-row items-center justify-center  mt-6 text-gray-700 hover:text-jeans hover:cursor-pointer"
            >
              <h3 className="uppercase">See Menu</h3>
              <FiChevronsRight className="ml-2" />
            </Link>
          </div>
        </div>
        <div className="flex-1 ml-2 bg-slate-900 hidden md:flex text-white">
          IMAGE
        </div>
      </div>
      <WhatsOn />
    </Layout>
  )
}
export default IndexPage
