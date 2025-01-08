import { Canvas } from "@react-three/fiber";
import { useUnitSize } from "../../hooks/useWindowSize";
import AboutScene from "./about";
import Base from "./base";

function Scene() {
  // const { width, height } = useWindowSize();
  const unit = useUnitSize();

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
        <mesh scale={[unit, unit, unit]}>
          <AboutScene />
          <Base />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Scene;
