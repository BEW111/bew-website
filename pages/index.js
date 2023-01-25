import React from "react";
import Head from "next/head";

import { ParallaxProvider } from "react-scroll-parallax";

import Intro from "../pages/intro.tsx";
import About from "../pages/about.tsx";
import Projects from "../pages/projects.tsx";

import { Globals } from "@react-spring/shared";

Globals.assign({
  frameLoop: "always",
});

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
