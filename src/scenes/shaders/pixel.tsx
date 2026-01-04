import * as THREE from "three";
import commonVert from "./common.vert?raw";
import pixelFrag from "./pixel.frag?raw";

export const PixelShader = {
  uniforms: {
    tDiffuse: { value: null },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uPixelSize: { value: 2.0 },
  },
  vertexShader: commonVert,
  fragmentShader: pixelFrag,
};

