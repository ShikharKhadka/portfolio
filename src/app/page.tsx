"use client";

// import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import styles from "./page.module.css";
import { Experience } from "./component/experience/experience";
import { Academic } from "./component/academic/academic";
import { Tools } from "./component/tools/tools";
import Image from "next/image";

const CanvasExample = () => {
  const menuList = ["Home", "Experience", "Education ", "Tools"];
  const imagePath = [
    "/menu/man.png",
    "/education.png",
    "/menu/briefcase.png",
    "/menu/settings.png",
    // "/menu/project",
  ];
  // const menuList = ["Home", "Education", "Experience", "Skills"];

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [i, seti] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [position, setposition] = useState({
    index: 0,
    position: 0,
  });

  const onClick = (index: number) => {
    seti(index);
    if (i == index) {
      window.scrollTo({ behavior: "smooth", top: position.position });
    }
  };
  useEffect(() => {
    const handelScroll = () => {
      if (!bodyRef.current) return;
      console.log("working");

      const cardPosition = bodyRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardPosition < windowHeight - 100) {
        setAnimation(true);
      }
      setposition({ ...position, position: cardPosition });
      console.log(cardPosition);
    };
    window.addEventListener("scroll", handelScroll);
    handelScroll();
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, [animation]);
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
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          width: "5%",
          height: "100vh",
        }}
      >
        <div
          style={{
            border: "2px solid rgba(75, 0, 16, 0.5)",
            display: "flex",
            flexDirection: "column",
            padding: "21px 10px 21px 10px",
            gap: "40px",
            borderRadius: "20px",
            cursor: "pointer",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {menuList.map((e, index) => (
            <div
              className={`${index == i ? styles.active : ""}`}
              key={index}
              onClick={() => {
                onClick(index);
              }}
              style={{
                border: i == index ? " 1px solid rgba(75, 0, 16,0.8)" : "",
                padding: "2px",
                borderRadius: "6px",
              }}
            >
              <Image
                key={index}
                height={20}
                width={20}
                src={imagePath[index]}
                alt="This icon"
              />
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className={styles.heading}>
          <div className={styles.headingc}>
            <div
              style={{
                gap: "50px",
              }}
            >
              <div className={styles.menucontainer}>
                {menuList.map((e, index) => (
                  <div
                    className={`${styles.menu} ${
                      index == 0 ? styles.border : ""
                    }`}
                    key={index}
                  >
                    {e}
                  </div>
                ))}
              </div>
              <div>
                <div className="h1">Lorem Ipsum</div>
                <div className={`text ${styles.box}`}>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  de Finibus Bonorum et Malorum (The Extremes of Good and Evil)
                  by Cicero, written in 45 BC. This book is a treatise on the
                  theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes
                  from a line in section 1.10.32
                </div>
                <button
                  className="button"
                  style={{
                    margin: "10px 0 10px 0px",
                  }}
                >
                  Lorem Ipsum
                </button>
              </div>
            </div>
          </div>
          <div>
            <canvas ref={canvasRef} className={styles.semicirclecurve} />
            <div className={styles.curve}></div>
          </div>
        </div>
        <Academic innerref={bodyRef} />
        <Experience innerref={bodyRef} animation={animation} />
        <Tools />
        {/* <Projectshowcase /> */}
      </div>
    </div>
  );
};

export default CanvasExample;
