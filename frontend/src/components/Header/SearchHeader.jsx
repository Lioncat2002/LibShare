import React from 'react'
import SearchBar from '../Searchbar/SearchBar'
import styles from './SearchHeader.module.css'

export default function SearchHeader() {
  return (
    <>
    <nav className={styles.header} >
        <h4>
        PC DISTRIBUTION- PKG
        </h4>

        <SearchBar />


        <h4>Browse All Packages</h4>
    </nav>

    
    
    </>
  )
}
