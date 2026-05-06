uniform sampler2D tDiffuse;
uniform vec2 uResolution;
uniform float uThreshold;
uniform float uLineWidth;
uniform float uMinNeighbors;

varying vec2 vUv;

float getLuminance(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

float getEdge(vec2 uv, vec2 texel) {
  float tl = getLuminance(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
  float t  = getLuminance(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
  float tr = getLuminance(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
  float l  = getLuminance(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
  float r  = getLuminance(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
  float bl = getLuminance(texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y)).rgb);
  float b  = getLuminance(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
  float br = getLuminance(texture2D(tDiffuse, uv + vec2(texel.x, -texel.y)).rgb);
  
  float sobelX = tl + 2.0*l + bl - tr - 2.0*r - br;
  float sobelY = tl + 2.0*t + tr - bl - 2.0*b - br;
  
  return sqrt(sobelX * sobelX + sobelY * sobelY);
}

void main() {
  vec2 texel = vec2(uLineWidth) / uResolution;
  
  float minThreshold = uThreshold * 0.6;
  float maxThreshold = uThreshold * 1.0;
  
  // Get edge at current pixel
  float edge = getEdge(vUv, texel);
  edge = smoothstep(minThreshold, maxThreshold, edge);
  
  // If not an edge, early out
  if (edge < 0.1) {
    gl_FragColor = vec4(vec3(0.0), 0.0);
    return;
  }
  
  // Count neighboring edges (8-connected)
  float neighbors = 0.0;
  neighbors += step(minThreshold, getEdge(vUv + vec2(-texel.x, texel.y), texel));
  neighbors += step(minThreshold, getEdge(vUv + vec2(0.0, texel.y), texel));
  neighbors += step(minThreshold, getEdge(vUv + vec2(texel.x, texel.y), texel));
  neighbors += step(minThreshold, getEdge(vUv + vec2(-texel.x, 0.0), texel));
  neighbors += step(minThreshold, getEdge(vUv + vec2(texel.x, 0.0), texel));
  neighbors += step(minThreshold, getEdge(vUv + vec2(-texel.x, -texel.y), texel));
  neighbors += step(minThreshold, getEdge(vUv + vec2(0.0, -texel.y), texel));
  neighbors += step(minThreshold, getEdge(vUv + vec2(texel.x, -texel.y), texel));
  
  // Only keep if enough neighbors
  float keep = step(uMinNeighbors, neighbors);
  edge *= keep;
  
  gl_FragColor = vec4(vec3(edge), edge);
}