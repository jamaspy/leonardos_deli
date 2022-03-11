import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const WhiteWine = ({ menuData }) => {
  return (
    <div className="shadow flex-1 text-center rounded-md mx-1 bg-offWhite p-4 mt-2">
      <div className="flex items-center justify-center">
        <StaticImage src="../../images/drinks_1.png" width={100} alt="Wine" />
      </div>
      <h1 className="text-center">White Wine</h1>
      {menuData &&
        menuData.map(wine => (
          <div className="w-full flex justify-between flex-row">
            <div className="flex flex-col items-start justify-start">
              <p>{wine.name}</p>
              <div className="flex flex-row text-xs">
                <p className="mr-2">{wine.region}</p>
                <p>{wine.grape}</p>
              </div>
            </div>
            <p>
              {wine.glass_price || " "} | {wine.bottle_price || " "}
            </p>
          </div>
        ))}
    </div>
  )
}

export default WhiteWine
