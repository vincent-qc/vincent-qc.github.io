export default function BaseMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  return (
    <group position={position} scale={scale} castShadow receiveShadow>
      {/* First layer */}
      <group>
        <mesh position={[0, 0, -21]}>
          <boxGeometry args={[57, 1, 19]} />
          <meshStandardMaterial color="#D3D3D3" />
        </mesh>
        <mesh position={[0, 0, -2]}>
          <boxGeometry args={[19, 1, 19]} />
          <meshStandardMaterial color="#D3D3D3" />
        </mesh>
      </group>
      {/* Second layer */}
      <group position={[0, -1, 0]}>
        <mesh position={[0, 0, -21]}>
          <boxGeometry args={[59, 1, 21]} />
          <meshStandardMaterial color="#D3D3D3" />
        </mesh>
        <mesh position={[0, 0, -2]}>
          <boxGeometry args={[21, 1, 21]} />
          <meshStandardMaterial color="#D3D3D3" />
        </mesh>
      </group>

      {/* Third Layer */}
      <group position={[0, -2, 0]}>
        <mesh position={[0, 0, -21]}>
          <boxGeometry args={[61, 1, 23]} />
          <meshStandardMaterial color="#D3D3D3" />
        </mesh>
        <mesh position={[0, 0, -2]}>
          <boxGeometry args={[23, 1, 23]} />
          <meshStandardMaterial color="#D3D3D3" />
        </mesh>
      </group>

      {/* Base Layer */}
      {/* <mesh position={[0, -3, -10]}>
        <boxGeometry args={[63, 1, 47]} />
        <meshStandardMaterial color="#D3D3D3" />
      </mesh> */}

      {/* Gardens */}
      {/* <group position={[21, -2, 0.5]}>
        <mesh position={[0, 2.5, 0]}>
          <boxGeometry args={[10, 6, 10]} />
          <meshStandardMaterial color="#151515" transparent opacity={0.85} />
        </mesh>
        <mesh position={[0, 6, 0]}>
          <boxGeometry args={[10, 1, 10]} />
          <meshStandardMaterial color={GATES_BLACK} />
        </mesh>
      </group> */}
    </group>
  );
}
