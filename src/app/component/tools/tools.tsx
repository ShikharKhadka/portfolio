import React from "react";
import styles from "../tools/tools.module.css";
import Image from "next/image";
interface ToolsI {
  image: string;
  percentage: string;
  name: string;
}

export const Tools = () => {
  const capsuleList: ToolsI[] = [
    {
      image: "/next.svg",
      name: "Lorem Ipsum",
      percentage: "95%",
    },
    {
      image: "/next.svg",
      name: "Lorem Ipsum",
      percentage: "95%",
    },
    {
      image: "/next.svg",
      name: "Lorem Ipsum",
      percentage: "95%",
    },
    {
      image: "/next.svg",
      name: "Lorem Ipsum",
      percentage: "95%",
    },
    {
      image: "/next.svg",
      name: "Lorem Ipsum",
      percentage: "95%",
    },
    {
      image: "/next.svg",
      name: "Lorem Ipsum",
      percentage: "95%",
    },
  ];
  return (
    <div className={styles.body}>
      <div className={`${"h2"} ${"center"}`}>Exploring the tools</div>
      <div className={`${"h1"} ${"center"}`}>Behind My Work</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "70px",
        }}
      >
        {capsuleList.map((e, index) => (
          <div key={index}>
            <div className={styles.capsule}>
              <Image
                className={styles.img}
                src={e.image}
                alt="image"
                width={70}
                height={70}
              />
              <div className={styles.percent}>{e.percentage}</div>
            </div>
            <div style={{ textAlign: "center" }}>{e.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
