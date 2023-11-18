import React, { useState } from "react";
import "./index.css";
import bgImg from "./images/bgImg.png";
import SideBar from "./components/sideBar";

function App() {
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState([]);

  const handleNoteSelect = (note) => {
    setSelectedNote(note);
  };

  const handleNoteSave = (content) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === selectedNote.id ? { ...note, content } : note
      )
    );
    setSelectedNote(null);
  };

  const handleNoteCancel = () => {
    setSelectedNote(null);
  };

  return (
    <div>
      <SideBar notes={notes} onNoteSelect={handleNoteSelect} />
      <div className="bg">
        {selectedNote}
        <img src={bgImg} />

        <p>
          Hey its Abishek singh this side, welcome to my this react application
          which provides you to take your notes.
        </p>
      </div>
    </div>
  );
}

export default App;
