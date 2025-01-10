import CupMesh from "./cup";
import LaptopMesh from "./laptop";
import SwitchMesh from "./switch";

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
const DeskMesh = ({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) => {
  return (
    <group scale={scale} position={position}>
      {/* Top */}
      <mesh>
        <boxGeometry args={[32, 2, 20]} />
        <meshStandardMaterial color="#CCCCCC" />
      </mesh>

      {/* Legs */}
      <LegMesh position={[-12, -6, -6]} />
      <LegMesh position={[-12, -6, 6]} />
      <LegMesh position={[12, -6, 6]} />
      <LegMesh position={[12, -6, -6]} />
    </group>
  );
};

export default function OrganizedDeskMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  return (
    <group position={position} scale={scale}>
      <DeskMesh scale={[1, 1, 1]} position={[0, 0, 0]} />
      <LaptopMesh scale={[0.35, 0.35, 0.35]} position={[0, 1.25, -5]} />
      <CupMesh scale={[0.5, 0.5, 0.5]} position={[10, 3, -3]} />
      <SwitchMesh
        scale={[0.45, 0.45, 0.45]}
        position={[-11, 3.25, -5]}
        rotation={Math.PI / 6}
      />
    </group>
  );
}
