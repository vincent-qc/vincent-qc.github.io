import { GATES_BLACK, GLASS_BLUE } from "../../shared/colors";

const DrinkMesh = ({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) => {
  return (
    <group scale={scale} position={position}>
      <mesh>
        <cylinderGeometry args={[1, 1, 3]} />
        <meshStandardMaterial color="#BB0000" />
      </mesh>
      <mesh position={[0, 1.75, 0]}>
        <cylinderGeometry args={[1, 1, 0.5]} />
        <meshStandardMaterial color="#CCCCCC" />
      </mesh>
    </group>
  );
};

export default function FridgeMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  return (
    <group scale={scale} position={position}>
      {/* Top */}
      <mesh>
        <boxGeometry args={[10, 1, 10]} />
        <meshStandardMaterial color={GATES_BLACK} />
      </mesh>
      {/* Back */}
      <mesh position={[0, 5, -4.5]}>
        <boxGeometry args={[8, 9, 1]} />
        <meshStandardMaterial color="#292929" />
      </mesh>
      {/* Plate */}
      <mesh position={[0, 5, 0]}>
        <boxGeometry args={[8, 0.5, 8]} />
        <meshStandardMaterial color="#CCCCCC" />
      </mesh>
      {/* Sides */}
      <mesh position={[4.5, 5, 0]}>
        <boxGeometry args={[1, 10, 10]} />
        <meshStandardMaterial color={GATES_BLACK} />
      </mesh>
      <mesh position={[-4.5, 5, 0]}>
        <boxGeometry args={[1, 10, 10]} />
        <meshStandardMaterial color={GATES_BLACK} />
      </mesh>
      {/* Bottom */}
      <mesh position={[0, 10, 0]}>
        <boxGeometry args={[10, 1, 10]} />
        <meshStandardMaterial color={GATES_BLACK} />
      </mesh>
      {/* Lights */}
      <group position={[0, 0, 0.5]}>
        <mesh position={[0, 9.5, 4]}>
          <boxGeometry args={[8, 0.5, 0.5]} />
          <meshStandardMaterial
            color="#FFFFFF"
            emissive={"white"}
            emissiveIntensity={1.3}
          />
        </mesh>
        <mesh position={[0, 0.5, 4]}>
          <boxGeometry args={[8, 0.5, 0.5]} />
          <meshStandardMaterial
            color="#FFFFFF"
            emissive={"white"}
            emissiveIntensity={1.3}
          />
        </mesh>
        <mesh position={[4, 5, 4]}>
          <boxGeometry args={[0.5, 9, 0.5]} />
          <meshStandardMaterial
            color="#FFFFFF"
            emissive={"white"}
            emissiveIntensity={1.3}
          />
        </mesh>
        <mesh position={[-4, 5, 4]}>
          <boxGeometry args={[0.5, 9, 0.5]} />
          <meshStandardMaterial
            color="#FFFFFF"
            emissive={"white"}
            emissiveIntensity={1.3}
          />
        </mesh>
      </group>

      {/* Front */}
      <group position={[0, 5, 6]}>
        {/* Frame */}
        <mesh position={[0, 5, 0]}>
          <boxGeometry args={[8, 1, 1.5]} />
          <meshStandardMaterial color="#424242" />
        </mesh>
        <mesh position={[0, -5, 0]}>
          <boxGeometry args={[8, 1, 1.5]} />
          <meshStandardMaterial color="#424242" />
        </mesh>
        <mesh position={[4.5, 0, 0]}>
          <boxGeometry args={[1, 11, 1.5]} />
          <meshStandardMaterial color="#424242" />
        </mesh>
        <mesh position={[-4.5, 0, 0]}>
          <boxGeometry args={[1, 11, 1.5]} />
          <meshStandardMaterial color="#424242" />
        </mesh>
        {/* Glass */}
        <mesh>
          <boxGeometry args={[8, 9, 1.5]} />
          <meshStandardMaterial color={GLASS_BLUE} transparent opacity={0.5} />
        </mesh>
      </group>

      {/* Drinks */}
      <DrinkMesh scale={[1, 1, 1]} position={[-2.25, 6.75, 2]} />
      <DrinkMesh scale={[1, 1, 1]} position={[0, 6.75, 2]} />
      <DrinkMesh scale={[1, 1, 1]} position={[2.25, 6.75, 2]} />
      <DrinkMesh scale={[1, 1, 1]} position={[-2.25, 6.75, -1.25]} />
      <DrinkMesh scale={[1, 1, 1]} position={[0, 6.75, -1.25]} />
      <DrinkMesh scale={[1, 1, 1]} position={[2.25, 6.75, -1.25]} />
      <DrinkMesh scale={[1, 1, 1]} position={[-2.25, 2.25, 2]} />
      <DrinkMesh scale={[1, 1, 1]} position={[0, 2.25, 2]} />
      <DrinkMesh scale={[1, 1, 1]} position={[2.25, 2.25, 2]} />
      <DrinkMesh scale={[1, 1, 1]} position={[-2.25, 2.25, -1.25]} />
      <DrinkMesh scale={[1, 1, 1]} position={[0, 2.25, -1.25]} />
      <DrinkMesh scale={[1, 1, 1]} position={[2.25, 2.25, -1.25]} />
    </group>
  );
}
