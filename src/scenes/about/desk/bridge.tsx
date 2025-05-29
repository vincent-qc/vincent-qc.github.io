const TowerMesh = ({ position }: { position: [number, number, number] }) => {
  return <group position={position}></group>;
};

const BridgeMesh = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      <TowerMesh position={[1, 1, 1]} />
    </group>
  );
};

export { BridgeMesh };
