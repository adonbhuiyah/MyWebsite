"use client";

import { useEffect } from "react";

export default function HashSmoothScroll() {
  useEffect(() => {
    const smoothScrollTo = (targetY, duration = 800) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      let startTime = null;

      const step = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Ease-in-out cubic function
        const ease =
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startY + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const scrollToHash = (hash, pushState = true) => {
      if (!hash) return;
      const target = document.querySelector(hash);
      if (target) {
        const targetY = target.getBoundingClientRect().top + window.scrollY;
        smoothScrollTo(targetY, 2000); // 1000ms = slower, smoother
        if (pushState) {
          history.pushState(null, "", hash);
        }
      }
    };

    const handleClick = (e) => {
      let hash = e.target.closest('a[href^="#"]');
      hash =
        e.target.tagName == "SPAN"
          ? e.target.parentElement.getAttribute("href")?.split("/")[1]
          : hash?.getAttribute("href");

      if (hash) {
        e.preventDefault();

        scrollToHash(hash);
      }
    };

    // Run on load (if URL already has hash)
    if (window.location.hash) {
      setTimeout(() => scrollToHash(window.location.hash, false), 200);
    }

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
