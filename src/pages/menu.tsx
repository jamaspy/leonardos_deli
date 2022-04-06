import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/modules/menu.module.css"
import MenuList from "../components/Menu"

const Menu = () => {
  return (
    <Layout>
      <Seo title="Menu" />
      <div className={styles.main_backgrond}>
        <MenuList />
      </div>
    </Layout>
  )
}

export default Menu
