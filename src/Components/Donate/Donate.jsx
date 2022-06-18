/** @format */

import styles from "./Donate.module.scss"

const Donate = ({ className }) => {
  const blank = "_blank"
  return (
    <a
      className={`${styles.btn__donate} ${className}`}
      href='https://pay.fondy.eu/s/20IT2GkMRb6ZHu7f'
      target={blank}>
      Donate
    </a>
  )
}

export default Donate
