const WindowMesh = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      {/* Upper frames */}
      <mesh position={[-2, 10, 0]}>
        <meshStandardMaterial color={"#999999"} />
        <boxGeometry args={[8, 2, 1]} />
      </mesh>
      <mesh position={[-5, 5, 0]}>
        <meshStandardMaterial color={"#999999"} />
        <boxGeometry args={[2, 8, 1]} />
      </mesh>
      <mesh position={[-2, 0.5, 0]}>
        <meshStandardMaterial color={"#999999"} />
        <boxGeometry args={[8, 1, 1]} />
      </mesh>

      {/* Upper Window */}
      <mesh position={[0, 5, -0.25]}>
        <meshStandardMaterial color={"#106070"} opacity={0.35} transparent />
        <boxGeometry args={[8, 8, 0.5]} />
      </mesh>

      {/* Lower frames */}
      <mesh position={[2, -10, 0]}>
        <meshStandardMaterial color={"#999999"} />
        <boxGeometry args={[8, 2, 1]} />
      </mesh>
      <mesh position={[5, -5, 0]}>
        <meshStandardMaterial color={"#999999"} />
        <boxGeometry args={[2, 8, 1]} />
      </mesh>
      <mesh position={[2, -0.5, 0]}>
        <meshStandardMaterial color={"#999999"} />
        <boxGeometry args={[8, 1, 1]} />
      </mesh>

      {/* Lower Window */}
      <mesh position={[0, 5, -0.25]}>
        <meshStandardMaterial color={"#106070"} opacity={0.35} transparent />
        <boxGeometry args={[8, 8, 0.5]} />
      </mesh>
    </group>
  );
};

export default function GatesMesh({
  position,
}: {
  position: [number, number, number];
}) {
  console.log(position);
  return (
    <group position={[0, 0, 0]}>
      {/* <mesh>
        <meshStandardMaterial color={"#3F3F3F"} />
        <boxGeometry args={[10, 10 / 3, 10]} />
      </mesh> */}
      <WindowMesh position={[0, 0, 0]} />
      {/* <mesh position={[0, 20 / 3, 0]} rotation={[0, 0, 0]}>
        <meshStandardMaterial color={"#3F3F3F"} />
        <boxGeometry args={[10, 10 / 3, 10]} />
      </mesh> */}
    </group>
  );
}
