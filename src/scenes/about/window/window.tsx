import { GLASS_BLUE } from "../../shared/colors";

export default function WindowMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  return (
    <group scale={scale} position={position}>
      {/* Frame */}
      <group position={[1, 0, 0]}>
        <mesh position={[0, 20, 0]}>
          <boxGeometry args={[4, 2, 38]} />
          <meshStandardMaterial color="#F0F0F0" />
        </mesh>
        <mesh position={[0, -20, 0]}>
          <boxGeometry args={[4, 2, 38]} />
          <meshStandardMaterial color="#F0F0F0" />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[4, 2, 38]} />
          <meshStandardMaterial color="#F0F0F0" />
        </mesh>
        <mesh position={[0, 0, 20]}>
          <boxGeometry args={[4, 42, 2]} />
          <meshStandardMaterial color="#F0F0F0" />
        </mesh>
        <mesh position={[0, 0, -20]}>
          <boxGeometry args={[4, 42, 2]} />
          <meshStandardMaterial color="#F0F0F0" />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[4, 42, 2]} />
          <meshStandardMaterial color="#F0F0F0" />
        </mesh>
      </group>

      {/* Glass */}
      <group>
        <mesh position={[0, 10, 10]}>
          <boxGeometry args={[2, 18, 18]} />
          <meshStandardMaterial color={GLASS_BLUE} transparent opacity={0.5} />
        </mesh>
        <mesh position={[0, 10, -10]}>
          <boxGeometry args={[2, 18, 18]} />
          <meshStandardMaterial color={GLASS_BLUE} transparent opacity={0.5} />
        </mesh>
        <mesh position={[0, -10, 10]}>
          <boxGeometry args={[2, 18, 18]} />
          <meshStandardMaterial color={GLASS_BLUE} transparent opacity={0.5} />
        </mesh>
        <mesh position={[0, -10, -10]}>
          <boxGeometry args={[2, 18, 18]} />
          <meshStandardMaterial color={GLASS_BLUE} transparent opacity={0.5} />
        </mesh>
      </group>
    </group>
  );
}
