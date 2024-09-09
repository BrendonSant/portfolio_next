"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
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

  return <pointLight ref={lightRef} intensity={25} color={"blue"} />;
}

export default function ThreeViewport() {
  return (
    <div className="w-full h-screen relative">
      {/* Configurando alpha para true para fundo transparente */}
      <Canvas className="w-full" gl={{ alpha: true }}>
        {/* Luz ambiente */}
        <ambientLight intensity={0.3} />
        <MovingLight />
        {/* Objeto 3D no canto direito */}
        <Box />
        {/* Controles orbitais */}
        
      </Canvas>

      {/* Frase no canto esquerdo */}
      <div className="absolute top-1/3 left-1/4 text-white text-xl ">
        <h1 className="transition ease-in-out duration-500 font-clash-display text-6xl hover:text-blue-500">
          Seja Bem Vindo <br /> meu nome é <br /> Brendon Santos
        </h1>
      </div>
    </div>
  );
}
