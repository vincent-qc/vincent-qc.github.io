export default function UpperLayerMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  return <group position={position} scale={scale}></group>;
}
