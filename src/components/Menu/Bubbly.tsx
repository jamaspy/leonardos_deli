import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const Bubbly = ({ menuData }) => {
    const {bubbles, rose} = menuData
  return (
    <div className="shadow flex-1 text-center rounded-md mx-1 bg-offWhite p-4 mt-2 lg:mr-2 lg:mb-2">
      <div className="flex items-center justify-center">
        <StaticImage src="../../images/drinks_2.png" width={100} alt="Wine" />
      </div>
      <h1 className="text-center mb-4">Bubbles</h1>
      {menuData &&
        bubbles.map(wine => (
          <div className="w-full flex justify-between flex-row mb-4">
            <div className="flex flex-col items-start justify-start">
              <p className="text-left md:text-base text-xs font-bold">{wine.name}</p>
              <div className="flex flex-row text-xs">
                <p className="mr-2 md:text-base text-xs">{wine.region}</p>
                <p className="md:text-base text-xs">{wine.grape}</p>
              </div>
            </div>
            <p className="md:text-base text-xs">
              {wine.glass_price || "-"} | {wine.bottle_price || " "}
            </p>
          </div>
        ))}
        <div className="">
            <h1 className="text-center mb-4">Rose</h1>
            {menuData &&
                rose.map(wine => (
                    <div className="w-full flex justify-between flex-row mb-4">
                        <div className="flex flex-col items-start justify-start">
                            <p className="text-left md:text-base text-xs font-bold">{wine.name}</p>
                            <div className="flex flex-row">
                                <p className="mr-2 md:text-base text-xs">{wine.region}</p>
                                <p className="md:text-base text-xs">{wine.grape}</p>
                            </div>
                        </div>
                        <p className="md:text-base text-xs">
                            {wine.glass_price || "-"} | {wine.bottle_price || " "}
                        </p>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default Bubbly
