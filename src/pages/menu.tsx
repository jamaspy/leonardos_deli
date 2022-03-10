import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/modules/menu.module.css"
import MenuList from "../components/Menu"

const Menu = () => {
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
