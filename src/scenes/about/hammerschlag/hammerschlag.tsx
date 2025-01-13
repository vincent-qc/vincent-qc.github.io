import BaseMesh from "./base";
import CenterMesh from "./center";
import FrontMesh from "./front";
import WingMesh from "./wing";

export default function HammerschlagMesh({
  scale,
  position,
  rotation,
}: {
  scale: [number, number, number];
  position: [number, number, number];
  rotation?: number;
}) {
  return (
    <mesh
      scale={scale}
      position={position}
      rotation={[0, rotation || 0, 0]}
      castShadow
      receiveShadow
    >
      <BaseMesh scale={[1, 1, 1]} position={[0, -0.5, 0]} />
      <FrontMesh scale={[1, 1, 1]} position={[0, 0, 0]} />
      <CenterMesh scale={[1, 1, 1]} position={[0, 8, -21]} />
      <WingMesh scale={[1, 1, 1]} position={[19, 6, -21]} />
      <WingMesh scale={[1, 1, 1]} position={[-19, 6, -21]} left />
    </mesh>
  );
}
