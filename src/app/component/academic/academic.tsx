import React from "react";
import styles from "../academic/academic.module.css";

interface AcademicData {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

export const Academic = ({
  innerref,
}: {
  innerref: React.RefObject<HTMLDivElement | null>;
}) => {
  const academicData: AcademicData[] = [
    {
      title: "What is Lorem Ipsum?",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      startDate: "2015",
      endDate: "2017",
    },
    {
      title: "What is Lorem Ipsum?",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      startDate: "2015",
      endDate: "2017",
    },
    {
      title: "What is Lorem Ipsum?",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      startDate: "2015",
      endDate: "2017",
    },
    {
      title: "What is Lorem Ipsum?",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      startDate: "2015",
      endDate: "2017",
    },
    {
      title: "What is Lorem Ipsum?",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      startDate: "2015",
      endDate: "2017",
    },
    {
      title: "What is Lorem Ipsum?",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      startDate: "2015",
      endDate: "2017",
    },
  ];
  return (
    <div ref={innerref} className={styles.body}>
      <div className="h1" style={{ paddingBottom: "12px" }}>
        Lorem Ipsum
      </div>
      <div className={styles.heading}>
        <div className={`${styles.hcontent1} ${"h2"}`}>
          Lorem IpsumLorem Ipsum is a long established fact that a reader will
        </div>
        <div className={styles.hcontent2}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </div>
      </div>
      {academicData.map((e, index) => (
        <div key={index} className={styles.academic}>
          <div>
            <div className={styles.academictext}>{e.title}</div>
            <div className={styles.academicdescription}>{e.description}</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className={styles.academicyear}>{e.startDate}</div>
            <div className={styles.dash}> {"-"} </div>
            <div className={styles.academicendyear}>{e.endDate}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
