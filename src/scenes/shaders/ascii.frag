uniform sampler2D tDiffuse;
uniform vec2 uResolution;
uniform float uCharSize;

varying vec2 vUv;

float getLuminance(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

// Characters ordered by density: . , ; ~ - # @
// Index 0 = sparsest (for dark/black), Index 6 = densest (for light/white)
float getCharacter(int index, vec2 pos) {
  float x = pos.x;
  float y = pos.y;
  
  if (index == 0) {
    // . - tiny dot (sparsest, for black)
    return (x > 0.4 && x < 0.6 && y > 0.15 && y < 0.35) ? 1.0 : 0.0;
  } else if (index == 1) {
    // , - comma
    return (x > 0.35 && x < 0.6 && y > 0.05 && y < 0.3) ? 1.0 : 0.0;
  } else if (index == 2) {
    // ; - semicolon
    float dot1 = (x > 0.35 && x < 0.65 && y > 0.55 && y < 0.75) ? 1.0 : 0.0;
    float comma = (x > 0.35 && x < 0.6 && y > 0.1 && y < 0.3) ? 1.0 : 0.0;
    return max(dot1, comma);
  } else if (index == 3) {
    // ~ - tilde wave
    float wave = sin(x * 6.28) * 0.12;
    return (abs(y - 0.5 - wave) < 0.1) ? 1.0 : 0.0;
  } else if (index == 4) {
    // - - horizontal dash
    return (y > 0.42 && y < 0.58 && x > 0.1 && x < 0.9) ? 1.0 : 0.0;
  } else {
    // # - hash grid
    float h1 = (y > 0.22 && y < 0.35) ? 1.0 : 0.0;
    float h2 = (y > 0.65 && y < 0.78) ? 1.0 : 0.0;
    float v1 = (x > 0.22 && x < 0.35) ? 1.0 : 0.0;
    float v2 = (x > 0.65 && x < 0.78) ? 1.0 : 0.0;
    return max(max(h1, h2), max(v1, v2));
  }
}

void main() {
  // Calculate cell position
  vec2 cellSize = vec2(uCharSize) / uResolution;
  vec2 cell = floor(vUv / cellSize);
  vec2 cellCenter = (cell + 0.5) * cellSize;
  
  // Sample the original image at cell center
  vec4 color = texture2D(tDiffuse, cellCenter);
  
  // Transparent background - no character
  if (color.a < 0.1) {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    return;
  }
  
  // Get luminance (brightness)
  float luminance = getLuminance(color.rgb);
  
  // Apply gamma curve to spread out darker shades more
  // pow(x, 0.4) expands dark range, compresses bright range
  float adjustedLum = pow(luminance, 0.4);
  
  // Map adjusted luminance to character index (0-6)
  // Dark (black) = 0 (sparse .), Light (white) = 6 (dense @)
  int charIndex = int(adjustedLum * 6.99);
  charIndex = clamp(charIndex, 0, 6);
  
  // Get position within cell (0-1)
  vec2 posInCell = fract(vUv / cellSize);
  
  // Get character pixel
  float charPixel = getCharacter(charIndex, posInCell);
  
  // Output white character on transparent background
  gl_FragColor = vec4(vec3(1.0), charPixel);
}

