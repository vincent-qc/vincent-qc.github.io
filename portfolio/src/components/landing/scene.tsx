import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

function Scene() {
  useGSAP(() => {
    gsap.to(".box", {
      rotation: "+=360",
      duration: 3,
    });
  }, []);

  return (
    <div className="w-full h-full">
      <div className="box bg-red-600 w-12 h-12">HI</div>
    </div>
  );
}

export default Scene;
