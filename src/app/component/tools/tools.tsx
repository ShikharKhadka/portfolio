import React, { useEffect, useRef, useState } from "react";
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
      image: "/icons/flutter.svg",
      name: "Flutter",
      percentage: "95%",
    },
    {
      image: "/icons/react.png",
      name: "React",
      percentage: "95%",
    },
    {
      image: "/icons/html-5.svg",
      name: "Html/Css",
      percentage: "95%",
    },
    {
      image: "/icons/nextjs.svg",
      name: "Next.js",
      percentage: "95%",
    },
    {
      image: "/icons/api.svg",
      name: "Rest Api",
      percentage: "95%",
    },
    {
      image: "/icons/java-script.png",
      name: "JavaScript",
      percentage: "95%",
    },
  ];

  const cardRef = useRef<HTMLDivElement | null>(null);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      if (animation || !cardRef.current) return;
      const cardposition = cardRef.current.getBoundingClientRect().top;
      const topCard = window.innerHeight;
      if (cardposition < topCard - 100) {
        setAnimation(true);
      }
    };
    window.addEventListener("scroll", handelScroll);
    handelScroll();
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, [animation]);
  return (
    <div ref={cardRef} className={styles.body}>
      <div
        className={`${styles.dividercontainer} ${
          animation ? styles.heading : ""
        }`}
      >
        <div className={`${styles.divider}`}></div>
        <div className={`${"h2"} ${"center"}`}>Exploring the tools</div>
        <div className={`${"h1"} ${"center"}}`}>Behind My Work</div>
        <div className={styles.divider}></div>
      </div>

      <div
        className={`${animation ? styles.box : ""}`}
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "70px",
          flexFlow: "wrap",
        }}
      >
        {capsuleList.map((e, index) => (
          <div key={index}>
            <div className={`${styles.capsule}`}>
              <Image
                className={styles.img}
                src={e.image}
                alt="image"
                height={30}
                width={100}
              />
              <div className={styles.percent}>{e.percentage}</div>
            </div>
            <div
              className="h2"
              style={{
                textAlign: "center",
              }}
            >
              {e.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
