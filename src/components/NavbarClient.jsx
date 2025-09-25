// components/NavbarClient.tsx
"use client";

import { useEffect, useState } from "react";

import Navbar from "./NavbarSection";

export default function NavbarClient({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply/remove body class dynamically
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-y-hidden");
      document.body.classList.remove("overflow-y-scroll");
    } else {
      document.body.classList.remove("overflow-y-hidden");
      document.body.classList.add("overflow-y-scroll");
    }
  }, [menuOpen]);

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {children}
    </>
  );
}
