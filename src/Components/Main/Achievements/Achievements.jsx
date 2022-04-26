import React, { useContext } from 'react';
import { Context } from '../../../utils/context';
import Container from '../../Container';
import DieStatistics from '../DieStatistics/DieStatistics';
import humanitarianAid from '../../../image/pictures/humanitarianAid.png';
import peopleHelp from '../../../image/pictures/peopleHelp.png';

import { useTranslation } from 'react-i18next';
import styles from './Achievements.module.scss';

const Achievements = () => {
  const { t } = useTranslation();
  const { achievements } = useContext(Context);
  return (
    <section className={styles.section} ref={achievements}>
      <Container>
        <h2 className={styles.title}>{t('section.achievements.title')}</h2>
        <p className={styles.description}>{t('section.achievements.description')}</p>

        <ul className={styles.about__list}>
          <li className={styles.about__item}>
            <DieStatistics
              number="6 245"
              icon="icon-headphones"
              description={t('section.achievements.helpFamali')}
              className={styles.item__container}
            />
          </li>
          <li className={styles.about__item}>
            <DieStatistics
              number="19 376"
              icon="icon-home"
              description={t('section.achievements.humanitarianHelp')}
              className={styles.item__container}
            />
          </li>
          <li className={styles.about__item}>
            <DieStatistics
              number="> 72 000"
              icon="icon-user"
              description={t('section.achievements.organizedLunch')}
              className={styles.item__container}
            />
          </li>
        </ul>
        <div>
          <img
            src={humanitarianAid}
            alt="Команда Жовтой допоги"
            className={styles.achievements__help}
          />
        </div>
        <div className={styles.container__img}>
          <h2 className={styles.title}>{t('section.achievements.titleHelp')}</h2>
          <img src={peopleHelp} alt="Допомогли харків’янам" className={styles.peopleHelp} />
        </div>
      </Container>
    </section>
  );
};

export default Achievements;
