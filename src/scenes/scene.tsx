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
        <directionalLight position={[100, 100, 0]} intensity={1} castShadow />
        <directionalLight position={[0, 100, 50]} intensity={1} />

        {/* Scene switcher */}
        {/* <directionalLight position={[-100, -100, 0]} intensity={Math.PI / 2} /> */}
        <pointLight position={[20, 20, 20]} intensity={1} decay={0.5} />
        <mesh scale={[unit, unit, unit]} receiveShadow>
          <AboutScene />
          {/* <Suspense fallback={null}>
            <BuildingMesh position={[0, 0, 0]} scale={[1, 1, 1]} />
          </Suspense> */}
          {/* <GatesMesh position={[0, 0, 0]} scale={[1, 1, 1]} /> */}
        </mesh>
      </Canvas>
    </div>
  );
}

export default Scene;
