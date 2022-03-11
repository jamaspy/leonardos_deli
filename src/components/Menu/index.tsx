import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Cheeses from "./Cheeses"
import Meats from "./Meats"
import Plates from "./Plates"
import Sides from "./Sides"
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
        <Cheeses menuData={foodMenuData.cheeses} />
        <Meats menuData={foodMenuData.meats} />
        <Sides menuData={foodMenuData.sides} />
      </div>
      <div className="">
        <Plates menuData={foodMenuData} />
      </div>
      <div className="flex flex-col md:flex-row w-full h-full">
        <Bubbly menuData={drinksMenuData.bubbles} />
        <WhiteWine menuData={drinksMenuData.white} />
      </div>
      <div className="flex flex-col md:flex-row w-full h-full">
        <RedWine menuData={drinksMenuData.red} />
        <RoseNaturalWine menuData={drinksMenuData.rose_and_natural} />
      </div>
      <Cocktails menuData={drinksMenuData} />

      <Button label="Make Booking" />
    </>
  )
}

export default Menu
