/** @format */

import React from "react"
import Container from "../../Container"
import { useTranslation } from "react-i18next"
import Partner from "./Partner"
import nu_logo from "../../../image/partner/nu_logo.png"
import razom_logo from "../../../image/partner/razom_logo.png"
import roma_logo from "../../../image/partner/roma_logo.png"


import styles from "./OurPartners.module.scss"
import Section from "../../Section"

const OurPartners = () => {
  const { t } = useTranslation()

  const allPartners = [
    {
      logo: nu_logo,
      link: "https://novaukraine.org/",
    },
    {
      logo: razom_logo,
      link: "https://razomforukraine.org/projects/",
    },
    {
      logo: roma_logo,
      link: "https://romakpf.com",
    },
  ]

  return (
    <Section className={styles.ourPartners__section}>
      <Container className={styles.ourPartners__container}>
        <h2 className={styles.title}>{t("section.ourPartners.title")}</h2>

        <ul className={styles.ourPartners__list}>
          {allPartners.map(({ logo, link }, index) => (
            <li className={styles.about__item} key={index}>
              <Partner
                logo={logo}
                link={link}
                className={styles.item__container}
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

export default OurPartners
