import * as THREE from "three";
import commonVert from "./common.vert?raw";
import sketchFrag from "./sketch.frag?raw";

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

