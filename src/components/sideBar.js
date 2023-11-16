import "./sideBar.css";

import Note from "./note";

const SideBar = () => {
  return (
    <div className="noteList">
      <p>Pocket Notes</p>
      <button>
        <span>+</span> Create Notes Group
      </button>
      <Note />
    </div>
  );
};
export default SideBar;
