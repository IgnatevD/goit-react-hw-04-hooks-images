/** @format */

import React from "react"
import { useTranslation } from "react-i18next"
import Svg from "../Svg"

import styles from "./Requisites.module.scss"

const Requisites = ({ className }) => {
  const { t } = useTranslation()
  return (
    <div className={`${styles.container} ${className}`}>
      <h3 className={styles.title}>{t("section.contacts.requisites.title")}</h3>
      <div className={styles.container__organization}>
        <p>{t("section.contacts.requisites.organizationField")}</p>
        <span className={styles.name__organization}>
          {t("section.contacts.requisites.organization")}
        </span>
      </div>
      <div className={styles.container__item}>
        <p>{t("section.contacts.requisites.codeField")}</p>
        <span className={styles.requisites__item}>
          {t("section.contacts.requisites.code")}
        </span>
      </div>

      <div className={styles.container__item}>
        <p>{t("section.contacts.requisites.bankNameField")}</p>
        <span className={styles.requisites__item}>
          {t("section.contacts.requisites.bankName")}
        </span>
      </div>
      <div className={styles.container__item}>
        <p>{t("section.contacts.requisites.swiftCodeField")}</p>
        <span className={styles.requisites__item}>
          {t("section.contacts.requisites.swiftCode")}
        </span>
      </div>

      <p className={styles.item}>
        {t("section.contacts.requisites.checkFieled")}
      </p>
      <div className={styles.item__container}>
        <Svg icon={"#icon-hryvna"} className={styles.icon}></Svg>
        <span className={styles.item__iban}>
          {t("section.contacts.requisites.checkUAN")}
        </span>
      </div>

      <div className={styles.item__container}>
        <Svg icon={"#icon-dollar-svgrepo"} className={styles.icon}></Svg>
        <span className={styles.item__iban}>
          {t("section.contacts.requisites.checkUSA")}
        </span>
      </div>
      <div className={styles.item__container}>
        <Svg icon={"#icon-euro-svgrepo"} className={styles.icon} />

        <span className={styles.item__iban}>
          {t("section.contacts.requisites.checkEVRO")}
        </span>
      </div>
    </div>
  )
}

export default Requisites
