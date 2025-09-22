"use client";

import { useEffect, useRef } from "react";

import Link from "next/link";
import { useState } from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [isHoveredLogo, setIsHoveredLogo] = useState(false);

  const [showTopNav, setShowTopNav] = useState(true);

  // Track when nav is wide enough to show menu
  const [showMenuList, setShowMenuList] = useState(false);

  // Listen for menuOpen changes to trigger showMenuList after width transition
  // and hide instantly on close
  // Use a ref to store timeout id
  const timeoutRef = useRef();

  useEffect(() => {
    if (menuOpen) {
      // Wait for nav width transition (300ms), then show ul
      timeoutRef.current = setTimeout(() => setShowMenuList(true), 300);
    } else {
      // Hide ul instantly
      setShowMenuList(false);
      clearTimeout(timeoutRef.current);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [menuOpen]);

  useEffect(() => {
    const workSection = document.querySelector("#projects"); // adjust if your Work section ID is different
    const handleScroll = () => {
      if (!workSection) return;
      const rect = workSection.getBoundingClientRect();
      const scrollY = window.scrollY;
      const sectionHeight = workSection.offsetHeight;
      const halfway = rect.top + scrollY + sectionHeight / 3;

      if (scrollY >= 200) {
        setShowTopNav(false); // hide top navbar
      } else {
        setShowTopNav(true); // show top navbar
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-40 w-full transition-all duration-300 ${showTopNav ? "md:opacity-100" : "md:pointer-events-none md:opacity-0"}`}
      >
        <div className="relative">
          {/* UNIVERSAL  Navbar */}
          <div className="fixed top-0 left-0 z-40 flex w-full items-start justify-between px-6 pt-[16px] sm:px-8 sm:pt-[20px] md:px-10 md:pt-[24px] lg:items-center">
            <a
              href="/"
              className={
                showTopNav ? "opacity-100" : "pointer-events-none opacity-0"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                version="1.1"
                viewBox="5 0 120 40"
                onClick={() =>
                  setIsHoveredLogo(isHoveredLogo === false && true)
                }
                className={`h-[50px] w-[140px] cursor-pointer select-none hover:opacity-50 lg:h-[70px] lg:w-[170px] ${
                  isHoveredLogo ? "opacity-50" : "opacity-100"
                } transition-opacity duration-300`}
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n      .st0 {\n        fill: #231f20;\n      }\n\n      .st1 {\n        fill: none;\n      }\n    ",
                    }}
                  />
                </defs>
                <g>
                  <path
                    className="st0"
                    d="M29.95,34.34h-6.12v-1.16c-.92.68-2.32,1.56-5.52,1.56-6.12,0-9.16-4.76-9.16-9.52s3.04-9.52,9.16-9.52c3.08,0,4.64.68,5.52,1.44v-1.36h6.12v18.56ZM19.79,28.87c2.08,0,3.8-1.72,3.8-3.8s-1.72-3.8-3.8-3.8-3.8,1.72-3.8,3.8,1.72,3.8,3.8,3.8Z"
                  />
                  <path
                    className="st0"
                    d="M53.75,4.75v29.6h-6.12v-1.16c-.92.64-2.64,1.56-5.52,1.56-6.12,0-9.16-4.76-9.16-9.52s3.04-9.52,9.16-9.52c3.28,0,4.52.72,5.52,1.44V4.75h6.12ZM43.75,28.87c2.08,0,3.8-1.72,3.8-3.8s-1.72-3.8-3.8-3.8-3.8,1.72-3.8,3.8,1.72,3.8,3.8,3.8Z"
                  />
                  <path
                    className="st0"
                    d="M66.67,34.86c-6.76,0-10.16-4.84-10.16-9.76s3.4-9.76,10.16-9.76,10.04,4.92,10.04,9.76-3.28,9.76-10.04,9.76ZM66.63,28.95c2.16,0,3.8-1.72,3.8-3.8s-1.64-3.8-3.8-3.8-3.8,1.72-3.8,3.8,1.72,3.8,3.8,3.8Z"
                  />
                  <path
                    className="st0"
                    d="M79.35,15.95h6.88v1.68c.88-.88,2.36-2,5.92-2,4.96,0,7.24,2.6,7.24,7.2v11.52h-6.88v-10.04c0-2.24-.4-3.92-2.92-3.92-2.8,0-3.36,1.88-3.36,3.24v10.72h-6.88V15.95Z"
                  />
                  <path
                    className="st0"
                    d="M106.03,34.5c-1.92,0-3.44-1.52-3.44-3.44s1.52-3.44,3.44-3.44,3.44,1.52,3.44,3.44-1.52,3.44-3.44,3.44Z"
                  />
                </g>
                <rect
                  className="st1"
                  x="28.88"
                  y="18.03"
                  width="17.12"
                  height="1.29"
                />
              </svg>
            </a>

            <ul className="hidden items-center gap-6 md:flex [&_a]:text-[18px] [&_a]:leading-[27px] [&_a]:text-black">
              {[
                { label: "Projects", href: "/projects" },
                { label: "Plans", href: "/#plans" },
                { label: "About Me", href: "/#about-me" },
                { label: "FAQ", href: "/#faq" },
                { label: "Contact", href: "/#contact" },
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
              <li className="group">
                <Link
                  href="https://tally.so/r/31jyp1"
                  target="_blank"
                  className="relative flex h-[47px] w-max items-center justify-center overflow-hidden rounded-full border-2 border-black px-5 font-bold transition-transform duration-300 group-hover:scale-105"
                >
                  <span className="flex h-full w-full items-center justify-center text-[18px] leading-[27px] text-black transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                    Let's talk
                  </span>
                  <span className="absolute top-0 left-0 flex h-full w-full translate-y-full items-center justify-center bg-black text-[18px] leading-[27px] text-white transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                    SAY HI
                  </span>
                </Link>
              </li>
            </ul>
            <button
              className="relative z-30 flex h-12 w-12 flex-col items-center justify-center md:hidden"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              type="button"
            >
              {/* Top line */}
              <span
                className={`absolute top-5 block h-0.5 w-10 rounded bg-black transition-all duration-300 ${
                  menuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              ></span>

              {/* Bottom line */}
              <span
                className={`absolute top-8 block h-0.5 w-10 rounded bg-black transition-all duration-300 ${
                  menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              ></span>
            </button>

            {/* MOBILE NAV-MENU */}

            <nav
              className={`fixed top-0 left-0 -z-20 h-[100%] bg-white transition-all duration-300 ease-in-out ${
                menuOpen ? "w-full translate-x-0" : "w-0 -translate-x-full"
              } overflow-hidden`}
              style={{ transitionProperty: "width, transform" }}
            >
              <ul
                className={`flex w-full flex-col pt-[150px] text-[#141413] transition-opacity duration-400 *:border-b *:border-[#eceff3] *:py-[20px] *:pr-[20px] *:pl-[30px] [&_a]:text-4xl [&_a]:font-medium ${showMenuList && menuOpen ? "opacity-100" : "pointer-events-none opacity-0"} `}
                style={{
                  transitionProperty: "opacity",
                }}
              >
                {[
                  "Home",
                  "Projects",
                  "Plans",
                  "About Me",
                  "FAQ",
                  "Contact",
                ].map((label, idx) => {
                  // Animate each li with staggered delay and slide-in effect
                  const links = [
                    "/",
                    "/projects",
                    "/#plans",
                    "/#about-me",
                    "/#faq",
                    "/#contact",
                  ];
                  return (
                    <li
                      key={label}
                      style={{
                        transition:
                          "opacity 0.4s cubic-bezier(.4,0,.2,1), transform 0.5s cubic-bezier(.4,0,.2,1)",
                        transitionDelay:
                          showMenuList && menuOpen
                            ? `${0.1 + idx * 0.08}s`
                            : "0s",
                        opacity: showMenuList && menuOpen ? 1 : 0,
                        transform:
                          showMenuList && menuOpen
                            ? "translateY(0)"
                            : "translateY(40px)",
                      }}
                    >
                      <Link
                        href={links[idx]}
                        onClick={() => setMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
