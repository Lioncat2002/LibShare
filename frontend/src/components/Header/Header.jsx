import React from 'react'
import styles from "./Header.module.css";
export default function Header() {
  return (
    <>
    <div className={styles.navbar}>
          <div className={styles.navbar_element}>LibShare</div>
          <div className={styles.navbar_element}>Browse all packages</div>
        </div>
        <div className={styles.heading}>
          The LibShare Distribution Package registry
        </div>
    </>
  )
}
