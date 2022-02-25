// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>Welcome to Leonardo's</h1>
    <p className="mt-8">
      We are a take-away deli and dine-in bar with a menu from deli produce
      located in the heart of Avalon Beach. We have bench seating inside, in the
      courtyard and alfresco on Friday and Saturday with full table service.
      Dogs are welcome in the courtyard!
    </p>
    <h3 className="mt-8">Our Principles</h3>
    <ul>
      <li className="ml-2"> - Excellent and simple produce</li>
      <li className="ml-2"> - Trying new delightful things</li>
      <li className="ml-2"> - Making memories for our community</li>
      <li className="ml-2"> - Finding joy and being present</li>
    </ul>
  </Layout>
)

export default SecondPage
