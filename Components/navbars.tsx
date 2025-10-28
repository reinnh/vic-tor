"use client";

import { useState } from "react";
import Link from "next/link";
import { styles } from "../styles";
import { navLinks } from "@/Constants/navlinks";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleLinkClick = (linkId: string, title: string) => {
    setActive(title);
    setToggle(false);

    const element = document.getElementById(linkId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const renderNavLinks = (isMobile = false) => (
    <ul
      className={`flex ${
        isMobile ? "flex-col items-start gap-4" : "hidden sm:flex flex-row gap-6"
      }`}
    >
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? "text-white" : "text-gray-300"
          } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-200`}
          onClick={() => handleLinkClick(link.id, link.title)}
        >
          {link.title}
        </li>
      ))}
    </ul>
  );

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 w-full z-20 bg-black/90 py-3 shadow-md border-b-gray-700 border-b`}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <p className="text-gray-500 text-[20px] font-bold flex">
            VICTOR&nbsp;
          </p>
        </Link>

        {/* Desktop Nav */}
        {renderNavLinks(false)}

        {/* Mobile Menu */}
        <div className="sm:hidden flex justify-end items-center relative">
          {toggle ? (
            <X
              className="w-6 h-6 text-gray-400 cursor-pointer"
              onClick={() => setToggle(false)}
            />
          ) : (
            <Menu
              className="w-6 h-6 text-gray-400 cursor-pointer"
              onClick={() => setToggle(true)}
            />
          )}

          {/* Animate mobile menu */}
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="absolute top-14 right-4 bg-black/90 rounded-xl p-4 shadow-lg border border-gray-800 origin-top-right"
              >
                {renderNavLinks(true)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
