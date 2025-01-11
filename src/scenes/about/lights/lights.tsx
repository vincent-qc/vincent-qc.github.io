import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { GATES_BLACK } from "../../shared/colors";

function numberToRGB(value: number): string {
  // Ensure the value is within the range 1-100
  const clampedValue = Math.max(1, Math.min(100, value));

  // Convert the value to a hue (0-360 degrees)
  const hue = (clampedValue / 100) * 360;

  // Convert the hue to RGB
  const rgb = hslToRgb(hue, 100, 50);

  // Return the RGB color as a string
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  s /= 100;
  l /= 100;

  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(Math.min(k(n) - 3, 9 - k(n), 1), -1);

  return [
    Math.round(f(0) * 255),
    Math.round(f(8) * 255),
    Math.round(f(4) * 255),
  ];
}

const PanelMesh = ({
  scale,
  position,
  rotation,
  initialColor,
}: {
  scale: [number, number, number];
  position: [number, number, number];
  rotation?: number;
  initialColor: number;
}) => {
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const color = useRef(initialColor);

  useFrame(() => {
    color.current = (color.current + 0.2) % 100;
    materialRef.current?.color.set(numberToRGB(color.current));
    materialRef.current?.emissive.set(numberToRGB(color.current));
  });

  const triangle = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(8, 0);
    shape.lineTo(10, 2 * Math.sqrt(3));
    shape.lineTo(2, 10 * Math.sqrt(3));
    shape.lineTo(-2, 10 * Math.sqrt(3));
    shape.lineTo(-10, 2 * Math.sqrt(3));
    shape.lineTo(-8, 0);
    return shape;
  }, []);

  return (
    <group scale={scale} position={position} rotation={[0, 0, rotation || 0]}>
      <mesh>
        <extrudeGeometry
          args={[triangle, { depth: 0.5, bevelEnabled: false }]}
        />
        <meshStandardMaterial
          ref={materialRef}
          color={numberToRGB(initialColor)}
          emissive={numberToRGB(initialColor)}
          emissiveIntensity={16}
        />
      </mesh>
      <mesh position={[0, 0, -3]}>
        <extrudeGeometry args={[triangle, { depth: 3, bevelEnabled: false }]} />
        <meshStandardMaterial color={GATES_BLACK} />
      </mesh>
    </group>
  );
};

export default function LightMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  return (
    <group scale={scale} position={position}>
      <PanelMesh
        scale={[1, 1, 1]}
        position={[-8, 12, 0]}
        rotation={Math.PI / 3}
        initialColor={0}
      />
      <PanelMesh scale={[1, 1, 1]} position={[0, 0, 0]} initialColor={16} />
      <PanelMesh
        scale={[1, 1, 1]}
        position={[20, 12, 0]}
        rotation={Math.PI / 3}
        initialColor={32}
      />
      <PanelMesh scale={[1, 1, 1]} position={[14, 25, 0]} initialColor={48} />
      <PanelMesh
        scale={[1, 1, 1]}
        position={[6, 37, 0]}
        rotation={Math.PI / 3}
        initialColor={64}
      />
      <PanelMesh scale={[1, 1, 1]} position={[-14, 25, 0]} initialColor={80} />
    </group>
  );
}
