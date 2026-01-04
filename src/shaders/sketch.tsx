import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import commonVert from "../assets/shaders/common.vert?raw";
import sketchFrag from "../assets/shaders/sketch.frag?raw";

export const SketchShader = {
  uniforms: {
    tDiffuse: { value: null },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uThreshold: { value: 0.15 },
    uLineWidth: { value: 1.0 },
  },
  vertexShader: commonVert,
  fragmentShader: sketchFrag,
};

export function SketchPostProcessing({
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
