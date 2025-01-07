import { useMemo, useRef } from "react";
import { Mesh } from "three";
import useWindowSize from "../../hooks/useWindowSize";

export default function Base() {
  const meshRef = useRef<Mesh>(null);
  const { width, height } = useWindowSize();
  const baseWidth = useMemo(() => width / 3, [width]);

  return (
    <mesh position={[0, 0, 0]} ref={meshRef}>
      <boxGeometry args={[baseWidth, 20, baseWidth]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
}
