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
      title: "React Developer at Pioneer Associate(Currently Working)",
      description:
        "Developing responsive web app using Javascript, Nextjs, TypeScript and Rest APi for fetching data i.e AMS(Accounting Management System).",
      startDate: "2024",
      endDate: "",
    },
    {
      title: "Flutter Developer at Pioneer Associate(Mid level)",
      description:
        "Devloping cross platform app using flutter with dart sdk and Rest APi for fetching data i.e fintech, erp ",
      startDate: "2023",
      endDate: "",
    },
    {
      title: "Flutter Development at Prixa Technology (Junior)",
      description:
        "Devloping cross platform app using flutter with dart sdk and Rest APi for fetching data i.e. news app, tv app and testing apis ",
      startDate: "2022",
      endDate: "2023",
    },
    {
      title: "Flutter Development at Prixa Technology (Intern)",
      description:
        "Researching cross platform app using flutter with dart sdk and Rest APi for fetching data i.e. responsive desing, api intregration",
      startDate: "2022",
      endDate: "2022",
    },
    {
      title: "College Project(Final year Project)",
      description:
        "Research on software development with requirement analysis, sotfware architecture and development using java and firebase.Futsal Booking",
      startDate: "2021",
      endDate: "2021",
    },
  ];
  return (
    <div ref={innerref} className={styles.body}>
      <div className="h1" style={{ paddingBottom: "12px" }}>
        Experience
      </div>
      <div className={styles.heading}>
        <div className={`${styles.hcontent1} ${"h3"}`}>
          A Yearly snapshot of my career growth
        </div>
        <div className={styles.hcontent2}>
          An anual sumary that summirize my creative journey and development
          throughout the year.
        </div>
      </div>
      {academicData.map((e, index) => (
        <div key={index} className={styles.academic}>
          <div style={{ width: "100%" }}>
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
