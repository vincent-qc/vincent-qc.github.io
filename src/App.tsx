import "./App.css";
import Namecard from "./components/landing/namecard";
import Navbar from "./components/landing/navbar";
import Scene from "./components/scenes/scene";

function App() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="w-[50%]">
        <Scene />
      </div>
      <div className="w-[50%] flex flex-col justify-center items-center">
        <Namecard />
        <Navbar />
      </div>
    </div>
  );
}

export default App;
