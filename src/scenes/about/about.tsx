import Base from "../base";
import OrganizedDeskMesh from "./desk/desk";
import FridgeMesh from "./desk/fridge";
import FlagMesh from "./flag/flag";
import GatesMesh from "./gates/gates";
import HammerschlagMesh from "./hammerschlag/hammerschlag";
import LightMesh from "./lights/lights";

export default function AboutScene() {
  return (
    <group position={[0, -6, 0]} castShadow receiveShadow>
      <FridgeMesh scale={[0.64, 0.65, 0.64]} position={[-6.8, 0.75, -6.6]} />
      <GatesMesh scale={[0.2, 0.2, 0.2]} position={[-6.8, 8.7, -6.6]} />
      <OrganizedDeskMesh
        scale={[0.35, 0.35, 0.35]}
        position={[3.25, 4.85, -6.5]}
      />
      <HammerschlagMesh
        scale={[0.2, 0.2, 0.2]}
        position={[-4, 0.5, 4]}
        rotation={Math.PI / 2}
      />
      <FlagMesh scale={[0.225, 0.225, 0.225]} position={[-11, 8, 4]} />
      <LightMesh scale={[0.15, 0.15, 0.15]} position={[3.5, 6, -11]} />
      {/* <WindowMesh scale={[0.2, 0.2, 0.2]} position={[-11, 10, 4]} /> */}
      {/* <BlackboardMesh scale={[0.2, 0.2, 0.2]} position={[4, 11, -11]} /> */}
      <Base />
    </group>
  );
}
