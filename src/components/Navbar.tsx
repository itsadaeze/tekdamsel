
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
  const [darkMode, setDarkMode] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("#hero");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let currentSection = "#hero";

      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const top = (section as HTMLElement).offsetTop - 80;
          const bottom = top + (section as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            currentSection = link.href;
          }
        }
      }

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-950 shadow-md z-50">
      <div className="max-w-[1440px] mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="#hero"
          className="text-lg font-semibold bg-gradient-to-r from-blue-500 via-blue-800 to-purple-800 bg-clip-text text-transparent"
        >
          Adaeze.dev
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="relative flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition group"
            >
              {label}
              <span
                className={`mt-1 h-2 w-2 rounded-full bg-white transition-all duration-300 ${
                  activeLink === href
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />
            </Link>
          ))}
          <ToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {/* Mobile Toggle */}
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
