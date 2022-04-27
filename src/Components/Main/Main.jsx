/** @format */

import React, { lazy } from "react"
import Hero from "./Hero"

// import Team from './Team';
// import AboutUs from './AboutUs';
// import Program from './Program';
// import Achievements from './Achievements';
import styles from "./Main.module.scss"

const AboutUs = lazy(() =>
  import("./AboutUs" /* webpackChunkName: "AboutUs" */)
)

const Achievements = lazy(() =>
  import("./Achievements" /* webpackChunkName: "Achievements" */)
)

const Program = lazy(() =>
  import("./Program" /* webpackChunkName: "Program" */)
)

const Team = lazy(() => import("./Team" /* webpackChunkName: "Team" */))

const Main = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <AboutUs />
      <Achievements />
      <Program />
      <Team />
    </main>
  )
}

export default Main
