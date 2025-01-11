import { useMemo } from "react";
import * as THREE from "three";
import { GATES_BLACK, GLASS_BLUE } from "../../shared/colors";

export default function MiddleLayerMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-16, 18);
    shape.lineTo(0, 18);
    shape.lineTo(0, 10);
    shape.lineTo(16, -16);
    shape.lineTo(-16, -16);
    return shape;
  }, []);
  return (
    <group position={position} scale={scale}>
      {/* Body Layers */}
      <mesh position={[0, 10, 0]} rotation={[(3 * Math.PI) / 2, 0, 0]}>
        <extrudeGeometry args={[shape, { depth: 2, bevelEnabled: false }]} />
        <meshStandardMaterial color={GATES_BLACK} />
      </mesh>
      <mesh position={[0, 2, 0]} rotation={[(3 * Math.PI) / 2, 0, 0]}>
        <extrudeGeometry args={[shape, { depth: 8, bevelEnabled: false }]} />
        <meshStandardMaterial color={GLASS_BLUE} transparent opacity={0.5} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[(3 * Math.PI) / 2, 0, 0]}>
        <extrudeGeometry args={[shape, { depth: 2, bevelEnabled: false }]} />
        <meshStandardMaterial color={GATES_BLACK} />
      </mesh>

      {/* Support */}
      <group position={[0, 0, -2.5]}>
        <mesh position={[-12, -6, 12]}>
          <meshStandardMaterial color={"#A0A0A0"} />
          <cylinderGeometry args={[1, 1, 12]} />
        </mesh>
        <mesh position={[8, -6, 12]}>
          <meshStandardMaterial color={"#A0A0A0"} />
          <cylinderGeometry args={[1, 1, 12]} />
        </mesh>
      </group>
    </group>
  );
}
