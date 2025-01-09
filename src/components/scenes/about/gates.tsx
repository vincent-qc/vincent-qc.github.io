import { useMemo } from "react";
import * as THREE from "three";

const WindowMesh = ({
  scale,
  position,
  rotation,
}: {
  scale: [number, number, number];
  position: [number, number, number];
  rotation?: number;
}) => {
  return (
    <group position={position} scale={scale} rotation={[0, rotation || 0, 0]}>
      {/* Upper frames */}
      <mesh position={[-2, 10.5, 0]}>
        <meshStandardMaterial color={"#909090"} />
        <boxGeometry args={[8, 2, 1]} />
      </mesh>
      <mesh position={[-5, 5.5, 0]}>
        <meshStandardMaterial color={"#909090"} />
        <boxGeometry args={[2, 8, 1]} />
      </mesh>
      <mesh position={[-2, 1, 0]}>
        <meshStandardMaterial color={"#909090"} />
        <boxGeometry args={[8, 2, 1]} />
      </mesh>

      {/* Upper Window */}
      <mesh position={[0, 5.5, -0]}>
        <meshStandardMaterial color={"#106070"} opacity={0.5} transparent />
        <boxGeometry args={[8, 8, 1]} />
      </mesh>

      {/* Lower frames */}
      <mesh position={[2, -10.5, 0]}>
        <meshStandardMaterial color={"#909090"} />
        <boxGeometry args={[8, 2, 1]} />
      </mesh>
      <mesh position={[5, -5.5, 0]}>
        <meshStandardMaterial color={"#909090"} />
        <boxGeometry args={[2, 8, 1]} />
      </mesh>
      <mesh position={[2, -1, 0]}>
        <meshStandardMaterial color={"#909090"} />
        <boxGeometry args={[8, 2, 1]} />
      </mesh>

      {/* Lower Window */}
      <mesh position={[0, -5.5, -0]}>
        <meshStandardMaterial color={"#106070"} opacity={0.5} transparent />
        <boxGeometry args={[8, 8, 0.5]} />
      </mesh>
    </group>
  );
};

const LowerLayerMesh = ({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) => {
  return (
    <group position={position} scale={scale}>
      <mesh>
        <meshStandardMaterial color={"#3F3F3F"} />
        <boxGeometry args={[32, 11, 32]} />
      </mesh>
      {/* Left face windows */}
      <WindowMesh scale={[0.35, 0.35, 0.3]} position={[-12, 0, 16.5]} />
      <WindowMesh scale={[0.35, 0.35, 0.3]} position={[-6, 0, 16.5]} />
      <WindowMesh scale={[0.35, 0.35, 0.3]} position={[0, 0, 16.5]} />
      <WindowMesh scale={[0.35, 0.35, 0.3]} position={[6, 0, 16.5]} />
      <WindowMesh scale={[0.35, 0.35, 0.3]} position={[12, 0, 16.5]} />

      {/* Right face windows */}
      <WindowMesh
        scale={[0.35, 0.35, 0.3]}
        position={[16.5, 0, -12]}
        rotation={(3 * Math.PI) / 2}
      />
      <WindowMesh
        scale={[0.35, 0.35, 0.3]}
        position={[16.5, 0, -6]}
        rotation={(3 * Math.PI) / 2}
      />
      <WindowMesh
        scale={[0.35, 0.35, 0.3]}
        position={[16.5, 0, 0]}
        rotation={(3 * Math.PI) / 2}
      />
      <WindowMesh
        scale={[0.35, 0.35, 0.3]}
        position={[16.5, 0, 6]}
        rotation={(3 * Math.PI) / 2}
      />
      <WindowMesh
        scale={[0.35, 0.35, 0.3]}
        position={[16.5, 0, 12]}
        rotation={(3 * Math.PI) / 2}
      />
    </group>
  );
};

const MiddleLayerMesh = ({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) => {
  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-16, 16);
    shape.lineTo(0, 16);
    shape.lineTo(0, 6);
    shape.lineTo(16, -16);
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
};

export default function GatesMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  console.log(scale, position);
  return (
    <group position={[0, 0, 0]} scale={scale}>
      <LowerLayerMesh scale={[1, 1, 1]} position={[0, -5.5, 0]} />
      <MiddleLayerMesh scale={[1, 1, 1]} position={[0, 0, 10]} />
    </group>
  );
}
