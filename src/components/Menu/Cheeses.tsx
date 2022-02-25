import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const Cheeses = ({ menuData }) => {
  return (
    <div className="shadow flex-1 rounded-md m-2 md:mx-2 bg-offWhite p-4">
      <div className="flex items-center justify-center">
        <StaticImage src="../../images/cheese_1.png" width={100} alt="cheese" />
      </div>
      <h1 className="text-center">
        Cheese/<span className="text-sm">150g</span>
      </h1>
      {menuData &&
        menuData.map(cheese => (
          <div className="w-full flex justify-between flex-row">
            <p>{cheese.name}</p>
            <p>{cheese.price}</p>
          </div>
        ))}
    </div>
  )
}

export default Cheeses
