import React from 'react';
import Button from '../../../Button';
import { useTranslation } from 'react-i18next';

import styles from './Card.module.scss';

const Card = ({ photo, name, position }) => {
  const { t } = useTranslation();
  return (
    <li className={styles.item}>
      <div className={styles.container_img}>
        <img className={styles.img} src={photo} alt={name} />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.position}> {position}</p>
      <Button className={styles.btn_more}> {t('section.team.more')}</Button>
    </li>
  );
};

export default Card;
