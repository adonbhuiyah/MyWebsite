"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

// bottom navbar shows when the user scrolls down and hides when the user scrolls up
export default function BottomNavbar() {
  const [showBottomNav, setShowBottomNav] = useState(false);
  const [active, setActive] = useState("#projects");
  const BottomNavbarLinks = [
    {
      label: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-3 -4 32 32"
          className={`w-10 rounded-full fill-white`}
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path d="M5 12.1799L5 9.54258L12.5 4L20 9.54258L20 12.1799L16.5239 9.6044C15.0772 8.53297 14.066 7.7706 13.4902 7.31731L13.4902 19L11.4888 19L11.4888 7.31731C10.7865 7.86676 9.7823 8.62912 8.47612 9.6044L5 12.1799Z" />
        </svg>
      ),
      href: "#home",
    },
    { label: "Projects", href: "#projects" },
    { label: "Plans", href: "#plans" },
    { label: "About", href: "#about-me" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];
  useEffect(() => {
    const sections = ["#projects", "#plans", "#about-me", "#faq", "#contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // toggle visibility
      if (scrollY > 200) {
        setShowBottomNav(true);
      } else {
        setShowBottomNav(false);
      }

      // active section detection
      for (let id of sections) {
        const el = document.querySelector(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-2 left-1/2 z-50 -translate-x-1/2 rounded-full border-2 border-gray-700 bg-black py-[2px] pr-[4px] pl-[2px] transition-all duration-500 md:bottom-12 md:px-[8px] md:py-[6px] lg:px-[10px] ${showBottomNav ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <ul className="flex items-center justify-center gap-0 text-white md:gap-1 lg:gap-1.5">
        {BottomNavbarLinks.map(({ label, href }, index) => (
          <Link
            href={href}
            key={href}
            className={`cursor-pointer rounded-full text-[12px] text-[#EAEAEA] transition-colors duration-300 sm:text-[13px] md:text-[14px] lg:text-[16px] ${
              active === href ? "bg-white text-black" : "text-white"
            } ${index !== 0 && "px-2 py-1"}`}
          >
            {label}
          </Link>
        ))}
      </ul>
    </div>
  );
}
