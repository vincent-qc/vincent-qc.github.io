import { GATES_BLACK } from "../../shared/colors";
import { WindowNormalMesh } from "./windows";

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
        <meshStandardMaterial color={GATES_BLACK} />
        <boxGeometry args={[32, 12, 32]} />
      </mesh>
      {/* Left face windows */}
      <WindowNormalMesh scale={[0.6, 0.6, 0.6]} position={[10, 0, 16.5]} />
      <WindowNormalMesh scale={[0.6, 0.6, 0.6]} position={[0, 0, 16.5]} />{" "}
      <WindowNormalMesh scale={[0.6, 0.6, 0.6]} position={[-10, 0, 16.5]} />
      {/* Right face windows */}
      <WindowNormalMesh
        scale={[0.6, 0.6, 0.6]}
        position={[16.5, 0, 10]}
        rotation={(3 * Math.PI) / 2}
      />
      <WindowNormalMesh
        scale={[0.6, 0.6, 0.6]}
        position={[16.5, 0, 0]}
        rotation={(3 * Math.PI) / 2}
      />
      <WindowNormalMesh
        scale={[0.6, 0.6, 0.6]}
        position={[16.5, 0, -10]}
        rotation={(3 * Math.PI) / 2}
      />
      {/* Balcony */}
      <group>
        <mesh position={[10, 7, 13.5]}>
          <meshStandardMaterial color={"#5090A0"} transparent opacity={0.25} />
          <boxGeometry args={[7, 2, 1]} />
        </mesh>
        <mesh position={[13, 7, 0]}>
          <meshStandardMaterial color={"#5090A0"} transparent opacity={0.25} />
          <boxGeometry args={[1, 2, 26]} />
        </mesh>
        <mesh position={[0, 7, -13.5]}>
          <meshStandardMaterial color={"#5090A0"} transparent opacity={0.25} />
          <boxGeometry args={[27, 2, 1]} />
        </mesh>
        <mesh position={[-13, 7, -9.5]}>
          <meshStandardMaterial color={"#5090A0"} transparent opacity={0.25} />
          <boxGeometry args={[1, 2, 7]} />
        </mesh>
      </group>
    </group>
  );
}
