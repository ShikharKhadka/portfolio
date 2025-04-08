import React from "react";

export const ContantInfo = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => {
  return (
    <div className="text">
      {name} <span>:</span> <span className="colortext">{value}</span>
    </div>
  );
};
