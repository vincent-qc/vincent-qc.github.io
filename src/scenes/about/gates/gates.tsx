import FridgeMesh from "../desk/fridge";
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
    <mesh position={position} scale={scale}>
      <FridgeMesh scale={[3.2, 3.2, 3.2]} position={[0, -39.5, 0]} />
      <LowerLayerMesh scale={[1, 1, 1]} position={[0, 0, 0]} />
      <MiddleLayerMesh scale={[1, 1, 1]} position={[0, 6, 10]} />
      <UpperLayerMesh scale={[1, 1, 1]} position={[0, 19, 0]} />
    </mesh>
  );
}
