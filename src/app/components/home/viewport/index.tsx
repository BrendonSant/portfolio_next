"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles, shaderMaterial, useGLTF, useTexture } from '@react-three/drei'
import { useRef,useState } from "react";
import * as THREE from "three";

function Box() {
  const ref = useRef<THREE.Mesh>(null!);

  // Gira o cubo a cada frame
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.005;
      ref.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={ref} position={[2, 0, 0]}>
      {/* Aumenta o tamanho do cubo */}
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial emissive="violet" emissiveIntensity={0.1} roughness={0.2}  color="rgba(73, 72, 119, 0.72)" />
      
    </mesh>
  );
}

function MovingLight() {
  const lightRef = useRef<THREE.PointLight>(null!);
  const [lastPosition, setLastPosition] = useState<THREE.Vector3>(new THREE.Vector3());

  useFrame((state) => {
    const { pointer } = state;

    if (lightRef.current) {
      // Calcula a nova posição baseada no ponteiro
      const newPosition = new THREE.Vector3(pointer.x * 10, pointer.y * 10, 5);

      // Compara a nova posição com a última posição
      if (!newPosition.equals(lastPosition)) {
        lightRef.current.position.copy(newPosition);
        setLastPosition(newPosition.clone());
      }
    }
  });

  return (
    <pointLight
      power={300}
      castShadow
      ref={lightRef}
      intensity={50}
      color={"blue"}
    />
  );
}

export default function ThreeViewport() {
  return (
    <div className="w-full h-screen relative">
      {/* Configurando alpha para true para fundo transparente */}
      <Canvas  dpr={[1.5, 2]} linear shadows className="w-full" gl={{ alpha: true }}>
      <fog attach="fog" args={['white', 15, 25]} />
      <Sparkles count={30} size={3} position={[0, 0.9, 0]} scale={[8, 8, 4]} speed={0.3} color='violet' />
        {/* Luz ambiente */}
        <ambientLight intensity={0.4} />
        <MovingLight  />
        {/* Objeto 3D no canto direito */}
        <Box />
        {/* Controles orbitais */}
        
      </Canvas>

      {/* Frase no canto esquerdo */}
      <div className="absolute top-1/3 left-1/4 text-white text-xl ">
        <h1 className="transition ease-in-out duration-500 font-clash-display text-6xl hover:text-blue-500">
        Welcome,<br /> my name is <br /> Brendon Santos
        </h1>
      </div>
    </div>
  );
}
