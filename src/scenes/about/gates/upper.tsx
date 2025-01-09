export default function UpperLayerMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  return (
    <group position={position} scale={scale}>
      {/* Base */}
      <mesh position={[0, 0, 0]}>
        <meshStandardMaterial color={"#3F3F3F"} />
        <boxGeometry args={[32, 2, 32]} />
      </mesh>
      <mesh position={[-8, 4.5, 21]}>
        <meshStandardMaterial color={"#3F3F3F"} />
        <boxGeometry args={[16, 11, 10]} />
      </mesh>

      {/* Window */}
      <mesh position={[8, 4.5, 8]}>
        <boxGeometry args={[16, 7, 16]} />
        <meshStandardMaterial color={"#106070"} transparent opacity={0.5} />
      </mesh>

      {/* Fill */}
      <group>
        <mesh position={[8, 4.5, -8]}>
          <boxGeometry args={[16, 7, 16]} />
          <meshStandardMaterial color={"#3F3F3F"} />
        </mesh>
        <mesh position={[-8, 4.5, -8]}>
          <boxGeometry args={[16, 7, 16]} />
          <meshStandardMaterial color={"#3F3F3F"} />
        </mesh>
        <mesh position={[-8, 4.5, 8]}>
          <boxGeometry args={[16, 7, 16]} />
          <meshStandardMaterial color={"#3F3F3F"} />
        </mesh>
      </group>

      {/* Top */}
      <mesh position={[0, 9, 0]}>
        <meshStandardMaterial color={"#3F3F3F"} />
        <boxGeometry args={[32, 2, 32]} />
      </mesh>
      <mesh position={[4, 11, 20]}>
        <meshStandardMaterial color={"#3F3F3F"} />
        <boxGeometry args={[12, 2, 12]} />
      </mesh>

      {/* Support */}
      <mesh position={[9, -6.5, -9]}>
        <cylinderGeometry args={[1, 1, 11]} />
        <meshStandardMaterial color={"#A0A0A0"} />
      </mesh>
      <mesh position={[5, 4.5, 21]}>
        <cylinderGeometry args={[1, 1, 11]} />
        <meshStandardMaterial color={"#A0A0A0"} />
      </mesh>

      {/* CMU */}
      {/* <group>
        <mesh position={[0, 11, 0]}>
          <boxGeometry args={[28, 1, 28]} />
          <meshStandardMaterial color={"#C41230"} />
        </mesh>
      </group> */}
    </group>
  );
}
