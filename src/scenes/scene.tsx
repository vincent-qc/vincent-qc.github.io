import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import { useRef } from "react";
import { useUnitSize } from "../hooks/useWindowSize";
import AboutScene from "./about/about";

function Scene() {
  // const { width, height } = useWindowSize();
  const unit = useUnitSize();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  return (
    <div className="w-full h-full flex justify-center items-center p-4">
      <Canvas
        orthographic
        camera={{
          position: [10, 10, 10],
          near: -2000,
        }}
        ref={canvasRef}
      >
        {/* Scene effects */}
        <OrbitControls />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} levels={1} intensity={1} />
          <ToneMapping />
        </EffectComposer>

        {/* Lighting */}
        <ambientLight intensity={Math.PI / 2} />
        <directionalLight position={[100, 100, 0]} intensity={Math.PI / 2} />
        <directionalLight position={[0, 100, 0]} intensity={Math.PI / 2} />

        {/* Scene switcher */}
        <directionalLight position={[-100, -100, 0]} intensity={Math.PI / 2} />
        <mesh scale={[unit, unit, unit]}>
          <AboutScene />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Scene;
