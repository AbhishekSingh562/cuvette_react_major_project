import React, { useState } from "react";
import "./popUp.css";

const Popup = ({ isOpen, onClose, onSubmit }) => {
  const [newNoteName, setNewNoteName] = useState("");

  const handleInputChange = (event) => {
    setNewNoteName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newNoteName);
    setNewNoteName("");
  };

  return (
    <>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={onClose}>
              {" "}
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              <label>
                New Note Name:
                <input
                  type="text"
                  value={newNoteName}
                  onChange={handleInputChange}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
