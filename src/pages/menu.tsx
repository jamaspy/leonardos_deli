import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/modules/menu.module.css"
import MenuList from "../components/Menu"

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
  console.log("🚀  TESTY:  : Menu : menuData", menuData)
  return (
    <Layout>
      <SEO title="Menu" />

      <div className={styles.main_backgrond}>
        <MenuList />
      </div>
    </Layout>
  )
}

export default Menu
