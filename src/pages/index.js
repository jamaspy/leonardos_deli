import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FiChevronsRight } from "react-icons/fi"
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
    }
  `)

  const heroData = data.web.nodes[0].childImageSharp.gatsbyImageData
  const heroMobileData = data.mobile.nodes[0].childImageSharp.gatsbyImageData
  console.log("🚀  TESTY:  : IndexPage : data", heroData)
  return (
    <Layout>
      <SEO title="Home" />
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
        <button className="uppercase flex items-center px-3 py-2 text-black border border-black rounded hover:text-white hover:border-jeans hover:bg-jeans m-auto mt-8">
          Make a booking
        </button>
      </div>
      <div className="container m-auto flex flex-col justify-center items-center md:justify-between md:flex-row w-full h-full">
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
            <div className="self-start flex flex-row items-center justify-center mt-6 hover:text-jeans hover:cursor-pointer">
              <h3 className="uppercase">See Menu</h3>
              <FiChevronsRight className="ml-2" />
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-1 ml-2 bg-slate-900 text-white text-center w-full">
          IMAGE
        </div>
      </div>
      <div className="container m-auto  flex flex-col justify-between md:flex-row w-full mt-12">
        <div className="flex-1 mr-2 bg-slate-900 hidden md:flex text-white">
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
            <div className="self-start flex flex-row items-center justify-center mt-6 hover:text-jeans hover:cursor-pointer">
              <h3 className="uppercase">See Menu</h3>
              <FiChevronsRight className="ml-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="container m-auto  flex flex-col justify-between md:flex-row w-full mt-12">
        <div className="flex-1 mr-2 bg-offWhite p-3 rounded-md shadow">
          <div className="border-2 border-black p-3 flex flex-col items-center">
            <StaticImage src="../images/drinks_1.png" width="100" />
            <h1 className="uppercase mb-6">Wine</h1>
            <p>
              Commodo ex et exercitation sunt et aute adipisicing est
              reprehenderit nostrud sunt. Cupidatat aliqua dolor nulla
              adipisicing sit excepteur anim non. Quis dolor aliqua irure magna.
              Sunt consectetur veniam labore ad veniam ullamco elit ad occaecat
              qui voluptate adipisicing nulla. Sit consectetur do laborum aliqua
              aliquip. Excepteur magna deserunt irure aliquip anim in do
              voluptate laborum. Duis nostrud est commodo in cillum laborum anim
              ex laborum. Fugiat pariatur nisi do sint in anim mollit veniam sit
              ut.
            </p>
            <div className="self-start flex flex-row items-center justify-center  mt-6 hover:text-jeans hover:cursor-pointer">
              <h3 className="uppercase">See Menu</h3>
              <FiChevronsRight className="ml-2" />
            </div>
          </div>
        </div>
        <div className="flex-1 ml-2 bg-slate-900 hidden md:flex text-white">
          IMAGE
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
