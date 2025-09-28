"use client";

import Link from "next/link";
import { useState } from "react";

export default function Plans() {
  const [isButtonActive, setIsButtonActive] = useState({
    monthly: true,
    fixedProject: false,
  });
  const checkIconSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-3 -2 20 20"
      className={`h-[1lh] w-[25px] shrink-0 rounded-full p-1 ${isButtonActive.monthly ? "bg-black" : "bg-[#757575]"}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.0729 9.7882L12.1823 3.67881C12.5572 3.30391 13.1651 3.30391 13.54 3.67881V3.67881C13.9149 4.05371 13.9149 4.66157 13.54 5.03648L6.78 11.7964C6.38948 12.1869 5.75632 12.1869 5.36579 11.7964L2.67882 9.10942C2.30392 8.73452 2.30391 8.12668 2.67881 7.75177V7.75177C3.05372 7.37685 3.66157 7.37685 4.03648 7.75176L6.0729 9.7882Z"
        fill="white"
      />
    </svg>
  );
  const ListArray = [
    {
      id: 1,
      icon: checkIconSVG,
      title: isButtonActive.monthly
        ? `End-to-end full-stack development with MERN & Next.js`
        : `Full project with clear start and finish`,
    },
    {
      id: 2,
      icon: checkIconSVG,

      title: isButtonActive.monthly
        ? `Scalable architecture and maintainable, production-ready code`
        : `Fixed price based on your needs
`,
    },
    {
      id: 3,
      icon: checkIconSVG,
      title: isButtonActive.monthly
        ? `Continuous support and fast iterations for rapid delivery`
        : `Clear timeline and deliverables

`,
    },
    {
      id: 4,
      icon: checkIconSVG,
      title: isButtonActive.monthly
        ? `Seamless integration with APIs, databases, and third-party services`
        : `Additional support after project completion

`,
    },
    {
      id: 5,
      icon: checkIconSVG,
      title: isButtonActive.monthly
        ? `Performance optimization & responsive design for all devices`
        : `
`,
    },
  ];
  return (
    <section
      id="plans"
      className="w-full rounded-[30px] bg-gradient-to-b from-[#E0E0E0] to-[#EEEEEE] px-6 py-[50px] md:py-[120px] lg:rounded-[40px] lg:py-[150px]"
    >
      {/* Header */}
      <h1
        className={`font-merriweather mb-12 text-center text-[24px] font-bold text-[#5C5C5C] sm:text-[42px] md:mb-16 md:text-[46px] lg:mb-20 lg:text-[53px] xl:text-[62px] 2xl:text-[72px]`}
      >
        My pricing is simple
      </h1>

      {/* MONTHLY & FIXED PROJECT BUTTONS */}
      <div className="buttons *:group mb-8 flex items-center justify-center gap-3 *:relative *:z-10 *:flex *:h-[53px] *:cursor-pointer *:items-center *:justify-center *:overflow-hidden *:rounded-full *:bg-black *:px-[5px] *:text-[16px] *:font-bold *:text-white *:transition-transform *:duration-300 lg:gap-4 lg:text-[18px] xl:gap-5">
        <button
          onClick={() =>
            setIsButtonActive({
              monthly: true,
              fixedProject: false,
            })
          }
          type="button"
          role="button"
          className={`w-[132px] sm:h-[48px] sm:w-[150px] sm:p-[10px] lg:w-[150px] xl:text-[17px] ${isButtonActive.monthly && "scale-102"}`}
        >
          {/* <span className="absolute inset-0 z-10 translate-x-[-100%] bg-black group-hover:translate-x-0 group-focus:translate-x-0"></span> */}
          <span
            className={`absolute inset-0 z-[-5] ${isButtonActive.monthly ? "bg-black opacity-100" : "bg-white opacity-30"}`}
          ></span>
          <span className="relative z-[-10] flex items-center gap-2"></span>
          Monthly
        </button>
        <button
          type="button"
          role="button"
          onClick={() =>
            setIsButtonActive({
              monthly: false,
              fixedProject: true,
            })
          }
          className={`flex w-[142px] sm:h-[48px] sm:w-[150px] sm:p-[10px] lg:w-[150px] xl:text-[17px] ${isButtonActive.fixedProject && "scale-102"}`}
        >
          {/* <span className="absolute inset-0 z-10 translate-x-[-100%] bg-black group-hover:translate-x-0 group-focus:translate-x-0"></span> */}
          <span
            className={`absolute inset-0 z-[-5] ${isButtonActive.fixedProject ? "bg-black opacity-100" : "bg-white opacity-30"}`}
          ></span>
          <span className="relative z-[-10] flex items-center"></span>
          Fixed project
        </button>
      </div>

      {/* Pricing Card */}
      <div
        className={`mx-auto flex w-full flex-col items-start justify-center gap-6 rounded-3xl px-6 py-8 sm:px-8 sm:py-10 md:max-w-[600px] ${isButtonActive.monthly ? "bg-[#2f2f2f] text-white" : "bg-[#BDBDBD] text-black"}`}
      >
        <h3
          className={`text-lg font-bold lg:text-xl ${isButtonActive.monthly ? "text-[#EFEFEF]" : "text-[#141413]"} `}
        >
          {isButtonActive.monthly
            ? "Monthly Development Partnership"
            : "Custom Solutions"}
        </h3>

        {isButtonActive.fixedProject && (
          <h1 className="text-[32px] font-bold text-[#141413] lg:text-[36px]">
            Fixed-scope projects
          </h1>
        )}

        <ul
          className={`flex flex-col gap-3 ${isButtonActive.monthly ? "text-[#EFEFEF]" : "text-[#141413]"}`}
        >
          {ListArray.map(({ id, icon, title }, index) => {
            if (isButtonActive.fixedProject && index === ListArray.length - 1) {
              return;
            }
            return (
              <li
                key={id}
                className="flex w-fit flex-row items-start justify-center gap-3"
              >
                {icon}
                {title}
              </li>
            );
          })}
        </ul>

        {/* Price */}
        {isButtonActive.monthly ? (
          <div className="text-[16px] text-[#efefef]">
            <p className="text-4xl font-bold">$8,000</p>
            <p>
              {" "}
              <span className="font-semibold">per month</span> billed monthly
            </p>
          </div>
        ) : (
          ""
        )}

        {/* Button */}
        <Link
          href="https://tally.so/r/31jyp1"
          target="_blank"
          className="group relative flex h-[53px] w-[180px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-[5px] text-lg text-black transition-transform duration-300 hover:scale-102 focus:scale-102 2xl:text-[19px]"
        >
          <span
            className={`absolute inset-0 z-[-10] translate-x-[-100%] bg-[#E3E3E3] transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-focus:translate-x-0`}
          ></span>
          Contact Me
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-[5px] group-focus:translate-x-[5px]"
            viewBox="0 0 16 16"
          >
            <path
              d="M9.33333 4L13.5 8L9.33333 12M13 8H2.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
