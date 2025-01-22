import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import { useUnitSize } from "../hooks/useWindowSize";
import AboutScene from "./about/about";

function Scene() {
  // const { width, height } = useWindowSize();
  const unit = useUnitSize();
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <Canvas
        orthographic
        shadows
        camera={{
          position: [10, 10, 10],
          near: -2000,
        }}
      >
        {/* Scene effects */}
        <OrbitControls
          // enablePan={false}
          // enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
          minAzimuthAngle={0}
        />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} levels={1} intensity={1} />
          <ToneMapping />
        </EffectComposer>

        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[100, 100, 0]} intensity={3} castShadow />
        <directionalLight position={[0, 100, 50]} intensity={2} />

        {/* Scene switcher */}
        <directionalLight position={[-100, -100, 0]} intensity={Math.PI / 2} />
        <mesh scale={[unit, unit, unit]} receiveShadow>
          <AboutScene />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Scene;
