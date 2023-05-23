import React from "react";
import styles from "./SearchBar.module.css";
export default function SearchBar() {
  return (
    <>
      <input
        type="text"
        className={styles.searchbar}
        placeholder="Search for Packages"
      />
    </>
  );
}
