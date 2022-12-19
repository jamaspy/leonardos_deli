// Gatsby supports TypeScript natively!
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      web: allFile(filter: { name: { eq: "web_about" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              quality: 100
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
            )
          }
        }
      }
      mobile: allFile(filter: { name: { eq: "mobile_about" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              quality: 100
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  `)

  const heroData = data.web.nodes[0].childImageSharp.gatsbyImageData
  const heroMobileData = data.mobile.nodes[0].childImageSharp.gatsbyImageData

  return (
    <Layout>
      <Seo title="About" />
      <div className="container px-4 lg:px-0">
        <div className="hidden md:block">
          <GatsbyImage image={heroData} alt={`leo store front`} />
        </div>
        <div className="block md:hidden">
          <GatsbyImage image={heroMobileData} alt={`leo store front`} />
        </div>
        <h1 className="mt-8">Welcome to Leonardo's</h1>
        <p className="mt-8">
          We are a take-away deli and dine-in bar in the heart of Avalon Beach,
          NSW. Leonardo’s is our (Michelle Gilmore and Nicolas Chamberlain)
          first venue. We have indoor and outdoor space; outdoor spaces are
          heated and covered.
        </p>
        <p className="mt-8">
          We built our deli around the desire to serve beautiful yet simple
          produce in a warm, relaxed, and joy-filled space. We wanted to
          surprise people with unique tastes and be a place without pretense, a
          place to have real conversations whilst eating real food and tasty
          drinks. A place to be present, to make memories, and new friends.
        </p>
        <p className="mt-8">
          We serve hot food, delicious salads as well as charcuterie, terrines,
          patés, cheese, and a range of olives, dips, pickles, etc for use at
          home (they also make great gifts!). We are fully licensed and have an
          excellent non-alcoholic list too
        </p>
        <p className="mt-8">
          Kids and dogs are welcome, our kids’ menu is tasty and fresh and not
          all beige in colour. We have easy wheelchair access and a ground-floor
          bathroom, we can cater to all sorts of dietary requirements and always
          try to meet reasonable requests. We sell digital or physical gift
          cards too. Email us
          <a href="mailto:hello@leonardosdeli.com.au">
            {" "}
            hello@leonardosdeli.com.au
          </a>
          to order a gift card.
        </p>
        <p className="mt-8">
          Our venue is available for private function hire; we host occasions;
          birthdays, special/private events, and Christmas parties.
        </p>
        <h3 className="mt-8 mb-4">Bookings</h3>
        <p className="mb-4">
          We recommend booking Friday and Saturday nights if you want a
          guaranteed spot. We take a $30/person deposit for bookings of four or
          more. If you cancel or change number of people within 24 hours of
          booking date we use this to cover our costs.{" "}
        </p>
        <p>
          <span className="font-bold">Text: </span>+61 430 175 155{" "}
        </p>
        <p>
          <span className="font-bold">Email: </span>
          <a href="mailto:hello@leonardosdeli.com.au">
            {" "}
            hello@leonardosdeli.com.au
          </a>
        </p>
        <p>
          <span className="font-bold">Online: </span>
          <a
            href="https://www.thefork.com.au/restaurant/leonardo-s-r714169"
            target="_blank"
            rel="noreferrer noopener"
          >
            The Fork
          </a>
        </p>
      </div>
    </Layout>
  )
}

export default About
