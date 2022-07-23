/** @format */

import React from "react"
import Container from "../../Components/Container"
import VideoIframe from "../../Components/Home/VideoIframe"
import souvenir from "../../image/souvenir/souvenir.jpg"
import styles from "./Souvenir.module.scss"

const Souvenir = () => {
  const blank = "_blank"
  return (
    <div className={styles.container}>
      <Container>
        <h1 className={styles.title}>"Бумеранг ДОБРА"</h1>
        <p className={styles.description}>
          Кожен українець від наймолодших до найстаршіх вкладає свою душу та
          прагне допомогти тим, хто опинився у складній ситуації. Допомогати
          легко з фондами "Жовта допомога" та RAZOM!
        </p>
        <div className={styles.gift__container}>
          <div className={styles.gift__text}>
            <p className={styles.gift}>
              Щоб отримати набір подарунків від бабусь та дітей з Харкова:
            </p>

            <p className={styles.donate}>
              1. Зроби
              <a
                className={styles.link}
                href='https://pay.fondy.eu/s/20IT2GkMRb6ZHu7f'
                target={blank}
                title='Поисковая система Google'>
                donate
              </a>
              від 200 грн!
            </p>

            <p className={styles.donate}>
              2. Заповнити
              <a
                className={styles.link}
                href='https://forms.gle/4q8K8QUKFdPJgTiM8'
                target={blank}
                title='Поисковая система Google'>
                форму
              </a>
              для отримання подарункового набору!
            </p>
            <p className={styles.gift__description}>
              (До набору входить сердце - 1шт, журавлі - 1 пара, листівка - 1
              шт)
            </p>
          </div>
          <div className={styles.tumb__img}>
            <img src={souvenir} alt='подарунки' />
          </div>
        </div>
      </Container>
      <VideoIframe url='https://www.youtube.com/embed/ugMz1uxshV8' />
    </div>
  )
}

export default Souvenir
