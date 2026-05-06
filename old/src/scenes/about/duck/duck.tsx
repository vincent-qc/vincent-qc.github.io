export default function DuckMesh({
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
      {/* Body */}
      <group scale={[1, 0.85, 0.9]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1, 1]} />
          <meshStandardMaterial color={"#F6C200"} />
        </mesh>
        <mesh rotation={[Math.PI, 0, 0]}>
          <cylinderGeometry args={[1, 1, 2]} />
          <meshStandardMaterial color={"#F6C200"} />
        </mesh>
        <mesh position={[2, 1.5, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <coneGeometry args={[0.55, 0.9, 64]} />
          <meshStandardMaterial color={"#E86609"} />
        </mesh>
      </group>

      {/* Head */}
      <mesh position={[0.5, 1.5, 0]}>
        <sphereGeometry args={[1.2, 64]} />
        <meshStandardMaterial color={"#F6C200"} />
      </mesh>

      {/* Eyes */}
      <mesh position={[1.5, 2, 0.6]} rotation={[-0.5, Math.PI / 3, 0]}>
        <circleGeometry args={[0.25, 64]} />
        <meshStandardMaterial color={"#000000"} />
      </mesh>
      <mesh position={[1.5, 2, -0.6]} rotation={[0.5, (2 * Math.PI) / 3, 0]}>
        <circleGeometry args={[0.25, 64]} />
        <meshStandardMaterial color={"#000000"} />
      </mesh>
    </group>
  );
}
