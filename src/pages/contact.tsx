import React from "react"
import { BsPhoneVibrate } from "react-icons/bs"
import MyMap from "../components/Contact/MyMap"
import Layout from "../components/layout"
import Seo from "../components/seo"
const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <MyMap lat={-33.63688594503681} lng={151.32926023619473} />
      <hr className="mt-12" />
      <h3 className="text-center mt-8">1 Simmonds Lane,</h3>
      <h3 className="text-center">Avalon Beach</h3>
      <h3 className="text-center"> NSW 2107</h3>

      <h3 className="text-center mt-4">0499 017 077</h3>

      <div className="mt-8 flex flex-col items-center justify-center">
        <p className="">Monday: 4:00pm - Late</p>
        <p className="">Tuesday: 4:00pm - Late</p>
        <p className="">Wednesday: CLOSED</p>
        <p className="">Thursday: 12:00pm - Late</p>
        <p className="">Friday: 12:00pm - Late</p>
        <p className="">Saturday: 11:00am - Late</p>
        <p className="">Sunday: 4:00pm - Late</p>
      </div>
      <hr className="mt-8" />
    </Layout>
  )
}

export default Contact
