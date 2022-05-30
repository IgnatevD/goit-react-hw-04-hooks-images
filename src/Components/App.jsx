/** @format */

import React from "react"
import { Context } from "../utils/context"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

const App = () => {
  const aboutUs = React.createRef(null)
  const achievements = React.createRef(null)
  const teams = React.createRef(null)
  const program = React.createRef(null)
  const contacts = React.createRef(null)

  const scrollSection = (ref) => {
    ref.current.scrollIntoView()
  }

  return (
    <Context.Provider
      value={{
        aboutUs,
        achievements,
        teams,
        program,
        contacts,
        scrollSection,
      }}>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </Context.Provider>
  )
}

export default App
