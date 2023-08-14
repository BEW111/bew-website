import Image from "next/image";

import React from "react";
import { Parallax } from "react-scroll-parallax";
import Brian from "../public/brian.png";

import ModelViewer from "../components/ModelViewer";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export default function About() {
  return (
    <div
      id="about"
      className="relative w-full snap-center overflow-hidden md:flex md:h-screen md:flex-row"
    >
      <div className="relative h-screen w-full overflow-hidden border-b-2 border-rose-400 bg-rose-200 md:relative md:h-full md:w-1/2 md:rounded-br-3xl md:border-r-2">
        <div className="pointer-events-none absolute hidden h-full w-full md:flex">
          <div className="absolute top-5 right-5 h-0.5 w-10 bg-rose-500" />
          <div className="absolute top-5 right-5 h-10 w-0.5 bg-rose-500" />
          <div className="absolute bottom-5 left-5 h-0.5 w-10 bg-rose-500" />
          <div className="absolute bottom-5 left-5 h-10 w-0.5 bg-rose-500" />
        </div>
        <div className="absolute left-4 top-4 justify-center md:left-16 md:top-10">
          <Parallax speed={-7}>
            <div
              className="overflow-hidden rounded-xl border-2 border-rose-500 bg-white"
              style={{
                width: 3024 / 12,
                height: 4000 / 12,
              }}
            >
              <Image
                alt="image of brian but I will replace this"
                src={Brian}
                width={3024 / 12}
                height={4032 / 12}
                // layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="mt-4 ml-4 font-robotoRegular text-3xl text-rose-500 md:ml-0 md:text-center md:text-4xl lg:text-5xl">
              fig. 1: me
            </p>
          </Parallax>
        </div>
        <div className="absolute bottom-6 -right-10 md:-right-2 md:bottom-12">
          <Parallax speed={-5}>
            <div className="relative top-0 w-72 md:w-96">
              <ModelViewer modelPath={"/bew_can.glb"} />
              <p className="-mt-24 text-center font-robotoRegular text-3xl text-rose-500 md:text-4xl lg:text-5xl">
                fig. 2: stats
              </p>
            </div>
          </Parallax>
          <div className="absolute top-0 h-36 w-72 "></div>
          <div className="absolute top-0 h-full w-10 "></div>
        </div>
      </div>
      <div className="pointer-events-none flex h-screen w-full flex-col justify-center p-8 md:h-full md:w-1/2">
        <br />
        <h1 className="pb-8 font-robotoMedium text-3xl text-rose-500 md:text-5xl xl:text-6xl">
          I&apos;m a computer science student focusing on data science and ML.
        </h1>
        <p className="pb-12 font-robotoRegular text-sm text-rose-400 md:text-lg lg:text-xl xl:text-2xl">
          I also minor in Korean and engineering entrepreneurship. I&apos;m a
          rising junior at the University of Pennsylvania, where I&apos;m
          involved with{" "}
          <a
            className="pointer-events-auto text-rose-500 hover:text-blue-400"
            href="https://analytics.wharton.upenn.edu/get-involved/students/student-analytics-fellows/"
            target="_blank"
            rel="noreferrer"
          >
            Wharton Analytics Fellows
          </a>
          ,{" "}
          <a
            className="pointer-events-auto text-rose-500 hover:text-blue-400"
            href="https://upenn.hack4impact.org/"
            target="_blank"
            rel="noreferrer"
          >
            Hack4Impact
          </a>
          , TA a{" "}
          <a
            className="pointer-events-auto text-rose-500 hover:text-blue-400"
            href="http://cis1600.com/"
            target="_blank"
            rel="noreferrer"
          >
            math-based comp sci class
          </a>
          , and more. I&apos;ve interned in data science and fullstack dev, but
          I&apos;m now pivoting more towards ML and deep learning. In my free
          time, you can catch me cooking, building apps, or traveling to new
          places.
          <br />
          <br />I want to learn more about how to make safe and trustworthy ML
          models, as well as how we can use everyday data that humans produce to
          uncover beneficial insights about human behavior.
        </p>
      </div>
    </div>
  );
}
