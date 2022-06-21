/** @format */

import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "../../Button"

import styles from "./SaveLife.module.scss"

const SaveLife = () => {
  const [moreInfo, setMoreInfo] = useState(false)
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.container}>
        <h2> {t("section.projects.saveLife.title")}</h2>
        <p> {t("section.projects.saveLife.description")}</p>
      </div>
      {moreInfo && (
        <div>
          <p> {t("section.projects.saveLife.description")}</p>
        </div>
      )}
      <Button
        onClick={() => setMoreInfo((prev) => !prev)}
        className={styles.btn__more}>
        {moreInfo ? "Сховати" : "Докладніше"}
      </Button>
    </>
  )
}

export default SaveLife
