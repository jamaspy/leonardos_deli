import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Event from "./Event"
const WhatsOn = () => {
  const data = useStaticQuery(graphql`
    {
      whatson: allContentfulEvent {
        nodes {
          title
          date
          freeTextDate
          description
          image {
            gatsbyImageData(
              quality: 100
              width: 300
              height: 300
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF]
              # layout: FULL_WIDTH
            )
          }
        }
      }
    }
  `)

  const whatsOnEvents = data.whatson.nodes

  return (
    <div className="w-full lg:mt-24 md:mt-12 mt-8">
      <div
        className="bg-oliveGreen py-4 ml-4 xl:ml-0"
        style={{
          width: "40%",
          clipPath: "polygon(0 0, 100% 0, 96% 100%, 0% 100%)",
        }}
      >
        <p className="pl-4 md:text-4xl uppercase ">What's On</p>
      </div>
      <p className="mt-4 mx-3">
        We’re so proud to be supporting live music; it’s so important for our
        souls and our local musicians. We always have music on Friday nights and
        some weeks on Thursdays, Saturdays or Sundays too. Our{" "}
        <a
          href="https://www.instagram.com/leonardosdeli/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Instagram{" "}
        </a>
        page is always up to date with the line-up for the week.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full mt-8 px-2">
        {whatsOnEvents &&
          whatsOnEvents.map(event => (
            <Event
              title={event.title}
              description={event.description}
              date={event.date}
              freeTextDate={event.freeTextDate}
              image={event.image}
            />
          ))}
      </div>
    </div>
  )
}

export default WhatsOn
