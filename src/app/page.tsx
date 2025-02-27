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
    <div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        {
          <div className={styles.curve}>
            {/* <Image
              loader={imageLoader}
              height="200"
              width="200"
              src="encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"
              alt="Owner"
              style={{
                position: "relative",
                // justifyContent: "Center",
                // justifyItems: "center",
                // left: "120px",
                top: "300px",
                // left: "200px", // Move 50px to the right
              }}
            /> */}
          </div>
        }
        <canvas
          ref={canvasRef}
          style={{
            width: "45%",
            height: "100vh",
          }}
        />
      </div>
    </div>
  );
};

export default CanvasExample;
