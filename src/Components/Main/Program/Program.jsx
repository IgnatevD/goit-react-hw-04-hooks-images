/** @format */

import React, { useContext } from "react"
import { Context } from "../../../utils/context"
import Container from "../../Container"
import { useTranslation } from "react-i18next"
import StatisticsPlate from "../StatisticsPlate"
import styles from "./Program.module.scss"

const Program = () => {
  const { program } = useContext(Context)
  const { t } = useTranslation()
  const blank = "_blank"

  return (
    <section className={styles.section} ref={program}>
      <Container>
        <h2 className={styles.program__title}>{t("section.program.title")}</h2>
        <div className={styles.container__description}>
          <p className={styles.program__description}>
            {t("section.program.description")}
          </p>
          <p className={styles.program__description}>
            {t("section.program.descriptionHelp")}
          </p>
          <p className={styles.program__description}>
            {t("section.program.descriptionHelpNow")}
          </p>
        </div>

        <div className={styles.diagrama}>
          <p className={styles.diagrama__help}>
            {t("section.program.nowHelp")}
          </p>
          <p className={styles.diagrama__need}>
            {t("section.program.needHelp")}
          </p>
        </div>

        <div className={styles.diagrama__description}>
          <p className={styles.help__now}>
            {t("section.program.nowHelpDescription")}
          </p>
          <p className={styles.help__need}>
            {t("section.program.needHelpDescription")}
          </p>
        </div>
        <h3 className={styles.cost__title}>
          {t("section.program.cost.title")}
        </h3>
        <div className={styles.cost__container}>
          <ul className={styles.cost__list}>
            <li className={styles.cost__item}>
              <StatisticsPlate
                number={t("section.program.cost.food")}
                icon=''
                description={t("section.program.cost.foodDescription")}
                className={styles.item__container}
              />
            </li>
            <li className={styles.cost__item}>
              <StatisticsPlate
                number={t("section.program.cost.delivery")}
                icon=''
                description={t("section.program.cost.deliveryDescription")}
                className={styles.item__container}
              />
            </li>
            <li className={styles.cost__item}>
              <StatisticsPlate
                number={t("section.program.cost.application")}
                icon=''
                description={t("section.program.cost.applicationDescription")}
                className={styles.item__container}
              />
            </li>
            <li className={styles.cost__item}>
              <StatisticsPlate
                number={t("section.program.cost.package")}
                icon=''
                description={t("section.program.cost.packageDescription")}
                className={styles.item__container}
              />
            </li>
          </ul>
          <div className={styles.cost__all}>
            <p className={styles.all__description}>
              {t("section.program.cost.allDescription")}
            </p>
            <p className={styles.all__sum}>{t("section.program.cost.all")}</p>
          </div>
        </div>
        <a
          className={styles.btn__assistance}
          href='https://pay.fondy.eu/s/20IT2GkMRb6ZHu7f'
          target={blank}>
          {t("section.program.assistance")}
        </a>
      </Container>
    </section>
  )
}

export default Program
