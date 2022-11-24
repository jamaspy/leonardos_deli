import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const WhiteWine = ({ menuData }) => {
    const {crispWhite, richWhite} = menuData
  return (
    <div className="shadow flex-1 text-center rounded-md mx-1 bg-offWhite p-4 mt-2 lg:mt-1 lg:mr-2">
      <div className="flex items-center justify-center">
        <StaticImage src="../../images/drinks_1.png" width={100} alt="Wine" />
      </div>
      <h1 className="text-center mb-4">White Wine</h1>
        <p className="text-left underline font-bold mb-2">Crisp Whites</p>
      {crispWhite &&
        crispWhite.map(wine => (
          <div className="w-full flex justify-between flex-row mb-4">
            <div className="flex flex-col items-start justify-start">
              <p className="text-left md:text-base text-xs font-bold">{wine.name}</p>
              <div className="flex flex-row text-xs">
                <p className="mr-2 text-left md:text-base text-xs">{wine.grape}</p>
                <p className="text-left md:text-base text-xs">{wine.region}</p>
              </div>
            </div>
            <p className="text-xs md:text-base">
              {wine.glass_price || " "} | {wine.bottle_price || " "}
            </p>
          </div>
        ))}
        <p className="text-left underline font-bold mb-2">Richer Whites</p>
        {richWhite &&
            richWhite.map(wine => (
                <div className="w-full flex justify-between flex-row mb-4">
                    <div className="flex flex-col items-start justify-start">
                        <p className="text-left md:text-base text-xs font-bold">{wine.name}</p>
                        <div className="flex flex-row text-xs">
                            <p className="mr-2 md:text-base text-xs">{wine.grape}</p>
                            <p className="md:text-base text-xs">{wine.region}</p>
                        </div>
                    </div>
                    <p className="md:text-base text-xs">
                        {wine.glass_price || " "} | {wine.bottle_price || " "}
                    </p>
                </div>
            ))}
    </div>
  )
}

export default WhiteWine
