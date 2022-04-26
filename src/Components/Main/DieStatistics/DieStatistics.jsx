import React from 'react';
import Svg from '../../Svg/Svg';
import styles from './DieStatistics.module.scss';

const DieStatistics = ({ number, icon, description, className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <p className={styles.number}>{number}</p>
      <Svg icon={`#${icon}`} className={styles.icon} />
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default DieStatistics;
