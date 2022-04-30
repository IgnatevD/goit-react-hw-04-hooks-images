/** @format */

import React from "react"
import styles from "./Partner.module.scss"

const Partner = ({ logo, link, name }) => {
  const tagrget = "_blank"

  return (
    <a href={link} target={tagrget} title={link} className={styles.link}>
      <div className={styles.container__img}>
        <img className={styles.img} src={logo} alt={name} />
      </div>
    </a>
  )
}

export default Partner
