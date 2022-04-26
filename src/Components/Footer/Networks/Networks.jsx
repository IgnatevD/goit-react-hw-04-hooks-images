import React from 'react';
import Svg from '../../Svg';
import styles from './Networks.module.scss';

const Networks = ({ tagrget, link, icon, name }) => {
  return (
    <li className={styles.network__item}>
      <a href={link} target={tagrget} title={link} className={styles.network__link}>
        <Svg icon={icon} className={styles.link__icon} />
        <p className={styles.network__name}> {name}</p>
      </a>
    </li>
  );
};

export default Networks;
