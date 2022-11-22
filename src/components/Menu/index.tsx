import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Button from "../Button"
import {foodMenu} from "../Menu/foodMenu"
import Bubbly from "./Bubbly"
import Cheeses from "./Cheeses"
import CheeseMeatPlates from "./CheesesMeatPlates"
import Cocktails from "./Cocktails"
import Plates from "./Plates"
import RedWine from "./RedWine"
import RoseNaturalWine from "./RoseNaturalWine"
import Salads from "./Salads"
import Sides from "./Sides"
import Sweets from "./Sweets"
import Toasties from "./Toasties"
import WhiteWine from "./WhiteWine"
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
      <div className="flex flex-col w-full h-full">
        <CheeseMeatPlates menuData={foodMenu.cheeseAndMeatPlates} />
      </div>
      <div className="">
        <Plates menuData={foodMenu?.plates} />
      </div>
      <div className="">
        <Salads menuData={foodMenu?.salads} />
      </div>
      <div className="flex flex-col md:flex-row w-full h-full">
        <Sides menuData={foodMenu?.snacks} />
        <Toasties menuData={foodMenuData.toasties_and_baguettes} />
        <Sweets menuData={foodMenu?.sweet} />
      </div>
      <div className="flex flex-col w-full h-full">
        <Cheeses menuData={foodMenu} />
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
