/** @format */

import React, { useContext } from "react"
import { Context } from "../../../utils/context"
import Container from "../../Container"
import allTeams from "../../../image/team/allTeams.jpg"
import { useTranslation } from "react-i18next"
import StatisticsPlate from "../StatisticsPlate"
import styles from "./AboutUs.module.scss"

const AboutUs = () => {
  const { t } = useTranslation()
  const { aboutUs } = useContext(Context)

  return (
    <section className={styles.section} ref={aboutUs}>
      <Container>
        <h2 className={styles.title}>{t("section.aboutUs.title")}</h2>
        <p className={styles.description}>{t("section.aboutUs.description")}</p>

        <ul className={styles.about__list}>
          <li className={styles.about__item}>
            <StatisticsPlate
              number='26'
              icon='icon-operator'
              description={t("section.aboutUs.dispatcher")}
              className={styles.item__container}
            />
          </li>
          <li className={styles.about__item}>
            <StatisticsPlate
              number='4'
              icon='icon-home'
              description={t("section.aboutUs.stock")}
              className={styles.item__container}
            />
          </li>
          <li className={styles.about__item}>
            <StatisticsPlate
              number='33'
              icon='icon-driver'
              description={t("section.aboutUs.drivers")}
              className={styles.item__container}
            />
          </li>
          <li className={styles.about__item}>
            <StatisticsPlate
              number='27'
              icon='icon-car'
              description={t("section.aboutUs.car")}
              className={styles.item__container}
            />
          </li>
          <li className={styles.about__item}>
            <StatisticsPlate
              number='4'
              icon='icon-bus-driver'
              description={t("section.aboutUs.miniBus")}
              className={styles.item__container}
            />
          </li>
          <li className={styles.about__item}>
            <StatisticsPlate
              number='2'
              icon='icon-bus'
              description={t("section.aboutUs.bus")}
              className={styles.item__container}
            />
          </li>
        </ul>
        <div className={styles.tumb__img}>
          <img
            src={allTeams}
            alt='Команда Жовтой допоги'
            className={styles.about__teams}
          />
        </div>
      </Container>
    </section>
  )
}

export default AboutUs
