/** @format */

import React from "react"
import { useTranslation } from "react-i18next"
import Container from "../../Container"
import styles from "./Hero.module.scss"

const Hero = () => {
  const { i18n } = useTranslation()
  const classHero = i18n.language === "ua" ? styles.hero : styles.hero__en
  return (
    <section className={styles.section}>
      <Container>
        <div className={classHero}></div>
      </Container>
    </section>
  )
}

export default Hero
