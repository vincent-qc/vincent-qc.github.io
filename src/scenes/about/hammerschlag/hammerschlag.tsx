import CenterMesh from "./center";
import FrontMesh from "./front";
import RoofMesh from "./roof";
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
    <group scale={scale} position={position} rotation={[0, rotation || 0, 0]}>
      <RoofMesh scale={[1, 1, 1]} position={[0, 12, 5]} />
      <FrontMesh scale={[1, 1, 1]} position={[0, 0, 0]} />
      <CenterMesh scale={[1, 1, 1]} position={[0, 8, -27]} />
      <WingMesh scale={[1, 1, 1]} position={[18, 8, -27]} />
    </group>
  );
}
