import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Button from "../components/Button"
import ProductsRows from "../components/Home/ProductsRows"
import Layout from "../components/layout"
import Seo from "../components/seo"
import WeeklyLineup from "../components/WeeklyLineup"

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
      deli: allFile(filter: { name: { eq: "lozpour" } }) {
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
      shelf: allFile(filter: { name: { eq: "shelves" } }) {
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
      bar: allFile(filter: { name: { eq: "mitchpour2" } }) {
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

  const heroData = data?.web.nodes[0].childImageSharp.gatsbyImageData
  const heroMobileData = data?.mobile.nodes[0].childImageSharp.gatsbyImageData
  const meatDeliImage = data?.deli.nodes[0].childImageSharp.gatsbyImageData
  const shelfImage = data?.shelf.nodes[0].childImageSharp.gatsbyImageData
  const barImage = data?.bar.nodes[0].childImageSharp.gatsbyImageData
  const meatImage = data?.meat.nodes[0].childImageSharp.gatsbyImageData
  const cheeseImage = data?.cheese.nodes[0].childImageSharp.gatsbyImageData
  const wineImage = data?.wine.nodes[0].childImageSharp.gatsbyImageData

  const renderImage = image => {
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
    <Layout>
      <Seo title="Home" />
      <div className="hidden md:block">
        <GatsbyImage image={heroData} alt={`leo store front`} />
      </div>
      <div className="block md:hidden">
        <GatsbyImage image={heroMobileData} alt={`leo store front`} />
      </div>
      <div className="text-center my-8 px-4 md:px-24 xl:px-0">
        <h1 className="uppercase font-black text-2xl md:text-4xl text-center mb-6 md:mb-2">
          a new deli and bar in avalon beach
        </h1>
        <p className="uppercase mx-12">
          Open now for dine-in, delivery and pick-up
        </p>
        <Button label="Make Booking" />
      </div>

      {/* MOBILE PRODUCT LISTING START */}
      <div className="block md:hidden">
        <ProductsRows />
      </div>
      {/* MOBILE PRODUCT LISTING END */}

      {/* TABLET+ PRODUCT LISTING START */}
      <div className="hidden md:block md:px-4 lg:px-0 ">
        <div className="bg-offWhite flex flex-row w-full mt-8 shadow-md">
          <div
            className="grid"
            style={{
              width: "60%",
              clipPath: "polygon(0 0, 80% 0, 100% 100%, 0% 100%)",
            }}
          >
            <GatsbyImage
              image={shelfImage}
              alt={`leo store front`}
              style={{
                gridArea: "1/1",
              }}
              layout="fullWidth"
            />
          </div>
          <div className="flex-1  w-full text-center flex items-center flex-col justify-center px-4">
            <div className="xl:w-40 xl:h-40 md:w-24 md:h-24">
              {renderImage("cheese")}
            </div>
            <h1 className="uppercase lg:mb-3">Cheese</h1>
            <p className="text-xs lg:text-base pb-2">
              Bitey blues, stinky washed rind to nutty and delicious hard
              cheeses. There’s goat, sheep and cows milk to suit every taste; an
              everchanging selection of over 30 local and international cheeses
              from the best producers. We balance our menu between what you
              expect (parmigiano, cheddar, brie, comte) and what will surprise
              you (cashel blue from Ireland, American rogue river blue, Dutch
              wyngaard semi-hard goat, espresso rubbed Wisconsin cheddar)?.
            </p>
          </div>
        </div>
        <div className="bg-oliveGreen flex flex-row w-full mt-12 shadow-md">
          <div className="flex-1  w-full text-center flex items-center flex-col justify-center px-4">
            <div className="xl:w-40 xl:h-40 md:w-24 md:h-24">
              {renderImage("meat")}
            </div>
            <h1 className="uppercase lg:mb-3">Meat</h1>
            <p className="text-xs lg:text-base pb-2">
              World-class meats (turkey, pork, venison and beef) from a select
              group of local and international producers. Everything from
              mortadella and salamis to wagyu bresaola, prosciutto and iberico.
              Light, subtle, strong and spicy flavours are all found here. Our
              vintage meat slicer is worth the trip, everything is cut fresh.
            </p>
          </div>

          <div
            className=""
            style={{
              width: "60%",
              clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <div className="hidden md:block">
              <GatsbyImage
                image={meatDeliImage}
                alt={`leo store front`}
                style={{
                  gridArea: "1/1",
                }}
                layout="fullWidth"
              />
            </div>
          </div>
        </div>
        <div className="bg-offWhite flex flex-row w-full mt-12 shadow-md">
          <div
            className="grid"
            style={{
              width: "60%",
              clipPath: "polygon(0 0, 80% 0, 100% 100%, 0% 100%)",
            }}
          >
            <GatsbyImage
              image={barImage}
              alt={`leo store front`}
              style={{
                gridArea: "1/1",
              }}
              layout="fullWidth"
            />
          </div>
          <div className="flex-1  w-full text-center flex items-center flex-col justify-center px-2">
            <div className="xl:w-40 xl:h-40 md:w-24 md:h-24">
              {renderImage("wine")}
            </div>
            <h1 className="uppercase lg:mb-3">Drinks</h1>
            <p className="text-xs lg:text-base pb-2">
              Classic cocktails include our signature olive brine and cold brew
              (coffee) martini. Our wine list changes with seasons to reflect
              the best local and international producers. We currently stock
              over 30 wines across rose, white, red and skin contact. Something
              for everyone across taste and budget, beers too - pale ales,
              lagers and a unique guest beer each week. Our non-alcoholic range
              is curated and delicious.
            </p>
          </div>
        </div>
        <Button label="Make Booking" />
      </div>
      {/* TABLET+ PRODUCT LISTING ENDS */}

      <WeeklyLineup />
    </Layout>
  )
}
export default IndexPage
