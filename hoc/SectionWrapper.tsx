'use client';

import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "@/Utils/motion";



const StarWrapper = <P extends object>(
  Component: React.ComponentType<P>,
  idName: string
) => {
  const WrappedComponent: React.FC<P> = (props) => (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      <Component {...props} />
    </motion.section>
  );

  return WrappedComponent;
};

export default StarWrapper;
