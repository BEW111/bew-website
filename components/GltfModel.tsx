import React, { useRef, useState, useEffect } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import * as THREE from "three";

import console from "console-suppress";
console.warn.suppress(
  "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
);

const startRot = [0.05, Math.PI * 1.22, 0.02];

const GltfModel = ({ modelPath, position = [0, 0, 0] }) => {
  const ref = useRef<Mesh>();
  const gltf = useLoader(GLTFLoader, modelPath);

  const [hovered, setHovered] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(({ clock }) => {
    ref.current.rotation.x =
      startRot[0] + Math.sin(clock.getElapsedTime()) * 0.1;
    ref.current.rotation.y =
      startRot[1] + Math.sin(clock.getElapsedTime()) * 0.1;
    ref.current.rotation.z =
      startRot[2] + Math.sin(clock.getElapsedTime()) * 0.1;
    ref.current.scale.x =
      ref.current.scale.y =
      ref.current.scale.z =
        THREE.MathUtils.lerp(ref.current.scale.z, hovered ? 0.4 : 0.38, 0.1);
  });

  useEffect(() => {
    document.body.style.cursor = hovered ? "move" : "auto";
  }, [hovered]);

  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
        rotation={startRot}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
    </>
  );
};

export default GltfModel;
