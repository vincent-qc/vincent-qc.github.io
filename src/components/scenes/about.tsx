export default function AboutScene() {
  return (
    <group>
      <mesh position={[-7.5, 5, -7.5]}>
        <meshStandardMaterial color={"#404040"} />
        <boxGeometry args={[5, 5, 5]} />
      </mesh>
    </group>
  );
}
