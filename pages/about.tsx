import Head from "next/head";
import Image from "next/image";

import React from "react";
import { Parallax } from "react-scroll-parallax";
import Scene from "../components/Scene";
import Brian from "../public/brian.png";
import Nutrition from "../public/brian_nutrition_facts.png";

import { FaLightbulb } from "react-icons/fa";
import ModelViewer from "../components/ModelViewer";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export default function About() {
  return (
    <div
      id="about"
      className="relative w-full snap-center overflow-hidden bg-rose-100 md:flex md:h-screen md:flex-row"
    >
      <div className="relative h-full w-full bg-rose-200 md:w-1/2">
        <div className="pointer-events-none absolute flex h-full w-full">
          <div className="absolute top-5 left-5 h-0.5 w-10 bg-rose-500" />
          <div className="absolute top-5 left-5 h-10 w-0.5 bg-rose-500" />
          <div className="absolute top-5 right-5 h-0.5 w-10 bg-rose-500" />
          <div className="absolute top-5 right-5 h-10 w-0.5 bg-rose-500" />
          <div className="absolute bottom-5 left-5 h-0.5 w-10 bg-rose-500" />
          <div className="absolute bottom-5 left-5 h-10 w-0.5 bg-rose-500" />
          <div className="absolute bottom-5 right-5 h-0.5 w-10 bg-rose-500" />
          <div className="absolute bottom-5 right-5 h-10 w-0.5 bg-rose-500" />
        </div>
        <Parallax speed={-2}>
          <div className="absolute left-16 top-10">
            <div
              className="invisible border-4 border-rose-500 bg-white sm:visible"
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
          </div>
        </Parallax>
        <Parallax speed={-4}>
          <div
            style={{ width: 336 / 1.3, height: 448 / 1.3 }}
            className="absolute left-16 top-10"
          >
            <p className="invisible absolute -bottom-12 -right-8 font-robotoRegular text-3xl text-rose-500 md:visible md:text-4xl lg:text-5xl">
              fig. 1: me
            </p>
          </div>
        </Parallax>
        <div className="absolute top-36 right-4">
          <Parallax speed={-5}>
            <div className="w-96">
              <ModelViewer modelPath={"/bew_can.glb"} />
            </div>
          </Parallax>
        </div>
        <div
          style={{ width: 580 / 2.5, height: 1070 / 2.5 }}
          className="pointer-events-none absolute right-4 bottom-10"
        >
          <Parallax speed={-6}>
            <p className="invisible absolute -top-20 -left-24 font-robotoRegular text-3xl text-rose-500 md:text-4xl lg:visible lg:text-5xl">
              fig. 2: stats
            </p>
          </Parallax>
        </div>
      </div>
      <div className="pointer-events-none flex h-full w-full flex-col justify-center p-4 md:w-1/2">
        <br />
        <h1 className="pb-8 font-robotoMedium text-3xl text-rose-500 md:text-5xl lg:text-6xl">
          I'm a computer science student focusing on data science and ML.
        </h1>
        <p className="text-md pb-12 font-robotoRegular text-rose-400 md:text-lg lg:text-2xl">
          I also minor in Korean and engineering entrepreneurship. I'm a
          sophomore at the University of Pennsylvania, where I'm involved with{" "}
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
          , and more. I've interned in data science and fullstack dev, but I'm
          now pivoting more towards ML and deep learning. In my free time, I
          enjoy cooking, reading, going on runs, and drinking as much club soda
          as possible.
          <br />
          <br />I want to learn more about how to make safe and trustworthy ML
          models, as well as how we can use everyday data that humans produce to
          uncover beneficial insights about human behavior.
        </p>
      </div>
    </div>
  );
}
