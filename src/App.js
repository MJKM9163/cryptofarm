import "./App.css";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Camera from "./setting/Camera";
import Ground from "./background/Ground";
import { Html, OrbitControls } from "@react-three/drei";
import Player from "./player/Player";
import ActionTap from "./components/interface/ActionTap";

function App() {
  function Box(props) {
    const mesh = useRef();
    console.log(mesh);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    useFrame(() => (mesh.current.rotation.x += 0.01));

    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
    );
  }

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
      <Html>
        <ActionTap />
      </Html>

      <Player />
      <Ground />
      <Camera />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
