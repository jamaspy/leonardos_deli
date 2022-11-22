import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
const Cheeses = ({ menuData }) => {
  const { whiteMould, washedRind, cherve, semiHardHard, fresh, blue } =
    menuData?.cheese
  const { pork, beef, venison, turkey } = menuData?.slicedMeats
  return (
    <div className="shadow flex-1 rounded-md m-2 md:mx-2 bg-offWhite p-4 ">
      <div className="flex items-center justify-center">
        <StaticImage src="../../images/cheese_1.png" width={100} alt="cheese" />
      </div>
      <div className="flex-1 px-4">
        <h1 className="text-center mb-4">Freshly sliced or cut to take home</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="">
            <p className="text-left mb-1 underline font-bold">
              Semi Hard / Hard
            </p>
            {semiHardHard &&
              semiHardHard.map(cheese => (
                <div className="w-full flex justify-between flex-col border-b md:border-0 mb-6 md:mb-2">
                  <p>{cheese.name}</p>
                  <p className="my-2 md:mt-0 text-xs hidden md:inline-block">
                    {cheese.description}
                  </p>
                </div>
              ))}
            <p className="text-left mb-1 underline font-bold mt-4">
              Washed Rind
            </p>
            {washedRind &&
              washedRind.map(cheese => (
                <div className="w-full flex justify-between flex-col border-b md:border-0 mb-6 md:mb-2">
                  <p>{cheese.name}</p>
                  <p className="my-2 md:mt-0 text-xs hidden md:inline-block">
                    {cheese.description}
                  </p>
                </div>
              ))}
          </div>
          <div className="">
            <p className="text-left mb-1 underline font-bold mt-4 md:mt-0">
              White Mould
            </p>
            {whiteMould &&
              whiteMould.map(cheese => (
                <div className="w-full flex justify-between flex-col border-b md:border-0 mb-6 md:mb-2">
                  <p>{cheese.name}</p>
                  <p className="my-2 md:mt-0 text-xs hidden md:inline-block">
                    {cheese.description}
                  </p>
                </div>
              ))}
            <p className="text-left mb-1 underline font-bold mt-4">Blue</p>
            {blue &&
              blue.map(cheese => (
                <div className="w-full flex justify-between flex-col border-b md:border-0 mb-6 md:mb-2">
                  <p>{cheese.name}</p>
                  <p className="my-2 md:mt-0 text-xs hidden md:inline-block">
                    {cheese.description}
                  </p>
                </div>
              ))}
            <p className="text-left mb-1 underline font-bold mt-4">Fresh</p>
            {fresh &&
              fresh.map(cheese => (
                <div className="w-full flex justify-between flex-col border-b md:border-0 mb-6 md:mb-2">
                  <p>{cheese.name}</p>
                  <p className="my-2 md:mt-0 text-xs hidden md:inline-block">
                    {cheese.description}
                  </p>
                </div>
              ))}
            <p className="text-left mb-1 underline font-bold mt-4">Cherve</p>
            {cherve &&
              cherve.map(cheese => (
                <div className="w-full flex justify-between flex-col border-b md:border-0 mb-6 md:mb-2">
                  <p>{cheese.name}</p>
                  <p className="my-2 md:mt-0 text-xs hidden md:inline-block">
                    {cheese.description}
                  </p>
                </div>
              ))}
          </div>
          <div className="">
            <p className="text-left mb-1 underline font-bold mt-4">Pork</p>
            {pork &&
              pork.map(p => (
                <div className="w-full flex justify-between md:flex-row flex-col border-b md:border-0 mb-6 md:mb-2">
                  <p>{p}</p>
                </div>
              ))}
          </div>
          <div className="">
            <p className="text-left mb-1 underline font-bold mt-4">Beef</p>
            {beef &&
              beef.map(p => (
                <div className="w-full flex justify-between md:flex-row flex-col border-b md:border-0 mb-6 md:mb-2">
                  <p>{p}</p>
                </div>
              ))}
            <p className="text-left mb-1 underline font-bold mt-4">Venison</p>
            {venison &&
              venison.map(p => (
                <div className="w-full flex justify-between md:flex-row flex-col border-b md:border-0 mb-6 md:mb-2">
                  <p>{p}</p>
                </div>
              ))}
            <p className="text-left mb-1 underline font-bold mt-4">Turkey</p>
            {turkey &&
              turkey.map(p => (
                <div className="w-full flex justify-between md:flex-row flex-col border-b md:border-0 mb-6 md:mb-2">
                  <p>{p}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cheeses
