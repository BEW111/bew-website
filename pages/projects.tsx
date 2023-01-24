import React from "react";
import YoutubeEmbed from "../components/YoutubeEmbed";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export default function Projects() {
  return (
    <div
      id="projects"
      className="relative flex h-screen w-full snap-center flex-row overflow-hidden bg-rose-100"
    >
      <div className="absolute h-full w-1/2 bg-rose-200"></div>
      <div className="absolute flex h-full w-full items-center justify-center">
        <div className="flex h-5/6 w-11/12 bg-blue-100">
          <div className="h-full w-1/2 px-8 pt-12">
            <p className="font-robotoMedium text-2xl text-blue-500 md:text-3xl lg:text-5xl">
              Chip: social media meets smart habit tracking
            </p>
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
              <span className="text-rose-500">Firebase</span> |{" "}
              <span className="text-rose-500">scikit-learn</span> |{" "}
              <span className="text-rose-500">transformers</span>
            </p>
          </div>
          <div className="h-full w-1/2 px-8 pt-12">
            {/* <p className="font-robotoMedium text-2xl text-blue-500 md:text-3xl lg:text-5xl">
              XGAI: explainable solutions to generative models
            </p> */}
            <YoutubeEmbed embedId="WGds-UYgeeo" />
          </div>
        </div>
      </div>
    </div>
  );
}
