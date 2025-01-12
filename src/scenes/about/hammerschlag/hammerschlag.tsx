import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { bounce } from "../../shared/animations";
import BaseMesh from "./base";
import CenterMesh from "./center";
import FrontMesh from "./front";
import WingMesh from "./wing";

export default function HammerschlagMesh({
  scale,
  position,
  rotation,
}: {
  scale: [number, number, number];
  position: [number, number, number];
  rotation?: number;
}) {
  const bounceRef = useRef(100);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (bounceRef.current >= 100) {
      bounceRef.current = 100;
      return;
    }
    bounceRef.current += 1.5;
    meshRef.current!.position.y = position[1] + bounce(bounceRef.current, 1);
  });

  return (
    <mesh
      ref={meshRef}
      scale={scale}
      position={position}
      rotation={[0, rotation || 0, 0]}
      castShadow
      receiveShadow
      onClick={(event) => {
        if (bounceRef.current === 100) bounceRef.current = 0;
        event.stopPropagation();
      }}
    >
      <BaseMesh scale={[1, 1, 1]} position={[0, -0.5, 0]} />
      <FrontMesh scale={[1, 1, 1]} position={[0, 0, 0]} />
      <CenterMesh scale={[1, 1, 1]} position={[0, 8, -21]} />
      <WingMesh scale={[1, 1, 1]} position={[19, 6, -21]} />
      <WingMesh scale={[1, 1, 1]} position={[-19, 6, -21]} left />
    </mesh>
  );
}
