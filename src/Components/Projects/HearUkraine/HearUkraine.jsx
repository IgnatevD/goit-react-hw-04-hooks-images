/** @format */

import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "../../Button"

import styles from "./HearUkraine.module.scss"

const HearUkraine = () => {
  const [moreInfo, setMoreInfo] = useState(false)
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.container}>
        <h2> {t("section.projects.hearUkraine.title")}</h2>
        <p> {t("section.projects.hearUkraine.description")}</p>
      </div>
      {moreInfo && (
        <div>
          <p> {t("section.projects.hearUkraine.description")}</p>
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

export default HearUkraine
