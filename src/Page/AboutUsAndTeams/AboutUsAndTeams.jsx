/** @format */

import React from "react"
import AboutUs from "../../Components/Home/AboutUs"
import Team from "../../Components/Home/Team"

import styles from "./AboutUsAndTeams.module.scss"

const AboutUsAndTeams = () => {
  return (
    <div className={styles.container}>
      <AboutUs />
      <Team />
    </div>
  )
}

export default AboutUsAndTeams
