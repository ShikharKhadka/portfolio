import React from "react";
import styles from "../component/experience.module.css";
import Image from "next/image";

export const Experience = () => {
  const list = ["Text", "Text", "Text", "Text"];
  const imageLoader = ({
    src,
    width,
    quality,
  }: {
    src: string;
    width: number;
    quality?: number;
  }) => {
    return `https://${src}?w=${width}&q=${quality || 75}`;
  };

  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ";
  return (
    <div className={styles.body}>
      <div
        style={{
          marginBottom: "60px",
        }}
      >
        Lorem Ipsum
      </div>
      <div className={styles.container}>
        <div className={`${styles.containercard} ${styles.leftcard}`}>
          {list.map((e, index) => (
            <div key={index}>
              {index % 2 == 0 ? (
                <div
                  key={index}
                  className={`${styles.card} ${styles.firstcard} ${styles.boxshadowcard} `}
                >
                  <div style={{ display: "flex", justifyContent: "start" }}>
                    {text}
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className={`${styles.card} ${styles.firstcard} ${styles.whitecard}`}
                ></div>
              )}
            </div>
          ))}
        </div>

        <div className={`${styles.divider}`}>
          {list.map((e, index) => (
            <div key={index}>
              {
                <div key={index} className={styles.dividercontainer}>
                  <div className={styles.circle}>
                    <Image
                      loader={imageLoader}
                      src="encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7_g32AJh8IkT9JVSPaYiHEMFyaLHXzxYXA&s"
                      alt="Picture of the author"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
              }
            </div>
          ))}
        </div>

        <div className={`${styles.containercard} ${styles.rightcard}`}>
          {list.map((e, index) => (
            <div key={index}>
              {!(index % 2 == 0) ? (
                <div
                  key={index}
                  className={`${styles.card} ${styles.secondcard} ${styles.boxshadowcard}`}
                >
                  {text}
                </div>
              ) : (
                <div
                  key={index}
                  className={`${styles.card} ${styles.secondcard} ${styles.whitecard}`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
