import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const RedWine = ({ menuData }) => {

const {lightReds, mediumReds, fullReds} = menuData
  return (
    <div className="shadow flex-1 text-center rounded-md mx-1 bg-oliveGreen p-4 mt-2 lg:mt-1 ">
      <div className="flex items-center justify-center">
        <StaticImage src="../../images/drinks_1.png" width={100} alt="Wine" />
      </div>
      <h1 className="text-center mb-4">Red Wine</h1>
        <p className="text-left underline font-bold mb-2">Light Reds</p>
      {menuData &&
        lightReds?.map(wine => (
          <div className="w-full flex justify-between flex-row mb-4">
            <div className="flex flex-col items-start justify-start">
              <p className="text-left md:text-base text-xs font-bold">{wine.name}</p>
              <div className="flex flex-row md:text-base text-xs">
                <p className="mr-2 md:text-base text-xs">{wine.region}</p>
                <p className="md:text-base text-xs">{wine.grape}</p>
              </div>
            </div>
            <p className="md:text-base text-xs">
              {wine.glass_price || "-"} | {wine.bottle_price || " "}
            </p>
          </div>
        ))}
        <p className="text-left underline font-bold mb-2">Medium Reds</p>
      {menuData &&
        mediumReds?.map(wine => (
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
        <p className="text-left underline font-bold mb-2">Full Reds</p>
        {menuData && menuData.fullReds &&
            fullReds?.map(wine => (
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
  )
}

export default RedWine
