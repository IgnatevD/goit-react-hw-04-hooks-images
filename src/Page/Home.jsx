/** @format */

import React, { useEffect } from "react"
import ReactGA from "react-ga"
import Hero from "../Components/Home/Hero"
import AboutUs from "../Components/Home/AboutUs"
import OurPartners from "../Components/Home/OurPartners"
import VideoIframe from "../Components/Home/VideoIframe"
import InstagramWidget from "../Components/Home/InstagramWidget"

const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <>
      <Hero />
      <AboutUs />
      <VideoIframe />
      <InstagramWidget />
      <OurPartners />
    </>
  )
}

export default Home
