import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FloorBase, GrassBase } from "./base";
import OrganizedDeskMesh from "./desk/desk";
import DuckMesh from "./duck/duck";
import FlagMesh from "./flag/flag";
import GatesMesh from "./gates/gates";
import HammerschlagMesh from "./hammerschlag/hammerschlag";
import LightMesh from "./lights/lights";

export default function AboutScene() {
  const ref = useRef<THREE.Group>(null);
  const rotation = useRef(0.1);
  const scale = useRef(0.01);

  useEffect(() => {
    ref.current?.scale.set(0.1, 0.1, 0.1);
  }, []);
  useFrame(() => {
    if (ref.current) {
      if (rotation.current < Math.PI * 4) {
        rotation.current += 0.25 - Math.min(rotation.current / 50.2, 0.2499);
      } else {
        rotation.current = Math.PI * 6;
      }
      ref.current.rotation.y = rotation.current;

      if (scale.current < 1) {
        scale.current += 0.05 - Math.min(scale.current / 10, 0.04);
      } else {
        scale.current = 1;
      }
      ref.current.scale.set(scale.current, scale.current, scale.current);
    }
  });

  return (
    <group ref={ref} position={[0, -6, 0]} castShadow receiveShadow>
      <GrassBase>
        <HammerschlagMesh
          scale={[0.195, 0.195, 0.195]}
          position={[-3.4, 1.1, 3.8]}
          rotation={Math.PI / 2}
        />
        <FlagMesh scale={[0.225, 0.225, 0.225]} position={[-11, 8, 4]} />
        <DuckMesh
          scale={[0.4, 0.4, 0.4]}
          position={[-3.5, 0.9, 7.8]}
          rotation={-Math.PI / 8}
        />
      </GrassBase>
      <FloorBase>
        <GatesMesh scale={[0.2, 0.2, 0.2]} position={[-7, 8.7, -7]} />
        <OrganizedDeskMesh
          scale={[0.35, 0.35, 0.35]}
          position={[3.25, 4.85, -6.5]}
        />
        <LightMesh scale={[0.175, 0.175, 0.175]} position={[3.5, 5.5, -11]} />
      </FloorBase>
    </group>
  );
}
