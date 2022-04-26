import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Hero.module.scss';

const Hero = () => {
  const { i18n } = useTranslation();
  const classHero = i18n.language === 'ua' ? styles.hero : styles.hero__en;
  return <section className={classHero}></section>;
};

export default Hero;
