import React from "react"

const WeeklyLineup = () => {
  const lineup = [
    {
      day: "Monday",
      action: "Closed",
    },
    {
      day: "Tuesday",
      action: "Welcome Week Happy Hour 4:00pm - 5:00pm",
    },
    {
      day: "Wednesday",
      action: "Try New Cheese: Free cheese one us with every plate",
    },
    {
      day: "Thursday",
      action: "Themed Night (eg Spanish, French, Italian)",
    },
    {
      day: "Friday",
      action: " Live Music: 6:30pm to late",
    },
    {
      day: "Saturday",
      action: "Happy Hour 4:00pm - 6:00pm",
    },
    {
      day: "Sunday",
      action:
        "Sinatra Sundays: Cold Brew, Sinatra playing and our perfect Bloody Marys)",
    },
  ]
  return (
    <div className="w-full lg:mt-24 md:mt-12 mt-8">
      <div
        className="bg-oliveGreen py-4 ml-4 xl:ml-0"
        style={{
          width: "40%",
          clipPath: "polygon(0 0, 100% 0, 96% 100%, 0% 100%)",
        }}
      >
        <p className="pl-4 md:text-4xl uppercase ">Weekly Line Up</p>
      </div>

      <div className="flex flex-col justify-between h-full mt-8 px-2">
        {lineup.map((day, index) => (
          <div className="flex flex-col md:flex-row mb-2">
            <p className="text-xl font-semibold">{day.day}: </p>
            <p className="md:ml-4 text-sm md:text-lg">{day.action}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeeklyLineup
