/** @format */

import React from "react"

import App from "./Components/App"
import ReactDOM from "react-dom/client"
import "./index.scss"
import "./i18n"
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()
