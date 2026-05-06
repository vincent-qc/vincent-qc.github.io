export default function CupMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  return (
    <group scale={scale} position={position}>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[3, 2, 8, 32]} />
        <meshStandardMaterial color="#655545" />
      </mesh>
      <mesh position={[0, 4, 0]}>
        <cylinderGeometry args={[3, 3.5, 2, 32]} />
        <meshStandardMaterial color="#B0B0B0" />
      </mesh>
    </group>
  );
}
