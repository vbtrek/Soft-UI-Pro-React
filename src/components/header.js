import React from 'react'
import { Link } from 'react-router-dom'

import PrimaryPinkButton from './primary-pink-button'
import projectStyles from '../style.module.css'
import styles from './header.module.css'

const Header = () => {
  return (
    <div data-role="Header" className={styles['Header']}>
      <nav className={styles['Nav']}>
        <div className={styles['container']}>
          <Link
            to="/"
            className={` ${styles['navlink']} ${projectStyles['large']} `}
          >
            Soft UI Design System
          </Link>
          <div className={styles['Menu']}>
            <Link
              to="/"
              className={` ${styles['navlink1']} ${projectStyles['large']} `}
            >
              Home
            </Link>
            <Link
              to="/profile"
              className={` ${styles['navlink2']} ${projectStyles['large']} `}
            >
              Profile
            </Link>
            <Link
              to="/coming-soon"
              className={` ${styles['navlink3']} ${projectStyles['large']} `}
            >
              Coming Soon
            </Link>
          </div>
          <div className={styles['container1']}>
            <div className={styles['container2']}>
              <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
            </div>
            <div data-type="BurgerMenu" className={styles['BurgerMenu']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div data-type="MobileMenu" className={styles['MobileMenu']}>
        <div className={styles['Top']}>
          <Link
            to="/"
            className={` ${styles['navlink4']} ${projectStyles['large']} `}
          >
            Soft UI Design System
          </Link>
          <div data-type="CloseMobileMenu" className={styles['CloseMenu']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className={styles['Mid']}>
          <div className={styles['Menu1']}>
            <Link
              to="/"
              className={` ${styles['navlink5']} ${projectStyles['large']} `}
            >
              Home
            </Link>
            <Link
              to="/profile"
              className={` ${styles['navlink6']} ${projectStyles['large']} `}
            >
              Profile
            </Link>
            <Link
              to="/coming-soon"
              className={` ${styles['navlink7']} ${projectStyles['large']} `}
            >
              Coming Soon
            </Link>
          </div>
        </div>
        <div className={styles['Bot']}>
          <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
        </div>
      </div>
    </div>
  )
}

export default Header
