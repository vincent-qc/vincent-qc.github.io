import { useMemo, useRef } from "react";
import { Mesh } from "three";
import useWindowSize from "../../hooks/useWindowSize";

export default function Base() {
  const meshRef = useRef<Mesh>(null);
  const { width } = useWindowSize();
  const baseWidth = useMemo(() => width / 3, [width]);

  return (
    <mesh position={[0, 0, 0]} ref={meshRef}>
      <boxGeometry args={[baseWidth, 25, baseWidth]} />
      <meshStandardMaterial color={"#C0C0C0"} />
    </mesh>
  );
}
