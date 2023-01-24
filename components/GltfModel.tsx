import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const startRot = [0.05, (2 * Math.PI) / 3, 0.02];

const GltfModel = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);
  const [hovered, hover] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(({ clock }) => {
    ref.current.rotation.x =
      startRot[0] + Math.sin(clock.getElapsedTime()) * 0.1;
    ref.current.rotation.y =
      startRot[1] + Math.sin(clock.getElapsedTime()) * 0.1;
    ref.current.rotation.z =
      startRot[2] + Math.sin(clock.getElapsedTime()) * 0.1;
  });
  return (
    <>
      <primitive
        scale={0.4}
        ref={ref}
        object={gltf.scene}
        position={position}
        rotation={startRot}
      />
    </>
  );
};

export default GltfModel;
