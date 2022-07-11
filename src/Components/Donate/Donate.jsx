/** @format */

import useAnalyticsEventTracker from "../../utils/useAnalyticsEventTracker"
import styles from "./Donate.module.scss"

const Donate = ({ className }) => {
  const blank = "_blank"
  const gaEventTracker = useAnalyticsEventTracker("Donate")

  return (
    <a
      onClick={() => gaEventTracker("click")}
      className={`${styles.btn__donate} ${className}`}
      href='https://pay.fondy.eu/s/20IT2GkMRb6ZHu7f'
      target={blank}>
      Donate
    </a>
  )
}

export default Donate
