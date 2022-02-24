import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Event from "./Event"
const WhatsOn = () => {
  const data = useStaticQuery(graphql`
    {
      whatson: allContentfulEvent {
        nodes {
          title
          date
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
    <div>
      <h1 className="mt-12 pl-2">What's On</h1>
      <div className="flex flex-col md:flex-row justify-between h-full mt-8 px-2">
        {whatsOnEvents &&
          whatsOnEvents.map(event => (
            <Event
              title={event.title}
              description={event.description}
              date={event.date}
              image={event.image}
            />
          ))}
      </div>
    </div>
  )
}

export default WhatsOn
