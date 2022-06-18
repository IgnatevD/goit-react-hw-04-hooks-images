/** @format */

import React from "react"
import { Routes, Route } from "react-router-dom"
import Activities from "../../Page/Activities/Activities"
import Contacts from "../../Page/Contacts"
import Home from "../../Page/Home"
import OthersFunds from "../../Page/OthersFunds"
import AboutUs from "../Home/AboutUs"
import Program from "../Home/Program"
import Team from "../Home/Team"

import styles from "./Main.module.scss"

const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/others' element={<OthersFunds />} />
        <Route path='/team' element={<Team />} />
        <Route path='/program' element={<Program />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='*' element={<h2> Not found page</h2>} />
      </Routes>
    </main>
  )
}

export default Main
