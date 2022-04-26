import React from 'react';

import sprite from '../../image/svg/sprite.svg';

import styles from './Svg.module.scss';

const Svg = ({ icon, className = '' }) => {
  return (
    <svg className={`${styles.icon} ${className}`}>
      <use href={sprite + icon} />
    </svg>
  );
};

export default Svg;
