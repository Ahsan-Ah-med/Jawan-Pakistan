import React from 'react';
import styles from './Header.module.css';

const Header = ({ logo }) => {
  
  return (
    <>
      <div className={styles.header}>
        <a className={styles.logo} href='/'><img src={logo} /></a>
        <div className={styles.menu}>
          <ul className={styles.ul}>
            <li>Home
              <ul className={styles.submenu}>
                <li>Home One</li>
                <li>Home Two</li>
                <li>Home Three</li>
              </ul>
            </li>
            <li>Pages
              <ul className={styles.submenu}>
                <li>About</li>
                <li>Instructor</li>
                <li>Profile</li>
                <li>Login</li>
                <li>Signup</li>
                <li>Events</li>
              </ul>
            </li>
            <li>Course
              <ul className={styles.submenu}>
                <li>Course</li>
                <li>Right Sidebar</li>
                <li>Course List</li>
                <li>Course single</li>
              </ul>
            </li>
            <li>Blog
              <ul className={styles.submenu}>
                <li>Blog</li>
                <li>Blog Single</li>
              </ul>
            </li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header