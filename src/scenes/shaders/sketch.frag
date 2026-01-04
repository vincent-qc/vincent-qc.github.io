uniform sampler2D tDiffuse;
uniform vec2 uResolution;
uniform float uThreshold;
uniform float uLineWidth;

varying vec2 vUv;

float getLuminance(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

void main() {
  vec2 texel = vec2(uLineWidth) / uResolution;
  
  // Sample colors in a 3x3 pattern for Sobel filter
  float tl = getLuminance(texture2D(tDiffuse, vUv + vec2(-texel.x, texel.y)).rgb);
  float t  = getLuminance(texture2D(tDiffuse, vUv + vec2(0.0, texel.y)).rgb);
  float tr = getLuminance(texture2D(tDiffuse, vUv + vec2(texel.x, texel.y)).rgb);
  float l  = getLuminance(texture2D(tDiffuse, vUv + vec2(-texel.x, 0.0)).rgb);
  float r  = getLuminance(texture2D(tDiffuse, vUv + vec2(texel.x, 0.0)).rgb);
  float bl = getLuminance(texture2D(tDiffuse, vUv + vec2(-texel.x, -texel.y)).rgb);
  float b  = getLuminance(texture2D(tDiffuse, vUv + vec2(0.0, -texel.y)).rgb);
  float br = getLuminance(texture2D(tDiffuse, vUv + vec2(texel.x, -texel.y)).rgb);
  
  // Sobel operator
  float sobelX = tl + 2.0*l + bl - tr - 2.0*r - br;
  float sobelY = tl + 2.0*t + tr - bl - 2.0*b - br;
  
  float edge = sqrt(sobelX * sobelX + sobelY * sobelY);
  edge = smoothstep(uThreshold * 0.5, uThreshold, edge);
  
  // White lines on transparent background
  gl_FragColor = vec4(vec3(edge), edge);
}

