"use client";

import Link from "next/link";
import { useState } from "react";

const Footer = (page) => {
  const [hovered, setHovered] = useState({
    btn1: false,
    btn2: false,
  });
  return (
    <div
      id="contact"
      className="rounded-2xl bg-[#E8E8EA] px-4 pt-[80px] sm:rounded-3xl md:rounded-4xl md:pt-[120px] lg:rounded-[40px] lg:px-[50px] lg:pt-[100px] xl:w-full xl:rounded-[48px]"
    >
      <div className="grid grid-cols-1 gap-[40px] pb-10 sm:grid-cols-2 sm:px-8 lg:gap-[60px] xl:mx-auto xl:w-[1500px] xl:grid-cols-4 xl:gap-[80px]">
        {/* CONTACT */}
        <Link
          href="https://tally.so/r/31jyp1"
          target="_blank"
          onMouseEnter={() =>
            setHovered({
              btn1: true,
              btn2: false,
            })
          }
          onMouseLeave={() =>
            setHovered({
              btn1: false,
              btn2: false,
            })
          }
          onFocus={() =>
            setHovered({
              btn1: true,
              btn2: false,
            })
          }
          onBlur={() =>
            setHovered({
              btn1: false,
              btn2: false,
            })
          }
          className="group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-black px-8 py-4 text-[28px] font-semibold text-[#141413] transition-transform duration-800 ease-out hover:scale-105 focus:scale-105 sm:hidden xl:flex xl:h-fit xl:py-10"
        >
          {/* Background video */}
          <video
            src="https://res.cloudinary.com/fazurrehman/video/upload/v1743858455/cta-hover_lngx5q.mp4"
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out ${
              hovered.btn1 ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Overlay layer */}
          <span
            className={`absolute bottom-0 transform transition-transform duration-500 ease-in-out ${
              hovered.btn1 ? "-translate-y-full" : "translate-y-0"
            }`}
          />

          {/* Button Text */}
          <span className="relative z-10">Contact</span>
        </Link>

        {/* SAY HELLO */}
        <ul className="flex flex-col items-start justify-center gap-3 lg:gap-4 [&_a]:text-[18px] [&_a]:leading-[27px] [&_a]:text-black lg:[&_a]:text-[20px]">
          <h1 className="font-merriweather pb-1.5 text-[24px] text-[#757575] lg:text-[30px] xl:text-[34px]">
            Say Hello
          </h1>
          {[
            { label: "Telegram", href: "https://t.me/AdonBhuiyah" },
            {
              label: "X (formerly Twitter)",
              href: "https://x.com/AdonBhuiyah",
            },
            { label: "GitHub", href: "https://github.com/AdonBhuiyah" },
            { label: "LinkedIn", href: "https://linkedin.com/in/AdonBhuiyah" },
            { label: "Pinterest", href: "https://pinterest.com/AdonBhuiyah" },
            {
              label: "Facebook",
              href: "https://www.facebook.com/AdonBhuiyah1",
            },
            { label: "Instagram", href: "https://instagram.com/AdonBhuiyah" },
            { label: "Threads", href: "https://threads.com/AdonBhuiyah" },
            { label: "Linktree", href: "https://linktr.ee/AdonBhuiyah" },
            { label: "Dribbble", href: "https://dribble.com/AdonBhuiyah" },
          ].map(({ label, href }) => (
            <li key={label} className="group cursor-pointer">
              <Link
                href={href}
                target="_blank"
                className="relative block h-8 w-max overflow-hidden font-medium"
              >
                <span className="flex h-full w-full items-center justify-start px-2 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                  {label}
                </span>
                <span className="absolute top-0 left-0 flex h-full w-full translate-y-full items-center justify-start px-2 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {/* MY PROJECTS */}
        <ul className="flex flex-col items-start justify-center gap-3 sm:justify-start lg:gap-4 [&_a]:text-[18px] [&_a]:leading-[27px] [&_a]:text-black lg:[&_a]:text-[20px]">
          <h1 className="font-merriweather pb-1.5 text-[24px] text-[#757575] lg:text-[30px] xl:text-[34px]">
            My Projects
          </h1>
          {[
            { label: "Pulse Robot", href: "https://pulserobots.com" },
            { label: "$LOLO", href: "https://lolosol.pro" },
            { label: "Atlas Chat", href: "https://chat.pulserobots.com" },
            {
              label: "Admin Dashboard",
              href: "https://adonr.dev/projects/admin-dashboard",
            },
            { label: "Chill Guy", href: "https://chillguy2.net" },
            {
              label: "DeepSeek AI",
              href: "https://adonr.dev/projects/deepseek",
            },
          ].map(({ label, href }) => (
            <li key={label} className="group cursor-pointer">
              <Link
                href={href}
                target="_blank"
                className="relative block h-8 w-max overflow-hidden font-medium"
              >
                <span className="flex h-full w-full items-center justify-start px-2 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                  {label}
                </span>
                <span className="absolute top-0 left-0 flex h-full w-full translate-y-full items-center justify-start px-2 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {/* NAVMENU */}
        <ul className="flex flex-col items-start justify-center gap-3 sm:hidden sm:justify-start lg:gap-4 [&_a]:text-[18px] [&_a]:leading-[27px] [&_a]:text-black lg:[&_a]:text-[20px]">
          <h1 className="font-merriweather pb-1.5 text-[24px] text-[#757575]">
            Explore
          </h1>
          {[
            { label: "Projects", href: "/projects" },
            { label: "Plans", href: "#plans" },
            { label: "About Me", href: "#about-me" },
            { label: "FAQ", href: "#faq" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <li key={label} className="group cursor-pointer">
              <Link
                href={href}
                className="relative block h-8 w-max overflow-hidden font-medium"
              >
                <span className="flex h-full w-full items-center justify-start px-2 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                  {label}
                </span>
                <span className="absolute top-0 left-0 flex h-full w-full translate-y-full items-center justify-start px-2 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* NAVMENU 2 */}
        <ul className="hidden flex-col items-start justify-center gap-3 sm:flex sm:justify-start lg:gap-4 [&_a]:text-[18px] [&_a]:leading-[27px] [&_a]:text-black lg:[&_a]:text-[20px]">
          <h1 className="font-merriweather pb-1.5 text-[24px] text-[#757575] lg:text-[30px] xl:text-[34px]">
            Explore
          </h1>
          {[
            { label: "Projects", href: "/projects" },
            { label: "Plans", href: "#plans" },
            { label: "About Me", href: "#about-me" },
            { label: "FAQ", href: "#faq" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <li key={label} className="group cursor-pointer">
              <Link
                href={href}
                className="relative block h-8 w-max overflow-hidden font-medium"
              >
                <span className="flex h-full w-full items-center justify-start px-2 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                  {label}
                </span>
                <span className="absolute top-0 left-0 flex h-full w-full translate-y-full items-center justify-start px-2 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="https://tally.so/r/31jyp1"
          target="_blank"
          onMouseEnter={() =>
            setHovered({
              btn1: false,
              btn2: true,
            })
          }
          onMouseLeave={() =>
            setHovered({
              btn1: false,
              btn2: false,
            })
          }
          onFocus={() =>
            setHovered({
              btn1: false,
              btn2: true,
            })
          }
          onBlur={() =>
            setHovered({
              btn1: false,
              btn2: false,
            })
          }
          className="group relative hidden cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-black px-8 py-4 text-[28px] font-semibold text-[#141413] transition-transform duration-800 ease-out hover:scale-105 focus:scale-105 sm:flex sm:h-fit md:py-8 lg:py-10 xl:hidden"
        >
          {/* Background video */}
          <video
            src="https://res.cloudinary.com/fazurrehman/video/upload/v1743858455/cta-hover_lngx5q.mp4"
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out ${
              hovered.btn2 ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Overlay layer */}
          <span
            className={`absolute bottom-0 transform transition-transform duration-500 ease-in-out ${
              hovered.btn2 ? "-translate-y-full" : "translate-y-0"
            }`}
          />

          {/* Button Text */}
          <span className="relative z-10">Contact</span>
        </Link>
      </div>

      {/* LOGO SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 115 35">
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n      .cls-2 {\n        fill: #CACACC;\n        font-family: SansSerifBldFLF, SansSerifBldFLF;\n        font-size: 45.92px;\n      }\n    ",
            }}
          />
        </defs>
        <text
          className={`cls-2 cursor-pointer select-none`}
          transform="translate(0 39.35) scale(.98 1)"
        >
          <tspan x={0} y={0}>
            adon.
          </tspan>
        </text>
      </svg>
    </div>
  );
};

export default Footer;
