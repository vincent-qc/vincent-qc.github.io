import { useGSAP } from "@gsap/react";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
import Base from "./base";

gsap.registerPlugin(useGSAP);

function Scene() {
  // const { width, height } = useWindowSize();

  return (
    <div className="w-full h-full flex justify-center items-center p-4">
      <Canvas
        orthographic
        camera={{
          position: [10, 10, 10],
          near: -2000,
        }}
      >
        <ambientLight intensity={Math.PI / 2} />
        <pointLight position={[300, 150, 0]} decay={0} intensity={Math.PI} />
        <Base />
      </Canvas>
    </div>
  );
}

export default Scene;
