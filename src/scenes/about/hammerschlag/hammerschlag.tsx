import { useMemo } from "react";
import * as THREE from "three";

const RoofMesh = ({
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
};

const FrontMesh = ({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) => {
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
      <mesh position={[0, 6, -8]}>
        <boxGeometry args={[16, 12, 16]} />
        <meshStandardMaterial color="#E7D1B1" />
      </mesh>
    </group>
  );
};

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

const CenterMesh = ({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) => {
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

      <mesh>
        <boxGeometry args={[16, 16, 16]} />
        <meshStandardMaterial color="#E7D1B1" />
      </mesh>
      <mesh position={[0, 9, 0]} rotation={[0, Math.PI / 8, 0]}>
        <cylinderGeometry args={[7, 7, 2, 8]} />
        <meshStandardMaterial color="#E9D9D1" />
      </mesh>
      <mesh position={[0, 10, 0]} rotation={[0, Math.PI / 8, 0]}>
        <cylinderGeometry args={[5, 5, 2]} />
        <meshStandardMaterial color="#E0D0D0" />
      </mesh>
    </group>
  );
};

const WingMesh = ({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) => {
  return (
    <group scale={scale} position={position}>
      <mesh>
        <boxGeometry args={[16, 16, 16]} />
        <meshStandardMaterial color="#E7D1B1" />
      </mesh>
    </group>
  );
};

export default function HammerschlagMesh({
  scale,
  position,
  rotation,
}: {
  scale: [number, number, number];
  position: [number, number, number];
  rotation?: number;
}) {
  return (
    <group scale={scale} position={position} rotation={[0, rotation || 0, 0]}>
      <RoofMesh scale={[1, 1, 1]} position={[0, 12, 5]} />
      <FrontMesh scale={[1, 1, 1]} position={[0, 0, 0]} />
      <CenterMesh scale={[1, 1, 1]} position={[0, 8, -27]} />
      <WingMesh scale={[1, 1, 1]} position={[18, 8, -27]} />
    </group>
  );
}
