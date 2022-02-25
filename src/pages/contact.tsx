import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MyMap from "../components/Contact/MyMap"
import { BsPhoneVibrate } from "react-icons/bs"
const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <MyMap lat={-33.63688594503681} lng={151.32926023619473} />
      <hr className="mt-12" />
      <h3 className="text-center mt-8">1 Simmonds Lane,</h3>
      <h3 className="text-center">Avalon Beach</h3>
      <h3 className="text-center"> NSW 2107</h3>

      <h3 className="text-center mt-4">0499 017 077</h3>

      <div className="mt-8 flex flex-col items-center justify-center">
        <p className="">Monday: Closed</p>
        <p className="">Tuesday: 11:00am - 7:00pm</p>
        <p className="">Wednesday: 11:00am - 7:00pm</p>
        <p className="">Thursday: 11:00am - 9:00pm</p>
        <p className="">Friday: 11:00am - 10:00pm</p>
        <p className="">Saturday: 10:00am - 10:00pm</p>
        <p className="">Sunday: 10:00am - 4:00pm</p>
      </div>
      <hr className="mt-8" />
    </Layout>
  )
}

export default Contact
