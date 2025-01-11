import { useRef } from "react";
import { Mesh } from "three";

export default function Base() {
  const meshRef = useRef<Mesh>(null);

  return (
    <mesh ref={meshRef} receiveShadow>
      <boxGeometry args={[20, 1, 20]} />
      <meshPhongMaterial color={"#808080"} />
    </mesh>
  );
}
