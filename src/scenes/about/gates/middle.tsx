import { useMemo } from "react";
import * as THREE from "three";

export default function MiddleLayerMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-16, 16);
    shape.lineTo(0, 16);
    shape.lineTo(0, 6);
    shape.lineTo(14, -16);
    shape.lineTo(-16, -16);
    return shape;
  }, []);
  return (
    <group position={position} scale={scale}>
      {/* Body Layers */}
      <mesh position={[0, 9, 0]} rotation={[(3 * Math.PI) / 2, 0, 0]}>
        <extrudeGeometry args={[shape, { depth: 2, bevelEnabled: false }]} />
        <meshStandardMaterial color={"#3F3F3F"} />
      </mesh>
      <mesh position={[0, 2, 0]} rotation={[(3 * Math.PI) / 2, 0, 0]}>
        <extrudeGeometry args={[shape, { depth: 7, bevelEnabled: false }]} />
        <meshStandardMaterial color={"#106070"} transparent opacity={0.5} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[(3 * Math.PI) / 2, 0, 0]}>
        <extrudeGeometry args={[shape, { depth: 2, bevelEnabled: false }]} />
        <meshStandardMaterial color={"#3F3F3F"} />
      </mesh>

      {/* Support beams */}
      <group>
        <mesh position={[-12, -5.5, 12]}>
          <meshStandardMaterial color={"#A0A0A0"} />
          <cylinderGeometry args={[1, 1, 11]} />
        </mesh>
        <mesh position={[8, -5.5, 12]}>
          <meshStandardMaterial color={"#A0A0A0"} />
          <cylinderGeometry args={[1, 1, 11]} />
        </mesh>
      </group>
    </group>
  );
}
