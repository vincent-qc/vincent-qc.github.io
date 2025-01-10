import Base from "../base";
import BlackboardMesh from "./blackboard/blackboard";
import OrganizedDeskMesh from "./desk/desk";
import GatesMesh from "./gates/gates";
import HammerschlagMesh from "./hammerschlag/hammerschlag";
import WindowMesh from "./window/window";

export default function AboutScene() {
  return (
    <group position={[0, -6, 0]}>
      <GatesMesh scale={[0.2, 0.2, 0.2]} position={[-7, 6.5, -7]} />
      <OrganizedDeskMesh scale={[0.35, 0.35, 0.35]} position={[4, 4.85, -6]} />
      <HammerschlagMesh
        scale={[0.2, 0.2, 0.2]}
        position={[-4, 0.5, 4]}
        rotation={Math.PI / 2}
      />
      <WindowMesh scale={[0.2, 0.2, 0.2]} position={[-11, 10, 4]} />
      <BlackboardMesh scale={[0.2, 0.2, 0.2]} position={[4, 11, -11]} />
      <Base />
    </group>
  );
}
