import React from "react";
import YoutubeEmbed from "../components/YoutubeEmbed";
import Image from "next/image";

import ChipIcon from "../public/chip_512x512_rounded.png";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex w-full snap-center flex-row overflow-hidden bg-rose-100 md:h-screen"
    >
      <div className="absolute flex h-full w-full items-center justify-center">
        <div className="bg-blue-100 sm:w-11/12 md:flex md:h-5/6">
          <div className="h-full px-8 pt-8 md:w-1/2 lg:pt-12">
            <div className="flex flex-row">
              <p className="font-robotoMedium text-2xl text-blue-500 md:text-3xl lg:text-5xl">
                Chip: social media meets smart habit tracking
              </p>
            </div>
            <br />
            <p className="font-robotoMedium text-lg text-blue-500 md:text-lg lg:text-xl">
              Contact me if you&apos;re interested in joining the beta!
            </p>
            <br />
            <p className="font-robotoMedium text-xl text-blue-400 md:text-2xl lg:text-2xl">
              {">"} Every time you record a habit, snap a picture to save and
              share it in the moment
              <br />
              {">"} Set smart reminders that adapt to how and when you work best
              <br />
              {">"} Use social incentives like &quot;superstreaks&quot;: shared
              habit streaks that break if either you or your friend fails
              <br />
              <br />
            </p>
            <p className="font-robotoMedium text-lg text-blue-400 md:text-lg lg:text-xl">
              Built with <span className="text-rose-500">React Native</span> |{" "}
              <span className="text-rose-500">Vision Camera</span> |{" "}
              <span className="text-rose-500">Redux</span> |{" "}
              <span className="text-rose-500">Notifee</span> |{" "}
              <span className="text-rose-500">Firebase</span> |{" "}
              <span className="text-rose-500">scikit-learn</span> |{" "}
              <span className="text-rose-500">transformers</span>
            </p>
          </div>
          <div className="h-full px-8 py-4 md:w-1/2">
            {/* <p className="font-robotoMedium text-2xl text-blue-500 md:text-3xl lg:text-5xl">
              XGAI: explainable solutions to generative models
            </p> */}
            <YoutubeEmbed embedId="WGds-UYgeeo" />
            {/* <div className="r-5 b-5 absolute">
              <Image
                alt="chip app icon"
                src={ChipIcon}
                width={64}
                height={64}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
