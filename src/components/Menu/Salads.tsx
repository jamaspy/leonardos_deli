import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const Salads = ({ menuData }) => {
  return (
    <div className="shadow flex-1 rounded-md m-2 md:mx-2 bg-offWhite p-4 ">
      <div className="flex items-center justify-center">
        <StaticImage src="../../images/sides_a.png" width={100} alt="salad" />
      </div>
      <div className="flex-1 px-4">
        <h1 className="text-center mb-4">Salads</h1>
        {menuData &&
          menuData.map(salad => (
            <div className="w-full flex justify-between md:flex-row flex-col border-b md:border-0 mb-6 md:mb-2">
              <p>{salad.name}</p>
              <p className="my-2 md:mt-0 text-right">{salad.price}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Salads
