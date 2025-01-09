import LowerLayerMesh from "./lower";
import MiddleLayerMesh from "./middle";

export default function GatesMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  console.log(scale, position);
  return (
    <group position={[0, 0, 0]} scale={scale}>
      <LowerLayerMesh scale={[1, 1, 1]} position={[0, -5.5, 0]} />
      <MiddleLayerMesh scale={[1, 1, 1]} position={[0, 0, 10]} />
    </group>
  );
}
