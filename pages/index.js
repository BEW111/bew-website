import Head from "next/head";
import Image from "next/image";

import React, { useRef, useState, useEffect } from "react";

import { ParallaxProvider } from "react-scroll-parallax";

import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

import Intro from "../pages/intro.tsx";
import About from "../pages/about.tsx";
import Projects from "../pages/projects.tsx";

import { Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <ParallaxProvider>
      <div>
        <Head>
          <title>Brian Williams</title>
          <meta
            name="description"
            content="Brian Williams's personal website"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div class="scroll-smooth">
            <Intro />
            <About />
            <Projects />
          </div>
        </main>
      </div>
    </ParallaxProvider>
  );
}
