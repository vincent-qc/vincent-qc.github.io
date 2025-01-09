import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useUnitSize } from "../hooks/useWindowSize";
import GatesMesh from "./about/gates/gates";

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
        <OrbitControls />
        <ambientLight intensity={Math.PI / 2} />
        {/* <pointLight
            position={[45, 25, 20]}
            decay={0}
            intensity={Math.PI / 2}
          /> */}
        {/* <pointLight
          position={[-300, -150, 0]}
          decay={0}
          intensity={Math.PI / 2}
        /> */}
        <directionalLight position={[100, 100, 0]} intensity={Math.PI / 2} />
        <directionalLight position={[0, 100, 0]} intensity={Math.PI / 2} />
        <directionalLight position={[-100, -100, 0]} intensity={Math.PI / 2} />
        <mesh scale={[unit, unit, unit]}>
          {/* <AboutScene />
          <Base /> */}
          <GatesMesh scale={[1, 1, 1]} position={[0, 0, 0]} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Scene;
