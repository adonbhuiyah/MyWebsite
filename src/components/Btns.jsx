import Link from "next/link";

// Reusable Button Component
export const HeroAboutMeBtn = ({
  href = "#",
  label = "Click Me",
  size = "default",
  target = "_self", // sm | default | lg
}) => {
  const sizeClasses = {
    sm: "h-[40px] px-4 text-sm",
    default: "h-[53px] px-4 md:px-6 text-lg",
    lg: "h-[60px] px-8 text-xl w-fit mx-auto",
  };

  return (
    <Link
      href={href}
      target={target === "_blank" ? "_blank" : "_self"}
      className={`group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-black bg-white transition-transform duration-300 hover:scale-105 focus:scale-105 ${sizeClasses[size]} `}
    >
      {/* Hover background */}
      <span className="absolute inset-0 z-0 translate-x-[-100%] bg-[#E3E3E3] transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-focus:translate-x-0"></span>

      {/* Label + Icon */}
      <span className="relative z-10 flex items-center gap-2 text-black transition-colors duration-300 ease-in-out">
        {label}
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
  );
};

export const HeroProjectBtn = ({ button }) => {
  return (
    <Link
      href={
        button === "projects" ? "/projects" : "https://github.com/AdonBhuiyah"
      }
      target={button === "github" ? "_blank" : "_self"}
      className={`group relative flex w-[132px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-black px-[5px] text-lg text-white transition-transform duration-300 hover:scale-102 focus:scale-102 sm:w-[140px] sm:p-[10px] lg:w-[150px] 2xl:text-[20px] ${button === "projects" ? "h-[53px]" : "h-[50px]"}`}
    >
      <span className="absolute inset-0 z-10 translate-x-[-100%] bg-black transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-focus:translate-x-0"></span>
      <span className="absolute inset-0 z-5 bg-white opacity-30"></span>
      <span className="relative z-10 flex items-center gap-2">
        {button === "projects" ? "Projects" : "GitHub"}
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
  );
};
export const LetsTalkBtn = () => {
  return (
    <button type="button" className="group">
      <Link
        href="https://tally.so/r/31jyp1"
        target="_blank"
        className="relative flex h-[51px] w-[140px] items-center justify-center overflow-hidden rounded-full border-2 border-black px-5 font-bold transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
      >
        <span className="flex h-full w-full items-center justify-center text-[18px] leading-[27px] text-black transition-transform duration-500 ease-in-out group-hover:-translate-y-full group-focus:-translate-y-full">
          Let's talk
        </span>
        <span className="absolute top-0 left-0 flex h-full w-full translate-y-full items-center justify-center bg-black text-[18px] leading-[27px] text-white transition-transform duration-500 ease-in-out group-hover:translate-y-0 group-focus:translate-y-0">
          SAY HI
        </span>
      </Link>
    </button>
  );
};

const HeroBtns = () => {
  return (
    <div className="mt-6 flex space-x-3">
      <HeroProjectBtn button="projects" />

      <HeroAboutMeBtn href="#about-me" label="About Me" size="default" />
    </div>
  );
};

export default HeroBtns;
