"use client";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../Utils/motion";
import {
  Activity,
  Cpu,
  Database,
  BarChart2,
  FlaskConical
} from "lucide-react";

const skills = [
  {
    title: "Spectrophotometry & Chromatography",
    details:
      "Expert in UV-Vis Spectrophotometry, HPTLC, and GC for compound identification and purity assessment.",
    icon: <FlaskConical className="w-6 h-6 text-yellow-400" />,
  },
  {
    title: "Enzyme Kinetics & Quantitative Analysis",
    details:
      "Experienced in enzyme assays, Michaelis–Menten kinetics, and quantitative biochemical analysis.",
    icon: <Activity className="w-6 h-6 text-green-400" />,
  },
  {
    title: "Molecular Biology Techniques",
    details:
      "Proficient in ELISA, PCR, and SDS-PAGE for protein and nucleic acid analysis.",
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Laboratory Information Systems",
    details:
      "Hands-on experience with LIMS for data logging, traceability, and quality assurance.",
    icon: <Database className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "Data Interpretation & Statistical Modeling",
    details:
      "Skilled in data analysis and visualization using Excel, SPSS, and R for actionable insights.",
    icon: <BarChart2 className="w-6 h-6 text-red-400" />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="mt-20">
      <div className="text-center">
        <p className="text-2xl text-white font-semibold mb-2">Skills & Techniques</p>
        <h2 className={`${styles.sectionHeadText} text-center text-4xl sm:text-5xl`}>
          Core Competencies
        </h2>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-[#1f1f2f] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-4">
              {skill.icon}
              <h3 className="text-white text-xl sm:text-2xl font-semibold">{skill.title}</h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-1">
              {skill.details}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
