import React from "react";
import styles from "../experience/experience.module.css";
import Image from "next/image";

interface EducationI {
  level: string;
  college: string;
  duration: string;
  location: string;
}

export const Experience = ({
  innerref,
  animation,
}: {
  innerref: React.RefObject<HTMLDivElement | null>;
  animation: boolean;
}) => {
  const educationList: EducationI[] = [
    {
      level: "Bachelor in Information Technology ",
      college: "Isligton College, London Metropolitan",
      duration: "2017-2021",
      location: "Hattisar,Kathmandu",
    },
    {
      level: "Higher Secondary Level(+2)",
      college: "Global College of Management",
      duration: "2015-2016",
      location: "Old Baneshwor,Kathmandu",
    },
    {
      level: "Secondary Level",
      college: "Tungram International Academy",
      duration: "2010-2014",
      location: "Hattigawuda,Kathmandu",
    },
  ];
  const iconList: string[] = ["/education.png", "/two-books.png", "/book.png"];

  // const imageLoader = ({
  //   src,
  //   width,
  //   quality,
  // }: {
  //   src: string;
  //   width: number;
  //   quality?: number;
  // }) => {
  //   return `https://${src}?w=${width}&q=${quality || 75}`;
  // };

  return (
    <div ref={innerref} className={styles.body}>
      {animation && (
        <>
          <div
            className={`h1 ${styles.heading} ${
              animation ? styles.animate : ""
            }`}
          >
            <div> Education</div>
            <div className={styles.horizantaldivider} />
          </div>
          <div className={styles.container}>
            <div className={`${styles.containercard}`}>
              {educationList.map((e, index) => (
                <div key={index}>
                  {index % 2 == 0 ? (
                    <div
                      key={index}
                      className={`${styles.card} ${styles.firstcard} ${
                        styles.boxshadowcard
                      } ${animation ? styles.animate : ""} `}
                    >
                      <div className={styles.cardHeading}>{e.level}</div>
                      <div className={styles.cardcollegeName}>{e.college}</div>
                      <div className={styles.cardcollegeLocation}>
                        {e.duration}
                      </div>
                      <div className={styles.cardcollegeLocation}>
                        {e.location}
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
              {iconList.map((e, index) => (
                <div key={index}>
                  {
                    <div key={index} className={styles.dividercontainer}>
                      <div className={styles.circle}>
                        <Image
                          className="img"
                          src={e}
                          alt="Picture of the author"
                          width={50}
                          height={50}
                          color="red"
                        />
                      </div>
                    </div>
                  }
                </div>
              ))}
            </div>
            <div className={`${styles.containercard} ${styles.rightcard}`}>
              {educationList.map((e, index) => (
                <div key={index}>
                  {!(index % 2 == 0) ? (
                    <div
                      key={index}
                      className={`${styles.card} ${styles.secondcard} ${
                        styles.boxshadowcard
                      } ${animation ? styles.animate : ""}`}
                    >
                      <div className={styles.cardHeading}>{e.level}</div>
                      <div className={styles.cardcollegeName}>{e.college}</div>
                      <div className={styles.cardcollegeLocation}>
                        {e.duration}
                      </div>
                      <div className={styles.cardcollegeLocation}>
                        {e.location}
                      </div>
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
        </>
      )}
    </div>
  );
};
