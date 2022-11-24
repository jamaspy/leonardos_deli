import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Plates = ({ menuData }) => {
  return (
    <div className="shadow flex-1 text-center rounded-md mx-1 bg-offWhite p-4 mt-2 lg:mt-3">
      <StaticImage src="../../images/drinks_3.png" width={100} alt="cocktail" />
      <div className="flex flex-col md:flex-row  md:mr-8">
        <div className="flex-1">
          <h1 className="mb-3 text-center">Cocktails</h1>
          {menuData &&
            menuData.map(cocktail => (
              <div className="w-full flex justify-between flex-row mb-2">
                <div className="flex flex-col w-full items-start text-left">
                  <p className="md:text-base text-xs">{cocktail.name}</p>
                  <p className="text-xs">{cocktail.parts}</p>
                </div>
                <p className="ml-2 md:ml-0 md:text-base text-xs">{cocktail.glass_price}</p>
              </div>
            ))}
        </div>
      </div>
      <p className="text-left  mt-8">
        A large selection of Non Alcoholic Wines, Beers, Spirits and Soft Drinks
        are also available
      </p>
    </div>
  )
}

export default Plates
