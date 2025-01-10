import HammerschlagMesh from "./hammerschlag/hammerschlag";

export default function AboutScene() {
  return (
    <group>
      {/* <GatesMesh scale={[0.2, 0.2, 0.2]} position={[-7, 5, -7]} />
      <OrganizedDeskMesh scale={[0.35, 0.35, 0.35]} position={[4, 4.85, -7]} />
      <Base /> */}
      <HammerschlagMesh scale={[0.2, 0.2, 0.2]} position={[-7, 5, -7]} />
    </group>
  );
}
