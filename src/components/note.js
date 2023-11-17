import React from "react";
import "./note.css";

const Note = ({ name }) => {
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
    <div className="note">
      <div className="circle">{initials()}</div>
      <div className="notes-name">{name}</div>
    </div>
  );
};

export default Note;
