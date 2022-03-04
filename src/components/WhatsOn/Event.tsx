import React from "react"
import { formatDate } from "../../utils/dateFormatter"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import Button from "../Button"
interface IProps {
  title: string
  description: string
  date: string
  freeTextDate: string
  image: IGatsbyImageData
}

const Event = ({ title, description, date, freeTextDate, image }: IProps) => {
  const eventImage = image.gatsbyImageData

  return (
    <div
      className="flex-1 flex flex-col justify-between p-3 rounded shadow-md border mx-auto md:mx-2 my-4 md:my-0 "
      style={{ maxWidth: 320 }}
    >
      <div
        className="mx-auto overflow-hidden shadow"
        style={{ minHeight: "33%" }}
      >
        <GatsbyImage image={eventImage} alt={`event image`} />
      </div>

      <div className="flex flex-col justify-between h-full">
        <div className="">
          <h3 className="mt-6">{title}</h3>
          <p className="mt-2">
            {date !== null ? formatDate(date) : freeTextDate}
          </p>
        </div>
        <div className="h-full">
          <p className="text-sm mt-4">{description}</p>
        </div>
        <div className="">
          <Button label="Make Booking" />
        </div>
      </div>
    </div>
  )
}

export default Event
