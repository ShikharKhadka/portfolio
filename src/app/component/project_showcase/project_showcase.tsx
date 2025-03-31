import React from "react";
import styles from "../project_showcase/project_showcase.module.css";
import Image from "next/image";

export const Projectshowcase = () => {
  const img1 =
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600";
  const img2 =
    "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600";
  const img3 =
    "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600";
  const img4 =
    "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600";
  const img5 =
    "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=600";
  const img6 =
    "https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=600";
  const img7 =
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600";
  const img8 =
    "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600";
  const img9 =
    "https://images.pexels.com/photos/39574/flower-exotic-colorful-pink-39574.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (
    <div>
      <div className={styles.body}> Lorem Ipsum</div>
      <div className={styles.box}>
        <div className={styles.item1}>
          <div className={styles.i1}>
            <div className={styles.g1}>
              <Image
                className={styles.img}
                src={img1}
                alt="Picture of the author"
                fill={true}
              />
            </div>
            <div className={styles.g2}>
              <Image
                className={styles.img}
                src={img2}
                alt="Picture of the author"
                fill={true}
              />
            </div>
            <div className={styles.g3}>
              <Image
                className={styles.img}
                src={img3}
                alt="Picture of the author"
                fill={true}
              />
            </div>
            <div className={styles.g4}>
              <Image
                className={styles.img}
                src={img4}
                alt="Picture of the author"
                fill={true}
              />
            </div>
            <div className={styles.g5}>
              <Image
                className={styles.img}
                src={img5}
                alt="Picture of the author"
                fill={true}
              />
            </div>
            <div className={styles.g6}>
              <Image
                className={styles.img}
                src={img6}
                alt="Picture of the author"
                fill={true}
              />
            </div>
          </div>
          <div className={styles.i2g2}>
            <div className={styles.g6}>
              <Image
                className={styles.img}
                src={img6}
                alt="Picture of the author"
                fill={true}
              />
            </div>
            <div className={styles.g6}>
              <Image
                className={styles.img}
                src={img2}
                alt="Picture of the author"
                fill={true}
              />
            </div>
          </div>
        </div>
        <div className={styles.item2}>
          <Image
            className={styles.img}
            src={img6}
            alt="Picture of the author"
            fill={true}
          />
        </div>
        <div className={styles.item3}>
          <Image
            className={styles.img}
            src={img4}
            alt="Picture of the author"
            fill={true}
          />
        </div>

        <div className={styles.item4}>
          <Image
            className={styles.img}
            src={img1}
            alt="Picture of the author"
            fill={true}
          />
        </div>
      </div>
    </div>
  );
};
