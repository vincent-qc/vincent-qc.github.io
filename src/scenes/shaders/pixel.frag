uniform sampler2D tDiffuse;
uniform vec2 uResolution;
uniform float uPixelSize;

varying vec2 vUv;

void main() {
  // Calculate pixel block size
  vec2 pixelSize = vec2(uPixelSize) / uResolution;
  
  // Quantize UV coordinates to pixel grid
  vec2 quantizedUv = floor(vUv / pixelSize) * pixelSize;
  
  // Sample color at the center of the pixel block
  vec2 blockCenter = quantizedUv + pixelSize * 0.5;
  vec4 color = texture2D(tDiffuse, blockCenter);
  
  // Preserve alpha
  gl_FragColor = color;
}

