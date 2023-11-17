import React from "react";
import "./note.css";

const Note = ({ name }) => {
  return (
    <div className="note">
      <div className="circle">{name.charAt(0)}</div>
      <div className="notes-name">{name}</div>
    </div>
  );
};

export default Note;
