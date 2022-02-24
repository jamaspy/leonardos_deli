import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/modules/menu.module.css"
const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      web: allFile(filter: { name: { eq: "mixed" } }) {
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
      menu: allContentfulFoodMenuMenuJsonNode {
        nodes {
          cheeses {
            name
            price
          }
          meats {
            price
            name
          }
          plates {
            name
            price
          }
          sides {
            name
            price
          }
          toasties_and_baguettes {
            name
            price
          }
        }
      }
    }
  `)
  const heroData = data.web.nodes[0].childImageSharp.gatsbyImageData
  const menuData = data.menu.nodes[0]
  return (
    <Layout>
      <SEO title="Menu" />

      <div className={styles.main_backgrond}>
        <div className="flex flex-col md:flex-row w-full text-centergi">
          <div className="shadow flex-1 rounded-md mx-1 bg-offWhite p-4">
            <div className="flex items-center justify-center">
              <StaticImage
                src="../images/cheese_1.png"
                width={100}
                alt="cheese"
              />
            </div>
            <h1 className="text-center">Cheese</h1>
            <p className="mb-3 text-xs text-center">per 150g</p>
            {menuData &&
              menuData.cheeses.map(cheese => (
                <div className="w-full flex justify-between flex-row">
                  <p>{cheese.name}</p>
                  <p>{cheese.price}</p>
                </div>
              ))}
          </div>

          <div className="shadow flex-1 rounded-md mx-2 bg-offWhite p-4 text-center">
            <StaticImage src="../images/meat_a.png" width={100} alt="cheese" />
            <h1 className="text-center">Meat</h1>
            <p className="mb-3 text-xs">per 100g</p>
            {menuData &&
              menuData.meats.map(meat => (
                <div className="w-full flex justify-between flex-row">
                  <p>{meat.name}</p>
                  <p>{meat.price}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="shadow flex-1 text-center rounded-md mx-1 bg-oliveGreen p-2 mt-4">
          <StaticImage src="../images/sides_a.png" width={100} alt="cheese" />
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-4">
              <h1 className="mb-3 text-center">Plates</h1>
              {menuData &&
                menuData.plates.map(plate => (
                  <div className="w-full flex justify-between flex-row">
                    <p>{plate.name}</p>
                    <p>{plate.price}</p>
                  </div>
                ))}
            </div>
            <div className="flex-1 p-4">
              <h1 className="mb-3 text-center">Toasties and Baguettes</h1>
              {menuData &&
                menuData.toasties_and_baguettes.map(plate => (
                  <div className="w-full flex justify-between flex-row">
                    <p>{plate.name}</p>
                    <p>{plate.price}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="shadow flex-1 text-center rounded-md mx-1 bg-offWhite p-2 mt-4">
          <StaticImage src="../images/drinks_2.png" width={100} alt="cheese" />
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-4">
              <h1 className="mb-3 text-center">White</h1>
              {menuData &&
                menuData.plates.map(plate => (
                  <div className="w-full flex justify-between flex-row">
                    <p>{plate.name}</p>
                    <p>{plate.price}</p>
                  </div>
                ))}
            </div>
            <div className="flex-1 p-4">
              <h1 className="mb-3 text-center">Red</h1>
              {menuData &&
                menuData.toasties_and_baguettes.map(plate => (
                  <div className="w-full flex justify-between flex-row">
                    <p>{plate.name}</p>
                    <p>{plate.price}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-4">
              <h1 className="mb-3 text-center">White</h1>
              {menuData &&
                menuData.plates.map(plate => (
                  <div className="w-full flex justify-between flex-row">
                    <p>{plate.name}</p>
                    <p>{plate.price}</p>
                  </div>
                ))}
            </div>
            <div className="flex-1 p-4">
              <h1 className="mb-3 text-center">Red</h1>
              {menuData &&
                menuData.toasties_and_baguettes.map(plate => (
                  <div className="w-full flex justify-between flex-row">
                    <p>{plate.name}</p>
                    <p>{plate.price}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Menu
