import { useMemo } from "react";
import * as THREE from "three";
import { WingRoofMesh } from "./roof";

export default function WingMesh({
  scale,
  position,
  left,
}: {
  scale: [number, number, number];
  position: [number, number, number];
  left?: boolean;
}) {
  const window = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-3, 0);
    shape.lineTo(3, 0);
    shape.lineTo(3, 4);
    shape.arc(-3, 0, 3, 0, Math.PI, false);
    return shape;
  }, []);

  return (
    <group scale={scale} position={position}>
      {/* Roof */}
      <WingRoofMesh scale={[1, 1, 1]} position={[8, 6, 0]} left={left} />

      {/* Body */}
      <mesh>
        <boxGeometry args={[16, 12, 16]} />
        <meshStandardMaterial color="#E7D1B1" />
      </mesh>

      {/* Window */}
      <mesh position={[0, -3, 8]}>
        <extrudeGeometry args={[window, { depth: 1, bevelEnabled: false }]} />
        <meshStandardMaterial color="black" transparent opacity={0.9} />
        <mesh position={[0, -0.5, 0.5]}>
          <boxGeometry args={[6, 1, 1]} />
          <meshStandardMaterial color="#068A79" />
        </mesh>
      </mesh>
    </group>
  );
}
