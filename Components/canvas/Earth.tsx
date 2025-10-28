import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import React, { Suspense } from "react";
import CanvasLoader from "../Loader";

const EarthModel: React.FC = () => {
  // Drei's useGLTF can automatically handle Draco if your model is compressed
  const gltf = useGLTF("/planet/scene.gltf");

  return <primitive object={gltf.scene} scale={2.5} position-y={0} rotation-y={0} />;
};

const EarthCanvas: React.FC = () => (
  <Canvas
    frameloop="demand"
    dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true }}
    camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    shadows
  >
    <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
    <Suspense fallback={<CanvasLoader />}>
      <EarthModel />
    </Suspense>
    <Preload all />
  </Canvas>
);

export default EarthCanvas;
