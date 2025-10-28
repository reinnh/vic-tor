'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { textVariant } from '../Utils/motion';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Victor</h2>
      </motion.div>

      <motion.div
        initial={{ maxHeight: '160px', opacity: 0.8 }}
        animate={{ maxHeight: isExpanded ? '1200px' : '160px', opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-8 overflow-hidden"
      >
        Hello! My name is <span className="font-semibold text-white">Victor Oyando</span>, 
        a passionate and analytical Biochemist with a 
        <span className="font-semibold"> Bachelor of Science in Biochemistry</span> 
        from the Technical University of Mombasa (2023–2027). 
        My academic journey has provided a strong foundation in molecular biology, 
        enzymology, and biochemical research methodologies — disciplines that fuel my 
        curiosity for understanding the chemistry of life at its most intricate level. <br /><br />
        Through rigorous coursework and extensive laboratory practice, I have developed 
        technical expertise in spectrophotometric analysis, protein and lipid profiling, 
        and enzymatic kinetics. My training emphasizes accuracy, experimental design, 
        and data-driven interpretation — skills essential to both clinical and research biochemistry. 
        I approach scientific challenges with precision and creativity, combining analytical rigor 
        with an innovative mindset aimed at advancing biochemical research and diagnostic excellence.
      </motion.div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 px-5 py-3 text-lg text-blue-400 font-medium hover:text-blue-300 transition-colors duration-200"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </>
  );
};

export default SectionWrapper(About, 'about');
