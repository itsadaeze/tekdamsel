"use client";

import { useState } from "react";
import { Home, User, Folder, Mail } from "lucide-react";

const BottomNav = () => {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: <Home size={20} />, href: "#hero" },
    { id: "about", label: "About", icon: <User size={20} />, href: "#about" },
    {
      id: "projects",
      label: "Projects",
      icon: <Folder size={20} />,
      href: "#projects",
    },
    {
      id: "contact",
      label: "Contact",
      icon: <Mail size={20} />,
      href: "#contact",
    },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 md:hidden z-50">
      <ul className="flex justify-around items-center text-sm text-gray-600 dark:text-gray-300">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              onClick={() => setActive(item.id)}
              className={`flex flex-col items-center px-4 py-2 transition ${
                active === item.id ? "text-blue-600 dark:text-blue-400" : ""
              }`}
            >
              {item.icon}
              <span className="text-xs">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;
