import WindowMesh from "./windows";

export default function LowerLayerMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  return (
    <group position={position} scale={scale}>
      <mesh>
        <meshStandardMaterial color={"#3F3F3F"} />
        <boxGeometry args={[32, 11, 32]} />
      </mesh>
      {/* Left face windows */}
      <WindowMesh scale={[0.35, 0.35, 0.3]} position={[-12, 0, 16.5]} />
      <WindowMesh scale={[0.35, 0.35, 0.3]} position={[-6, 0, 16.5]} />
      <WindowMesh scale={[0.35, 0.35, 0.3]} position={[0, 0, 16.5]} />
      <WindowMesh scale={[0.35, 0.35, 0.3]} position={[6, 0, 16.5]} />
      <WindowMesh scale={[0.35, 0.35, 0.3]} position={[12, 0, 16.5]} />

      {/* Right face windows */}
      <WindowMesh
        scale={[0.35, 0.35, 0.3]}
        position={[16.5, 0, -12]}
        rotation={(3 * Math.PI) / 2}
      />
      <WindowMesh
        scale={[0.35, 0.35, 0.3]}
        position={[16.5, 0, -6]}
        rotation={(3 * Math.PI) / 2}
      />
      <WindowMesh
        scale={[0.35, 0.35, 0.3]}
        position={[16.5, 0, 0]}
        rotation={(3 * Math.PI) / 2}
      />
      <WindowMesh
        scale={[0.35, 0.35, 0.3]}
        position={[16.5, 0, 6]}
        rotation={(3 * Math.PI) / 2}
      />
      <WindowMesh
        scale={[0.35, 0.35, 0.3]}
        position={[16.5, 0, 12]}
        rotation={(3 * Math.PI) / 2}
      />

      {/* Balcony */}
      <group>
        <mesh position={[10, 6.5, 13.5]}>
          <meshStandardMaterial color={"#5090A0"} transparent opacity={0.25} />
          <boxGeometry args={[7, 2, 1]} />
        </mesh>
        <mesh position={[13, 6.5, 0]}>
          <meshStandardMaterial color={"#5090A0"} transparent opacity={0.25} />
          <boxGeometry args={[1, 2, 26]} />
        </mesh>
        <mesh position={[0, 6.5, -13.5]}>
          <meshStandardMaterial color={"#5090A0"} transparent opacity={0.25} />
          <boxGeometry args={[27, 2, 1]} />
        </mesh>
        <mesh position={[-13, 6.5, -9.5]}>
          <meshStandardMaterial color={"#5090A0"} transparent opacity={0.25} />
          <boxGeometry args={[1, 2, 7]} />
        </mesh>
      </group>
    </group>
  );
}
