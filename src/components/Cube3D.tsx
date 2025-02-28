"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";

interface BoxProps {
  position: [number, number, number];
}

function Box({ position }: BoxProps) {
  // Rotation state
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.3;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <mesh
      position={position}
      ref={meshRef}
      scale={active ? 1.2 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshLambertMaterial
        color={hovered ? "#888888" : "#666666"}
        emissive="#111111"
      />
    </mesh>
  );
}

export default function Cube3D() {
  return (
    <div className="h-[400px] w-full">
      <Canvas
        shadows
        camera={{ position: [3, 3, 5], fov: 50 }}
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={["#f0f0f0"]} />
        <ambientLight intensity={0.3} />

        <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />

        <pointLight position={[-5, -5, -5]} intensity={0.5} />

        {/* グリッドは立方体の下に配置 */}
        <group position={[0, -1.5, 0]}>
          <gridHelper args={[10, 10, `#bbbbbb`, `#dddddd`]} />
        </group>

        <Box position={[0, 0, 0]} />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}
