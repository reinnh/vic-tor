"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import { styles } from "../styles";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center overflow-hidden p-4 ">
      {/* BACKGROUND IMAGE (behind everything) */}
      <div className="absolute top-16 bottom-0 left-0 right-0 w-full h-full z-0  overflow-hidden ">
        <div
          className=" 
            w-full h-full bg-cover bg-center md:bg-position-[center_right_25%] 
            bg-no-repeat
          "
          style={{
            backgroundImage: "url('/hero-lab.jpg')",
          }}
        />
        {/* Gradient for readability */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0a0a17]/95 via-[#0a0a17]/60 to-transparent" />
      </div>

      {/* LEFT TEXT SECTION */}
      <div className="relative z-10 w-full md:w-[55%] max-w-3xl">
        <h1 className={`${styles.heroHeadText} text-green-300`}>
          Hi, I am <span className="text-[#915EFF]">Victor</span>
        </h1>

        <div className={`${styles.heroSubText} mt-2 text-white/90`}>
          <Typewriter
            options={{
              strings: [
                "Spectrophotometry & Chromatography.",
                "Enzymatic Kinetics & Molecular Analysis.",
                "ELISA • PCR • Quantitative Biochemistry.",
                "Research-driven. Accurate. Analytical.",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 25,
              delay: 50,
            }}
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;
