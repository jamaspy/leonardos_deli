import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CheeseMeatPlates from "./CheesesMeatPlates"
import Sweets from "./Sweets"
import Plates from "./Plates"
import Sides from "./Sides"
import Salads from "./Salads"
import Toasties from "./Toasties"
import Bubbly from "./Bubbly"
import Cocktails from "./Cocktails"
import RedWine from "./RedWine"
import WhiteWine from "./WhiteWine"
import RoseNaturalWine from "./RoseNaturalWine"
import Button from "../Button"
const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      foodmenu: allContentfulFoodMenuMenuJsonNode {
        nodes {
          cheesemeatplates {
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
          sweet {
            name
            price
          }
          salads {
            name
            price
          }
          toasties_and_baguettes {
            name
            price
          }
        }
      }
      drinksmenu: allContentfulDrinksMenuDrinksMenuJsonNode {
        edges {
          node {
            bubbles {
              bottle_price
              glass_price
              grape
              name
              region
            }
            cocktails {
              glass_price
              name
              parts
            }
            red {
              bottle_price
              glass_price
              grape
              name
              region
            }
            rose_and_natural {
              bottle_price
              glass_price
              grape
              name
              region
            }
            spirits {
              glass_price
              name
            }
            white {
              bottle_price
              glass_price
              grape
              name
              region
            }
          }
        }
      }
    }
  `)
  const foodMenuData = data.foodmenu.nodes[0]

  const drinksMenuData = data.drinksmenu.edges[0].node

  return (
    <>
      <div className="flex flex-col md:flex-row w-full h-full">
        <CheeseMeatPlates menuData={foodMenuData.cheesemeatplates} />
      </div>
      <div className="">
        <Plates menuData={foodMenuData} />
      </div>
      <div className="">
        <Salads menuData={foodMenuData.salads} />
      </div>
      <div className="flex flex-col md:flex-row w-full h-full">
        <Sides menuData={foodMenuData.sides} />
        <Toasties menuData={foodMenuData.toasties_and_baguettes} />
        <Sweets menuData={foodMenuData.sweet} />
      </div>
      <div className="h-8"></div>
      <div className="flex flex-col md:flex-row w-full h-full">
        <Bubbly menuData={drinksMenuData.bubbles} />
        <RoseNaturalWine menuData={drinksMenuData.rose_and_natural} />
      </div>
      <div className="flex flex-col md:flex-row w-full h-full">
        <WhiteWine menuData={drinksMenuData.white} />
        <RedWine menuData={drinksMenuData.red} />
      </div>
      <Cocktails menuData={drinksMenuData.cocktails} />

      <Button label="Make Booking" />
    </>
  )
}

export default Menu
