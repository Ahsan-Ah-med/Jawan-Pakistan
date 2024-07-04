import React from 'react';
import styles from './Announcement.module.css';

const Announcement = ({tel, mail, facebook, linkedIn, twitter,}) => {
  return (
    <>
      <div className={styles.announcement_bar}>
        <div className={styles.announcement_bar_inner}>
          <div className={styles.left}>
            <a href="tel:+13344999999">
              <img src={tel} alt="" width={'100%'} height={''} />
              (+1) 3344 999 999
            </a>
            <a href="mailto:info@reactheme.com">
              <img src={mail} alt="" width={'100%'} height={''} />
              info@reactheme.com
            </a>
          </div>
          <div className={styles.rigth}>
            <a href='#'><img src={facebook} width={'100%'} height={''} /></a>
            <a href='#'><img src={linkedIn} width={'100%'} height={''} /></a>
            <a href='#'><img src={twitter} width={'100%'} height={''} /></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Announcement