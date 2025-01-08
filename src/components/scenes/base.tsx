import { useRef } from "react";
import { Mesh } from "three";

export default function Base() {
  const meshRef = useRef<Mesh>(null);

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[20, 2, 20]} />
      <meshStandardMaterial color={"#C0C0C0"} />
    </mesh>
  );
}
