import LowerLayerMesh from "./lower";
import MiddleLayerMesh from "./middle";
import UpperLayerMesh from "./upper";

export default function GatesMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  return (
    <group position={position} scale={scale}>
      <LowerLayerMesh scale={[1, 1, 1]} position={[0, 0, 0]} />
      <MiddleLayerMesh scale={[1, 1, 1]} position={[0, 6, 10]} />
      <UpperLayerMesh scale={[1, 1, 1]} position={[0, 19, 0]} />
    </group>
  );
}
