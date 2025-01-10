import { useMemo } from "react";
import * as THREE from "three";
export default function LaptopMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  const bodyShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(16, 8);
    shape.lineTo(16, -8);
    shape.arc(-2, 0, 2, 0, -Math.PI / 2, true);
    shape.lineTo(-14, -10);
    shape.arc(0, 2, 2, -Math.PI / 2, -Math.PI, true);
    shape.lineTo(-16, 10);
    shape.lineTo(16, 10);
    return shape;
  }, []);

  const screenShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(16, 8);
    shape.lineTo(16, -8);
    shape.arc(-2, 0, 2, -0, -Math.PI / 2, true);
    shape.lineTo(-14, -10);
    shape.arc(0, 2, 2, -Math.PI / 2, -Math.PI, true);
    shape.lineTo(-16, 8);
    shape.arc(2, 0, 2, 0, Math.PI / 2, true);
    shape.lineTo(14, 10);
    shape.arc(0, -2, 2, Math.PI / 2, 0, true);

    return shape;
  }, []);

  return (
    <group scale={scale} position={position}>
      {/* Screen */}
      <mesh rotation={[(5 * Math.PI) / 6, 0, 0]} position={[0, 9, -4.2]}>
        <extrudeGeometry
          args={[bodyShape, { depth: 2, bevelEnabled: false }]}
        />
        <meshStandardMaterial color="#404040" />
      </mesh>
      <mesh position={[0, 9, -4.1]} rotation={[(5 * Math.PI) / 6, 0, 0]}>
        <extrudeGeometry
          args={[screenShape, { depth: 0.1, bevelEnabled: false }]}
        />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Hinge */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[1, 1, 32]} />
        <meshStandardMaterial color="#404040" />
      </mesh>

      {/* Base */}
      <mesh rotation={[(3 * Math.PI) / 2, 0, 0]} position={[0, -1, 10]}>
        <extrudeGeometry
          args={[bodyShape, { depth: 2, bevelEnabled: false }]}
        />
        <meshStandardMaterial color="#404040" />
      </mesh>

      {/* Keyboard */}
      <mesh
        scale={[0.8, 0.5, 1]}
        position={[0, 1, 7.5]}
        rotation={[(3 * Math.PI) / 2, 0, 0]}
      >
        <extrudeGeometry
          args={[screenShape, { depth: 0.2, bevelEnabled: false }]}
        />
        <meshStandardMaterial color="#202020" />
      </mesh>
    </group>
  );
}
