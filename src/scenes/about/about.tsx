import { FloorBase, GrassBase } from "./base";
import OrganizedDeskMesh from "./desk/desk";
import FridgeMesh from "./desk/fridge";
import FlagMesh from "./flag/flag";
import GatesMesh from "./gates/gates";
import HammerschlagMesh from "./hammerschlag/hammerschlag";
import LightMesh from "./lights/lights";

export default function AboutScene() {
  return (
    <group position={[0, -6, 0]} castShadow receiveShadow>
      <GrassBase>
        <HammerschlagMesh
          scale={[0.195, 0.195, 0.195]}
          position={[-3.4, 1.1, 3.8]}
          rotation={Math.PI / 2}
        />
        <FlagMesh scale={[0.225, 0.225, 0.225]} position={[-11, 8, 4]} />
      </GrassBase>
      <FloorBase>
        <FridgeMesh scale={[0.64, 0.65, 0.64]} position={[-7, 0.75, -7]} />
        <GatesMesh scale={[0.2, 0.2, 0.2]} position={[-7, 8.7, -7]} />
        <OrganizedDeskMesh
          scale={[0.35, 0.35, 0.35]}
          position={[3.25, 4.85, -6.5]}
        />
        <LightMesh scale={[0.175, 0.175, 0.175]} position={[3.5, 6, -11]} />
      </FloorBase>
    </group>
  );
}
