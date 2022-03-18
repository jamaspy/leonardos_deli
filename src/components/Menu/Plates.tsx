import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Plates = ({ menuData }) => {
  return (
    <div className="shadow flex-1 text-center rounded-md mx-1 bg-oliveGreen p-4 mt-2">
      <StaticImage src="../../images/meat_a.png" width={100} alt="bread" />
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 px-4">
          <h1 className="mb-4 text-center">Plates</h1>
          {menuData &&
            menuData.plates.map(plate => (
              <div className="w-full flex justify-between md:flex-row flex-col border-b md:border-0 mb-6 md:mb-2">
                <p className="text-left">{plate.name}</p>
                <p className="my-2 md:mt-0 text-right">{plate.price}</p>
              </div>
            ))}
          <p className="text-left mt-2 md:mt-8 text-xs">
            All plates served with a choice of Coronations (pickles) or Piparras
            (pickled chillies)
          </p>
        </div>
      </div>
    </div>
  )
}

export default Plates
