import Link from "next/link";

const HeroBtns = () => {
  return (
    <div className="mt-6 flex space-x-3">
      <Link
        href="/projects"
        className="group relative flex h-[53px] w-[132px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-black px-[5px] text-lg text-white transition-transform duration-300 hover:scale-102 focus:scale-102 sm:h-[48px] sm:w-[140px] sm:p-[10px] lg:w-[150px] 2xl:text-[20px]"
      >
        <span className="absolute inset-0 z-10 translate-x-[-100%] bg-black transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-focus:translate-x-0"></span>
        <span className="absolute inset-0 z-5 bg-white opacity-30"></span>
        <span className="relative z-10 flex items-center gap-2">
          Projects
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
      <Link
        href="#about-me"
        className={`group relative flex h-[53px] w-[132px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-black bg-white px-[5px] text-lg transition-transform duration-300 hover:scale-102 focus:scale-102 sm:h-[48px] sm:w-[140px] sm:p-[10px] lg:w-[150px] 2xl:text-[20px]`}
      >
        <span
          className={`absolute inset-0 z-0 translate-x-[-100%] bg-[#E3E3E3] transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-focus:translate-x-0`}
        ></span>
        <span className="relative z-10 flex items-center gap-2 text-black transition-colors duration-300 ease-in-out">
          About Me
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
  );
};

export default HeroBtns;
