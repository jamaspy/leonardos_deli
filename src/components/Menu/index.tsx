import React from "react"
import Button from "../Button"
import {foodMenu} from "./foodMenu"
import {drinksMenu} from "./drinksMenu";
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
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <CheeseMeatPlates menuData={foodMenu?.cheeseAndMeatPlates} />
      </div>
      <div className="">
        <Plates menuData={foodMenu?.plates} />
      </div>
      <div className="">
        <Salads menuData={foodMenu?.salads} />
      </div>
      <div className="flex flex-col md:flex-row w-full h-full">
        <Sides menuData={foodMenu?.snacks} />
        <Toasties menuData={foodMenu?.soupsBowlsSandwiches} />
        <Sweets menuData={foodMenu?.sweet} />
      </div>
      <div className="flex flex-col w-full h-full">
        <Cheeses menuData={foodMenu} />
      </div>
      <div className="h-8"></div>
      <div className="flex flex-col md:flex-row w-full h-full">
        <Bubbly menuData={drinksMenu} />
        <RoseNaturalWine menuData={drinksMenu} />
      </div>
      <div className="flex flex-col md:flex-row w-full h-full">
        <WhiteWine menuData={drinksMenu} />
        <RedWine menuData={drinksMenu} />
      </div>
      <Cocktails menuData={drinksMenu.cocktails} />

      <Button label="Make Booking" />
    </>
  )
}

export default Menu
