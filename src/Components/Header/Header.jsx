/** @format */

import React, { useEffect, useState } from "react"
import Container from "../Container/Container"
import Svg from "../Svg/Svg"
import BurgerMenu from "./BurgerMenu"
import Menu from "./Menu"
import { useTranslation } from "react-i18next"
import styles from "./Header.module.scss"
import { NavLink } from "react-router-dom"

const Header = () => {
  const { i18n } = useTranslation()
  const [windowWidth, setWindowWidth] = useState({
    width: window.innerWidth,
    breakPoint: 1280,
  })
  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow)
    return () => {
      window.removeEventListener("resize", handleResizeWindow)
    }
  }, []) /* eslint-disable-line*/

  function handleResizeWindow() {
    setWindowWidth({ ...windowWidth, width: window.innerWidth })
  }

  const { width, breakPoint } = windowWidth

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.container}>
          <NavLink to='/'>
            <Svg
              icon={i18n.language === "ua" ? "#icon-logo" : "#icon-logo-en"}
              className={styles.logo}
            />
          </NavLink>

          <div className={styles.menu}>
            {width < breakPoint ? <BurgerMenu /> : <Menu />}
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
