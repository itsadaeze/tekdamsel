"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Home, User, Folder, Mail } from "lucide-react";
const navItems = [
  { id: "about", label: "About", icon: <User size={22} />, href: "#about" },
  {
    id: "projects",
    label: "Projects",
    icon: <Folder size={22} />,
    href: "#projects",
  },
  { id: "home", label: "Home", icon: <Home size={22} />, href: "/" },
  { id: "skills", label: "Skills", icon: <Home size={22} />, href: "#skills" },

  {
    id: "contact",
    label: "Contact",
    icon: <Mail size={22} />,
    href: "#contact",
  },
];

const BottomNav = () => {
  const [active, setActive] = useState("home");
  const router = useRouter();

  const handleClick = (id: string, href: string) => {
    setActive(id);
    router.push(href);
  };

  return (
    <nav className="fixed bottom-0 w-full z-50 md:hidden flex ">
      <div className="relative flex justify-between items-center bg-blue-800 text-white px-6 py-5 rounded-tr-md rounded-tl-md w-full max-w-md shadow-xl">
      
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-8 rounded-t-full z-0"
          style={{
            transition: "left 0.3s ease",
            left: `${navItems.findIndex((i) => i.id === active) * 25 + 12.5}%`,
          }}
        />

        {navItems.map((item) => {
          const isActive = active === item.id;

          return (
            <div key={item.id} className="relative flex-1 flex justify-center">
              {isActive && (
                <div className="absolute -top-13 z-10 flex flex-col items-center">
                  <div className="w-14 h-14 bg-white border-6 border-blue-800 text-black rounded-full flex items-center justify-center shadow-lg transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="mt-2 text-xs font-bold text-white ">
                    {item.label}
                  </span>
                </div>
              )}

              <button
                onClick={() => handleClick(item.id, item.href)}
                className={`relative z-20 w-full h-full flex items-center justify-center transition-all duration-300 ${
                  isActive ? "opacity-0" : "opacity-100"
                }`}
              >
                {item.icon}
              </button>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
