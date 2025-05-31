"use client";

import { useState, useEffect } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hi, I'm Adaeze 👋";
  const typingSpeed = 100;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  // Split at "Adaeze" for gradient styling
  const parts = typedText.split(/(Adaeze)/);

  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-100 dark:bg-gray-950 text-black dark:text-white"
    >
      <h1 className="text-4xl md:text-6xl font-bold">
        {parts.map((part, i) =>
          part === "Adaeze" ? (
            <span
              key={i}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
        <span className="animate-pulse">|</span>
      </h1>

      <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl">
        Frontend Engineer turning ideas into beautiful web experiences.
      </p>

      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
