import { useEnvironment } from "@react-three/drei";
import { useMemo } from "react";
import { MeshPhysicalMaterial } from "three";

export default function BuildingMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  const envMap = useEnvironment({ preset: "city" });

  const glassMaterial = useMemo(() => {
    return new MeshPhysicalMaterial({
      color: "#8ecae6",
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

  return (
    <group scale={scale} position={position}>
      {/* Body - Reflective Glass */}
      <BeamMesh position={[0, 5, 0]} dimensions={[9.5, 0.5, 9.5]} />
      <mesh material={glassMaterial}>
        <boxGeometry args={[10, 10, 10]} />
      </mesh>
      {/* Top */}
      <BeamMesh dimensions={[0.5, 0.5, 11]} position={[5, 5, 0]} />
      <BeamMesh dimensions={[11, 0.5, 0.5]} position={[0, 5, 5]} />
      <BeamMesh dimensions={[11, 0.5, 0.5]} position={[0, 5, -5]} />
      <BeamMesh dimensions={[0.5, 0.5, 11]} position={[-5, 5, 0]} />

      {/* Middle */}
      <BeamMesh
        dimensions={[1, 11, 1]}
        position={[5.2, 0, 5.2]}
        rotation={[-0.02, 0, 0.02]}
      />
      <BeamMesh
        dimensions={[1, 11, 1]}
        position={[5.2, 0, -5.2]}
        rotation={[0.02, 0, 0.02]}
      />
      <BeamMesh
        dimensions={[1, 11, 1]}
        position={[-5.2, 0, 5.2]}
        rotation={[-0.02, 0, -0.02]}
      />
      <BeamMesh
        dimensions={[1, 11, 1]}
        position={[-5.2, 0, -5.2]}
        rotation={[0.02, 0, -0.02]}
      />

      {/* Bottom */}
      <BeamMesh dimensions={[0.5, 0.5, 11]} position={[5, -5, 0]} />
      <BeamMesh dimensions={[11, 0.5, 0.5]} position={[0, -5, 5]} />

      {/* Pattern */}
      <BeamMesh
        dimensions={[11, 0.5, 0.5]}
        position={[0, 2.5, 5]}
        rotation={[0, 0, Math.PI / 6.5]}
      />
      <BeamMesh dimensions={[11, 0.5, 0.5]} position={[0, 0, 5]} />
      <BeamMesh
        dimensions={[11, 0.5, 0.5]}
        position={[0, -2.5, 5]}
        rotation={[0, 0, -Math.PI / 6.5]}
      />
      <BeamMesh
        dimensions={[0.5, 0.5, 11]}
        position={[5, 2.5, 0]}
        rotation={[-Math.PI / 6.5, 0, 0]}
      />
      <BeamMesh dimensions={[0.5, 0.5, 11]} position={[5, 0, 0]} />
      <BeamMesh
        dimensions={[0.5, 0.5, 11]}
        position={[5, -2.5, 0]}
        rotation={[Math.PI / 6.5, 0, 0]}
      />

      {/* Pattern back */}
      <BeamMesh
        dimensions={[11, 0.5, 0.5]}
        position={[0, 2.5, -5]}
        rotation={[0, 0, -Math.PI / 6.5]}
      />
      <BeamMesh dimensions={[11, 0.5, 0.5]} position={[0, 0, 5]} />
      <BeamMesh
        dimensions={[11, 0.5, 0.5]}
        position={[0, -2.5, -5]}
        rotation={[0, 0, Math.PI / 6.5]}
      />
      <BeamMesh
        dimensions={[0.5, 0.5, 11]}
        position={[-5, 2.5, 0]}
        rotation={[Math.PI / 6.5, 0, 0]}
      />
      <BeamMesh dimensions={[0.5, 0.5, 11]} position={[5, 0, 0]} />
      <BeamMesh
        dimensions={[0.5, 0.5, 11]}
        position={[-5, -2.5, 0]}
        rotation={[-Math.PI / 6.5, 0, 0]}
      />
    </group>
  );
}

const BeamMesh = ({
  dimensions,
  position,
  rotation,
}: {
  dimensions: [number, number, number];
  position: [number, number, number];
  rotation?: [number, number, number];
}) => {
  return (
    <group position={position}>
      <mesh rotation={rotation ?? [0, 0, 0]}>
        <boxGeometry args={dimensions} />
        <meshStandardMaterial
          color={"#FFFFFF"}
          metalness={0.2}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
};
