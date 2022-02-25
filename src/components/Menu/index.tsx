import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Cheeses from "./Cheeses"
import Meats from "./Meats"
import Plates from "./Plates"
import Sides from "./Sides"
import Button from "../Button"
const Menu = () => {
  const data = useStaticQuery(graphql`
    {
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
  const menuData = data.menu.nodes[0]
  return (
    <>
      <div className="flex flex-col md:flex-row w-full h-full">
        <Cheeses menuData={menuData.cheeses} />
        <Meats menuData={menuData.meats} />
        <Sides menuData={menuData.sides} />
      </div>
      <div className="">
        <Plates menuData={menuData} />
      </div>
      <Button label="Make Booking" />
    </>
  )
}

export default Menu
