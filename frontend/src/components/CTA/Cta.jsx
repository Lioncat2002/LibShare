import React from 'react'
import styles from './Cta.module.css'
import SearchBar from '../Searchbar/SearchBar'

export default function Cta() {
  return (
    <>
     <SearchBar/>
      <div className={styles.button_holder}>
        <a href="" className={styles.install_button}>
          Install
        </a>
        <a href="" className={styles.gettingstarted_button}>
          Getting started
        </a>
      </div>
    </>
  )
}
