"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-950 shadow-md z-50">
      <div className="max-w-[1440px] mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo with gradient */}
        <Link
          href="#hero"
          className="text-lg font-semibold bg-gradient-to-r from-blue-500 via-blue-800 to-purple-800 bg-clip-text text-transparent"
        >
          Adaeze.dev
        </Link>

        {/* Desktop nav + toggle */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            >
              {label}
            </Link>
          ))}
          <ToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {/* Mobile: Only toggle */}
        <div className="md:hidden">
          <ToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </nav>
  );
};

const ToggleButton = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}) => (
  <button
    onClick={() => setDarkMode(!darkMode)}
    aria-label="Toggle Dark Mode"
    className="text-lg px-2 py-1 rounded border border-gray-300 dark:border-gray-600"
  >
    {darkMode ? "🌙" : "☀️"}
  </button>
);

export default Navbar;
