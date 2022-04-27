import React, { useContext } from 'react';
import { Context } from '../../../utils/context';
import Button from '../../Button';
import { useTranslation } from 'react-i18next';
import styles from './Menu.module.scss';

const Menu = ({ onToggleModal }) => {
  const { t, i18n } = useTranslation();

  const closeModal = () => (onToggleModal ? onToggleModal() : '');

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  const { aboutUs, achievements, teams, program, contacts, scrollSection } = useContext(Context);

  const getScrollTo = name => () => {
    scrollSection(name);
    closeModal();
  };

  return (
    <div className={styles.menu__container}>
      <ul className={styles.list__menu}>
        <li className={styles.item__menu}>
          <Button onClick={getScrollTo(aboutUs)} className={styles.item__btn}>
            {t('navigation.aboutUs')}
          </Button>
        </li>
        <li className={styles.item__menu}>
          <Button onClick={getScrollTo(achievements)} className={styles.item__btn}>
            {t('navigation.achievements')}
          </Button>
        </li>
        <li className={styles.item__menu}>
          <Button onClick={getScrollTo(program)} className={styles.item__btn}>
            {t('navigation.program')}
          </Button>
        </li>
        <li className={styles.item__menu}>
          <Button onClick={getScrollTo(teams)} className={styles.item__btn}>
            {t('navigation.team')}
          </Button>
        </li>
        <li className={styles.item__menu}>
          <Button onClick={getScrollTo(contacts)} className={styles.item__btn}>
            {t('navigation.contacts')}
          </Button>
        </li>
      </ul>
      <div className={styles.container__language}>
        {i18n.language === 'ua' ? (
          <Button onClick={() => changeLanguage('en')} className={styles.language}>
            EN
          </Button>
        ) : (
          <Button onClick={() => changeLanguage('ua')} className={styles.language}>
            UA
          </Button>
        )}
      </div>
    </div>
  );
};

export default Menu;
