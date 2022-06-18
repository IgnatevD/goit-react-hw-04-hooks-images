/** @format */

import React, { useState } from "react"
import Container from "../../Container"
import allTeams from "../../../image/aboutUs/allTeams.jpg"
import car from "../../../image/aboutUs/car.jpg"
import driver from "../../../image/aboutUs/driver.jpg"
import operator from "../../../image/aboutUs/operator.jpg"
import stock from "../../../image/aboutUs/stock.jpg"

import { useTranslation } from "react-i18next"
import StatisticsPlate from "../StatisticsPlate"
import styles from "./AboutUs.module.scss"

const AboutUs = () => {
  const [img, setImg] = useState({ img: allTeams, class: " " })
  const { t } = useTranslation()

  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>{t("section.aboutUs.title")}</h2>
        <p className={styles.description}>{t("section.aboutUs.description")}</p>

        <ul className={styles.about__list}>
          <li
            className={styles.about__item}
            onMouseEnter={() =>
              setImg({ img: operator, class: styles.isActive })
            }
            onMouseLeave={() => setImg({ img: operator, class: " " })}>
            <StatisticsPlate
              number='26'
              icon='icon-operator'
              description={t("section.aboutUs.dispatcher")}
              className={styles.item__container}
            />
          </li>
          <li
            className={styles.about__item}
            onMouseEnter={() => setImg({ img: stock, class: styles.isActive })}
            onMouseLeave={() => setImg({ img: stock, class: " " })}>
            <StatisticsPlate
              number='4'
              icon='icon-home'
              description={t("section.aboutUs.stock")}
              className={styles.item__container}
            />
          </li>
          <li
            className={styles.about__item}
            onMouseEnter={() => setImg({ img: driver, class: styles.isActive })}
            onMouseLeave={() => setImg({ img: driver, class: " " })}>
            <StatisticsPlate
              number='33'
              icon='icon-driver'
              description={t("section.aboutUs.drivers")}
              className={styles.item__container}
            />
          </li>
          <li
            className={styles.about__item}
            onMouseEnter={() => setImg({ img: car, class: styles.isActive })}
            onMouseLeave={() => setImg({ img: car, class: " " })}>
            <StatisticsPlate
              number='27'
              icon='icon-car'
              description={t("section.aboutUs.car")}
              className={styles.item__container}
            />
          </li>
          <li
            className={styles.about__item}
            onMouseEnter={() => setImg({ img: stock, class: styles.isActive })}
            onMouseLeave={() => setImg({ img: stock, class: " " })}>
            <StatisticsPlate
              number='4'
              icon='icon-bus-driver'
              description={t("section.aboutUs.miniBus")}
              className={styles.item__container}
            />
          </li>
          <li
            className={styles.about__item}
            onMouseEnter={() => setImg({ img: stock, class: styles.isActive })}
            onMouseLeave={() => setImg({ img: stock, class: " " })}>
            <StatisticsPlate
              number='2'
              icon='icon-bus'
              description={t("section.aboutUs.bus")}
              className={styles.item__container}
            />
          </li>
        </ul>
        <div
          className={styles.tumb__img}
          onMouseEnter={() =>
            setImg({ img: allTeams, class: styles.isActive })
          }>
          <img
            src={img.img}
            alt='Команда Жовтой допоги'
            className={img.class}
          />
        </div>
        <div className={styles.tumb__video}>
          <iframe
            className={styles.video}
            src='https://www.youtube.com/embed/ugMz1uxshV8'
            title='Yellow Help'
            frameBorder='0'
            allowFullScreen></iframe>
        </div>
      </Container>
    </section>
  )
}

export default AboutUs
