export default function WindowMesh({
  scale,
  position,
  rotation,
}: {
  scale: [number, number, number];
  position: [number, number, number];
  rotation?: number;
}) {
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
}
