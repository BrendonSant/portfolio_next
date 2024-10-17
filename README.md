# Portfólio Profissional - Brendon Santos

Este projeto é um portfólio pessoal desenvolvido para estudos e desenvolvimento profissional, utilizando tecnologias modernas como **Next.js**, **Three.js** e **React Fiber** para criar experiências interativas em 3D.

## Tecnologias Utilizadas

- **Next.js**: Framework React otimizado para renderização de páginas e rotas dinâmicas.
- **TypeScript**: Proporciona tipagem estática, oferecendo maior segurança e manutenção.
- **Three.js**: Biblioteca JavaScript para gráficos 3D no navegador.
- **React Three Fiber**: Integração entre React e Three.js simplificada.
- **@react-three/drei**: Conjunto de utilitários que facilitam o uso do Three.js.
- **Tailwind CSS**: Framework CSS para estilização ágil e responsiva.
- **CMS Externo**: Integração com um CMS externo para gerenciamento de conteúdo dinâmico.

## Funcionalidades Principais

### Renderização 3D com Three.js e React Fiber

O projeto faz uso extensivo de gráficos 3D, utilizando Three.js para renderizar um modelo 3D com animações e controle de câmera. Abaixo está um exemplo de como a cena principal é configurada:
```tsx


      import { Canvas } from "@react-three/fiber";
      import { OrbitControls, Sparkles } from "@react-three/drei";
      
      export default function ThreeViewport() {
        return (
          <Canvas dpr={[1.5, 2]} linear shadows>
            <fog attach="fog" args={['white', 25, 25]} />
            <Sparkles count={200} size={3} position={[0, 0.9, 0]} scale={[10, 10, 10]} />
            <ambientLight intensity={1} />
            <MovingLight />
            <Model url="/MASCOTE.glb" />
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              minAzimuthAngle={-Math.PI / 6}
              maxAzimuthAngle={Math.PI / 6}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>
        );
      }
```
##Integração com Modelos 3D (GLTF)
A renderização de modelos 3D é realizada com a utilização de arquivos GLTF, permitindo que modelos complexos com animações sejam exibidos e manipulados na cena. Aqui está um exemplo de como o modelo é importado e utilizado:
