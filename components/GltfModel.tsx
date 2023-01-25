// @ts-nocheck

import React, { useRef, useState, useEffect } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { useSpring, animated } from "@react-spring/three";

const startRot = [0.05, Math.PI * 1.22, 0.02];

const GltfModel = ({ modelPath, position = [0, 0, 0] }) => {
  const ref = useRef<Mesh>();
  const gltf = useLoader(GLTFLoader, modelPath);

  const [hovered, setHovered] = useState(false);
  const { scale } = useSpring({ scale: hovered ? 0.4 : 0.38 });
  const scaleRef = useRef(scale);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(({ clock }) => {
    ref.current.rotation.x =
      startRot[0] + Math.sin(clock.getElapsedTime()) * 0.1;
    ref.current.rotation.y =
      startRot[1] + Math.sin(clock.getElapsedTime()) * 0.1;
    ref.current.rotation.z =
      startRot[2] + Math.sin(clock.getElapsedTime()) * 0.1;
  });

  useEffect(() => {
    document.body.style.cursor = hovered ? "move" : "auto";
  }, [hovered]);

  return (
    <>
      <animated.primitive
        scale={scaleRef}
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
