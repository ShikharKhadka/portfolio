"use client";

// import Image from "next/image";
import React, { useRef, useEffect } from "react";
import styles from "./page.module.css";

const CanvasExample = () => {
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

        // context.quadraticCurveTo(0, 700, 900, 800);
        context.strokeStyle = "blue";
        context.lineWidth = 3;
        context.stroke();
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
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          backgroundColor: "red",
        }}
      >
        <canvas ref={canvasRef} className={styles.semicirclecurve} />
        <div className={styles.curve}></div>
      </div>
    </div>
  );
};

export default CanvasExample;
