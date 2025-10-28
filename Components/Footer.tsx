"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Utils/motion";

const Footer = () => {
  return (
    <footer className="w-full bg-primary py-6 mt-20 border-t border-gray-800">
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left"
      >
        <p className="text-secondary text-sm">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Victor Oyando</span>.  
          All rights reserved.
        </p>

        <div className="flex gap-5 text-secondary text-sm">
          <a
            href="#contact"
            className="hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
          <a
            href="mailto:onyanfo@gmail.com "
            className="hover:text-white transition-colors duration-200"
          >
            Email
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
