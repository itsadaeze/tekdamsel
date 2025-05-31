"use client";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-950 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-black dark:text-white text-lg">
          Adaeze.dev
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <a
            href="#hero"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
          >
            Contact
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
