"use client";

// import Image from "next/image";
import React, { useRef, useEffect } from "react";
import styles from "./page.module.css";
import { Experience } from "./component/experience/experience";
import { Projectshowcase } from "./component/project_showcase/project_showcase";

const CanvasExample = () => {
  const menuList = ["Lorem", "Ipsum", "Lorem ", "Ipsum"];
  // const menuList = ["Home", "Education", "Experience", "Skills"];

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas != null) {
      const context = canvas.getContext("2d");

      // Set canvas size
      canvas.width = 700;
      canvas.height = 900;

      if (context != null) {
        context.beginPath();
        context.moveTo(0, 0);
        context.bezierCurveTo(0, 1200, 900, 800, 800, 700);
        context.closePath(); // Close the shape

        // context.quadraticCurveTo(0, 700, 900, 800);
        // context.lineWidth = 3;
        const gradient = context.createLinearGradient(900, 900, 0, 0);

        gradient.addColorStop(0, "grey"); // Top color
        gradient.addColorStop(1, "white");
        context.fillStyle = gradient; // Change color as needed
        context.fill();

        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(900, 0);
        context.lineTo(900, 900);
        context.closePath(); // Close the shape

        gradient.addColorStop(0, "grey"); // Top color
        gradient.addColorStop(1, "white");
        context.fillStyle = gradient;
        context.fill();
      }
    }
  }, []);

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
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "end", // Aligns everything to the right
          alignItems: "center", // Optional: Aligns vertically in the
        }}
      >
        <canvas ref={canvasRef} className={styles.semicirclecurve} />
        <div className={styles.curve}></div>
        <div
          style={{
            position: "absolute",
            left: "100px",
            width: "50%",
            height: "350px",
            top: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              top: "10px",
              position: "relative",
              gap: "100px",
            }}
          >
            {menuList.map((e, index) => (
              <div className={styles.menu} key={index}>
                {e}
              </div>
            ))}
          </div>
          <div>
            <div className="h1">Lorem Ipsum</div>
            <div
              className="text"
              style={{
                margin: "14px 0 0 0",
              }}
            >
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
              book is a treatise on the theory of ethics, very popular during
              the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor
              sit amet.., comes from a line in section 1.10.32
            </div>
          </div>
        </div>
      </div>
      <Experience />
      <Projectshowcase />
    </div>
  );
};

export default CanvasExample;
