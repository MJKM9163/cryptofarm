import "./App.css";
import { Canvas } from "@react-three/fiber";
import Camera from "./setting/Camera";
import Ground from "./background/Ground";
import { OrbitControls } from "@react-three/drei";
import { useDispatch } from "react-redux";
import Components from "./components/Index";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Components />

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
    </>
  );
}

export default App;
