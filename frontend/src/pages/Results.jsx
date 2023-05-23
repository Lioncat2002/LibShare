import React from "react";
import PackageResult from "../components/PackageResult/PackageResult";
import styles from './Results.module.css'
export default function Results() {
  const SearchString = "yollo";
  return (
    <>
      <main className={styles.main}>
        <span className={styles.bold}>Search Results</span><span className={styles.grey}>for {SearchString} </span>
        <div className={styles.results_container} >
        <PackageResult
          name={"packageeeees"}
          info={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita recusandae atque doloribus harum molestiae! Vitae laboriosam nesciunt ad eum libero provident. Minus neque magnam, modi non dignissimos similique possimus at"
          }

        />
                <PackageResult
          name={"packageeeees"}
          info={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita recusandae atque doloribus harum molestiae! Vitae laboriosam nesciunt ad eum libero provident. Minus neque magnam, modi non dignissimos similique possimus at"
          }
          
        />
                <PackageResult
          name={"packageeeees"}
          info={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita recusandae atque doloribus harum molestiae! Vitae laboriosam nesciunt ad eum libero provident. Minus neque magnam, modi non dignissimos similique possimus at"
          }

          
          
        />
        </div>
      </main>
    </>
  );
}
