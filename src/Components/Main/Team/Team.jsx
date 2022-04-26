import React, { useContext } from 'react';
import Container from '../../Container';
import Siromolot from '../../../image/team/Siromolot.jpg';
import Minaev from '../../../image/team/Minaev.jpg';
import Mukhoyan from '../../../image/team/Mukhoyan.jpg';
import Kusayko from '../../../image/team/Kusayko.jpg';
import Kobzev from '../../../image/team/Kobzev.jpg';
import Ignatiev from '../../../image/team/Ignatiev.jpg';
import Card from './Card';
import { useTranslation } from 'react-i18next';
import { Context } from '../../../utils/context';
import styles from './Team.module.scss';

const Team = () => {
  const { teams } = useContext(Context);
  const { t } = useTranslation();

  const allTeam = [
    {
      photo: Siromolot,
      name: t('section.team.Siromolot'),
      position: t('section.team.SiromolotPosition'),
    },
    {
      photo: Minaev,
      name: t('section.team.Minaev'),
      position: t('section.team.MinaevPosition'),
    },
    {
      photo: Mukhoyan,
      name: t('section.team.Mykhoyan'),
      position: t('section.team.MykhoyanPosition'),
    },
    {
      photo: Kusayko,
      name: t('section.team.Kysiko'),
      position: t('section.team.KysikoPosition'),
    },
    {
      photo: Kobzev,
      name: t('section.team.Kobzev'),
      position: t('section.team.KobzevPosition'),
    },
    {
      photo: Ignatiev,
      name: t('section.team.Ignatiev'),
      position: t('section.team.IgnatievPosition'),
    },
  ];

  return (
    <footer className={styles.footer} ref={teams}>
      <Container>
        <h2 className={styles.title}>{t('section.team.title')}</h2>
        <ul className={styles.team__list}>
          {allTeam.map(({ photo, name, position }, index) => (
            <Card photo={photo} name={name} position={position} key={index} />
          ))}
        </ul>
      </Container>
    </footer>
  );
};

export default Team;
