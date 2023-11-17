import "./index.css";
import bgImg from "./images/bgImg.png";
import SideBar from "./components/sideBar";

function App() {
  return (
    <div>
      <SideBar />
      <div className="bg">
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
