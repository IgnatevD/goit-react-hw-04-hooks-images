/** @format */

import React, { useContext } from "react"
import Container from "../../Container"
import Siromolot from "../../../image/team/Siromolot.jpg"
import Minaev from "../../../image/team/Minaev.jpg"
import Mukhoyan from "../../../image/team/Mukhoyan.jpg"
import Kusayko from "../../../image/team/Kusayko.jpg"
import Kobzev from "../../../image/team/Kobzev.jpg"
import Shapoval from "../../../image/team/Shapoval.jpg"

import Ignatiev from "../../../image/team/Ignatiev.jpg"
import Card from "./Card"
import { useTranslation } from "react-i18next"
import { Context } from "../../../utils/context"
import styles from "./Team.module.scss"

const Team = () => {
  const { teams } = useContext(Context)
  const { t } = useTranslation()

  const allTeam = [
    {
      photo: Siromolot,
      name: t("section.team.Siromolot.name"),
      position: t("section.team.Siromolot.position"),
      profession: {
        title: t("section.team.Siromolot.profession.title"),
        work: [
          {
            name: t("section.team.Siromolot.profession.work.Quest.name"),
            link: t("section.team.Siromolot.profession.work.Quest.link"),
          },
          {
            name: t("section.team.Siromolot.profession.work.Call.name"),
            link: t("section.team.Siromolot.profession.work.Call.link"),
          },
          {
            name: t("section.team.Siromolot.profession.work.Sukhari.name"),
            link: t("section.team.Siromolot.profession.work.Sukhari.link"),
          },
          {
            name: t("section.team.Siromolot.profession.work.Iconsulting.name"),
            link: t("section.team.Siromolot.profession.work.Iconsulting.link"),
          },
        ],
      },
    },
    {
      photo: Minaev,
      name: t("section.team.Minaev.name"),
      position: t("section.team.Minaev.position"),
      profession: {
        title: t("section.team.Minaev.profession.title"),
        work: [
          {
            name: t("section.team.Minaev.profession.work.Taxi.name"),
            link: t("section.team.Minaev.profession.work.Taxi.link"),
          },
        ],
      },
    },

    {
      photo: Mukhoyan,
      name: t("section.team.Mykhoyan.name"),
      position: t("section.team.Mykhoyan.position"),
      profession: {
        title: t("section.team.Mykhoyan.profession.title"),
        work: [
          {
            name: t("section.team.Mykhoyan.profession.work.TransStar.name"),
            link: t("section.team.Mykhoyan.profession.work.TransStar.link"),
          },
        ],
      },
    },
    {
      photo: Kusayko,
      name: t("section.team.Kysiko.name"),
      position: t("section.team.Kysiko.position"),
      profession: {
        title: t("section.team.Kysiko.profession.title"),
        work: [
          {
            name: t("section.team.Kysiko.profession.work.Bilding.name"),
            link: t("section.team.Kysiko.profession.work.Bilding.link"),
          },
        ],
      },
    },
    {
      photo: Kobzev,
      name: t("section.team.Kobzev.name"),
      position: t("section.team.Kobzev.position"),
      profession: {
        title: t("section.team.Kobzev.profession.title"),
        work: [
          {
            name: t("section.team.Kobzev.profession.work.Svtr.name"),
            link: t("section.team.Kobzev.profession.work.Svtr.link"),
          },
        ],
      },
    },
    {
      photo: Shapoval,
      name: t("section.team.Shapoval.name"),
      position: t("section.team.Shapoval.position"),
      profession: {
        title: t("section.team.Shapoval.profession.title"),
        work: [],
      },
    },
    {
      photo: Ignatiev,
      name: t("section.team.Ignatiev.name"),
      position: t("section.team.Ignatiev.position"),
      profession: {
        title: t("section.team.Ignatiev.profession.title"),
        work: [
          {
            name: t("section.team.Ignatiev.profession.work.Khai.name"),
            link: t("section.team.Ignatiev.profession.work.Khai.link"),
          },
        ],
      },
    },
  ]

  return (
    <div className={styles.footer} ref={teams}>
      <Container>
        <h2 className={styles.title}>{t("section.team.title")}</h2>
        <ul className={styles.team__list}>
          {allTeam.map(({ photo, name, position, profession }, index) => (
            <Card
              photo={photo}
              name={name}
              position={position}
              profession={profession}
              key={index}
            />
          ))}
        </ul>
      </Container>
    </div>
  )
}

export default Team
