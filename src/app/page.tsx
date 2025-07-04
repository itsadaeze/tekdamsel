"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skill";
import './globals.css'

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <Hero />
        <Skills />
      <About />
      <Projects />
      <Contact />

    </div>
  );
}
