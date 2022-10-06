import "./App.css";
import { Canvas } from "@react-three/fiber";
import Camera from "./setting/Camera";
import Ground from "./background/Ground";
import { OrbitControls } from "@react-three/drei";
import Player from "./player/Player";
import ActionTap from "./components/interface/ActionTap";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  return (
    <>
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
        <Ground dispatch={dispatch} />
        <Camera />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
