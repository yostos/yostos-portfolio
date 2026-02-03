"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface BoxProps {
  position: [number, number, number];
}

interface CubeTextProps {
  text: string;
  position: [number, number, number];
}

interface SubtitleProps {
  text: string;
  position: [number, number, number];
}

function Box({ position }: BoxProps) {
  // Rotation state
  const meshRef = useRef<THREE.Mesh>(null!);
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
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color={hovered ? "#EEEEEE" : "#AAAAAA"}
        roughness={0.3}
        metalness={0.2}
      />
    </mesh>
  );
}

function FloatingText({ text, position }: CubeTextProps) {
  const groupRef = useRef<THREE.Group>(null!);

  // テキストを少しアニメーションさせる
  useFrame((state) => {
    if (groupRef.current) {
      // 上下に微妙に浮遊するアニメーション
      groupRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Html center>
        <div
          style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#000000",
            whiteSpace: "nowrap",
          }}
        >
          {text}
        </div>
      </Html>
    </group>
  );
}

// 左下に固定されたサブタイトルコンポーネント
function Subtitle({ text, position }: SubtitleProps) {
  return (
    <group position={position}>
      <Html center>
        <div
          style={{
            fontSize: "14px",
            color: "#666666",
            whiteSpace: "nowrap",
          }}
        >
          {text}
        </div>
      </Html>
    </group>
  );
}

interface Cube3DProps {
  text: string;
  subtitle?: string;
}

export default function Cube3D({ text, subtitle }: Cube3DProps) {
  return (
    <div className="h-[400px] w-full border border-gray-200">
      <Canvas camera={{ position: [3, 3, 5], fov: 50 }}>
        {/* 明確な背景色 */}
        <color attach="background" args={["#f0f0f0"]} />

        {/* 基本的な照明設定 */}
        <ambientLight intensity={1.0} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />

        {/* グリッド */}
        <gridHelper
          args={[10, 10, "#bbbbbb", "#dddddd"]}
          position={[0, -1.5, 0]}
        />

        {/* キューブ */}
        <Box position={[0, 0, 0]} />

        {/* 浮遊テキスト */}
        <FloatingText text={text} position={[0, 2, 0]} />

        {/* サブタイトル（指定されている場合） */}
        {subtitle && <Subtitle text={subtitle} position={[0, -4, 1]} />}

        {/* コントロール */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}
