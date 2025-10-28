"use client";

import { Suspense, useEffect, useState, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Group, AnimationMixer, Clock, AnimationClip } from "three";
import CanvasLoader from "../Loader";

// -----------------------
// ComputerModel Component
// -----------------------
interface ComputerModelProps {
  isMobile: boolean;
}

const ComputerModel: React.FC<ComputerModelProps> = ({ isMobile }) => {
  const gltf = useGLTF("/mandela.glb") as {
    scene: Group;
    animations: AnimationClip[];
  };

  const [mixer] = useState(() => new AnimationMixer(gltf.scene));
  const clock = new Clock();

  useEffect(() => {
    if (gltf.animations.length > 0) {
      gltf.animations.forEach((clip) => {
        mixer.clipAction(clip).play();
      });
    }
  }, [gltf.animations, mixer]);

  useFrame(() => {
    mixer.update(clock.getDelta());
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={gltf.scene}
        scale={isMobile ? 0.035 : 0.03}
        position={isMobile ? [0, 0, 0] : [0, 0, -1.5]}
        rotation={[0, 0.8, 0]}
      />
    </mesh>
  );
};

const MemoizedComputerModel = memo(ComputerModel);

// -----------------------
// ComputersCanvas Component
// -----------------------
const ComputersCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);
    const frame = requestAnimationFrame(updateIsMobile);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <MemoizedComputerModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;