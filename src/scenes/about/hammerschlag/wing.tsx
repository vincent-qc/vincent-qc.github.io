export default function WingMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  return (
    <group scale={scale} position={position}>
      <mesh>
        <boxGeometry args={[16, 16, 16]} />
        <meshStandardMaterial color="#E7D1B1" />
      </mesh>
    </group>
  );
}
