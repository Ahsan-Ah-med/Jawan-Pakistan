import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.box}>
        <div className={styles.logo}>
          <svg
            className={styles.svg}
            viewBox="0 0 94 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <span>Login</span>
          </svg>
        </div>
      </div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
    </div>
  );
};

export default Loader;
