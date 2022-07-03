/** @format */

import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "../../Components/Button"

import CallCenter from "../../Components/Projects/CallCenter"
import HealthyKharkivyan from "../../Components/Projects/HealthyKharkivyan"
import HearUkraine from "../../Components/Projects/HearUkraine"
import MisceCalm from "../../Components/Projects/MisceCalm"
import SaveLife from "../../Components/Projects/SaveLife"

import styles from "./Projects.module.scss"

const Projects = () => {
  const [activeProject, setActiveProject] = useState("saveLife")

  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <div className={styles.container__projects}>
        <ul className={styles.list__project}>
          <li className={styles.project__button}>
            <Button
              className={
                activeProject === "saveLife"
                  ? styles.project__title__active
                  : styles.project__title
              }
              onClick={() => setActiveProject("saveLife")}>
              {t("section.projects.saveLife.title")}
            </Button>
          </li>
          <li className={styles.project__button}>
            <Button
              className={
                activeProject === "callCenter"
                  ? styles.project__title__active
                  : styles.project__title
              }
              onClick={() => setActiveProject("callCenter")}>
              {t("section.projects.callCenter.title")}
            </Button>
          </li>
          <li className={styles.project__button}>
            <Button
              className={
                activeProject === "misceCalm"
                  ? styles.project__title__active
                  : styles.project__title
              }
              onClick={() => setActiveProject("misceCalm")}>
              {t("section.projects.misceCalm.title")}
            </Button>
          </li>
          <li className={styles.project__button}>
            <Button
              className={
                activeProject === "HealthyKharkivyan"
                  ? styles.project__title__active
                  : styles.project__title
              }
              onClick={() => setActiveProject("HealthyKharkivyan")}>
              {t("section.projects.HealthyKharkivyan.title")}
            </Button>
          </li>
          <li className={styles.project__button}>
            <Button
              className={
                activeProject === "hearUkraine"
                  ? styles.project__title__active
                  : styles.project__title
              }
              onClick={() => setActiveProject("hearUkraine")}>
              {t("section.projects.hearUkraine.title")}
            </Button>
          </li>
        </ul>
        <div className={styles.project__container}>
          {activeProject === "saveLife" && <SaveLife />}
          {activeProject === "callCenter" && <CallCenter />}
          {activeProject === "misceCalm" && <MisceCalm />}
          {activeProject === "HealthyKharkivyan" && <HealthyKharkivyan />}
          {activeProject === "hearUkraine" && <HearUkraine />}
        </div>
      </div>
    </div>
  )
}

export default Projects
