"use client";

import HeroBtns from "./HeroBtns";
import Image from "next/image";
import helloGif from "../../public/hello.gif";
import shakeGif from "../../public/shake.gif";
import { useState } from "react";

// Import your image here

export default function Hero() {
  const [isButtonClicked, setIsButtonClicked] = useState({
    projects: false,
    aboutMe: false,
  });

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center px-4 pt-[180px] pb-[40px] text-center"
    >
      {/* Top Intro */}
      <p className="mb-6 hidden items-center justify-center gap-2 text-[16px] text-[#424242] md:flex">
        <Image
          src={helloGif}
          alt="Hello GIF"
          className="w-[30px] md:mt-[-10px]"
        />
        It's Adon, Your Full-Stack Developer!
      </p>

      {/* Heading */}
      <h1
        id="hero-heading"
        className="flex max-w-[300px] flex-wrap items-center justify-center gap-4 bg-gradient-to-b from-black to-[#757575] bg-clip-text text-[40px] font-bold tracking-tight text-transparent sm:max-w-[450px] md:max-w-[550px] md:text-[55px] lg:max-w-[650px] lg:text-[64px] xl:max-w-[750px] xl:text-[74px] 2xl:max-w-[950px] 2xl:text-[96px]"
      >
        <span>Building</span>

        <Image
          src={shakeGif}
          alt="shake GIF"
          className="w-[45px] sm:mx-[-13px] md:w-[60px] lg:mx-[-15px] lg:w-[70px] xl:mx-[-17px] xl:w-[80px] 2xl:w-[100px]"
        />
        <span>Full-Stack</span>
        <span>Web</span>
        <span>Apps</span>
        <span>for</span>
        <span>ideas</span>
        <span>that</span>
        <span>need</span>
        <span>to</span>
        <span>scale</span>
      </h1>

      {/* Subtext */}
      <p className="text-[#141413 mt-6 max-w-[300px] text-[16px] md:max-w-[700px] md:text-[18px] lg:max-w-[800px] lg:text-[24px]">
        I’m a Full-Stack Developer Passionate about building Modern, Scalable,
        and User-Friendly Web Applications.I create projects that bring ideas to
        life.
      </p>

      {/* Buttons */}
      <HeroBtns />
    </section>
  );
}
