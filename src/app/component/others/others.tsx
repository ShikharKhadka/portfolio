import React, { useEffect, useRef } from "react";
import styles from "../others/others.module.css";
import SkillComponent from "./component/skills";
import { ContantInfo } from "./component/contant_info";
import { Media } from "./component/media";

export const Others = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    const context = canvasRef.current.getContext("2d");
    canvas.height = 500;
    canvas.width = 200; // or whatever dynamic size you need

    if (context != null) {
      context.beginPath();
      context.moveTo(200, 0);
      context.lineTo(20, 900);
      context.stroke();
    }
  }, []);
  return (
    <div className={styles.body}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div className="h1">Skills</div>
        <div className={styles.horizantaldivider} style={{ flex: 2 }}></div>
        <div className="h1">Contact</div>
        <div className={styles.horizantaldivider}></div>
      </div>
      <div style={{ display: "flex" }}>
        <div className={`${"vcenter"}`} style={{ flex: 3 }}>
          <SkillComponent
            label="Flutter"
            className={`${styles.box} ${
              styles.firstanimation
            } ${"hcenter"} ${"h1"} `}
            percent="95"
          />
          <SkillComponent
            label="Dart"
            className={`${styles.box} ${
              styles.secondanimation
            } ${"hcenter"} ${"h1"} `}
            percent="95"
          />
          <SkillComponent
            label="React"
            className={`${styles.box} ${
              styles.thirdanimation
            } ${"hcenter"} ${"h1"} `}
            percent="90"
          />
          <SkillComponent
            label="JavaScript"
            className={`${styles.box} ${
              styles.fourthanimation
            } ${"hcenter"} ${"h1"} `}
            percent="88"
          />
          <SkillComponent
            label="Rest Api"
            className={`${styles.box} ${
              styles.fifthanimation
            } ${"hcenter"} ${"h1"} `}
            percent="95"
          />
          <SkillComponent
            label="Next js"
            className={`${styles.box} ${
              styles.sixthanimation
            } ${"hcenter"} ${"h1"} `}
            percent="90"
          />
          <SkillComponent
            label="Typescript"
            className={`${styles.box} ${
              styles.seventhanimation
            } ${"hcenter"} ${"h1"} `}
            percent="95"
          />
        </div>
        <div style={{}}>
          <canvas ref={canvasRef}></canvas>
        </div>
        <div
          style={{
            flex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <ContantInfo name="Email" value="shikharkhadka98@gmail.com" />
            <ContantInfo name="Contact No" value="9860478968" />
            <ContantInfo name="Contact Name" value="Shikhar Khadka" />
            <ContantInfo name="Gender" value="Male" />
            <Media />
          </div>
        </div>
      </div>
    </div>
  );
};
