import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import commonVert from "../assets/shaders/common.vert?raw";
import pixelFrag from "../assets/shaders/pixel.frag?raw";

export const PixelShader = {
  uniforms: {
    tDiffuse: { value: null },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uPixelSize: { value: 2.0 },
  },
  vertexShader: commonVert,
  fragmentShader: pixelFrag,
};

export function PixelPostProcessing({
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
