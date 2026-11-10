"use client";

import { useState } from "react";

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Achievements",
    "Contact",
  ];

  return (
    <nav className="navbar">
      <a className="logo" href="#home">
        Portfolio<span>.</span>
      </a>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={menuOpen ? "nav-links show" : "nav-links"}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
      </div>

      <button className="theme-button" onClick={() => setDark(!dark)}>
        {dark ? "☀ Light" : "☾ Dark"}
      </button>
    </nav>
  );
}