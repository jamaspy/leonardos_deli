import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Sweets = ({ menuData }) => {
  return (
    <div className="shadow flex-1 rounded-md m-2 md:mx-2 bg-oliveGreen p-4 text-center">
      <StaticImage src="../../images/cheese_2.png" width={100} alt="sweet" />
      <h1 className="text-center mb-4">Sweets</h1>

      {menuData &&
        menuData.map(sweet => (
          <div className="w-full flex justify-between flex-row mb-2 text-sm">
            <p className="text-left">{sweet.name}</p>
            <p>{sweet.price}</p>
          </div>
        ))}
    </div>
  )
}

export default Sweets
