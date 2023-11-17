import React, { useState } from "react";
import "./sideBar.css";
import Note from "./note";
import Popup from "./popUp";

const SideBar = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [notes, setNotes] = useState(["Note1", "Note2"]);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handlePopupSubmit = (newNoteName) => {
    if (newNoteName.trim() !== "") {
      setNotes([...notes, newNoteName]);
      closePopup();
    }
  };

  return (
    <div className="noteList">
      <p className="heading">Pocket Notes</p>
      <button onClick={openPopup}>
        <span>+</span> Create Notes Group
      </button>
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        onSubmit={handlePopupSubmit}
      />

      {notes.map((note, index) => (
        <Note key={index} name={note} />
      ))}
    </div>
  );
};
export default SideBar;
