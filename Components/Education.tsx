"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../Utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import Image from "next/image";

import reducingsugar from "@/assets/projects/reducing_sugar_test.jpg";
import reducingsugar1 from "@/assets/projects/reducing_sugar_test1.jpg";
import insidethelab from "@/assets/projects/inlab.jpg";

import mandthegroup from "@/assets/projects/me_group.jpg";

const gallery = [
  reducingsugar,
  reducingsugar1,
  insidethelab,
  mandthegroup,
  reducingsugar,
];

const Education = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div id="education" className=" relative">
      {/* HEADER */}
      <div
        className="text-center"
      >
        <p className=" text-start  text-white ">Education</p>
        <h2
          className={`${styles.sectionHeadText} text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400`}
        >
          Academic Foundation
        </h2>
      </div>

      {/* CARD */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mt-10 bg-[#1d1836]/80 backdrop-blur-md rounded-md p-4 shadow-lg"
      >
        <h3 className="text-white text-xl font-semibold">
          Bachelor of Science in Biochemistry
        </h3>
        <p className="text-blue-400 text-sm font-medium mt-1">
          Technical University of Mombasa — 2023–2027
        </p>

        <p className="text-gray-300 text-[15px] leading-relaxed mt-4">
          Focus: Biochemical research, molecular biology, enzymology, and lab
          analytics — building precision, experimental reasoning, and
          data-driven interpretation.
        </p>
      </motion.div>

      {/* IMAGE GALLERY */}
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mt-12 px-"
      >
        <h3 className="text-center text-white/90 font-medium text-lg mb-6 tracking-wide">
          Academic Activities
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {[insidethelab].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="relative overflow-hidden rounded-xl border border-white/10 shadow-inner bg-white/5 backdrop-blur-md"
              onClick={() => setSelected(img.src)}
            >
              <Image
                src={img}
                alt="Inside the lab"
                className="w-full h-full object-cover scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">
                  Inside the Biochemistry Lab
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {gallery.slice(2).map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 220 }}
              className="relative overflow-hidden rounded-xl border border-white/10 shadow-inner bg-white/5 backdrop-blur-md"
              onClick={() => setSelected(img.src)}
            >
              <Image
                src={img}
                alt={`Experiment ${i + 1}`}
                className="w-full h-32 sm:h-40 object-cover scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                <p className="text-white text-xs font-medium">
                  Lab Experiment {i + 1}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* MODAL VIEWER */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-999"
          onClick={() => setSelected(null)}
        >
          <motion.img
            src={selected}
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            className="max-w-[90%] max-h-[85vh] rounded-xl shadow-2xl"
          />
        </motion.div>
      )}
    </div>
  );
};

export default SectionWrapper(Education, "education");
