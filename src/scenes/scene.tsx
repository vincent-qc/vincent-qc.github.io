import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { useUnitSize } from "../hooks/useWindowSize";
import { AsciiPostProcessing } from "../shaders/ascii";
import { PixelPostProcessing } from "../shaders/pixel";
import { SketchPostProcessing } from "../shaders/sketch";
import AboutScene from "./about/about";

type EffectMode = "normal" | "sketch" | "ascii" | "pixel";

function Scene() {
  const unit = useUnitSize();
  const [effectMode, setEffectMode] = useState<EffectMode>("normal");

  const cycleEffect = () => {
    setEffectMode((prev) => {
      if (prev === "normal") return "sketch";
      if (prev === "sketch") return "ascii";
      if (prev === "ascii") return "pixel";
      return "normal";
    });
  };

  const getButtonLabel = () => {
    switch (effectMode) {
      case "normal":
        return "◇ Normal";
      case "sketch":
        return "◈ Sketch";
      case "ascii":
        return "▣ ASCII";
      case "pixel":
        return "▦ Pixel";
    }
  };

  return (
    <div className="relative flex h-full w-full items-center justify-center p-4">
      {/* Toggle Button */}
      <button
        onClick={cycleEffect}
        className="absolute left-4 top-4 z-10 rounded-md border border-neutral-600 bg-neutral-800/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-all hover:border-neutral-500 hover:bg-neutral-700/80"
      >
        {getButtonLabel()}
      </button>

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

        {/* Post-processing effects */}
        <SketchPostProcessing
          enabled={effectMode === "sketch"}
          threshold={0.15}
          lineWidth={1.0}
        />
        <AsciiPostProcessing enabled={effectMode === "ascii"} charSize={4.0} />
        <PixelPostProcessing enabled={effectMode === "pixel"} pixelSize={3.0} />

        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[100, 100, 0]} intensity={2} castShadow />
        <directionalLight position={[0, 100, 50]} intensity={2} />
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
