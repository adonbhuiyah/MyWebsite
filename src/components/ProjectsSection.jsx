"use client";

import { HeroContactBtn, HeroProjectBtn } from "./Btns";

import { LetsTalkBtn } from "./Btns";

export const projectsList = [
  {
    id: 0,
    video: "/meme.mp4",
    title: "Pulse Robot —",
    desc: "A Solana-powered AI Robotics platform featuring Atlas, with tokenomics, live chat, wallet actions, and a sleek, responsive UI.",
    url: "https://adonr.dev/projects/pulse-robot",
  },
  {
    id: 1,
    video: "/meme.mp4",
    title: "Atlas Chat —",
    desc: "A sleek full-stack AI chatbot with dynamic chat, session Q&A, and responsive design built for speed, scale, and great UX.",
    url: "https://adonr.dev/projects/atlas-ai",
  },
  {
    id: 2,
    video: "/meme.mp4",
    title: "$LOLO SOL —",
    desc: "Street Culture Meets Lightning-Fast DeFi.",
    url: "https://adonr.dev/projects/lolosol",
  },
  {
    id: 3,
    video: "/meme.mp4",
    title: "Chill Guy —",
    desc: "An Ethereum-based zero-tax token featuring clear MetaMask/Uniswap purchase guides, transparent tokenomics, and a modern, community-focused UI.",
    url: "https://adonr.dev/projects/chillguy",
  },

  {
    id: 4,
    video: "/meme.mp4",
    title: "$TARIFF Coin —",
    desc: "Make Every Trade Pay. Maximizing Gains, One Tariff at a Time.",
    url: "https://adonr.dev/projects/tariff-coin",
  },
  {
    id: 5,
    video: "/meme.mp4",
    title: "DeepSeek AI —",
    desc: "Fully cloned with every feature chat, UI, UX, and more, powered by API magic.",
    url: "https://adonr.dev/projects/deepseek",
  },
];
const specificVideoStyle = [
  "h-[450px] md:h-[500px] lg:h-[550px] xl:min-h-[95vh] xl:min-w-[630px]",
  "h-[300px] md:mt-10 md:h-[350px] lg:h-[400px] xl:mt-20 xl:min-h-[70vh]",
  "h-[450px] md:mt-[20px] md:h-[350px] lg:h-[400px] xl:min-h-[70vh]",
  "h-[300px] md:mt-[-90px] md:h-[500px] lg:h-[550px] xl:min-h-[95vh] xl:min-w-[630px] 2xl:mt-[-126px]",
  "h-[450px] md:mt-[-75px] md:h-[500px] lg:mt-[-100px] lg:h-[550px] xl:mt-[-120px] xl:min-h-[95vh] xl:min-w-[630px]",
  "h-[300px] md:mt-[20px] md:h-[500px] lg:h-[550px] xl:min-h-[95vh] xl:min-w-[630px]",
];
export default function Projects({ page }) {
  return (
    <section
      id="projects"
      className={`px-6 ${page === "projects" ? "pt-[200px] pb-[130px]" : "py-[80px]"}`}
    >
      {/* Title */}
      <h1 className="mb-10 bg-gradient-to-b from-black to-[#e3e3e3] bg-clip-text text-center text-[32px] font-bold text-transparent sm:text-[42px] md:mb-16 md:text-[46px] lg:mb-20 lg:text-[53px] xl:text-[62px] 2xl:text-[72px]">
        <span className="">Selected</span>{" "}
        <span className="font-merriweather text-gray-500">projects</span>
      </h1>

      {/* Projects */}
      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-6 lg:mx-auto lg:max-w-[950px] lg:gap-8 xl:max-w-[1300px] xl:gap-10">
        {projectsList.map((project) => (
          <div key={project.id}>
            {/* Video */}
            <video
              src={project.video}
              muted
              loop
              className={`w-full rounded-2xl object-cover transition-transform duration-500 ${specificVideoStyle[project.id]}`}
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            />

            {/* Info */}
            <div className="pt-6 pr-1">
              <h2 className="mb-6 text-lg">
                <span className="font-bold text-[#141413]">
                  {" "}
                  {project.title}{" "}
                </span>{" "}
                <span className="font-normal text-[#757575]">
                  {project.desc}
                </span>
              </h2>
              <HeroContactBtn
                href={project.url}
                label={`View ${project.title.split(" —")[0]}`}
                size="lg"
              />
            </div>
          </div>
        ))}
      </div>
      {/* Hero Btns */}
      <div className="mt-12 flex items-center justify-center space-x-5 lg:mt-14 xl:mt-16">
        <HeroProjectBtn button="github" />
        <LetsTalkBtn />
      </div>
      <div className="mx-auto mt-10 flex max-w-[320px] flex-col items-center justify-center text-center text-[16px] text-[#757575] sm:max-w-[500px] lg:text-lg">
        As you know, most of my work I can’t disclose publicly, you know what I
        mean (under NDA).
      </div>
    </section>
  );
}
