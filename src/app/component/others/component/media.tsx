import Image from "next/image";
import React from "react";

export const Media = () => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "nowrap",
        gap: "10px",
        marginTop: "10px",
      }}
    >
      <MediaComponent logo="/media/facebook.png" title="Facebook" />
      <MediaComponent logo="/media/instagram.png" title="Instagram" />
      <MediaComponent logo="/media/linkedin.png" title="Linkend" />
    </div>
  );
};

const MediaComponent = ({ logo, title }: { logo: string; title: string }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "50px",
          width: "50px",
          position: "relative",
        }}
      >
        <Image src={logo} fill={true} alt="logo" />
      </div>
      <div className="text">{title}</div>
    </div>
  );
};
