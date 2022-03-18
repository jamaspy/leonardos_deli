import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const RoseNaturalWine = ({ menuData }) => {
  return (
    <div className="shadow flex-1 text-center rounded-md mx-1 bg-oliveGreen p-4 mt-2 lg:mb-2">
      <div className="flex items-center justify-center">
        <StaticImage src="../../images/drinks_2.png" width={100} alt="Wine" />
      </div>
      <h1 className="text-center mb-4">Rose &amp; Natural</h1>
      {menuData &&
        menuData.map(wine => (
          <div className="w-full flex justify-between flex-row mb-4">
            <div className="flex flex-col items-start justify-start">
              <p>{wine.name}</p>
              <div className="flex flex-row text-xs">
                <p className="mr-2">{wine.region}</p>
                <p>{wine.grape}</p>
              </div>
            </div>
            <p>
              {wine.glass_price || "-"} | {wine.bottle_price || " "}
            </p>
          </div>
        ))}
    </div>
  )
}

export default RoseNaturalWine
