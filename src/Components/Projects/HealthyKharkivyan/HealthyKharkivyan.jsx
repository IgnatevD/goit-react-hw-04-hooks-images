/** @format */

import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "../../Button"

import styles from "./HealthyKharkivyan.module.scss"

const HealthyKharkivyan = () => {
  const [moreInfo, setMoreInfo] = useState(false)
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.container}>
        <h2> {t("section.projects.HealthyKharkivyan.title")}</h2>
        <p> {t("section.projects.HealthyKharkivyan.description")}</p>
        <Button
          onClick={() => setMoreInfo((prev) => !prev)}
          className={styles.btn__more}>
          {moreInfo ? "Сховати" : "Докладніше"}
        </Button>
      </div>
      {moreInfo && (
        <div>
          <p> {t("section.projects.HealthyKharkivyan.description")}</p>
        </div>
      )}
    </>
  )
}

export default HealthyKharkivyan
