/** @format */

import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "../../Button"

import styles from "./MisceCalm.module.scss"

const MisceCalm = () => {
  const [moreInfo, setMoreInfo] = useState(false)
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.container}>
        <h2> {t("section.projects.misceCalm.title")}</h2>
        <p> {t("section.projects.misceCalm.description")}</p>
        <Button
          onClick={() => setMoreInfo((prev) => !prev)}
          className={styles.btn__more}>
          {moreInfo ? "Сховати" : "Докладніше"}
        </Button>
      </div>
      {moreInfo && (
        <div>
          <p> {t("section.projects.misceCalm.description")}</p>
        </div>
      )}
    </>
  )
}

export default MisceCalm
