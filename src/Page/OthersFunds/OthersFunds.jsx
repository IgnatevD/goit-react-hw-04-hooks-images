/** @format */

import React from "react"
import Container from "../../Components/Container"
import Section from "../../Components/Section"
import styles from "./OthersFunds.module.scss"

const financialFunds = [
  {
    img: "logo",
    name: "ЮНІСЕФ",
    description:
      "(2220 грн.на людину в місяць, допомагають одразу за 3 місяці)",
    link: "https://register.unicef.org/",
  },

  {
    img: "logo",
    name: "ЄДопомога",
    description:
      "(2220 грн.на людину в місяць, допомагають одразу за 3 місяці)",
    link: "https://aid.edopomoga.gov.ua",
    status: "https://aid.edopomoga.gov.ua/check",
  },
  {
    img: "logo",
    name: "The 1k Project",
    description: "(1000$)",
    link: "https://airtable.com/shrvfSCquvjgdEJPy",
  },
  {
    img: "logo",
    name: "Gate to Ukraine",
    description: "(100$)",
    link: "https://gate.org/get-help/",
  },
  {
    img: "logo",
    name: "Єдність за майбутнє",
    description: "(2220 грн. на людину)",
    link: "https://register.pagulasabi.ee/uk/",
  },

  {
    img: "logo",
    name: "NRC (Норвезька рада у справах біженців)",
    description: "Реєстрація проходить через месенджер WhatsApp по номеру",
    link: "",
    number: "+48 729 086 505",
  },

  {
    img: "logo",
    name: "Спілка",
    description: "",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSffjBOdijWzIDj3XHEFl5BjjDG5XqYDfJ2PT7Z71HtLeMw1Ng/viewform",
  },
  {
    img: "logo",
    name: "БФ «Щаслива дитина»",
    description: "",
    link: "https://deti.zp.ua/uk/",
  },
  {
    img: "logo",
    name: "БФ «СОС Дитячі Містечка Україна»",
    description: "",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeyIGeH5pS1xWsriOvJvEWEwHGz6cg8fwH3rm9BDbV-0PvWvQ/viewform",
  },
  {
    img: "logo",
    name: "Жінка для жінки",
    description: "",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSemBTcKgyLUE8CPQ4WL68H2QHvvqmg9-OIYggnB9omLKFr1Pg/closedform",
  },
  {
    img: "logo",
    name: "Українські сестри",
    description: "",
    link: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeV3o6QJjYflkxbumbh1Ux6B0lOHTvMGojOBDzJKY-rcaVgCQ/formResponse",
  },

  {
    img: "logo",
    name: "Грошова допомога для жителів Маріуполя ",
    description: "(обов’язкова прописка Маріуполя)",
    link: "https://docs.google.com/forms/d/1sySHBrDNi81CPH-CO_Rw6sKG6xZcoY3kMjX1TZ8rFiI/viewform?edit_requested=true",
  },
  {
    img: "logo",
    name: "Грошова компенсація витрат на ліки",
    description: "(обов’язкова прописка Маріуполя)",
    link: "https://airtable.com/shrB1NsxE1qkvLxq2",
  },
]

const humanitarianFunds = [
  {
    img: "logo",
    name: "ЄДопомога",
    link: "https://social.edopomoga.gov.ua",
  },
  {
    img: "logo",
    name: "Співдія",
    link: "https://spivdiia.org.ua",
  },

  {
    img: "logo",
    name: "БФ «Мама + Я»",
    link: "https://instagram.com/fond_mama_plus_me",
    description: "(писати їм у Дірект)",
  },
  {
    img: "logo",
    name: "БФ «Карітас Київ»",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSd-JFuOFkaWUYtxZPgw7SuG44ZczcNIndGov8sHD_yoCPCPVg/viewform",
  },
  {
    img: "logo",
    name: "БФ Вадима Столара",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeWI2jGBYZOX_eJO2FYNS067kshZdIu0hpI_cBC9l2G_pjtaw/alreadyresponded?fbclid=IwAR12XvVRuUJ04XCSPfwXXa7omuWqe1UVMC-l4fdSXRhAAobssBuiVhHxnIM",
  },
  {
    img: "logo",
    name: "БФ «Ембрейс»",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScOfEnpk9N25TEEZP31mxSPYrASkrHsR57pBPMNvuJOSoku7Q/alreadyresponded",
  },
  {
    img: "logo",
    name: "БФ Олександра Усика",
    link: "https://usykfoundation.org/uk/",
  },
  {
    img: "logo",
    name: "«Марш жінок»",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeIzHgYq3yo_w_gAS6FDDQW_zWIOqHKIvM46UiLoIirLsE2YA/closedform",
  },
  {
    img: "logo",
    name: "Жіночий рух «За майбутнє»",
    description: "(допомога дитячим харчуванням та підгузками)",
    link: "https://docs.google.com/forms/d/1973vuBVeht9MJvstJrpj4pNl-sTdS5V6DKw7x7cRBEU/viewform?edit_requested=true",
  },
  {
    img: "logo",
    name: "БФ «Віра у добро»",
    description: "(писати їм у Дірект)",
    link: "https://instagram.com/vira_dobro",
  },

  {
    img: "logo",
    name: "БФ «У матусиних долонях»",
    description: "(писати їм у Дірект)",
    link: "https://instagram.com/charityfoundation_ua",
  },
  {
    img: "logo",
    name: "«Так. Це штаб»",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdfyLKunC_4IGHMayKBUj0lzKlbRBqrPshvZFNaQ3b3jSWnlA/viewform",
  },
  {
    img: "logo",
    name: "«Є Надія – допомога під час війни» від християнської церкви «Перемога»",
    link: "https://victorychurch.org.ua/ye-nadiya-dopomoga",
  },
  {
    img: "logo",
    name: "Допомога мешканцям Луганської та Донецької областей",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSecwswVCDlBc_wdSdSPJDL6040cbEgESYQbCIj1QBMhIuv_cg/viewform",
  },

  {
    img: "logo",
    name: "CMS RACE",
    link: "https://cmshelp.in.ua",
  },
]

const OthersFunds = () => {
  const blank = "_blank"
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.container}>
          <div>
            <h2 className={styles.title}>ГРОШОВІ ФОНДИ:</h2>
            <ul className={styles.funds}>
              {financialFunds.map(
                ({ img, name, description, link, status, number }, index) => {
                  return (
                    <li key={index} className={styles.fund}>
                      <h3>{name}</h3>
                      {description && <p> {description}</p>}
                      {link && (
                        <a href={link} className={styles.link} target={blank}>
                          Реєстрація
                        </a>
                      )}

                      {status && <p> {status}</p>}
                      {number && <p> {number}</p>}
                    </li>
                  )
                }
              )}
            </ul>
          </div>
          <div className={styles.funds__container}>
            <h2>ГУМАНІТАРНІ ФОНДИ:</h2>
            <ul className={styles.funds}>
              {humanitarianFunds.map(
                ({ img, name, description, link }, index) => {
                  return (
                    <li key={index} className={styles.fund}>
                      <h3>{name}</h3>
                      {description && <p> {description}</p>}
                      {link && (
                        <a href={link} className={styles.link}>
                          Реєстрація
                        </a>
                      )}
                    </li>
                  )
                }
              )}
            </ul>
          </div>
        </div>
        <div className={styles.discriotion}>
          <p>Уважно читайте вимоги для подачі заяви у кожному фонді!</p>
          <p>На сайтах є перелік категорій людей, яким допомагає фонд.</p>
          <p> Давайте допомагати один одному!</p>
        </div>
      </Container>
    </Section>
  )
}

export default OthersFunds
