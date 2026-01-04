import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useState } from "react";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { useUnitSize } from "../hooks/useWindowSize";
import AboutScene from "./about/about";

// Import shaders
import { AsciiShader } from "./shaders/ascii";
import { PixelShader } from "./shaders/pixel";
import { SketchShader } from "./shaders/sketch";

type EffectMode = "normal" | "sketch" | "ascii" | "pixel";

// Post-processing component for Sketch effect
function SketchPostProcessing({
  enabled,
  threshold = 0.15,
  lineWidth = 1.0,
}: {
  enabled: boolean;
  threshold?: number;
  lineWidth?: number;
}) {
  const { gl, scene, camera, size } = useThree();

  const composer = useMemo(() => {
    const composer = new EffectComposer(gl);
    const renderPass = new RenderPass(scene, camera);
    renderPass.clearAlpha = 0;
    composer.addPass(renderPass);

    const sketchPass = new ShaderPass(SketchShader);
    sketchPass.uniforms.uResolution.value.set(size.width, size.height);
    sketchPass.uniforms.uThreshold.value = threshold;
    sketchPass.uniforms.uLineWidth.value = lineWidth;
    composer.addPass(sketchPass);

    return composer;
  }, [gl, scene, camera, size.width, size.height, threshold, lineWidth]);

  useEffect(() => {
    composer.setSize(size.width, size.height);
    const sketchPass = composer.passes[1] as ShaderPass;
    if (sketchPass?.uniforms?.uResolution) {
      sketchPass.uniforms.uResolution.value.set(size.width, size.height);
    }
  }, [composer, size]);

  useFrame(
    () => {
      if (enabled) {
        gl.autoClear = false;
        gl.clear();
        composer.render();
      }
    },
    enabled ? 1 : -999,
  );

  return null;
}

// Post-processing component for ASCII effect
function AsciiPostProcessing({
  enabled,
  charSize = 8.0,
}: {
  enabled: boolean;
  charSize?: number;
}) {
  const { gl, scene, camera, size } = useThree();

  const composer = useMemo(() => {
    const composer = new EffectComposer(gl);
    const renderPass = new RenderPass(scene, camera);
    renderPass.clearAlpha = 0;
    composer.addPass(renderPass);

    const asciiPass = new ShaderPass(AsciiShader);
    asciiPass.uniforms.uResolution.value.set(size.width, size.height);
    asciiPass.uniforms.uCharSize.value = charSize;
    composer.addPass(asciiPass);

    return composer;
  }, [gl, scene, camera, size.width, size.height, charSize]);

  useEffect(() => {
    composer.setSize(size.width, size.height);
    const asciiPass = composer.passes[1] as ShaderPass;
    if (asciiPass?.uniforms?.uResolution) {
      asciiPass.uniforms.uResolution.value.set(size.width, size.height);
    }
  }, [composer, size]);

  useFrame(
    () => {
      if (enabled) {
        gl.autoClear = false;
        gl.clear();
        composer.render();
      }
    },
    enabled ? 1 : -999,
  );

  return null;
}

// Post-processing component for Pixel Art effect
function PixelPostProcessing({
  enabled,
  pixelSize = 3.0,
}: {
  enabled: boolean;
  pixelSize?: number;
}) {
  const { gl, scene, camera, size } = useThree();

  const composer = useMemo(() => {
    const composer = new EffectComposer(gl);
    const renderPass = new RenderPass(scene, camera);
    renderPass.clearAlpha = 0;
    composer.addPass(renderPass);

    const pixelPass = new ShaderPass(PixelShader);
    pixelPass.uniforms.uResolution.value.set(size.width, size.height);
    pixelPass.uniforms.uPixelSize.value = pixelSize;
    composer.addPass(pixelPass);

    return composer;
  }, [gl, scene, camera, size.width, size.height, pixelSize]);

  useEffect(() => {
    composer.setSize(size.width, size.height);
    const pixelPass = composer.passes[1] as ShaderPass;
    if (pixelPass?.uniforms?.uResolution) {
      pixelPass.uniforms.uResolution.value.set(size.width, size.height);
    }
  }, [composer, size]);

  useFrame(
    () => {
      if (enabled) {
        gl.autoClear = false;
        gl.clear();
        composer.render();
      }
    },
    enabled ? 1 : -999,
  );

  return null;
}

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
        <directionalLight position={[100, 100, 0]} intensity={1} castShadow />
        <directionalLight position={[0, 100, 50]} intensity={1} />
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
