/** @format */

import React, { useState } from "react"
import Button from "../../../Button"
import { useTranslation } from "react-i18next"
import Profession from "./Profession"
import styles from "./Card.module.scss"

const Card = ({ photo, name, position, profession }) => {
  const [show, setShow] = useState(false)
  const [work, setWork] = useState(null)

  const getProfession = (job) => () => {
    setShow((show) => !show)
    setWork(job)
  }

  const { t } = useTranslation()
  return (
    <li className={styles.item}>
      <div className={styles.container__img}>
        {show ? (
          <Profession profession={work} />
        ) : (
          <img className={styles.img} src={photo} alt={name} />
        )}
      </div>

      <h3 className={styles.name}>{name}</h3>
      <p className={styles.position}> {position}</p>
      <Button className={styles.btn__more} onClick={getProfession(profession)}>
        {t("section.team.more")}
      </Button>
    </li>
  )
}

export default Card
