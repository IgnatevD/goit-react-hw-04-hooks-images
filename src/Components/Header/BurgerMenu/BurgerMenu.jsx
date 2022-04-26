import React, { useEffect, useState } from 'react';
import Button from '../../Button';
import Svg from '../../Svg';
import Menu from '../Menu';

import styles from './BurgerMenu.module.scss';

const BurgerMenu = () => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  useEffect(() => {
    if (!isBurgerMenuOpen) {
      document.body.style.overflow = '';
    }
    if (isBurgerMenuOpen) {
      document.body.style.overflow = 'hidden';
    }
  }, [isBurgerMenuOpen]);

  const onToggleModal = () => setBurgerMenuOpen(prev => !prev);

  return (
    <div>
      <Button className={styles.btn__home} onClick={onToggleModal}>
        <Svg icon="#icon-menu" className={styles.menu} />
      </Button>

      {isBurgerMenuOpen && (
        <div className={styles.menu__container}>
          <Button className={styles.btn__close} onClick={onToggleModal}>
            <Svg icon="#icon-close" />
          </Button>
          <Menu onToggleModal={onToggleModal} />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
