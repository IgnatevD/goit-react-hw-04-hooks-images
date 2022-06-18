/** @format */

import React, { useState } from "react"
import Program from "../../Components/Home/Program"
import Container from "../../Components/Container"
import callcenter from "../../image/activities/callcenter.jpg"
import finance from "../../image/activities/finance.png"
import result from "../../image/activities/result.png"

import styles from "./Activities.module.scss"
import Button from "../../Components/Button"
import Donate from "../../Components/Donate"

const Activities = () => {
  const [callCenter, setCallCenter] = useState(false)
  const blank = "_blank"

  return (
    <>
      <section className={styles.section}>
        <Container>
          <div>
            <h2>Единый колл центр Харькова - 5505</h2>
            <div className={styles.container}>
              <div className={styles.tumb__img}>
                <img
                  src={callcenter}
                  alt='Команда Жовтой допоги'
                  className={styles.img}
                />
              </div>
              <div className={styles.info__callcenter}>
                <h3>Цель единого коллцентра</h3>
                <p>
                  Это социальный проект по помощи жителям Харьков Это социальный
                  проект по предоставлению официальных рабочих мест для жителей
                  Харькова и уплаты налогов Решение полного спектра вопросов для
                  граждан Помощь в преддверии отопительного сезона Помощь городу
                  Харькову в обработке заявок
                </p>

                <h3>Проблемма</h3>
                <p>
                  Социальная катастрофа - в Харькове у людей нет работы и нет
                  денег соответственно. Мы хотим дать людям официальную работу -
                  работу оператора - возможность заработать деньги на
                  существование. 50 человек с зп 426 $ (на руки 300 $ - 10000
                  грн) В условиях военных действий разрушены методы коммуникации
                  между оставшимися жителями Харькова и волонтерскими
                  организациями и соц службами. Нет единого колл центра.
                  Социальные службы полноценно не работают. Наш коллцентр
                  (работает с первых дней войны) поступает более 2000 звонков в
                  день с просьбой о помощи. (Эвакуация, продукты, лекарства - мы
                  помогаем своей командой. Коммунальные, юридические,
                  психологические проблемы - пока что не обрабатываются. Впереди
                  непростая зима - нужно готовиться сейчас. Единый Колл Центр -
                  это вопрос выживания многих Харьковчан.
                </p>
                <a
                  href='https://b24-y4jysj.bitrix24site.ua/crm_form_gz7d3/'
                  target={blank}
                  className={styles.link}>
                  Подати онлайн заявку на допмогу
                </a>
              </div>
            </div>
            {callCenter && (
              <>
                <div className={styles.tumb__img}>
                  <img
                    src={result}
                    alt='Команда Жовтой допоги'
                    className={styles.img}
                  />
                  <img
                    src={finance}
                    alt='Команда Жовтой допоги'
                    className={styles.img}
                  />
                </div>
                <Donate className={styles.btn__donate} />
              </>
            )}

            <Button
              onClick={() => setCallCenter((prev) => !prev)}
              className={styles.btn__more}>
              {callCenter ? "Скрыть" : "Подробней"}
            </Button>

            <div></div>
          </div>
        </Container>
      </section>
      <section className={styles.section}>
        <Container>
          <div>
            <h2>Единый Склад</h2>
            <div className={styles.container}>
              <div className={styles.info__callcenter}>
                <h3>Цель единого коллцентра</h3>
                <p>
                  Это социальный проект по помощи жителям Харьков Это социальный
                  проект по предоставлению официальных рабочих мест для жителей
                  Харькова и уплаты налогов Решение полного спектра вопросов для
                  граждан Помощь в преддверии отопительного сезона Помощь городу
                  Харькову в обработке заявок
                </p>

                <h3>Проблемма</h3>
                <p>
                  Социальная катастрофа - в Харькове у людей нет работы и нет
                  денег соответственно. Мы хотим дать людям официальную работу -
                  работу оператора - возможность заработать деньги на
                  существование. 50 человек с зп 426 $ (на руки 300 $ - 10000
                  грн) В условиях военных действий разрушены методы коммуникации
                  между оставшимися жителями Харькова и волонтерскими
                  организациями и соц службами. Нет единого колл центра.
                  Социальные службы полноценно не работают. Наш коллцентр
                  (работает с первых дней войны) поступает более 2000 звонков в
                  день с просьбой о помощи. (Эвакуация, продукты, лекарства - мы
                  помогаем своей командой. Коммунальные, юридические,
                  психологические проблемы - пока что не обрабатываются. Впереди
                  непростая зима - нужно готовиться сейчас. Единый Колл Центр -
                  это вопрос выживания многих Харьковчан.
                </p>
              </div>
              <div className={styles.tumb__img}>
                <img
                  src={callcenter}
                  alt='Команда Жовтой допоги'
                  className={styles.img}
                />
              </div>
            </div>
            {callCenter && (
              <div className={styles.tumb__img}>
                <img
                  src={result}
                  alt='Команда Жовтой допоги'
                  className={styles.img}
                />
                <img
                  src={finance}
                  alt='Команда Жовтой допоги'
                  className={styles.img}
                />
              </div>
            )}
            <Button
              onClick={() => setCallCenter((prev) => !prev)}
              className={styles.btn__more}>
              {callCenter ? "Скрыть" : "Подробней"}
            </Button>
          </div>
        </Container>
      </section>

      <Program />
    </>
  )
}

export default Activities
