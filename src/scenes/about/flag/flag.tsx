import { useMemo } from "react";
import * as THREE from "three";

const LeafMesh = ({
  scale,
  position,
  rotation,
}: {
  scale: [number, number, number];
  position: [number, number, number];
  rotation?: number;
}) => {
  const leaf = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -1); // stub
    shape.lineTo(0.5, -1);
    shape.lineTo(0.5, 1.5);
    shape.lineTo(4, 1); // bottom right spike
    shape.lineTo(3, 2.5);
    shape.lineTo(7, 5.75); // right secondary spikes
    shape.lineTo(6, 6.25);
    shape.lineTo(6.75, 8.75); // center of spikes
    shape.lineTo(4.25, 8.25);
    shape.lineTo(4, 9.5);
    shape.lineTo(2, 7.5); // end of right secondary spikes
    shape.lineTo(2.75, 12); // top spikes
    shape.lineTo(1, 11.5);
    shape.lineTo(0, 14); // peak
    shape.lineTo(-1, 11.5);
    shape.lineTo(-2.75, 12);
    shape.lineTo(-2, 7.5);
    shape.lineTo(-4, 9.5); // left secondary spikes
    shape.lineTo(-4.25, 8.25);
    shape.lineTo(-6.75, 8.75);
    shape.lineTo(-6, 6.25);
    shape.lineTo(-7, 5.75);
    shape.lineTo(-3, 2.5);
    shape.lineTo(-4, 1);
    shape.lineTo(-0.5, 1.5);
    shape.lineTo(-0.5, -1);
    return shape;
  }, []);
  return (
    <group scale={scale} position={position} rotation={[0, rotation || 0, 0]}>
      <mesh scale={scale}>
        <extrudeGeometry args={[leaf, { depth: 2, bevelEnabled: false }]} />
        <meshBasicMaterial color="#BB1010" />
      </mesh>
      <mesh scale={scale} position={[0, 0, 2]}>
        <shapeGeometry args={[leaf]} />
        <meshBasicMaterial color="#DD1010" />
      </mesh>
      <mesh scale={scale} position={[0, 0, -0.01]} rotation={[0, Math.PI, 0]}>
        <shapeGeometry args={[leaf]} />
        <meshBasicMaterial color="#DD1010" />
      </mesh>
    </group>
  );
};

export default function FlagMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  return (
    <group scale={scale} position={position}>
      <mesh position={[0, 6, 15]}>
        <meshStandardMaterial color="#CC1010" />
        <boxGeometry args={[2, 19, 8]} />
      </mesh>
      <LeafMesh
        scale={[1, 1, 1]}
        position={[-1, 0, 0]}
        rotation={Math.PI / 2}
      />
      <mesh position={[0, 6, -15]}>
        <meshStandardMaterial color="#CC1010" />
        <boxGeometry args={[2, 19, 8]} />
      </mesh>
    </group>
  );
}
