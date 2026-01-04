import * as THREE from "three";
import asciiFrag from "../../assets/shaders/ascii.frag?raw";
import commonVert from "../../assets/shaders/common.vert?raw";

export const AsciiShader = {
  uniforms: {
    tDiffuse: { value: null },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uCharSize: { value: 4.0 },
  },
  vertexShader: commonVert,
  fragmentShader: asciiFrag,
};
