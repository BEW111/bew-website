import * as THREE from "three";
import { useRef, useState, useEffect, useMemo, useLayoutEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AsciiEffect } from "./effects/CustomAsciiEffect";
import { Mesh } from "three";

const vec = new THREE.Vector3();

export default function Scene() {
  const [width, setWidth] = useState<number>(200);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <div className="w-full">
      <Canvas style={{ width: "100%" }}>
        <color attach="background" args={["black"]} />
        <pointLight position={[0, 0, 300]} intensity={0.4} />
        {!isMobile && <Box />}
        <AsciiRenderer
          fgColor="#F43F5E"
          bgColor="#FFFFFF00"
          renderIndex={1}
          characters="·01"
        />
      </Canvas>
    </div>
  );
}

function Box(props) {
  const ref = useRef<Mesh>();

  const [clicked, click] = useState(false);
  const { viewport } = useThree();
  const size = 50;
  const speed = 10;

  useFrame((state, delta) => {
    ref.current.rotation.x = ref.current.rotation.y += delta;
    ref.current.position.x = (100 * (state.mouse.x * viewport.width)) / 2;
    ref.current.position.y = (100 * (state.mouse.y * viewport.height)) / 2;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? size * 1.5 : size}
      onClick={() => click(!clicked)}
      position={[0, 0, -500]}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

function AsciiRenderer({
  renderIndex = 1,
  bgColor = "black",
  fgColor = "white",
  characters = "01",
  invert = true,
  color = false,
  resolution = 0.17,
}) {
  // Reactive state
  const { size, gl, scene, camera } = useThree();

  // Create effect
  const effect = useMemo(() => {
    const effect = new AsciiEffect(gl, characters, {
      invert,
      color,
      resolution,
    });
    effect.domElement.style.position = "absolute";
    effect.domElement.style.top = "0px";
    effect.domElement.style.left = "0px";
    effect.domElement.style.pointerEvents = "none";
    return effect;
  }, [characters, invert, color, resolution]);

  // Styling
  useLayoutEffect(() => {
    effect.domElement.style.color = fgColor;
    effect.domElement.style.backgroundColor = bgColor;
  }, [fgColor, bgColor]);

  // Append on mount, remove on unmount
  useEffect(() => {
    gl.domElement.style.opacity = "0";
    gl.domElement.parentNode.appendChild(effect.domElement);
    return () => {
      gl.domElement.style.opacity = "1";
      gl.domElement.parentNode.removeChild(effect.domElement);
    };
  }, [effect]);

  // Set size
  useEffect(() => {
    effect.setSize(size.width, size.height);
  }, [effect, size]);

  // Take over render-loop (that is what the index is for)
  useFrame(({ gl, scene, camera }) => {
    // gl.render(scene, camera);
    effect.render(scene, camera);
  }, renderIndex);

  // This component returns nothing, it is a purely logical
  return <></>;
}
