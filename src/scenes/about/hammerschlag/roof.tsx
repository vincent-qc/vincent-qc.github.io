import { useMemo } from "react";
import * as THREE from "three";

const FrontRoofMesh = ({
  scale,
  position,
}: {
  scale: [number, number, number];

  position: [number, number, number];
}) => {
  const edge = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-10, 0);
    shape.lineTo(0, 6);
    shape.lineTo(10, 0);
    shape.lineTo(3.25, 0);
    shape.lineTo(3.25, 1.5);
    shape.lineTo(5, 1.5);
    shape.lineTo(0, 4.25);
    shape.lineTo(-5, 1.5);
    shape.lineTo(-3.25, 1.5);
    shape.lineTo(-3.25, 0);
    return shape;
  }, []);

  const fill = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-8, 0);
    shape.lineTo(-8, 1);
    shape.lineTo(0, 5.5);
    shape.lineTo(8, 1);
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
};

const WingRoofMesh = ({
  scale,
  position,
  left,
}: {
  scale: [number, number, number];
  position: [number, number, number];
  left?: boolean;
}) => {
  const roof = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-10, 0);
    shape.lineTo(0, 6);
    shape.lineTo(10, 0);
    shape.lineTo(3.5, 0);
    return shape;
  }, []);

  return (
    <group scale={scale} position={position} rotation={[0, Math.PI / 2, 0]}>
      <mesh scale={[1.15, 1.15, 1.15]} position={[0, 0, left ? -17 : -1]}>
        <extrudeGeometry args={[roof, { depth: 2, bevelEnabled: false }]} />
        <meshStandardMaterial color="#068A79" />
      </mesh>
      <mesh position={[0, 0, left ? -15 : -17]}>
        <extrudeGeometry args={[roof, { depth: 16, bevelEnabled: false }]} />
        <meshStandardMaterial color="#A0A0A0" />
      </mesh>
    </group>
  );
};

export { FrontRoofMesh, WingRoofMesh };
