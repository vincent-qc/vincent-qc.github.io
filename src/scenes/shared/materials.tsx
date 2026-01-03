import { useEnvironment } from "@react-three/drei";
import { useMemo } from "react";
import { MeshPhysicalMaterial } from "three";
import { GLASS_BLUE } from "./colors";

export function useGlassMaterial() {
  const envMap = useEnvironment({ preset: "city" });

  return useMemo(() => {
    return new MeshPhysicalMaterial({
      color: GLASS_BLUE,
      metalness: 0.9,
      roughness: 0.1,
      envMap: envMap,
      envMapIntensity: 0.8,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      reflectivity: 1,
      transparent: true,
      opacity: 0.85,
    });
  }, [envMap]);
}

