/** @format */

import React from "react"
import Container from "../../Container"
import Section from "../../Section"
import styles from "./VideoIframe.module.scss"

const VideoIframe = () => {
  return (
    <Section>
      <Container>
        <div className={styles.tumb__video}>
          <iframe
            className={styles.video}
            src='https://www.youtube.com/embed/ugMz1uxshV8'
            title='Yellow Help'
            frameBorder='0'></iframe>
        </div>
      </Container>
    </Section>
  )
}
// allowFullScreen

export default VideoIframe
