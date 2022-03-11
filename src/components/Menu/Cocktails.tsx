import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Plates = ({ menuData }) => {
  return (
    <div className="shadow flex-1 text-center rounded-md mx-1 bg-offWhite p-4 mt-2">
      <StaticImage src="../../images/drinks_3.png" width={100} alt="cocktail" />
      <div className="flex flex-col md:flex-row  md:mr-8">
        <div className="flex-1">
          <h1 className="mb-3 text-center">Cocktails</h1>
          {menuData &&
            menuData.cocktails.map(plate => (
              <div className="w-full flex justify-between flex-row">
                <p>{plate.name}</p>
                <p>{plate.glass_price}</p>
              </div>
            ))}
        </div>
        <div className="flex-1 mt-8 md:mt-0 md:ml-8">
          <h1 className="mb-3 text-center">Spirits</h1>
          {menuData &&
            menuData.spirits.map(plate => (
              <div className="w-full flex justify-between flex-row">
                <p>{plate.name}</p>
                <p>{plate.glass_price}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Plates
