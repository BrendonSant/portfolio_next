"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Box() {
  const ref = useRef<THREE.Mesh>(null!);

  // Gira o cubo a cada frame
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} position={[2, 0, 0]}>
      {/* Aumenta o tamanho do cubo */}
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="violet" />
    </mesh>
  );
}

function MovingLight() {
  const lightRef = useRef<THREE.PointLight>(null!);

  useFrame((state) => {
    const { mouse } = state;
    if (lightRef.current) {
      lightRef.current.position.set(mouse.x * 10, mouse.y * 10, 5);
    }
  });

  return <pointLight ref={lightRef} intensity={10} color={"#3BDBF2"} />;
}

function BackgroundPlane() {
  return (
    <mesh position={[0, 0, -10]} rotation={[0, 0, 0]}>
      {/* Aumenta o tamanho do plano para cobrir a viewport */}
      <planeGeometry args={[40, 40]} />
      {/* Material que reage à luz */}
      <meshStandardMaterial color="#070D28" />
    </mesh>
  );
}

export default function ThreeViewport() {
  return (
    <div className="w-full h-screen relative">
      <Canvas>
        {/* Luz ambiente */}
        <ambientLight intensity={0.2} />
        <MovingLight />
        {/* Plano de fundo que reage à luz */}
        <BackgroundPlane />
        {/* Objeto 3D no canto direito */}
        <Box />
        {/* Controles orbitais */}
        
      </Canvas>

      {/* Frase no canto esquerdo */}
      <div className="absolute top-1/3 left-60 text-white text-xl">
        <h1 className="font-clash-display text-6xl">
          Seja Bem Vindo <br /> meu nome é <br /> Brendon Santos
        </h1>
      </div>
    </div>
  );
}
