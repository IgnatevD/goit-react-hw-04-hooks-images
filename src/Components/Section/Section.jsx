/** @format */

import PropTypes from "prop-types"

import styles from "./Section.module.scss"

const Section = ({ children, className }) => (
  <section className={[styles.section, className].join(" ")}>
    {children}
  </section>
)

Section.defaultProps = {
  className: null,
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section
