import Base from "../base";
import OrganizedDeskMesh from "./desk/desk";
import GatesMesh from "./gates/gates";
import HammerschlagMesh from "./hammerschlag/hammerschlag";

export default function AboutScene() {
  return (
    <group>
      <GatesMesh scale={[0.2, 0.2, 0.2]} position={[-7, 5, -7]} />
      <OrganizedDeskMesh scale={[0.35, 0.35, 0.35]} position={[4, 4.85, -7]} />
      <HammerschlagMesh
        scale={[0.2, 0.2, 0.2]}
        position={[-4, 0.5, 4]}
        rotation={Math.PI / 2}
      />
      <Base />
    </group>
  );
}
