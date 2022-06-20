/** @format */

import React from "react"
import { Routes, Route } from "react-router-dom"
import Activities from "../../Page/Activities/Activities"
import Contacts from "../../Page/Contacts"
import Home from "../../Page/Home"
import OthersFunds from "../../Page/OthersFunds"
import AboutUsAndTeams from "../../Page/AboutUsAndTeams"

import Team from "../Home/Team"

import styles from "./Main.module.scss"
import Projects from "../../Page/Projects"

const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUsAndTeams />} />
        <Route path='/others' element={<OthersFunds />} />
        <Route path='/repoting' element={<Team />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='*' element={<h2> Not found page</h2>} />
      </Routes>
    </main>
  )
}

export default Main
