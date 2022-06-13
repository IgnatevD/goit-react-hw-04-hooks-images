/** @format */

import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../Page/Home"
import OtherFunds from "../Page/OtherFunds"

import styles from "./Main.module.scss"

const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/other' element={<OtherFunds />} />
        <Route path='*' element={<h2> Not found page</h2>} />
      </Routes>
    </main>
  )
}

export default Main
