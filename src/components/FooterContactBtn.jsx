import React, { useState } from "react";

import Link from "next/link";

export const FooterContactBtn = ({ button }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href="https://tally.so/r/31jyp1"
      target="_blank"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className={`group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-black p-[32px] text-[28px] font-semibold text-[#141413] transition-transform duration-800 ease-out hover:scale-105 focus:scale-105 xl:flex xl:h-fit xl:py-10 ${button === "default" ? "sm:hidden" : "hidden h-fit sm:flex xl:hidden"} `}
    >
      {/* Background video */}
      <video
        src="https://res.cloudinary.com/fazurrehman/video/upload/v1743858455/cta-hover_lngx5q.mp4"
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Overlay layer */}
      <span
        className={`absolute bottom-0 transform transition-transform duration-500 ease-in-out ${
          hovered ? "-translate-y-full" : "translate-y-0"
        }`}
      />

      {/* Button Text */}
      <span className="relative z-10">Contact</span>
    </Link>
  );
};

export default FooterContactBtn;
