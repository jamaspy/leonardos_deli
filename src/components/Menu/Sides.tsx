import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const Sides = ({ menuData }) => {
  return (
    <div className="shadow flex-1 rounded-md m-2 md:mx-2 h-full bg-offWhite p-4">
      <div className="flex items-center justify-center">
        <StaticImage src="../../images/sides_2.png" width={100} alt="sides" />
      </div>
      <h1 className="text-center mb-4">Sides</h1>

      {menuData &&
        menuData.map(side => (
          <div className="w-full flex justify-between flex-row mb-2">
            <p>{side.name}</p>
            <p>{side.price}</p>
          </div>
        ))}
    </div>
  )
}

export default Sides
