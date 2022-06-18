/** @format */

import React, { useEffect } from "react"
import Button from "../../Button"
import { useTranslation } from "react-i18next"
import { NavLink, useLocation } from "react-router-dom"
import styles from "./Menu.module.scss"
import Donate from "../../Donate"

const Menu = ({ onToggleModal }) => {
  const { t, i18n } = useTranslation()
  const { pathname } = useLocation()

  useEffect(() => {}, [pathname]) /* eslint-disable-line*/

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <div className={styles.menu__container}>
      <ul className={styles.list__menu}>
        <li className={styles.item__menu}>
          <NavLink
            to='/'
            onClick={onToggleModal}
            className={({ isActive }) =>
              !isActive ? styles.link : styles.linkActive
            }>
            ГОЛОВНА
          </NavLink>
        </li>
        <li className={styles.item__menu}>
          <NavLink
            to='/about'
            onClick={onToggleModal}
            className={({ isActive }) =>
              !isActive ? styles.link : styles.linkActive
            }>
            {t("navigation.aboutUs")}
          </NavLink>
        </li>
        <li className={styles.item__menu}>
          <NavLink
            to='/activities'
            onClick={onToggleModal}
            className={({ isActive }) =>
              !isActive ? styles.link : styles.linkActive
            }>
            {t("navigation.activities")}
          </NavLink>
        </li>
        <li className={styles.item__menu}>
          <NavLink
            to='/program'
            onClick={onToggleModal}
            className={({ isActive }) =>
              !isActive ? styles.link : styles.linkActive
            }>
            {t("navigation.program")}
          </NavLink>
        </li>
        <li className={styles.item__menu}>
          <NavLink
            to='/team'
            onClick={onToggleModal}
            className={({ isActive }) =>
              !isActive ? styles.link : styles.linkActive
            }>
            {t("navigation.team")}
          </NavLink>
        </li>
        <li className={styles.item__menu}>
          <NavLink
            to='/contacts'
            onClick={onToggleModal}
            className={({ isActive }) =>
              !isActive ? styles.link : styles.linkActive
            }>
            {t("navigation.contacts")}
          </NavLink>
        </li>
      </ul>

      <div className={styles.container__language}>
        <Donate />

        {i18n.language === "ua" ? (
          <Button
            onClick={() => changeLanguage("en")}
            className={styles.language}>
            EN
          </Button>
        ) : (
          <Button
            onClick={() => changeLanguage("ua")}
            className={styles.language}>
            UA
          </Button>
        )}
      </div>
    </div>
  )
}

export default Menu
