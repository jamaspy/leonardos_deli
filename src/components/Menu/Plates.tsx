import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Plates = ({ menuData }) => {
  return (
    <div className="shadow flex-1 text-center rounded-md mx-1 bg-oliveGreen p-4 mt-2">
      <StaticImage src="../../images/sides_3.png" width={100} alt="cheese" />

      <div className="flex flex-col md:flex-row  md:mr-8">
        <div className="flex-1">
          <h1 className="mb-3 text-center">Plates</h1>

          {menuData &&
            menuData.plates.map(plate => (
              <div className="w-full flex justify-between flex-row">
                <p>{plate.name}</p>
                <p>{plate.price}</p>
              </div>
            ))}
        </div>
        <div className="flex-1 mt-8 md:mt-0 md:ml-8">
          <h1 className="mb-3 text-center">Toasties and Baguettes</h1>
          {menuData &&
            menuData.toasties_and_baguettes.map(plate => (
              <div className="w-full flex justify-between flex-row">
                <p>{plate.name}</p>
                <p>{plate.price}</p>
              </div>
            ))}
        </div>
      </div>
      <h3 className="text-left mt-8">
        You are welcome to choose any combination of at and cheese from above.
      </h3>
      <p className="text-left mt-2 md:mt-0">
        All plates served with a choice of Coronations(pickles) or Piparras
        (pickled chillies)
      </p>
    </div>
  )
}

export default Plates
