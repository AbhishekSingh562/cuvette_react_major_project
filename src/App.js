import "./index.css";
import bgImg from "./images/bgImg.png";
import SideBar from "./components/sideBar";

function App() {
  return (
    <div>
      <SideBar />
      <div className="bgImage">
        <img src={bgImg} />
      </div>
    </div>
  );
}

export default App;
