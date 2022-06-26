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
            src='//lightwidget.com/widgets/cca06fa117d05edb9b8d6384be8175bb.html'
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
