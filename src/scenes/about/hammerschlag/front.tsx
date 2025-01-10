import { useMemo } from "react";
import * as THREE from "three";
import { FrontRoofMesh } from "./roof";

export default function FrontMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-8, 12);
    shape.lineTo(8, 12);
    shape.lineTo(8, 0);
    shape.lineTo(4, 0);
    shape.lineTo(4, 6);
    shape.arc(-4, 0, 4, 0, Math.PI, false);
    shape.lineTo(-4, 0);
    shape.lineTo(-8, 0);
    return shape;
  }, []);

  return (
    <group scale={scale} position={position}>
      {/* Roof */}
      <FrontRoofMesh scale={[1, 1, 1]} position={[0, 12, 5]} />

      {/* Arc */}
      <mesh>
        <extrudeGeometry args={[shape, { depth: 6, bevelEnabled: false }]} />
        <meshStandardMaterial color="#E7D1B1" />
      </mesh>

      {/* Door */}
      <mesh position={[0, 5, 0.25]}>
        <boxGeometry args={[8, 10, 0.5]} />
        <meshStandardMaterial color="#A85D3C" />
      </mesh>

      {/* Rest of Body */}
      <mesh position={[0, 6, -5]}>
        <boxGeometry args={[16, 12, 10]} />
        <meshStandardMaterial color="#E7D1B1" />
      </mesh>
    </group>
  );
}
