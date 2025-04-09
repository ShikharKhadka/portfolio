import React from "react";
import styles from "../project_showcase/project_showcase.module.css";
import Image from "next/image";

export const Projectshowcase = ({
  innerRef,
  animation,
}: {
  innerRef: React.RefObject<HTMLDivElement | null>;
  animation: boolean;
}) => {
  return (
    <div ref={innerRef} className={styles.body}>
      <div
        className={animation ? styles.animation : ""}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div className={styles.horizantaldivider}></div>
        <div className={"h1"}>Project Showcase</div>
      </div>
      <div className={`${styles.box} ${animation ? styles.animation : ""}`}>
        <div className={styles.box1}>
          <ImageComponent src={"/images/sample1.JPG"} />
        </div>
        <div className={styles.box2}>
          <ImageComponent src={"/images/sample1.JPG"} />
        </div>
        <div className={styles.box3}>
          <ImageComponent src={"/images/sample1.JPG"} />
        </div>
        <div className={styles.box4}>
          <ImageComponent src={"/images/sample1.JPG"} />
        </div>
        <div className={styles.box5}>
          <ImageComponent src={"/images/sample1.JPG"} />
        </div>
        <div className={styles.box6}>
          <ImageComponent src={"/images/sample1.JPG"} />
        </div>
        <div className={styles.box7}>
          <ImageComponent src={"/images/sample1.JPG"} />
        </div>
        <div className={styles.box8}>
          <ImageComponent src={"/images/sample1.JPG"} />
        </div>
      </div>
    </div>
  );
};

const ImageComponent = ({ src }: { src: string }) => {
  return (
    <div style={{ height: "100%" }}>
      <div className={styles.imgheight}>
        <Image
          className={styles.img}
          src={src}
          alt="Picture of the author"
          fill={true}
        />
      </div>
      <div className={styles.title}>
        <div className="h1" style={{ fontSize: "18px" }}>
          Revo
        </div>
        <div className="text">Sas Farmer Template</div>
      </div>
    </div>
  );
};
