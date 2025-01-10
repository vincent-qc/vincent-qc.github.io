import { useMemo } from "react";
import * as THREE from "three";

export default function RoofMesh({
  scale,
  position,
}: {
  scale: [number, number, number];

  position: [number, number, number];
}) {
  const edge = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-10, 0);
    shape.lineTo(0, 6);
    shape.lineTo(10, 0);
    shape.lineTo(3.5, 0);
    shape.lineTo(3.5, 1);
    shape.lineTo(6, 1);
    shape.lineTo(0, 4.5);
    shape.lineTo(-6, 1);
    shape.lineTo(-3.5, 1);
    shape.lineTo(-3.5, 0);
    return shape;
  }, []);

  const fill = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-8, 0);
    shape.lineTo(0, 5);
    shape.lineTo(8, 0);
    return shape;
  }, []);

  return (
    <group scale={scale} position={position}>
      <mesh scale={[1.15, 1.15, 1.15]}>
        <extrudeGeometry args={[edge, { depth: 2, bevelEnabled: false }]} />
        <meshStandardMaterial color="#068a79" />
      </mesh>
      <mesh position={[0, 0, -20]}>
        <extrudeGeometry args={[edge, { depth: 20, bevelEnabled: false }]} />
        <meshStandardMaterial color="#A0A0A0" />
      </mesh>
      <mesh scale={[1.15, 1.15, 1.15]} position={[0, 0, -22]}>
        <extrudeGeometry args={[edge, { depth: 2, bevelEnabled: false }]} />
        <meshStandardMaterial color="#068a79" />
      </mesh>
      <mesh position={[0, 0, -21]}>
        <extrudeGeometry args={[fill, { depth: 22, bevelEnabled: false }]} />
        <meshStandardMaterial color="#E7D1B1" />
      </mesh>
    </group>
  );
}
