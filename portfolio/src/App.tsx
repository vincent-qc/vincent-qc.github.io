import "./App.css";
import Scene from "./components/landing/scene";

function App() {
  return (
    <div className="flex flex-row bg-blue-300 w-screen h-screen">
      <div className="flex-1">
        <Scene />
      </div>
      <div className="flex-1 bg-red-50">test</div>
    </div>
  );
}

export default App;
