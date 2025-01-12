import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { GRASS_GREEN } from "../shared/colors";

const TriangleMesh = ({
  position,
  rotation,
  children,
}: {
  position: [number, number, number];
  rotation?: number;
  children: React.ReactNode;
}) => {
  const triangle = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(0, 3);
    shape.lineTo(3, 0);
    return shape;
  }, []);
  return (
    <group position={position}>
      <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, rotation || 0]}>
        <extrudeGeometry args={[triangle, { depth: 1, bevelEnabled: false }]} />
        {children}
      </mesh>
    </group>
  );
};

const GrassBase = ({ children }: { children: React.ReactNode }) => {
  const animationRef = useRef(0);
  const baseRef = useRef<THREE.Group>(null);
  useFrame(() => {
    animationRef.current = (animationRef.current + 0.025) % (Math.PI * 2);
    baseRef.current!.position.y = Math.sin(animationRef.current) * 0.3;
  });

  return (
    <group ref={baseRef} position={[-0.05, 0, 0.3]} receiveShadow>
      {/* Children */}
      {children}

      {/* Base */}
      <group>
        <mesh position={[-5, 0, 5]}>
          <boxGeometry args={[10, 1, 10]} />
          <meshPhongMaterial color={GRASS_GREEN} />
        </mesh>
        <mesh position={[5, 0, 6.5]}>
          <boxGeometry args={[10, 1, 7]} />
          <meshPhongMaterial color={GRASS_GREEN} />
        </mesh>
        <mesh position={[-6.5, 0, -1.5]}>
          <boxGeometry args={[7, 1, 3]} />
          <meshPhongMaterial color={GRASS_GREEN} />
        </mesh>
        <TriangleMesh position={[0, 0, 3]} rotation={-Math.PI / 2}>
          <meshPhongMaterial color={GRASS_GREEN} />
        </TriangleMesh>
        <TriangleMesh position={[-3, 0, 0]} rotation={-Math.PI / 2}>
          <meshPhongMaterial color={GRASS_GREEN} />
        </TriangleMesh>
      </group>
    </group>
  );
};

const FloorBase = ({ children }: { children: React.ReactNode }) => {
  const animationRef = useRef(Math.PI / 2);
  const baseRef = useRef<THREE.Group>(null);
  useFrame(() => {
    animationRef.current = (animationRef.current + 0.025) % (Math.PI * 2);
    baseRef.current!.position.y = Math.sin(animationRef.current) * 0.3;
  });

  return (
    <group ref={baseRef} position={[0.05, -0.75, -0.3]}>
      {/* Children */}
      {children}

      {/* Base */}
      <mesh position={[5, 0, -5]}>
        <boxGeometry args={[10, 1, 10]} />
        <meshPhongMaterial color={"#55555F"} />
      </mesh>
      <mesh position={[-5, 0, -6.5]}>
        <boxGeometry args={[10, 1, 7]} />
        <meshPhongMaterial color={"#55555F"} />
      </mesh>
      <mesh position={[6.5, 0, 1.5]}>
        <boxGeometry args={[7, 1, 3]} />
        <meshPhongMaterial color={"#55555F"} />
      </mesh>
      <TriangleMesh position={[0, 0, -3]} rotation={Math.PI / 2}>
        <meshPhongMaterial color={"#55555F"} />
      </TriangleMesh>
      <TriangleMesh position={[3, 0, 0]} rotation={Math.PI / 2}>
        <meshPhongMaterial color={"#55555F"} />
      </TriangleMesh>
    </group>
  );
};

export { FloorBase, GrassBase };
