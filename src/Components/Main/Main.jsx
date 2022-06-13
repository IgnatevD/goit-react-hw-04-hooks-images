/** @format */

import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../Page/Home"
import OthersFunds from "../Page/OthersFunds"

import styles from "./Main.module.scss"

const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/others' element={<OthersFunds />} />
        <Route path='*' element={<h2> Not found page</h2>} />
      </Routes>
    </main>
  )
}

export default Main
