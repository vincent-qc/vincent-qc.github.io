uniform sampler2D tDiffuse;
uniform vec2 uResolution;
uniform float uPixelSize;

varying vec2 vUv;

void main() {
  vec2 pixelSize = vec2(uPixelSize) / uResolution;
  
  vec2 quantizedUv = floor(vUv / pixelSize) * pixelSize;
  
  vec2 blockCenter = quantizedUv + pixelSize * 0.5;
  vec4 color = texture2D(tDiffuse, blockCenter);
  
  gl_FragColor = color;
}

