import React from 'react';
import Hero from './Hero';

import Team from './Team';
import AboutUs from './AboutUs';
import Program from './Program';
import Achievements from './Achievements';
import styles from './Main.module.scss';

// const LoginPage = lazy(() =>
//   import('../../pages/LoginPage/LoginPage' /* webpackChunkName: "login-page" */),
// );

const Main = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <AboutUs />
      <Achievements />
      <Program />
      <Team />
    </main>
  );
};

export default Main;
