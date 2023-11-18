import React, { useState } from "react";
import "./noteName.css";

const NoteName = ({ name, color, setNotes }) => {
  const [isEditing, setEditing] = useState(false);
  const [noteContent, setNoteContent] = useState("");

  const initials = () => {
    const words = name.split(" ");

    if (words.length === 1) {
      return words[0].charAt(0);
    } else if (words.length > 1) {
      return `${words[0].charAt(0)}${words[words.length - 1].charAt(0)}`;
    }
    return "";
  };

  const handleEdit = () => {
    setEditing(true);
    setNoteContent("");
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setNoteContent("");
  };

  // const handleSaveNote = (noteContent) => {
  //   console.log("saving note:", noteContent);
  //   setEditing(false);
  // };
  const handleSaveNote = () => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.name === name ? { ...note, content: noteContent } : note
      )
    );
    setEditing(false);
  };

  return (
    <div className="note" style={{ cursor: "pointer" }}>
      <div className="circle" style={{ background: color }}>
        {initials()}
      </div>
      <div className="notes-name" onClick={handleEdit}>
        {name}
      </div>
      {isEditing}
    </div>
  );
};

export default NoteName;
