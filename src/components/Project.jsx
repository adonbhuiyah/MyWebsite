"use client";

import Link from "next/link";
import { useState } from "react";

export default function Projects({ page }) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const projects = [
    {
      id: 1,
      video: "/meme.mp4",
      title: "Pulse Robot —",
      desc: "A Solana-powered AI Robotics platform featuring Atlas, with tokenomics, live chat, wallet actions, and a sleek, responsive UI.",
      url: "https://pulserobots.com",
    },
    {
      id: 2,
      video: "/meme.mp4",
      title: "Atlas Chat —",
      desc: "A sleek full-stack AI chatbot with dynamic chat, session Q&A, and responsive design built for speed, scale, and great UX.",
      url: "https://chat.pulserobots.com",
    },
    {
      id: 3,
      video: "/meme.mp4",
      title: "$LOLO —",
      desc: "Street Culture Meets Lightning-Fast DeFi.",
      url: "https://lolosol.pro",
    },
    {
      id: 4,
      video: "/meme.mp4",
      title: "Chill Guy —",
      desc: "An Ethereum-based zero-tax token featuring clear MetaMask/Uniswap purchase guides, transparent tokenomics, and a modern, community-focused UI.",
      url: "https://chillguy2.net",
    },

    {
      id: 5,
      video: "/meme.mp4",
      title: "Admin Dashboard —",
      desc: "A modern admin dashboard interface with user management, analytics, and system monitoring features. Includes navigation panels, status metrics, and notification sections.",
      url: "https://adonr.dev/projects/admin-dashboard",
    },
    {
      id: 6,
      video: "/meme.mp4",
      title: "DeepSeek AI —",
      desc: "Fully cloned with every feature chat, UI, UX, and more, powered by API magic.",
      url: "https://adonr.dev/projects/deepseek",
    },
  ];

  return (
    <section
      id="projects"
      className={`px-6 ${page === "projects" ? "pt-[200px] pb-[130px]" : "py-[100px]"}`}
    >
      {/* Title */}
      <h1 className="mb-6 bg-gradient-to-b from-black to-[#e3e3e3] bg-clip-text text-center text-[32px] font-bold text-transparent lg:mb-10 lg:text-[40px] 2xl:text-[48px]">
        <span className="">Selected</span>{" "}
        <span className="font-merriweather text-gray-500">projects</span>
      </h1>

      {/* Projects */}
      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 lg:mx-auto lg:max-w-[950px] xl:max-w-[1050px]">
        {projects.map((project) => (
          <div key={project.id} className={``}>
            {/* Video */}
            <video
              src={project.video}
              muted
              loop
              className={`h-[362px] w-full rounded-3xl object-cover transition-transform duration-500 ${project.id === 1 ? "h-[450px] md:h-[500px]" : project.id === 2 ? "h-[350px] md:mt-10 md:h-[400px]" : project.id === 3 ? "h-[450px] md:h-[400px]" : project.id === 4 ? "h-[350px] md:mt-[-60px] md:h-[500px]" : project.id === 5 ? "h-[450px] md:mt-[-120px] md:h-[500px] xl:mt-[-100px]" : project.id === 6 ? "h-[350px] md:mt-[0px] md:h-[500px]" : ""}`}
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
              <Link
                href={project.url}
                target="_blank"
                onClick={() => setIsButtonClicked(true)}
                className={`group relative mx-auto flex h-[60px] w-[240px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-black bg-white px-[5px] text-center text-lg transition-transform duration-300 hover:scale-102 focus:scale-102 ${project.id === 5 && "w-[260px]"}`}
              >
                <span
                  className={`} absolute inset-0 z-0 translate-x-[-100%] bg-[#E3E3E3] transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-focus:translate-x-0`}
                ></span>
                <span className="relative z-10 flex items-center gap-2 text-black transition-colors duration-300 ease-in-out">
                  View {project.title.split(" —")[0]}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`inline-block h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-[5px] group-focus:translate-x-[5px]`}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M9.33333 4L13.5 8L9.33333 12M13 8H2.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Hero Btns */}
      <div className="mt-12 flex items-center justify-center space-x-5 lg:mt-14 xl:mt-16">
        <Link
          href="https://github.com/AdonBhuiyah"
          target="_blank"
          className="group relative flex h-[50px] w-[132px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-black px-[5px] text-lg text-white transition-transform duration-300 hover:scale-102 focus:scale-102 sm:h-[48px] sm:w-[140px] sm:p-[10px] lg:w-[150px] 2xl:text-[20px]"
        >
          <span className="absolute inset-0 z-10 translate-x-[-100%] bg-black transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-focus:translate-x-0"></span>
          <span className="absolute inset-0 z-5 bg-white opacity-30"></span>
          <span className="relative z-10 flex items-center gap-2">
            GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-[5px] group-focus:translate-x-[5px]"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.33333 4L13.5 8L9.33333 12M13 8H2.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </span>
        </Link>
        <button type="button" className="group">
          <Link
            href="https://tally.so/r/31jyp1"
            target="_blank"
            className="relative flex h-[47px] w-max items-center justify-center overflow-hidden rounded-full border-2 border-black px-5 font-bold transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
          >
            <span className="flex h-full w-full items-center justify-center text-[18px] leading-[27px] text-black transition-transform duration-500 ease-in-out group-hover:-translate-y-full group-focus:-translate-y-full">
              Let's talk
            </span>
            <span className="absolute top-0 left-0 flex h-full w-full translate-y-full items-center justify-center bg-black text-[18px] leading-[27px] text-white transition-transform duration-500 ease-in-out group-hover:translate-y-0 group-focus:translate-y-0">
              SAY HI
            </span>
          </Link>
        </button>
      </div>
      <div className="mx-auto mt-10 flex max-w-[320px] flex-col items-center justify-center text-center text-[16px] text-[#757575] sm:max-w-[500px] lg:text-lg">
        As you know, most of my work I can’t disclose publicly, you know what I
        mean (under NDA).
      </div>
    </section>
  );
}
