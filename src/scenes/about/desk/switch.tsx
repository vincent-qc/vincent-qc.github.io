import { useMemo } from "react";
import * as THREE from "three";

const JoyconMesh = ({
  position,
  rotation,
  color,
}: {
  position: [number, number, number];
  rotation?: number;
  color: string;
}) => {
  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -4);
    shape.lineTo(0, 4);
    shape.lineTo(-1, 4);
    shape.arc(0, -2, 2, Math.PI / 2, Math.PI, false);
    shape.lineTo(-3, -2);
    shape.arc(2, 0, 2, Math.PI, -Math.PI / 2, false);
    return shape;
  }, []);
  return (
    <group position={position} rotation={[0, rotation || 0, 0]}>
      <mesh position={[0, 0, -0.75]}>
        <extrudeGeometry args={[shape, { depth: 1.5, bevelEnabled: false }]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
};

export default function SwitchMesh({
  scale,
  position,
  rotation,
}: {
  scale: [number, number, number];
  position: [number, number, number];
  rotation?: number;
}) {
  return (
    <group
      scale={scale}
      position={position}
      rotation={[0, rotation || 0, 0]}
      castShadow
    >
      {/* Body and Screen */}
      <mesh>
        <boxGeometry args={[12, 8, 1.5]} />
        <meshStandardMaterial color="#404040" />
      </mesh>
      <mesh position={[0, 0, 0.76]}>
        <boxGeometry args={[12, 8, 0.1]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Joycons */}
      <JoyconMesh position={[-6, 0, 0]} color="#2090C5" />
      <JoyconMesh position={[6, 0, 0]} rotation={Math.PI} color="#ED1010" />

      {/* Dock */}
      <mesh position={[0, -1.5, -0.5]}>
        <boxGeometry args={[12, 6, 4]} />
        <meshStandardMaterial color="#303030" />
      </mesh>
    </group>
  );
}
