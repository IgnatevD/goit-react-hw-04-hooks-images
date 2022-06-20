/** @format */

import React from "react"
import Container from "../../Components/Container"

import styles from "./Projects.module.scss"

const Projects = () => {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.container__projects}>
          <ul className={styles.list__project}>
            <li>
              <h2 className={styles.project__title}>"Зберегти життя"</h2>
            </li>
            <li>
              <h2 className={styles.project__title}>
                Єдиний інформаційний колл центр 5505"
              </h2>
            </li>
            <li>
              <h2 className={styles.project__title}>
                "Місце спокою" (Центри підтримки)
              </h2>
            </li>
            <li>
              <h2 className={styles.project__title}>"Здоров'я Харків'ян"</h2>
            </li>
            <li>
              <h2 className={styles.project__title}>"Почути Україну"</h2>
            </li>
          </ul>
          <div>
            <ul className={styles.list__project}>
              <li>
                <h2 className={styles.project__title}>"Зберегти життя"</h2>
                <p className={styles.project__discription}>
                  - забезпечення харків'ян та біженців продуктовими наборами;
                </p>
              </li>
              <li>
                <h2 className={styles.project__title}>
                  Єдиний інформаційний колл центр 5505"
                </h2>
                <p className={styles.project__discription}>
                  - консультація з питань: евакуації, продуктової допомоги,
                  медичної та психологічної допомоги, юридична консультація;
                </p>
              </li>
              <li>
                <h2 className={styles.project__title}>
                  "Місце спокою" (Центри підтримки)
                </h2>
                <p className={styles.project__discription}>
                  - створення районних центрів допомоги.
                </p>
              </li>
              <li>
                <h2 className={styles.project__title}>"Здоров'я Харків'ян"</h2>
                <p className={styles.project__discription}>
                  - медична консультація онлайн + лікар на районі та доставка
                  ліків.
                </p>
              </li>
              <li>
                <h2 className={styles.project__title}>"Почути Україну"</h2>
                <p className={styles.project__discription}>
                  - допомога людям із проблемами слуху, які з'явились через
                  війну.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Projects
