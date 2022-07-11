/** @format */

import React, { useEffect } from "react"
import ReactGA from "react-ga"
import Container from "../../Components/Container"
import { useTranslation } from "react-i18next"
import styles from "./Contacts.module.scss"
import Networks from "../../Components/Footer/Networks"
import Team from "../../Components/Home/Team"
import Requisites from "../../Components/Requisites"
import Section from "../../Components/Section"

const Contacts = () => {
  const { t } = useTranslation()

  const networkLink = [
    {
      tagrget: "_blank",
      link: "https://www.facebook.com/yellowHelpKh/",
      icon: "#icon-facebook",
      name: "@yellowHelpKh",
    },
    {
      tagrget: "_blank",
      link: "https://www.instagram.com/yellow_help_kh/",
      icon: "#icon-instagram",
      name: "@yellow_help_kh",
    },
    {
      tagrget: "_blank",
      link: "https://t.me/yellow_help",
      icon: "#icon-telegram",
      name: "t.me/yellow_help",
    },
  ]

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div className={styles.page__contacts}>
      <Section>
        <Container>
          <div className={styles.contacts}>
            <div className={styles.container__logo}>
              <h3 className={styles.name__organization}>
                {t("section.contacts.nameOrganization")}
              </h3>
              <p className={styles.address}>{t("section.contacts.address")}</p>
            </div>
            <div className={styles.container__contacts}>
              <div className={styles.container__network}>
                <a href='tel:+380662268855' className={styles.telephone__link}>
                  +38(066)226-88-55
                </a>
                <ul className={styles.network__list}>
                  {networkLink.map(({ tagrget, link, icon, name }, index) => (
                    <Networks
                      tagrget={tagrget}
                      link={link}
                      icon={icon}
                      name={name}
                      key={index}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <Requisites className={styles.requisites} />
          </div>
        </Container>
      </Section>

      <Team />
    </div>
  )
}

export default Contacts
