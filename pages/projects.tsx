import React from "react";
import Image from "next/image";

import ChipMockup1 from "../public/projects/chip_mockup_1.png";
import ChipMockup2 from "../public/projects/chip_mockup_2.png";
import ChipMockup3 from "../public/projects/chip_mockup_3.png";

import BackgroundChip from "../public/projects/bew_chip_background.png";
import BackgroundMM from "../public/projects/bew_mm_background.png";
import BackgroundPR from "../public/projects/bew_paperrabbit_background.png";
import { FaArrowRight } from "react-icons/fa";

export default function Projects() {
  return (
    <div>
      <div className="pointer-events-none absolute flex h-full w-full flex-col items-center justify-end pb-5">
        <div className="flex flex-row items-center justify-center text-rose-900">
          scroll to see more projects
          <div className="ml-1">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div
        id="projects"
        className="flex h-full snap-x snap-mandatory flex-row overflow-scroll"
      >
        <div className="pointer-events-none relative flex h-screen w-full shrink-0 snap-center items-center justify-center">
          <div className="relative my-32 flex h-5/6 w-11/12 flex-col overflow-hidden rounded-3xl border-2 border-blue-500 bg-blue-100 p-6 md:w-2/3">
            <div className="pointer-events-none absolute -bottom-36 -right-36 z-0 opacity-25 md:opacity-50">
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
                I created a social media platform using React Native and
                Supabase, designed around the social aspect of habits and goals.
                After trying many habit-tracking apps, I found that none of them
                really stuck with me more than using pen and paper. What I did
                notice was how well talking to friends kept me accountable,
                which gave me the idea for Chip. After lots of development,
                pitches, and feedback from friends, Chip is now in public beta.
              </p>
              <div className="invisible flex h-0 md:visible md:h-1/4">
                <div className="aspect-[1570/2932]">
                  <Image src={ChipMockup1} alt="chip mockup 1" />
                </div>
                <div className="aspect-[1570/2932]">
                  <Image src={ChipMockup2} alt="chip mockup 2" />
                </div>
                <div className="aspect-[1570/2932]">
                  <Image src={ChipMockup3} alt="chip mockup 3" />
                </div>
              </div>
              <p className="text-md mt-4 font-robotoLight text-blue-400 md:text-lg">
                Built with <span className="text-rose-400">React Native</span> |{" "}
                <span className="text-rose-400">Supabase/Postgres</span> |{" "}
                <span className="text-rose-400">Vision Camera</span> |{" "}
                <span className="text-rose-400">Redux</span> |{" "}
                <span className="text-rose-400">Notifee</span>
              </p>
            </div>
          </div>
        </div>
        <div className="pointer-events-none relative flex h-screen w-full shrink-0 snap-center items-center justify-center">
          <div className="relative my-32 flex h-5/6 w-11/12 flex-col overflow-hidden rounded-3xl border-2 border-blue-500 bg-blue-100 p-6 md:w-2/3">
            <div className="pointer-events-none absolute -bottom-16 -right-16 z-0 opacity-25 md:opacity-50">
              <Image
                src={BackgroundPR}
                width={400}
                height={400}
                alt="background image for paperrabbit"
              />
            </div>
            <div className="z-1 relative">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="mb-2 font-robotoMedium text-3xl text-blue-500 md:text-4xl lg:text-6xl">
                    PaperRabbit
                  </p>
                  <p className="font-robotoLight text-lg text-blue-500 md:text-2xl lg:text-4xl">
                    Explore research papers using NLP
                  </p>
                </div>
              </div>
              <p className="mb-4 font-robotoRegular text-sm text-blue-400 md:text-lg">
                <a
                  className="pointer-events-auto font-robotoMedium text-blue-600 hover:text-rose-500"
                  href="https://www.paperrabbit.xyz"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check out the website here.
                </a>{" "}
                At UC Berkeley&apos;s 2023 LLM-themed hackathon, my friend Aagam
                and I built a website called PaperRabbit to help you organize
                your research paper reading lists.
              </p>
              <p className="text-md mt-4 font-robotoLight text-lg text-blue-400">
                Built with <span className="text-rose-400">Flask</span> |{" "}
                <span className="text-rose-400">React</span> |{" "}
                <span className="text-rose-400">Various NLP tools</span> |{" "}
                <span className="text-rose-400">OpenAI API</span>
              </p>
            </div>
          </div>
        </div>
        <div className="pointer-events-none relative flex h-screen w-full shrink-0 snap-center items-center justify-center">
          <div className="relative my-32 flex h-5/6 w-11/12 flex-col overflow-hidden rounded-3xl border-2 border-blue-500 bg-blue-100 p-6 md:w-2/3">
            <div className="pointer-events-none absolute -bottom-16 -right-16 z-0 opacity-25 md:opacity-50">
              <Image
                src={BackgroundMM}
                width={400}
                height={400}
                alt="background image for milestone monitor"
              />
            </div>
            <div className="z-1 relative">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="mb-2 font-robotoMedium text-3xl text-blue-500 md:text-4xl lg:text-6xl">
                    Milestone Monitor
                  </p>
                  <p className="font-robotoLight text-lg text-blue-500 md:text-2xl lg:text-4xl">
                    Personal goal accountability chatbot
                  </p>
                </div>
              </div>
              <p className="mb-4 font-robotoRegular text-sm text-blue-400 md:text-lg">
                To learn more about vector databases and conversational AI, my
                friend Shiva and I built a textable (via SMS) chatbot that helps
                you come up with structured goals, saves all your data, and
                sends you customizable reminders.
              </p>
              <p className="text-md mt-4 font-robotoLight text-blue-400 md:text-lg">
                Built with <span className="text-rose-400">LangChain</span> |{" "}
                <span className="text-rose-400">Pinecone</span> |{" "}
                <span className="text-rose-400">Cohere</span> |{" "}
                <span className="text-rose-400">Django</span> |{" "}
                <span className="text-rose-400">Celery</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
