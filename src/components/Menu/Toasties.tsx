import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Toasties = ({ menuData }) => {
  return (
    <div className="shadow flex-1 rounded-md m-2 md:mx-2 bg-offWhite p-4 text-center">
      <StaticImage src="../../images/sides_3.png" width={100} alt="sweet" />
      <h1 className="text-center mb-4">Toasties and Baguettes</h1>

      {menuData &&
        menuData.map(toastie => (
          <div className="w-full flex justify-between flex-row mb-2">
            <p>{toastie.name}</p>
            <p>{toastie.price}</p>
          </div>
        ))}
    </div>
  )
}

export default Toasties
