/** @format */

import React from "react"
import { useTranslation } from "react-i18next"
import Container from "../../Container"
import Section from "../../Section"
import styles from "./InstagramWidget.module.scss"

const InstagramWidget = () => {
  const { t } = useTranslation()

  return (
    <Section>
      <Container>
        <h2 className={styles.title}>{t("section.instagramWidget.title")}</h2>
        <div className={styles.tumb__instagram}>
          <iframe
            title='My instagram'
            src='//lightwidget.com/widgets/036f4ffb0a1b5a4fa7e2e3469c646dc4.html'
            scrolling='no'
            allowtransparency='true'
            className='lightwidget-widget'
            style={{ width: "100%", border: "0", overflow: "hidden" }}></iframe>
        </div>
      </Container>
    </Section>
  )
}

export default InstagramWidget
