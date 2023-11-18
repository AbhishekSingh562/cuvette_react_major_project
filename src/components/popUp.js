import React, { useState } from "react";
import "./popUp.css";

const Popup = ({ isOpen, onClose, onSubmit }) => {
  const [newNoteName, setNewNoteName] = useState("");
  const [selectedColor, setSelectedColor] = useState("#3498db");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleInputChange = (event) => {
    setNewNoteName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name: newNoteName, color: selectedColor });
    setNewNoteName("");
  };

  const colorOptions = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6"];

  return (
    <>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={onClose}>
                {" "}
                &times;
              </span>

              <h2>Create New Notes Group</h2>

              <form onSubmit={handleSubmit}>
                <div className="input-box">
                  Group Name :
                  <input
                    type="text"
                    value={newNoteName}
                    onChange={handleInputChange}
                    placeholder="Enter your group name ..."
                  />
                </div>

                <div className="color-options">
                  Choose Color :
                  {colorOptions.map((color, index) => (
                    <div
                      key={index}
                      className="color-option"
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorChange(color)}
                    />
                  ))}
                </div>
                <button type="submit" className="submit-button">
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
