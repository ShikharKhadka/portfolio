import React, { useEffect, useRef } from "react";
import styles from "../others/others.module.css";
import SkillComponent from "./component/skills";
import { ContantInfo } from "./component/contant_info";
import { Media } from "./component/media";

export const Others = ({
  innerRef,
  animation,
}: {
  innerRef: React.RefObject<HTMLDivElement | null>;
  animation: boolean;
}) => {
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
    <div ref={innerRef} className={styles.body}>
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
      <div className={styles.content}>
        <div className={`${"vcenter"}`} style={{ flex: 3 }}>
          <SkillComponent
            animation={animation}
            label="Flutter"
            className={`${styles.box} ${
              animation ? styles.firstanimation : ""
            } ${"hcenter"} ${"h1"} `}
            percent="95"
          />
          <SkillComponent
            animation={animation}
            label="Dart"
            className={`${styles.box} ${
              animation ? styles.secondanimation : ""
            } ${"hcenter"} ${"h1"} `}
            percent="95"
          />
          <SkillComponent
            animation={animation}
            label="React"
            className={`${styles.box} ${
              animation ? styles.thirdanimation : ""
            } ${"hcenter"} ${"h1"} `}
            percent="90"
          />
          <SkillComponent
            animation={animation}
            label="JavaScript"
            className={`${styles.box} ${
              animation ? styles.fourthanimation : ""
            } ${"hcenter"} ${"h1"} `}
            percent="88"
          />
          <SkillComponent
            animation={animation}
            label="Rest Api"
            className={`${styles.box} ${
              animation ? styles.fifthanimation : ""
            } ${"hcenter"} ${"h1"} `}
            percent="95"
          />
          <SkillComponent
            animation={animation}
            label="Next js"
            className={`${styles.box} ${
              animation ? styles.sixthanimation : ""
            } ${"hcenter"} ${"h1"} `}
            percent="90"
          />
          <SkillComponent
            animation={animation}
            label="Typescript"
            className={`${styles.box} ${
              animation ? styles.seventhanimation : ""
            } ${"hcenter"} ${"h1"} `}
            percent="95"
          />
        </div>
        <div className={styles.vline}>
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
