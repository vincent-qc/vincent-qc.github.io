import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import coloredAsciiFrag from "../assets/shaders/colored-ascii.frag?raw";
import commonVert from "../assets/shaders/common.vert?raw";

export const ColoredAsciiShader = {
  uniforms: {
    tDiffuse: { value: null },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uCharSize: { value: 4.0 },
  },
  vertexShader: commonVert,
  fragmentShader: coloredAsciiFrag,
};

export function ColoredAsciiPostProcessing({
  enabled,
  charSize = 4.0,
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

    const coloredAsciiPass = new ShaderPass(ColoredAsciiShader);
    coloredAsciiPass.uniforms.uResolution.value.set(size.width, size.height);
    coloredAsciiPass.uniforms.uCharSize.value = charSize;
    composer.addPass(coloredAsciiPass);

    return composer;
  }, [gl, scene, camera, size.width, size.height, charSize]);

  useEffect(() => {
    composer.setSize(size.width, size.height);
    const coloredAsciiPass = composer.passes[1] as ShaderPass;
    if (coloredAsciiPass?.uniforms?.uResolution) {
      coloredAsciiPass.uniforms.uResolution.value.set(size.width, size.height);
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
