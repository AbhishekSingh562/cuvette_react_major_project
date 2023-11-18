import React, { useState } from "react";
import "./noteName.css";

const NoteName = ({ name, color, onEdit }) => {
  const initials = () => {
    const words = name.split(" ");

    if (words.length === 1) {
      return words[0].charAt(0);
    } else if (words.length > 1) {
      return `${words[0].charAt(0)}${words[words.length - 1].charAt(0)}`;
    }
    return "";
  };

  return (
    <div className="note" style={{ cursor: "pointer" }}>
      <div className="circle" style={{ background: color }}>
        {initials()}
      </div>
      <div className="notes-name" onClick={onEdit}>
        {name}
      </div>
    </div>
  );
};

export default NoteName;
