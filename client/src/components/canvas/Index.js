import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useDispatch } from "react-redux";
import Ground from "../../background/Ground";
import Camera from "../../setting/Camera";

const Index = () => {
  const dispatch = useDispatch();
  return (
    <Canvas
      shadows
      camera={{
        fov: 60,
        far: 250000,
        near: 3,
      }}
    >
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      {/* <Html></Html> */}
      <Ground dispatch={dispatch} />
      <Camera />
      <OrbitControls enablePan={false} />
    </Canvas>
  );
};

export default Index;
