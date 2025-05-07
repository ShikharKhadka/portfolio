import Image from "next/image";
import React from "react";
import styles from "../loader/loader.module.css";

export const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        className={styles.loader}
        src="/logo.png"
        height={400}
        width={400}
        alt="Loader"
      ></Image>
    </div>
  );
};
