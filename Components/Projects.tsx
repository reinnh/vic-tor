"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import { projects } from "@/Constants/projects";
import {  textVariant } from "../Utils/motion";
import { SectionWrapper } from "../hoc";

type Tag = {
  name: string;
  color: string;
};

interface ProjectCardProps {
  name: string;
  description: string;
  tags: Tag[];
  image: string | StaticImageData;
  source_code_link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);

  // Check screen width on mount and resize
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Close card when clicking outside (mobile only)
  useEffect(() => {
    if (!isMobile) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  return (
    <div
      ref={cardRef}
      onClick={() => isMobile && setExpanded(!expanded)}
      className="bg-[#151030] p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-[360px] cursor-pointer relative"
    >
      {/* Image */}
      <div className="relative w-full h-[230px] md:h-[230px] overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={`${name} preview`}
          fill
          className="object-cover rounded-2xl"
        />
        {source_code_link && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(source_code_link, "_blank");
            }}
            className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 w-10 h-10 rounded-full flex justify-center items-center transition-colors"
          >
            🔗
          </button>
        )}
      </div>

      {/* Content */}
      <motion.div
        animate={{ maxHeight: !isMobile || expanded ? 1000 : 60 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="mt-5 overflow-hidden relative"
      >
        <h3 className="text-white font-bold text-[22px] leading-tight">
          {name}
        </h3>
        <p
          className={`mt-2 text-secondary text-[15px] leading-relaxed ${
            isMobile && !expanded ? "line-clamp-2" : ""
          }`}
        >
          {description}
        </p>

        {/* Gradient hint for expandable text */}
        {isMobile && !expanded && (
          <div className="absolute bottom-0 left-0 w-full h-8 bg-linear-to-t from-[#151030] to-transparent pointer-events-none"></div>
        )}

        {/* Expand/collapse arrow */}
        {isMobile && (
          <div className="absolute bottom-2 right-3 text-white text-xl select-none">
            {expanded ? "▲" : "▼"}
          </div>
        )}

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-[14px] ${tag.color} cursor-pointer`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="work" className="mt-2">
      <div>
        <p className="text-2xl text-white font-semibold mb-3">Work</p>
        <h2 className={`${styles.sectionHeadText}`}>My Projects</h2>
      </div>

      <p
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Experienced in analytical and molecular biology techniques, including
        spectrophotometry, chromatography, enzyme kinetics, ELISA, PCR, and
        electrophoresis. Skilled in laboratory data management with LIMS and
        translating complex datasets into actionable scientific insights using
        statistical modeling and visualization.
      </p>

      <div className="mt-16 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Projects, "projects");
