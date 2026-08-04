"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Hide / Show Navbar
      if (currentScroll <= 10) {
        setVisible(true);
      } else if (currentScroll > lastScroll) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScroll = currentScroll;

      // Active Section
      const sections = [
        "hero",
        "features",
        "experience",
        "curriculum",
        "pricing",
        "faq",
      ];

      for (const id of sections) {
        const section = document.getElementById(id);

        if (!section) continue;

        const top = section.offsetTop - 150;
        const bottom = top + section.offsetHeight;

        if (
          currentScroll >= top &&
          currentScroll < bottom
        ) {
          setActive(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
  { label: "Home", id: "hero" },
  { label: "Features", id: "features" },
  { label: "Dashboard", id: "dashboard" },
  { label: "Contact", id: "footer" },
];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{
        y: visible ? 0 : -120,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl"
    >
      <div className="backdrop-blur-2xl bg-white/10 border border-white/10 rounded-full px-8 py-4 shadow-2xl flex items-center justify-between">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
            <BrainCircuit
              className="text-white"
              size={24}
            />
          </div>

          <div>
            <h1 className="text-white font-bold text-xl">
              Mika AI
            </h1>

            <p className="text-xs text-cyan-200">
              Your Personal AI Teacher
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <div className="hidden lg:flex items-center gap-10">

          {menu.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition-all duration-300 font-medium ${
                active === item.id
                  ? "text-cyan-300"
                  : "text-white hover:text-cyan-300"
              }`}
            >
              {item.label}
            </a>
          ))}

        </div>

        {/* Button */}

        <div className="flex items-center gap-4">

  <Link href="/login">
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 25px rgba(0,212,255,.6)",
      }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold"
    >
      Login/Sign up
    </motion.button>
  </Link>

  <Link href="/login">
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 25px rgba(0,212,255,.6)",
      }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold"
    >
      Start Learning
    </motion.button>
  </Link>

</div>

      </div>
    </motion.nav>
  );
}