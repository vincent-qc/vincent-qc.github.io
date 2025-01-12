import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { bounce } from "../../shared/animations";
import FridgeMesh from "../desk/fridge";
import LowerLayerMesh from "./lower";
import MiddleLayerMesh from "./middle";
import UpperLayerMesh from "./upper";

export default function GatesMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
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
      position={position}
      scale={scale}
      onClick={(event) => {
        if (bounceRef.current === 100) bounceRef.current = 0;
        event.stopPropagation();
      }}
    >
      <FridgeMesh scale={[3.2, 3.2, 3.2]} position={[0, -39.5, 0]} />
      <LowerLayerMesh scale={[1, 1, 1]} position={[0, 0, 0]} />
      <MiddleLayerMesh scale={[1, 1, 1]} position={[0, 6, 10]} />
      <UpperLayerMesh scale={[1, 1, 1]} position={[0, 19, 0]} />
    </mesh>
  );
}
