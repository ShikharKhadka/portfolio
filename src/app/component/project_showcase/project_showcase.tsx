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
          <ImageComponent
            src={"/projects/portfolio.JPG"}
            title="Portfolio"
            discription="This is my professional experience"
          />
        </div>
        <div className={styles.box2}>
          <ImageComponent
            src={"/projects/ams.JPG"}
            title="Accounting Management Sysytem(AMS)"
            discription="A software that tracks inventory, sales, purchase and for IRD"
          />
        </div>
        <div className={styles.box3}>
          <ImageComponent
            src={"/projects/janaastha.JPG"}
            title="JanaAstha"
            discription="News Application "
          />
        </div>
        <div className={styles.box4}>
          <ImageComponent
            src={"/projects/newstalk.JPG"}
            title="News Talk"
            discription="News Application with similar to tiktok"
          />
        </div>
        <div className={styles.box5}>
          <ImageComponent
            src={"/projects/ocw.JPG"}
            title="Online Check Writer"
            discription="Fintech Application And Cloud Banking"
          />
        </div>
        <div className={styles.box6}>
          <ImageComponent
            src={"/projects/remainder.JPG"}
            title="Remainder App"
            discription="Personal Project with calendar and remainder"
          />
        </div>
        <div className={styles.box7}>
          <ImageComponent
            src={"/projects/remainder_home.JPG"}
            title="Remainder App"
            discription="Personal Project with calendar and remainder"
          />
        </div>
        <div className={styles.box8}>
          <ImageComponent
            src={"/projects/cosys.JPG"}
            title="Cosys Mobile Manking"
            discription="Fintech Application"
          />
        </div>
      </div>
    </div>
  );
};

const ImageComponent = ({
  src,
  title,
  discription,
}: {
  src: string;
  title: string;
  discription: string;
}) => {
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
          {title}
        </div>
        <div className="text">{discription}</div>
      </div>
    </div>
  );
};
