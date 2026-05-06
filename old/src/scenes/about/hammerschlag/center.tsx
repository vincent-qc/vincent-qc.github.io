import { useMemo } from "react";
import * as THREE from "three";

const PillarMesh = ({
  scale,
  position,
  rotation,
}: {
  scale: [number, number, number];
  position: [number, number, number];
  rotation?: number;
}) => {
  const pillar = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.arc(0, 0, 4.5, Math.PI / 8, 0, true);
    shape.arc(-4.5, 0, 3, 0, Math.PI / 8, false);
    return shape;
  }, []);

  return (
    <group
      scale={scale}
      position={position}
      rotation={[Math.PI / 2, 0, rotation || 0]}
    >
      <mesh position={[0, 0, -6]} rotation={[0, 0, Math.PI / 16]}>
        <extrudeGeometry args={[pillar, { depth: 8, bevelEnabled: false }]} />
        <meshStandardMaterial color="#E7D1B1" />
      </mesh>
    </group>
  );
};

export default function CenterMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  return (
    <group scale={scale} position={position}>
      {/* Tower */}
      <group>
        {/* Center column */}
        <mesh position={[0, 14, 0]}>
          <cylinderGeometry args={[2, 2, 8]} />
          <meshStandardMaterial color="#B7A181" />
        </mesh>
        {/* Pillars */}
        <PillarMesh
          scale={[1, 1, 1]}
          position={[0, 12, 0]}
          rotation={-Math.PI / 4}
        />
        <PillarMesh
          scale={[1, 1, 1]}
          position={[0, 12, 0]}
          rotation={-Math.PI / 2}
        />
        <PillarMesh
          scale={[1, 1, 1]}
          position={[0, 12, 0]}
          rotation={-(3 * Math.PI) / 4}
        />
        <PillarMesh scale={[1, 1, 1]} position={[0, 12, 0]} /> {/* E, CW */}
        <PillarMesh
          scale={[1, 1, 1]}
          position={[0, 12, 0]}
          rotation={Math.PI / 4}
        />
        <PillarMesh
          scale={[1, 1, 1]}
          position={[0, 12, 0]}
          rotation={Math.PI / 2}
        />
        <PillarMesh
          scale={[1, 1, 1]}
          position={[0, 12, 0]}
          rotation={(3 * Math.PI) / 4}
        />
        <PillarMesh
          scale={[1, 1, 1]}
          position={[0, 12, 0]}
          rotation={Math.PI}
        />
        {/* Top */}
        <mesh position={[0, 19, 0]}>
          <cylinderGeometry args={[5, 5, 2]} />
          <meshStandardMaterial color="#E7D1B1" />
        </mesh>
        <mesh position={[0, 20, 0]}>
          <cylinderGeometry args={[3, 3, 2]} />
          <meshStandardMaterial color="#E7D1B1" />
        </mesh>
      </group>

      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[16, 15, 16]} />
        <meshStandardMaterial color="#E7D1B1" />
      </mesh>
      <mesh position={[0, 8.5, 0]} rotation={[0, Math.PI / 8, 0]}>
        <cylinderGeometry args={[7, 7, 3, 8]} />
        <meshStandardMaterial color="#E9D9D1" />
      </mesh>
      <mesh position={[0, 10, 0]} rotation={[0, Math.PI / 8, 0]}>
        <cylinderGeometry args={[5, 5, 2]} />
        <meshStandardMaterial color="#E0D0D0" />
      </mesh>
    </group>
  );
}
