import React from "react";
import styles from "./Packages.module.css";
import Package from "../PackageCard/PackageCard";

export default function Packages() {
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: "#282828",
          color: "white",
        }}
      >
        <div className={styles.sub_heading}>
          Empower Your Hackathon Journey with Libshare: Unleashing the Magic of
          Shared Code!
        </div>

        <div className={styles.package_heading}>Packages</div>
        <div className={styles.package_holder}>
          <Package name={"A package"} version={"v1.1"} />
          <Package name={"A package 1"} version={"v1.2"} />
          <Package name={"A package 2"} version={"v1.3"} />
          <Package name={"A package 3"} version={"v1.4"} />
          <Package name={"A package 4"} version={"v1.5"} />
          <Package name={"A package 5"} version={"v1.6"} />
        </div>
      </div>
    </>
  );
}
