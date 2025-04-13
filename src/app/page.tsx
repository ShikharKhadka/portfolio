"use client";

// import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import styles from "./page.module.css";
import { Experience } from "./component/experience/experience";
import { Academic } from "./component/academic/academic";
import { Tools } from "./component/tools/tools";
import Image from "next/image";
import { Projectshowcase } from "./component/project_showcase/project_showcase";
import { Others } from "./component/others/others";

const CanvasExample = () => {
  const menuList = [
    "Home",
    "Experience",
    "Education ",
    "Tools",
    "Projects",
    "Skills",
  ];
  const imagePath = [
    "/menu/man.png",
    "/education.png",
    "/menu/briefcase.png",
    "/menu/settings.png",
    "/menu/project.png",
    "/menu/skills.png",
  ];
  // const menuList = ["Home", "Education", "Experience", "Skills"];
  const masterRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const academicRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const othersRef = useRef<HTMLDivElement>(null);

  const [i, seti] = useState(0);
  const [animation, setAnimation] = useState({
    experience: false,
    tools: false,
    project: false,
    others: false,
  });
  const [position, setposition] = useState({
    index: i,
    type: {
      academic: 0,
      experience: 0,
      tools: 0,
      project: 0,
      others: 0,
    },
    showMenu: false,
  });

  const onClick = (index: number) => {
    seti(index);
    if (index == 0) {
      window.scrollTo({ behavior: "smooth", top: 0 });
      return;
    }
    if (index == 1) {
      window.scrollTo({ behavior: "smooth", top: position.type.academic });
      return;
    }
    if (index == 2) {
      window.scrollTo({ behavior: "smooth", top: position.type.experience });
      return;
    }
    if (index == 3) {
      window.scrollTo({ behavior: "smooth", top: position.type.tools });
      return;
    }
    if (index == 4) {
      window.scrollTo({ behavior: "smooth", top: position.type.project });
      return;
    }
    window.scrollTo({ behavior: "smooth", top: position.type.others });
  };

  useEffect(() => {
    const handelScroll = () => {
      if (!academicRef.current) return;
      const cardPosition =
        academicRef.current.getBoundingClientRect().top + window.scrollY;
      setposition((prev) => ({
        ...prev,
        type: { ...prev.type, academic: cardPosition },
      }));
    };
    window.addEventListener("scroll", handelScroll);
    handelScroll();
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, [i]);

  useEffect(() => {
    const handelScroll = () => {
      if (position.type.tools == 0) return;
      if (!masterRef.current) return;
      const cardPosition = masterRef.current.getBoundingClientRect();
      const masterposition = cardPosition.height - cardPosition.bottom;
      if (masterposition < position.type.academic - 100) {
        if (position.showMenu) {
          setposition({ ...position, showMenu: false });
        }
      }
      if (masterposition >= position.type.academic - 100) {
        seti(() => 1);
        if (!position.showMenu) setposition({ ...position, showMenu: true });
      }
      if (masterposition >= position.type.experience - 100) {
        seti(() => 2);
      }
      if (masterposition >= position.type.tools - 100) {
        seti(() => 3);
      }
      if (masterposition >= position.type.project - 100) {
        seti(() => 4);
      }
      if (masterposition >= position.type.others - 100) {
        seti(() => 5);
      }
    };
    window.addEventListener("scroll", handelScroll);
    handelScroll();
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, [position]);

  useEffect(() => {
    const handelScroll = () => {
      if (!bodyRef.current) return;
      const cardPosition = bodyRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardPosition < windowHeight - 100) {
        setAnimation((prev) => ({ ...prev, experience: true }));
      }
      setposition((prev) => ({
        ...prev,
        type: { ...prev.type, experience: cardPosition + window.scrollY },
      }));
    };
    window.addEventListener("scroll", handelScroll);
    handelScroll();
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, [i, animation.experience]);

  useEffect(() => {
    const handelScroll = () => {
      if (!toolsRef.current) return;
      const cardPosition = toolsRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardPosition < windowHeight - 100) {
        setAnimation((prev) => ({ ...prev, tools: true }));
      }
      setposition((prev) => ({
        ...prev,
        type: { ...prev.type, tools: cardPosition + window.scrollY },
      }));
    };

    window.addEventListener("scroll", handelScroll);
    handelScroll();

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, [i, animation.tools]);

  useEffect(() => {
    const handelScroll = () => {
      if (!projectRef.current) return;
      const cardPosition = projectRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardPosition < windowHeight - 100) {
        setAnimation((prev) => ({ ...prev, tools: true }));
      }
      setposition((prev) => ({
        ...prev,
        type: { ...prev.type, project: cardPosition + window.scrollY },
      }));
    };

    window.addEventListener("scroll", handelScroll);
    handelScroll();

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, [i, animation.project]);

  useEffect(() => {
    const handelScroll = () => {
      if (!projectRef.current) return;
      const cardPosition = projectRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardPosition < windowHeight - 100) {
        setAnimation((prev) => ({ ...prev, project: true }));
      }
      setposition((prev) => ({
        ...prev,
        type: { ...prev.type, project: cardPosition + window.scrollY },
      }));
    };

    window.addEventListener("scroll", handelScroll);
    handelScroll();

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, [i, animation.project]);

  useEffect(() => {
    const handelScroll = () => {
      if (!othersRef.current) return;
      const cardPosition = othersRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardPosition < windowHeight - 100) {
        setAnimation((prev) => ({ ...prev, others: true }));
      }
      setposition((prev) => ({
        ...prev,
        type: { ...prev.type, others: cardPosition + window.scrollY },
      }));
    };

    window.addEventListener("scroll", handelScroll);
    handelScroll();

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, [i, animation.others]);

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
    <div ref={masterRef} style={{ display: "flex" }}>
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
        {position.showMenu && (
          <div className={styles.leftmenu}>
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
        )}
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
                <div className="h1">Shikhar Khadka (Frontend Developer)</div>
                <div className={`text ${styles.box}`}>
                  I started programming during the Covid Pandemic in 2020. I am
                  fluent in new like programming languages such as
                  <span className="boldtext"> Flutter</span>,
                  <span className="boldtext"> Dart</span>,
                  <span className="boldtext"> Javascript</span>,
                  <span className="boldtext"> React</span>,
                  <span className="boldtext"> Typescript</span>. My field of
                  Interest are building new Web Technologies and Products and
                  also in areas related to Backend Services like nodejs. Beside
                  from techncal site, my hobbies are playing game , listening
                  songs, futsal and cricket.
                </div>
                <div>
                  <a
                    className={`${"button"} ${"hcenter"}`}
                    style={{
                      margin: "10px 0 10px 0px",
                      display: "flex",
                      color: "#4b0010",
                    }}
                    href={"/files/resume.pdf"}
                    download="YourName resume.pdf"
                  >
                    Resume
                    <span
                      className={styles.bounce}
                      style={{ marginTop: "4px", marginLeft: "4px" }}
                    >
                      <Image
                        src={"/icons/download.png"}
                        alt="download icon"
                        width={16}
                        height={16}
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <canvas ref={canvasRef} className={styles.semicirclecurve} />
            <div className={styles.curve}>
              <Image src={"/images/hero.png"} alt="hero" fill={true} />
            </div>
          </div>
        </div>
        <Academic innerref={academicRef} />
        <Experience innerref={bodyRef} animation={animation.experience} />
        <Tools innerRef={toolsRef} animation={animation.tools} />
        <Projectshowcase innerRef={projectRef} animation={animation.project} />
        <Others innerRef={othersRef} animation={animation.others} />
      </div>
    </div>
  );
};

export default CanvasExample;
