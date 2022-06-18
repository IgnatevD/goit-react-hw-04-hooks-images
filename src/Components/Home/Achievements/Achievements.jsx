/** @format */

import React from "react"

import Container from "../../Container"

import humanitarianAid from "../../../image/pictures/humanitarianAid.png"
import peopleHelp from "../../../image/pictures/peopleHelp.png"

import StatisticsPlate from "../StatisticsPlate"
import { useTranslation } from "react-i18next"
import styles from "./Achievements.module.scss"

const Achievements = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>{t("section.achievements.title")}</h2>
        <p className={styles.description}>
          {t("section.achievements.description")}
        </p>

        <ul className={styles.about__list}>
          <li className={styles.about__item}>
            <StatisticsPlate
              number='6 245'
              icon='icon-family'
              description={t("section.achievements.helpFamali")}
              className={styles.item__container}
            />
          </li>
          <li className={styles.about__item}>
            <StatisticsPlate
              number='19 376'
              icon='icon-cargo-truck'
              description={t("section.achievements.humanitarianHelp")}
              className={styles.item__container}
            />
          </li>
          <li className={styles.about__item}>
            <StatisticsPlate
              number='> 72 000'
              icon='icon-food'
              description={t("section.achievements.organizedLunch")}
              className={styles.item__container}
            />
          </li>
        </ul>
        <div>
          <img
            src={humanitarianAid}
            alt='Команда Жовтой допоги'
            className={styles.achievements__help}
          />
        </div>
        <div className={styles.container__img}>
          <h2 className={styles.title}>
            {t("section.achievements.titleHelp")}
          </h2>
          <img
            src={peopleHelp}
            alt='Допомогли харків’янам'
            className={styles.peopleHelp}
          />
        </div>
      </Container>
    </section>
  )
}

export default Achievements
