uniform sampler2D tDiffuse;
uniform vec2 uResolution;
uniform float uIntensity;
uniform float uTime;

varying vec2 vUv;

// Random function for glitch effects
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// Block displacement for digital glitch
vec2 blockGlitch(vec2 uv, float intensity) {
  float blockSize = 0.05;
  vec2 block = floor(uv / blockSize);
  float blockRandom = random(block + uTime);
  
  if (blockRandom > 1.0 - intensity * 0.3) {
    float offset = (blockRandom - 0.5) * intensity * 0.02;
    uv.x += offset;
  }
  
  return uv;
}

// RGB channel separation
vec3 rgbShift(vec2 uv, float intensity) {
  float shift = intensity * 0.01;
  
  float r = texture2D(tDiffuse, uv + vec2(shift, 0.0)).r;
  float g = texture2D(tDiffuse, uv).g;
  float b = texture2D(tDiffuse, uv - vec2(shift, 0.0)).b;
  
  return vec3(r, g, b);
}

// Scan line effect
float scanLine(vec2 uv, float intensity) {
  float line = sin(uv.y * uResolution.y * 0.7 + uTime * 10.0) * 0.5 + 0.5;
  return mix(1.0, line, intensity * 0.1);
}

// Noise overlay
float noise(vec2 uv, float intensity) {
  float n = random(uv + uTime);
  return mix(1.0, n, intensity * 0.05);
}

void main() {
  vec2 uv = vUv;
  
  // Apply block glitch displacement
  uv = blockGlitch(uv, uIntensity);
  
  // Sample base color
  vec4 color = texture2D(tDiffuse, uv);
  
  // Apply RGB channel separation
  vec3 glitchedColor = rgbShift(uv, uIntensity);
  
  // Mix original with glitched based on intensity
  color.rgb = mix(color.rgb, glitchedColor, uIntensity);
  
  // Apply scan lines
  float scan = scanLine(uv, uIntensity);
  color.rgb *= scan;
  
  // Apply noise overlay
  float n = noise(uv, uIntensity);
  color.rgb *= n;
  
  // Add occasional color channel flicker
  float flicker = random(vec2(floor(uv.y * 20.0) + uTime * 0.5));
  if (flicker > 1.0 - uIntensity * 0.2) {
    color.r = color.r * 1.2;
    color.b = color.b * 0.8;
  }
  
  gl_FragColor = color;
}

