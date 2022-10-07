import React, { useMemo } from "react";
import { Color, TextureLoader } from "three";
import { focusGround } from "../store/reducers/groundSlice";

const Ground = ({ dispatch }) => {
  let arr = Array(20).fill(0);
  const textureStarField1 = useMemo(
    () =>
      new TextureLoader().load(process.env.PUBLIC_URL + "/images/grass.png"),
    []
  );

  //textureStarField1.repeat.set(1, 1);
  return (
    <group position={[0, -1, 0]}>
      {arr.map((e, indexY) => (
        <group key={"col" + indexY} position={[-22, 0, -26.5 + indexY * 5.1]}>
          {arr.map((e, indexX) => (
            <mesh
              key={"row" + indexX}
              rotation={[-Math.PI / 2, 0, 0]}
              position={[-26.5 + indexX * 5.1, 0, -22]}
              onPointerOver={(e) => {
                e.object.material.color = new Color(2, 2, 2);
              }}
              onPointerOut={(e) => {
                e.object.material.color = new Color(1, 1, 1);
              }}
              onClick={(e) => {
                console.log(e);
                dispatch(focusGround({ Y: indexY, X: indexX }));
              }}
            >
              <planeGeometry attach="geometry" args={[5, 5]} />
              <meshBasicMaterial
                map={textureStarField1}
                opacity={0.5}
                attach="material"
                transparent
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
};

export default Ground;
