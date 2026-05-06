import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import asciiFrag from "../assets/shaders/ascii.frag?raw";
import commonVert from "../assets/shaders/common.vert?raw";

export const AsciiShader = {
  uniforms: {
    tDiffuse: { value: null },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uCharSize: { value: 4.0 },
  },
  vertexShader: commonVert,
  fragmentShader: asciiFrag,
};

export function AsciiPostProcessing({
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
