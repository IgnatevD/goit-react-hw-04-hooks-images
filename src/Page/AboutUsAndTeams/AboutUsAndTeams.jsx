/** @format */

import React, { useEffect } from "react"
import ReactGA from "react-ga"
import AboutUs from "../../Components/Home/AboutUs"
import Team from "../../Components/Home/Team"

import styles from "./AboutUsAndTeams.module.scss"

const AboutUsAndTeams = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <div className={styles.container}>
      <AboutUs />
      <Team />
    </div>
  )
}

export default AboutUsAndTeams
