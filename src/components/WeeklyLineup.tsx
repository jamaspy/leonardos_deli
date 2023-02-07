import React from "react";

const WeeklyLineup = () => {
  const lineup = [
    {
      day: "Monday",
      action: "Happy hour 4:00 - 6:00",
    },
    {
      day: "Tuesday",
      action: "Happy hour 4:00 - 6:00",
    },
    {
      day: "Wednesday",
      action: "Closed",
    },
    {
      day: "Thursday",
      action: "Themed tasting night (eg Spanish, French, Italian)",
    },
    {
      day: "Friday",
      action: " Live Music",
    },
    {
      day: "Saturday",
      action: "Live Music, Happy hours 4-5pm and 9-10pm",
    },
    {
      day: "Sunday",
      action: "Lazy Sundays at Leo’s - money off selected cocktails and wines",
    },
  ];
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

      <div className="flex flex-col justify-between h-full mt-8 px-4">
        {lineup.map((day, index) => (
          <div key={index} className="flex flex-col md:flex-row mb-2">
            <p className="text-xl font-semibold">{day.day}: </p>
            <p className="md:ml-4 text-sm md:text-lg">{day.action}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyLineup;
