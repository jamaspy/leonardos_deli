import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Meats = ({ menuData }) => {
  return (
    <div className="shadow flex-1 rounded-md m-2 md:mx-2 bg-offWhite p-4 text-center">
      <StaticImage src="../../images/meat_a.png" width={100} alt="cheese" />
      <h1 className="text-center">
        Meat/<span className="text-sm">100g</span>
      </h1>

      {menuData &&
        menuData.map(meat => (
          <div className="w-full flex justify-between flex-row">
            <p>{meat.name}</p>
            <p>{meat.price}</p>
          </div>
        ))}
    </div>
  )
}

export default Meats
