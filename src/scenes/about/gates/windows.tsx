// export default function WindowMesh({
//   scale,
//   position,
//   rotation,
// }: {
//   scale: [number, number, number];
//   position: [number, number, number];
//   rotation?: number;
// }) {
//   return (
//     <group position={position} scale={scale} rotation={[0, rotation || 0, 0]}>
//       {/* Upper frames */}
//       <mesh position={[-2, 10.5, 0]}>
//         <meshStandardMaterial color={"#909090"} />
//         <boxGeometry args={[8, 2, 1]} />
//       </mesh>
//       <mesh position={[-5, 5.5, 0]}>
//         <meshStandardMaterial color={"#909090"} />
//         <boxGeometry args={[2, 8, 1]} />
//       </mesh>
//       <mesh position={[-2, 1, 0]}>
//         <meshStandardMaterial color={"#909090"} />
//         <boxGeometry args={[8, 2, 1]} />
//       </mesh>

//       {/* Upper Window */}
//       <mesh position={[0, 5.5, -0]}>
//         <meshStandardMaterial color={"#106070"} opacity={0.5} transparent />
//         <boxGeometry args={[8, 8, 1]} />
//       </mesh>

//       {/* Lower frames */}
//       <mesh position={[2, -10.5, 0]}>
//         <meshStandardMaterial color={"#909090"} />
//         <boxGeometry args={[8, 2, 1]} />
//       </mesh>
//       <mesh position={[5, -5.5, 0]}>
//         <meshStandardMaterial color={"#909090"} />
//         <boxGeometry args={[2, 8, 1]} />
//       </mesh>
//       <mesh position={[2, -1, 0]}>
//         <meshStandardMaterial color={"#909090"} />
//         <boxGeometry args={[8, 2, 1]} />
//       </mesh>

//       {/* Lower Window */}
//       <mesh position={[0, -5.5, -0]}>
//         <meshStandardMaterial color={"#106070"} opacity={0.5} transparent />
//         <boxGeometry args={[8, 8, 0.5]} />
//       </mesh>
//     </group>
//   );
// }

const WindowNormalMesh = ({
  scale,
  position,
  rotation,
  inverted,
}: {
  scale: [number, number, number];
  position: [number, number, number];
  rotation?: number;
  inverted?: boolean;
}) => {
  return (
    <group position={position} scale={scale} rotation={[0, rotation || 0, 0]}>
      {/* Frame */}
      <mesh position={[-2, 5, -0.5]}>
        <meshStandardMaterial color={"#909090"} />
        <boxGeometry args={[8, 2, 2]} />
      </mesh>
      <mesh position={[-5.5, 0, -0.5]}>
        <meshStandardMaterial color={"#909090"} />
        <boxGeometry args={[3, 8, 2]} />
      </mesh>
      <mesh position={[-2, -5, -0.5]}>
        <meshStandardMaterial color={"#909090"} />
        <boxGeometry args={[8, 2, 2]} />
      </mesh>

      {/* Window */}
      <mesh position={[0, 0, inverted ? -1 : 0]}>
        <meshStandardMaterial color={"#106070"} opacity={0.5} transparent />
        <boxGeometry args={[8, 8, 1]} />
      </mesh>
    </group>
  );
};

const WindowFullMesh = ({
  scale,
  position,
  rotation,
}: {
  scale: [number, number, number];
  position: [number, number, number];
  rotation?: number;
}) => {
  return (
    <group position={position} scale={scale} rotation={[0, rotation || 0, 0]}>
      {/* Frame */}
      <mesh position={[0, 5, 0]}>
        <meshStandardMaterial color={"#909090"} />
        <boxGeometry args={[12, 2, 2]} />
      </mesh>
      <mesh position={[7, 0, 0]}>
        <meshStandardMaterial color={"#909090"} />
        <boxGeometry args={[2, 8, 2]} />
      </mesh>
      <mesh position={[-7, 0, 0]}>
        <meshStandardMaterial color={"#909090"} />
        <boxGeometry args={[2, 8, 2]} />
      </mesh>
      <mesh position={[0, -5, 0]}>
        <meshStandardMaterial color={"#909090"} />
        <boxGeometry args={[12, 2, 2]} />
      </mesh>
      {/* Window */}
      <mesh position={[0, 0, -0.5]}>
        <meshStandardMaterial color={"#106070"} opacity={0.5} transparent />
        <boxGeometry args={[12, 8, 1]} />
      </mesh>
    </group>
  );
};

export { WindowFullMesh, WindowNormalMesh };
