import React from "react";
import styles from "../project_showcase/project_showcase.module.css";

export const Projectshowcase = () => {
  return (
    <div>
      <div>Project Showcase</div>
      <div className={styles.box}>
        <div className={styles.item1}>
          {/* <div className={styles.i1}>1</div>
          <div className={styles.i2}>2</div>
          <div className={styles.i3}>3</div>
          <div>4</div> */}
          <div className={styles.i1}>
            <div className={styles.g1}>1</div>
            <div className={styles.g2}>2</div>
            <div className={styles.g3}>3</div>
            <div className={styles.g4}>4</div>
            {/* <div className={styles.g5}>5</div>
            <div className={styles.g6}>6</div> */}
          </div>
          <div className={styles.i2}>6</div>
        </div>
        <div className={styles.item2}>2</div>
        <div className={styles.item3}>3</div>

        <div className={styles.item4}>4</div>
        {/* <div className={styles.item5}>5</div>
        <div className={styles.item6}>6</div> */}

        {/* <div className={styles.box7}>7</div>
        <div className={styles.box8}>8</div>
        <div className={styles.box9}>9</div> */}
      </div>
    </div>
  );
};
