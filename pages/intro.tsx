import React from "react";
import { Parallax } from "react-scroll-parallax";
import Scene from "../components/Scene";
import { useSpring, animated } from "@react-spring/web";

import {
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaQuestionCircle,
} from "react-icons/fa";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export default function Intro() {
  const springs = useSpring({
    from: { y: -100 },
    to: { y: 0 },
  });

  return (
    <div className="relative flex h-screen w-full snap-center flex-col overflow-hidden sm:flex-row">
      <div className="relative h-full w-full">
        <div className="absolute flex h-full w-full bg-gradient-to-b from-blue-100 via-zinc-100 to-pink-100">
          <Scene />
        </div>
      </div>
      {/* Name */}
      <animated.div
        style={{ ...springs }}
        className="pointer-events-none absolute flex h-full w-full items-center justify-center"
      >
        <Parallax speed={8}>
          <div className="justify-content-center pointer-events-none -mt-12 ml-4 md:ml-0 md:-mt-24">
            <div className="flex">
              <h1 className="-mb-5 select-none font-robotoRegular text-6xl text-rose-500 md:-mb-12 md:text-8xl lg:text-9xl">
                Brian
              </h1>
              <Parallax speed={-4}>
                <a
                  href="#about"
                  className="pointer-events-auto invisible mt-2 text-2xl text-rose-500 hover:text-blue-500 sm:visible md:text-3xl lg:text-4xl"
                >
                  <FaQuestionCircle />
                </a>
              </Parallax>
            </div>
            <Parallax speed={-1}>
              <h1 className="ml-5 -rotate-6 select-none font-luthonSouthardScript text-6xl text-rose-500 md:text-8xl lg:text-9xl">
                Williams
              </h1>
            </Parallax>
          </div>
        </Parallax>
      </animated.div>
      {/* Nice to meet you */}
      <div className="absolute top-12 left-6">
        <Parallax speed={2}>
          <p
            className="font-robotoMedium text-lg text-rose-500"
            style={{ textOrientation: "upright", writingMode: "vertical-rl" }}
          >
            만나서 반가워요
          </p>
        </Parallax>
      </div>
      {/* Footer */}
      <div className="absolute bottom-8 w-full">
        <Parallax speed={2}>
          <div className="flex w-full items-center ">
            <div className="group ml-8 rounded-full border border-rose-500 px-5 py-1 hover:border-blue-500 ">
              <a
                href="https://drive.google.com/file/d/1Grzk1e23YxAXOOUsMo6iAlSkFlDKFzf0/view?usp=sharing"
                className="font-robotoMedium text-xl text-rose-500 group-hover:text-blue-500"
              >
                resume
              </a>
            </div>
            <hr className="border-0.5 ml-5 mr-5 flex-1 border-rose-500 sm:visible" />
            <div className="mr-8 flex flex-row space-y-0 space-x-3 sm:space-x-4">
              <p
                className="cursor-pointer text-3xl text-rose-500 hover:text-blue-500"
                onClick={() => openInNewTab("https://github.com/BEW111")}
              >
                <FaGithub />
              </p>
              <p
                className="cursor-pointer text-3xl text-rose-500 hover:text-blue-500"
                onClick={() =>
                  openInNewTab(
                    "https://www.linkedin.com/in/brian-edward-williams/"
                  )
                }
              >
                <FaLinkedin />
              </p>
              <a
                href="mailto: bewilliams111@gmail.com"
                className="cursor-pointer text-3xl text-rose-500 hover:text-blue-500"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}
