import React from "react";
import { Parallax } from "react-scroll-parallax";
import Scene from "../components/Scene";

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
  return (
    <div className="relative flex h-screen w-full snap-center flex-col overflow-hidden sm:flex-row">
      <div className="relative h-full w-full">
        <div className="absolute flex h-full w-full bg-gradient-to-b from-blue-100 via-zinc-100 to-pink-100">
          <Scene />
        </div>
      </div>
      {/* Name */}
      <div className="pointer-events-none absolute flex h-full w-full items-center justify-center">
        <Parallax speed={8}>
          <div className="justify-content-center pointer-events-none -mt-24">
            <div className="flex">
              <h1 className="-mb-5 select-none font-robotoRegular text-6xl text-rose-500 md:-mb-12 md:text-8xl lg:text-9xl">
                Brian
              </h1>
              <Parallax speed={-4}>
                <a
                  href="#about"
                  className="pointer-events-auto mt-2 text-2xl text-rose-500 hover:text-blue-500 md:text-3xl lg:text-4xl"
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
      </div>
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
          <div className="px-8 pb-2">
            <p className="text-justify font-robotoRegular text-xs text-rose-500">
              {/* hey thanks for stopping by my website and nice to meet you, this
              block of text is really just for aesthetic reasons but i figured i
              could write something here so if you want an extra short totally
              professional intro about me then here it is: im brian, i do data
              science and machine learning stuff but i talk about that down
              below so ill instead talk about how in middle school i wanted to
              make video games so i taught myself java, but at the time i
              actually thought i was gonna go into quantum physics, until i got
              to the end of high school, started studying machine learning,
              realized how much i liked it, and made the choice to switch over,
              but anyway besides all the academic stuff i really enjoy going on
              hikes, traveling, drinking unhealthy amounts of club soda, and
              cooking new dishes */}
            </p>
          </div>
          <div className="flex w-full items-center">
            <div className="group ml-8 rounded-full border border-rose-500 px-5 py-1 hover:border-blue-500 ">
              <a
                href="#projects"
                className="font-robotoMedium text-xl text-rose-500 group-hover:text-blue-500"
              >
                my projects
              </a>
            </div>
            <hr className="border-0.5 ml-5 mr-5 flex-1 border-rose-500" />
            <div className="mr-8 flex flex-row space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
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
