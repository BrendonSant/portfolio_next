"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles, useAnimations, useGLTF, useTexture } from '@react-three/drei'
import { useRef,useState,useEffect } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom } from '@react-three/postprocessing';


function Model({ url }: { url: string }) {
  const group = useRef<any>();
  const { scene, animations } = useGLTF(url); // Importando o modelo
  const { actions } = useAnimations(animations, group); // Gerenciando as animações

  // Execute a animação no carregamento
  useEffect(() => {
    if (actions) {
      actions["Animation"]?.play(); // nome da animação no modelo
    }
  }, [actions]);

  // Posiciona o modelo 
  return(
    <primitive ref={group} object={scene} position={[2, -2, 0]} scale={[1, 1, 1]}
    rotation={[0, Math.PI-0.5, 0]} />
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
      power={550}
      castShadow
      ref={lightRef}
      intensity={25}
      color={"white"}
    />
  );
}

export default function ThreeViewport() {
  return (
    <div className="w-full h-screen relative">
      
      <Canvas  dpr={[1.5, 2]} linear shadows className="w-full" gl={{ alpha: true }}>
        
      <fog attach="fog" args={['white', 25, 25]} />
      <Sparkles count={30} size={3} position={[0, 0.9, 0]} scale={[8, 8, 4]} speed={0.3} color='violet' />
        
        <directionalLight 
        position={[5, 10, 5]}  
        intensity={2}          
        castShadow           
        shadow-mapSize-width={1024} 
        shadow-mapSize-height={1024} 
        color={"blue"}
        />
    
       
        <ambientLight  intensity={1}/>
        <MovingLight  />
        <EffectComposer>
        
        <Bloom
          intensity={1.5} // Intensidade do efeito bloom
          luminanceThreshold={0.2} // Definir limiar de luminosidade para aplicar o bloom
          luminanceSmoothing={0.9} // Suavização entre as áreas brilhantes e as não brilhantes
        />
      </EffectComposer>
        
        <Model url="\MASCOTE.glb" /> 
        <OrbitControls 
        enablePan={false}            // Desabilita o movimento de "arrastar"
        enableZoom={false}            // Mantém o zoom habilitado
        minAzimuthAngle={-Math.PI / 6} // Limite esquerdo (em radianos)
        maxAzimuthAngle={Math.PI / 6}  // Limite direito (em radianos)
        minPolarAngle={Math.PI / 2}    // Limita a rotação vertical (ângulo superior)
        maxPolarAngle={Math.PI / 2}    // Limita a rotação vertical (ângulo inferior)
      />
        
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
