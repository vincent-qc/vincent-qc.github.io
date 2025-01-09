import LaptopMesh from "./laptop";

const LegMesh = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[1, 1, 11]} />
        <meshStandardMaterial color="#BBBBBB" />
      </mesh>
      <mesh position={[0, -6, 0]}>
        <cylinderGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#303030" />
      </mesh>
    </group>
  );
};

export default function DeskMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  return (
    <group scale={scale} position={position}>
      {/* Top */}
      {/* <mesh>
        <boxGeometry args={[32, 2, 20]} />
        <meshStandardMaterial color="#CCCCCC" />
      </mesh> */}

      {/* Legs */}
      {/* <LegMesh position={[-12, -6, -6]} />
      <LegMesh position={[-12, -6, 6]} />
      <LegMesh position={[12, -6, 6]} />
      <LegMesh position={[12, -6, -6]} /> */}
      <LaptopMesh scale={[1, 1, 1]} position={[0, 0, 0]} />
    </group>
  );
}
