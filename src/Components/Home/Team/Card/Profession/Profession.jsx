/** @format */

import styles from "./Profession.module.scss"

const Profession = ({ profession }) => {
  const { title, work } = profession
  const blank = "_blank"
  return (
    <div className={styles.profession}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.profession__list}>
        {work.map(({ name, link }, index) => (
          <li key={index} className={styles.profession__item}>
            <a
              href={link}
              alt={name}
              target={blank}
              className={styles.profession__link}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Profession
