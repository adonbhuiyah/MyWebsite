"use client";

import FooterContactBtn from "./FooterContactBtn";
import Link from "next/link";
import { NavbarLinks } from "./NavbarSection";
import { projectsList } from "./ProjectsSection";
import { useState } from "react";
const SocialLinks = [
  { label: "Telegram", url: "https://t.me/AdonBhuiyah" },
  {
    label: "X (formerly Twitter)",
    url: "https://x.com/AdonBhuiyah",
  },
  { label: "GitHub", url: "https://github.com/AdonBhuiyah" },
  { label: "LinkedIn", url: "https://linkedin.com/in/AdonBhuiyah" },
  { label: "Pinterest", url: "https://pinterest.com/AdonBhuiyah" },
  {
    label: "Facebook",
    url: "https://www.facebook.com/AdonBhuiyah1",
  },
  { label: "Instagram", url: "https://instagram.com/AdonBhuiyah" },
  { label: "Threads", url: "https://threads.com/AdonBhuiyah" },
  { label: "Linktree", url: "https://linktr.ee/AdonBhuiyah" },
  { label: "Dribbble", url: "https://dribble.com/AdonBhuiyah" },
];
const FooterSection = () => {
  return (
    <section
      id="contact"
      className="rounded-2xl bg-[#E8E8EA] px-4 pt-[80px] sm:rounded-3xl md:rounded-4xl md:pt-[120px] lg:rounded-[40px] lg:px-[50px] lg:pt-[100px] xl:w-full xl:rounded-[48px]"
    >
      <div className="grid grid-cols-1 gap-[40px] pb-10 sm:grid-cols-2 sm:px-8 lg:gap-[60px] xl:mx-auto xl:w-[1500px] xl:grid-cols-4 xl:gap-[80px]">
        {/* this contact button is for small devices under 640px*/}
        <FooterContactBtn button="default" />

        {/* SAY HELLO (social media list) */}
        <ul className="flex flex-col items-start justify-center gap-3 lg:gap-4">
          <h1 className="font-merriweather pb-1.5 text-[24px] text-[#757575] lg:text-[30px] xl:text-[34px]">
            Say Hello
          </h1>
          {SocialLinks.map(({ label, url }) => (
            <li key={label} className="group cursor-pointer">
              <Link
                href={url}
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
        {/* MY PROJECTS LIST */}
        <ul className="flex flex-col items-start justify-center gap-3 sm:justify-start lg:gap-4">
          <h1 className="font-merriweather pb-1.5 text-[24px] text-[#757575] lg:text-[30px] xl:text-[34px]">
            My Projects
          </h1>
          {projectsList.map(({ title, url }) => (
            <li key={title} className="group cursor-pointer">
              <Link
                href={url}
                target="_blank"
                className="relative block h-8 w-max overflow-hidden font-medium [&_a]:text-[18px] [&_a]:leading-[27px] [&_a]:text-black lg:[&_a]:text-[20px]"
              >
                <span className="flex h-full w-full items-center justify-start px-2 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                  {title.split(" —")[0]}
                </span>
                <span className="absolute top-0 left-0 flex h-full w-full translate-y-full items-center justify-start px-2 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                  {title.split(" —")[0]}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {/* EXPLORE NAVBAR MENU */}
        <ul className="flex flex-col items-start justify-center gap-3 sm:justify-start lg:gap-4">
          <h1 className="font-merriweather pb-1.5 text-[24px] text-[#757575]">
            Explore
          </h1>
          {NavbarLinks.map(({ label, url }) => (
            <li key={label} className="group cursor-pointer">
              <Link
                href={url}
                className="relative block h-8 w-max overflow-hidden font-medium [&_a]:text-[18px] [&_a]:leading-[27px] [&_a]:text-black lg:[&_a]:text-[20px]"
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

        {/* this contact button is for big screen */}
        <FooterContactBtn button="BigScreen" />
      </div>
      {/* BIG GRAY COLOR LOGO  */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="2 0 115 30"
        fill="#CACACC"
      >
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: "\n    .st3 {\n        fill: none;\n      }\n    ",
            }}
          />
        </defs>
        <g>
          <path d="M29.95,34.34h-6.12v-1.16c-.92.68-2.32,1.56-5.52,1.56-6.12,0-9.16-4.76-9.16-9.52s3.04-9.52,9.16-9.52c3.08,0,4.64.68,5.52,1.44v-1.36h6.12v18.56ZM19.79,28.87c2.08,0,3.8-1.72,3.8-3.8s-1.72-3.8-3.8-3.8-3.8,1.72-3.8,3.8,1.72,3.8,3.8,3.8Z" />
          <path d="M53.75,4.75v29.6h-6.12v-1.16c-.92.64-2.64,1.56-5.52,1.56-6.12,0-9.16-4.76-9.16-9.52s3.04-9.52,9.16-9.52c3.28,0,4.52.72,5.52,1.44V4.75h6.12ZM43.75,28.87c2.08,0,3.8-1.72,3.8-3.8s-1.72-3.8-3.8-3.8-3.8,1.72-3.8,3.8,1.72,3.8,3.8,3.8Z" />
          <path d="M66.67,34.86c-6.76,0-10.16-4.84-10.16-9.76s3.4-9.76,10.16-9.76,10.04,4.92,10.04,9.76-3.28,9.76-10.04,9.76ZM66.63,28.95c2.16,0,3.8-1.72,3.8-3.8s-1.64-3.8-3.8-3.8-3.8,1.72-3.8,3.8,1.72,3.8,3.8,3.8Z" />
          <path d="M79.35,15.95h6.88v1.68c.88-.88,2.36-2,5.92-2,4.96,0,7.24,2.6,7.24,7.2v11.52h-6.88v-10.04c0-2.24-.4-3.92-2.92-3.92-2.8,0-3.36,1.88-3.36,3.24v10.72h-6.88V15.95Z" />
          <path d="M106.03,34.5c-1.92,0-3.44-1.52-3.44-3.44s1.52-3.44,3.44-3.44,3.44,1.52,3.44,3.44-1.52,3.44-3.44,3.44Z" />
        </g>
        <rect className="st3" x="28.88" y="18.03" width="17.12" height="1.29" />
      </svg>
    </section>
  );
};

export default FooterSection;
