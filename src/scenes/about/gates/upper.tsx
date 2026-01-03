import { GATES_BLACK } from "../../shared/colors";
import { useGlassMaterial } from "../../shared/materials";
import { WindowFullMesh, WindowNormalMesh } from "./windows";

export default function UpperLayerMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  const glassMaterial = useGlassMaterial();

  return (
    <group position={position} scale={scale}>
      {/* Base */}
      <mesh position={[0, 0, 0]}>
        <meshStandardMaterial color={GATES_BLACK} />
        <boxGeometry args={[32, 2, 32]} />
      </mesh>
      <mesh position={[-8, 5, 21]}>
        <meshStandardMaterial color={GATES_BLACK} />
        <boxGeometry args={[16, 12, 10]} />
      </mesh>

      {/* Window Block */}
      <mesh position={[8, 5, 10]} material={glassMaterial}>
        <boxGeometry args={[16, 8, 12]} />
      </mesh>

      {/* Window Panes */}
      <WindowFullMesh scale={[0.6, 0.6, 0.6]} position={[-8, 4.5, 27]} />
      <WindowNormalMesh
        scale={[0.6, 0.6, 0.6]}
        position={[17, 5, -12]}
        rotation={Math.PI / 2}
        inverted
      />
      <WindowNormalMesh
        scale={[0.6, 0.6, 0.6]}
        position={[17, 5, -2]}
        rotation={Math.PI / 2}
        inverted
      />

      {/* Fill */}
      <group>
        <mesh position={[8, 5, -6]}>
          <boxGeometry args={[16, 8, 20]} />
          <meshStandardMaterial color={GATES_BLACK} />
        </mesh>
        <mesh position={[-8, 5, -8]}>
          <boxGeometry args={[16, 8, 16]} />
          <meshStandardMaterial color={GATES_BLACK} />
        </mesh>
        <mesh position={[-8, 5, 8]}>
          <boxGeometry args={[16, 8, 16]} />
          <meshStandardMaterial color={GATES_BLACK} />
        </mesh>
      </group>

      {/* Top */}
      <mesh position={[0, 10, 0]}>
        <meshStandardMaterial color={GATES_BLACK} />
        <boxGeometry args={[32, 2, 32]} />
      </mesh>
      <mesh position={[4, 14, 20]}>
        <meshStandardMaterial color={GATES_BLACK} />
        <boxGeometry args={[12, 2, 12]} />
      </mesh>
      <mesh position={[-1, 12, 20]}>
        <meshStandardMaterial color={GATES_BLACK} />
        <boxGeometry args={[2, 2, 12]} />
      </mesh>
      <mesh position={[4, 12, 15]}>
        <meshStandardMaterial color={GATES_BLACK} />
        <boxGeometry args={[12, 2, 2]} />
      </mesh>

      {/* Support */}
      <mesh position={[9, -7, -9]}>
        <cylinderGeometry args={[1, 1, 12]} />
        <meshStandardMaterial color={"#A0A0A0"} />
      </mesh>
      <mesh position={[5, 6, 21]}>
        <cylinderGeometry args={[1, 1, 14]} />
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
