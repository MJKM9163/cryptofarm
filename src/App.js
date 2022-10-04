import "./App.css";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Camera from "./setting/Camera";
import Ground from "./background/Ground";
import { Html, OrbitControls } from "@react-three/drei";
import Player from "./player/Player";
import ActionTap from "./components/interface/ActionTap";
import { useSelector } from "react-redux";
import styled from "styled-components";

const UiBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  background-color: gray;
`;

function App() {
  const tapCheck = useSelector((store) => store);
  return (
    <>
      {/* <UiBox>sadasd</UiBox> */}
      <ActionTap />
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
        <Player />
        <Ground />
        <Camera />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
