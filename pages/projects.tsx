import React from "react";
import YoutubeEmbed from "../components/YoutubeEmbed";
import Image from "next/image";

import ChipIcon from "../public/projects/chip_512x512_rounded.png";
import ChipMockup1 from "../public/projects/chip_mockup_1.png";
import ChipMockup2 from "../public/projects/chip_mockup_2.png";
import ChipMockup3 from "../public/projects/chip_mockup_3.png";

import BackgroundChip from "../public/projects/bew_chip_background.png";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex h-screen w-full snap-center flex-row overflow-hidden"
    >
      <div className="absolute flex h-full w-full items-center justify-center">
        <div className="relative my-32 flex w-11/12 flex-col overflow-hidden rounded-3xl border-2 border-blue-500 bg-blue-100 p-6 md:w-2/3">
          <div className="absolute -bottom-36 -right-36 z-0 opacity-25 md:opacity-50">
            <Image
              src={BackgroundChip}
              width={500}
              height={500}
              alt="background image for chip"
            />
          </div>
          <div className="z-1 relative">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="mb-2 font-robotoMedium text-3xl text-blue-500 md:text-4xl lg:text-6xl">
                  Chip
                </p>
                <p className="font-robotoLight text-lg text-blue-500 md:text-2xl lg:text-4xl">
                  Social platform for smart habits
                </p>
              </div>
            </div>
            <p className="mb-4 font-robotoRegular text-sm text-blue-400 md:text-lg">
              <a
                className="pointer-events-auto font-robotoMedium text-blue-600 hover:text-rose-500"
                href="https://testflight.apple.com/join/MxBp9iWh"
                target="_blank"
                rel="noreferrer"
              >
                Download the iOS beta for free, here.
              </a>{" "}
              I created a social media platform using React Native and Supabase,
              designed around the social aspect of habits and goals. After
              trying many habit-tracking apps, I found that none of them really
              stuck with me more than using pen and paper. What I did notice was
              how well talking to friends kept me accountable, which gave me the
              idea for Chip. After lots of development, pitches, and feedback
              from friends, Chip is now in public beta.
            </p>
            <div className="invisible flex h-0 md:visible md:h-full">
              <Image
                src={ChipMockup1}
                width={1570 / 12}
                height={2932 / 12}
                alt="chip mockup 1"
              />
              <Image
                src={ChipMockup2}
                width={1570 / 12}
                height={2932 / 12}
                alt="chip mockup 2"
              />
              <Image
                src={ChipMockup3}
                width={1570 / 12}
                height={2932 / 12}
                alt="chip mockup 3"
              />
            </div>
            <p className="text-md mt-4 font-robotoLight text-lg text-blue-400">
              Built with <span className="text-rose-400">React Native</span> |{" "}
              <span className="text-rose-400">Supabase/Postgres</span> |{" "}
              <span className="text-rose-400">Vision Camera</span> |{" "}
              <span className="text-rose-400">Redux</span> |{" "}
              <span className="text-rose-400">Notifee</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
