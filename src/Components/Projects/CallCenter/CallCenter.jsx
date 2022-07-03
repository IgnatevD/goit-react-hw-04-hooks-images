/** @format */

import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "../../Button"
import styles from "./CallCenter.module.scss"

const CallCenter = () => {
  const [moreInfo, setMoreInfo] = useState(false)
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.container}>
        <h2> {t("section.projects.callCenter.title")}</h2>
        <p> {t("section.projects.callCenter.description")}</p>
      </div>
      {moreInfo && (
        <div className={styles.description}>
          <p> {t("section.projects.callCenter.description")}</p>
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

export default CallCenter
