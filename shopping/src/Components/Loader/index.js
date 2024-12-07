import React from "react";
import styles from "./index.module.scss";

const Loading = () => {
  return (
    <div className={styles.main}>
      <div className={styles.newtonsCradle}>
        <div className={styles.newtonsCradleDot}></div>
        <div className={styles.newtonsCradleDot}></div>
        <div className={styles.newtonsCradleDot}></div>
        <div className={styles.newtonsCradleDot}></div>
      </div>
    </div>
  );
};

export default Loading;
