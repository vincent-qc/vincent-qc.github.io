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
  
  float tl = getLuminance(texture2D(tDiffuse, vUv + vec2(-texel.x, texel.y)).rgb);
  float t  = getLuminance(texture2D(tDiffuse, vUv + vec2(0.0, texel.y)).rgb);
  float tr = getLuminance(texture2D(tDiffuse, vUv + vec2(texel.x, texel.y)).rgb);
  float l  = getLuminance(texture2D(tDiffuse, vUv + vec2(-texel.x, 0.0)).rgb);
  float c  = getLuminance(texture2D(tDiffuse, vUv).rgb);
  float r  = getLuminance(texture2D(tDiffuse, vUv + vec2(texel.x, 0.0)).rgb);
  float bl = getLuminance(texture2D(tDiffuse, vUv + vec2(-texel.x, -texel.y)).rgb);
  float b  = getLuminance(texture2D(tDiffuse, vUv + vec2(0.0, -texel.y)).rgb);
  float br = getLuminance(texture2D(tDiffuse, vUv + vec2(texel.x, -texel.y)).rgb);
  
  float sobelX = tl + 2.0*l + bl - tr - 2.0*r - br;
  float sobelY = tl + 2.0*t + tr - bl - 2.0*b - br;
  
  float edge = sqrt(sobelX * sobelX + sobelY * sobelY);
  
  // Use a gentler smoothstep that preserves both light and dark edges
  // Lower the minimum threshold to catch more edges, but still filter noise
  float minThreshold = uThreshold * 0.6;
  float maxThreshold = uThreshold * 1.0;
  edge = smoothstep(minThreshold, maxThreshold, edge);
  
  // Remove the hard cutoff to preserve dark edges
  // Only apply a very light noise filter if needed
  edge = max(0.0, edge);
  
  gl_FragColor = vec4(vec3(edge), edge);
}
