import React from 'react'
import styles from './PackageResult.module.css'
import Install from './Install'

export default function PackageResult({name,info}) {
  return (
    <>
    <div className={styles.wrapper}>
    <div className={styles.result}>
        <h2 className={styles.heading}>{name}</h2>
        <p>{info}</p>
    </div>
    <Install />
    </div>
    
    </>
  )
}
