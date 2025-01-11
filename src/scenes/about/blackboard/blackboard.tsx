import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";
import img from "../../../assets/scenes/blackboard.png";

export default function BlackboardMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  const texture = useLoader(THREE.TextureLoader, img);
  return (
    <group scale={scale} position={position}>
      {/* Frame */}
      <group>
        <mesh position={[0, 17, 1]}>
          <boxGeometry args={[50, 2, 4]} />
          <meshStandardMaterial color={"#321C06"} />
        </mesh>
        <mesh position={[0, -17, 1]}>
          <boxGeometry args={[50, 2, 4]} />
          <meshStandardMaterial color={"#321C06"} />
        </mesh>
        <mesh position={[24, 0, 1]}>
          <boxGeometry args={[2, 36, 4]} />
          <meshStandardMaterial color={"#321C06"} />
        </mesh>
        <mesh position={[-24, 0, 1]}>
          <boxGeometry args={[2, 36, 4]} />
          <meshStandardMaterial color={"#321C06"} />
        </mesh>
        {/* Chalk holder */}
        <mesh position={[18, -17, 4]}>
          <boxGeometry args={[10, 2, 4]} />
          <meshStandardMaterial color={"#321C06"} />
          {/* Chalk */}
          <mesh
            rotation={[0, -Math.PI / 8, Math.PI / 2]}
            position={[0, 1.5, 0]}
          >
            <cylinderGeometry args={[0.5, 0.5, 4]} />
            <meshStandardMaterial color={"#F0F0F0"} />
          </mesh>
          {/* <mesh
            rotation={[Math.PI / 2, -Math.PI / 8, (3 * Math.PI) / 5]}
            position={[1, 2.2, 0]}
          >
            <cylinderGeometry args={[0.5, 0.5, 4]} />
            <meshStandardMaterial color={"#FFB0B0"} />
          </mesh> */}
        </mesh>
      </group>

      {/* Board */}
      <mesh>
        <boxGeometry args={[48, 32, 2]} />
        <meshStandardMaterial color={"#252525"} />
      </mesh>

      {/* Image */}
      <Suspense fallback={null}>
        <mesh position={[0, 0, 1.5]}>
          <planeGeometry args={[48, 32]} />
          <meshStandardMaterial map={texture} />
        </mesh>
      </Suspense>
    </group>
  );
}
