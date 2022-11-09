import { useThree } from "@react-three/fiber";

const Camera = () => {
  const { camera } = useThree();
  camera.position.set(0, 100, 0);
  camera.lookAt(0, 0, 0);
};

export default Camera;
