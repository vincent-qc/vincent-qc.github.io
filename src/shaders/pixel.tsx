import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import commonVert from "../assets/shaders/common.vert?raw";
import glitchFrag from "../assets/shaders/glitch.frag?raw";

export const GlitchShader = {
  uniforms: {
    tDiffuse: { value: null },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uIntensity: { value: 0.5 },
    uTime: { value: 0.0 },
  },
  vertexShader: commonVert,
  fragmentShader: glitchFrag,
};

export function GlitchPostProcessing({
  enabled,
  intensity = 0.5,
}: {
  enabled: boolean;
  intensity?: number;
}) {
  const { gl, scene, camera, size } = useThree();
  const timeRef = useRef(0);

  const composer = useMemo(() => {
    const composer = new EffectComposer(gl);
    const renderPass = new RenderPass(scene, camera);
    renderPass.clearAlpha = 0;
    composer.addPass(renderPass);

    const glitchPass = new ShaderPass(GlitchShader);
    glitchPass.uniforms.uResolution.value.set(size.width, size.height);
    glitchPass.uniforms.uIntensity.value = intensity;
    composer.addPass(glitchPass);

    return composer;
  }, [gl, scene, camera, size.width, size.height, intensity]);

  useEffect(() => {
    composer.setSize(size.width, size.height);
    const glitchPass = composer.passes[1] as ShaderPass;
    if (glitchPass?.uniforms?.uResolution) {
      glitchPass.uniforms.uResolution.value.set(size.width, size.height);
    }
    if (glitchPass?.uniforms?.uIntensity) {
      glitchPass.uniforms.uIntensity.value = intensity;
    }
  }, [composer, size, intensity]);

  useFrame(
    (_state, delta) => {
      if (enabled) {
        timeRef.current += delta;
        const glitchPass = composer.passes[1] as ShaderPass;
        if (glitchPass?.uniforms?.uTime) {
          glitchPass.uniforms.uTime.value = timeRef.current;
        }

        gl.autoClear = false;
        gl.clear();
        composer.render();
      }
    },
    enabled ? 1 : -999,
  );

  return null;
}
