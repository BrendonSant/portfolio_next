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
## Integração com Modelos 3D (GLTF)
A renderização de modelos 3D é realizada com a utilização de arquivos GLTF, permitindo que modelos complexos com animações sejam exibidos e manipulados na cena. Aqui está um exemplo de como o modelo é importado e utilizado:

```tsx
import { useGLTF, useAnimations } from '@react-three/drei';

function Model({ url }: { url: string }) {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      actions["Animation"]?.play();
    }
  }, [actions]);

  return <primitive ref={group} object={scene} position={[2, -2, 0]} scale={[1, 1, 1]} />;
}
```

## Efeitos Visuais com Post-Processing
O projeto utiliza efeitos visuais avançados, como Bloom e Sparkles, para criar uma experiência visual rica e imersiva. O código abaixo mostra a implementação do efeito de Bloom:

```tsx
import { EffectComposer, Bloom } from '@react-three/postprocessing';

<EffectComposer>
  <Bloom
    intensity={1.5}
    luminanceThreshold={0.2}
    luminanceSmoothing={0.9}
  />
</EffectComposer>
```
## Luzes Dinâmicas com Interação do Mouse
As luzes no projeto respondem dinamicamente ao movimento do cursor do usuário, proporcionando uma sensação de imersão. O código a seguir demonstra como essa funcionalidade é implementada:

```tsx
useFrame((state) => {
  const { pointer } = state;
  const newPosition = new THREE.Vector3(pointer.x * 10, pointer.y * 10, 5);
  lightRef.current.position.copy(newPosition);
});
```
## Estrutura do Projeto
- src/app: Contém a lógica principal da aplicação Next.js.
- src/components: Componentes reutilizáveis para a interface e funcionalidades 3D.
- public/: Diretório que armazena os arquivos estáticos e modelos 3D, como MASCOTE.glb.
  
## Como Executar o Projeto

1- Clone o repositório:
```bash
git clone https://github.com/BrendonSant/portfolio_next.git
```
2- Instale as dependências:

```bash
npm install
```

3- Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4- Acesse http://localhost:3000 para visualizar o projeto no navegador.

## Objetivo do Projeto
O objetivo deste portfólio é demonstrar minhas habilidades em desenvolvimento web moderno, 
especialmente na integração de gráficos 3D interativos com Three.js e React Fiber, além de explorar integrações com CMS externos para gerenciamento dinâmico de conteúdo.

## Futuras Implementações

- Conclusão da integração com CMS externo para gerenciamento dinâmico.
- Adição de mais animações e interações com o usuário utilizando Three.js.

## Contato
Para mais informações ou oportunidades de colaboração, entre em contato:

LinkedIn
Email  





