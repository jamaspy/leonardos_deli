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
    }
  `)
  const heroData = data.web.nodes[0].childImageSharp.gatsbyImageData
  return (
    <Layout>
      <SEO title="Menu" />

      <div className={styles.main_backgrond}>
        <div className="flex flex-col md:flex-row w-full text-center">
          <div className="shadow flex-1 rounded-md mx-1 bg-offWhite p-2">
            <StaticImage
              src="../images/cheese_1.png"
              width={100}
              alt="cheese"
            />
            <h3>Cheese</h3>
            <p>2 Cheese | $12.00</p>
            <p>3 Cheese | $12.00</p>
            <p>4 Cheese | $12.00</p>
          </div>

          <div className="shadow flex-1 rounded-md mx-2 bg-offWhite p-2 text-center">
            <StaticImage src="../images/meat_2.png" width={100} alt="cheese" />
            <h3>Meat</h3>
            <p>2 Meat | $12.00</p>
            <p>3 Meat | $12.00</p>
            <p>4 Meat | $12.00</p>
          </div>
        </div>
        <div className="shadow flex-1 text-center rounded-md mx-1 bg-offWhite p-2 mt-4">
          <StaticImage src="../images/drinks_3.png" width={100} alt="cheese" />
          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              {" "}
              <h3>Wine</h3>
              <p>Mr Wine Face | Spain | 2001 | $12:00</p>
              <p className="mt-2">Mrs Wine Face | France | 1999 | $12:00</p>
              <p className="mt-2">Ms Wine Face | Australia| 2020 | $12:00</p>
              <p className="mt-2">Mr Wine Face | Spain | 2001 | $12:00</p>
              <p className="mt-2">Mrs Wine Face | France | 1999 | $12:00</p>
              <p className="mt-2">Ms Wine Face | Australia| 2020 | $12:00</p>
            </div>
            <div className="flex-1">
              {" "}
              <h3>Cocktails</h3>
              <p>Blood & Salt | $12.00</p>
              <p className="text-xs">
                lots of very nice things that taste lovely
              </p>
              <p className="mt-2">Espresso Martini | $12.00</p>
              <p className="text-xs">
                lots of very nice things that taste lovely
              </p>
              <p className="mt-2">Long Island Ice Tea | $12.00</p>
              <p className="text-xs">
                lots of very nice things that taste lovely
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Menu
