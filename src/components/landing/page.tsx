import Scene from "../scenes/scene";
import Namecard from "./namecard";
import Navbar from "./navbar";

export default function LandingPage() {
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
