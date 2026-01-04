import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo } from "react";
import { useUnitSize } from "../hooks/useWindowSize";
import { AsciiPostProcessing } from "../shaders/ascii";
import { GlitchPostProcessing } from "../shaders/pixel";
import { SketchPostProcessing } from "../shaders/sketch";
import { Page, usePageStore } from "../stores/page.store";
import AboutScene from "./about/about";

function Scene() {
  const unit = useUnitSize();
  const page = usePageStore((state) => state.page);

  const effect = useMemo(() => {
    if (page === Page.ABOUT) return "normal";
    if (page === Page.PROJECTS) return "ascii";
    if (page === Page.CV) return "sketch";
    if (page === Page.CONTACT) return "glitch";
  }, [page]);

  return (
    <div className="relative flex h-full w-full items-center justify-center p-4">
      <Canvas
        orthographic
        shadows
        camera={{
          position: [10, 10, 10],
          near: -2000,
        }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        {/* Scene effects */}
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
          minAzimuthAngle={0}
        />

        {/* Post Processing */}
        <SketchPostProcessing
          enabled={effect === "sketch"}
          threshold={0.075}
          lineWidth={0.5}
        />
        <AsciiPostProcessing enabled={effect === "ascii"} charSize={4.0} />
        <GlitchPostProcessing enabled={effect === "glitch"} intensity={0.6} />

        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[100, 100, 0]} intensity={1.8} castShadow />
        <directionalLight position={[0, 100, 50]} intensity={1.8} />
        <pointLight position={[20, 20, 20]} intensity={1} decay={0.5} />

        {/* Scene */}
        <Suspense fallback={null}>
          <mesh scale={[unit, unit, unit]} receiveShadow>
            <AboutScene />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene;
