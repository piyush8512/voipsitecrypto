"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import LeftHand from "../../src/assets/lefthand.svg";

const SolutionPurposeSection = () => {
  return (
    <section className="w-full bg-white relative z-10 mx-auto max-w-375 flex justify-center py-16 md:py-24 lg:pt-32 lg:pb-48 ">
      <div className="max-w-300 mx-auto px-6 flex flex-col items-center text-center gap-6 md:gap-8 relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-black text-2xl md:text-4xl lg:text-4xl font-bold  max-w-4xl "
        >
          We secure mobility, communication, and vision and we enhance usability
          through purposeful AI-driven innovation.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-900 text-base md:text-xl leading-relaxed max-w-3xl font-medium text-justify"
        >
          Our solutions are built to empower everyday people while meeting the
          needs of modern digital ecosystems, without exposing unnecessary
          details or complexity.
        </motion.p>
      </div>

      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute bottom-[-30%] left-0 w-[60vw] md:bottom-[-20%] lg:bottom-[-40%] md:w-[35vw] max-w-[600px] z-30 pointer-events-none"
      >
        <Image
          src={LeftHand}
          alt="Robotic left hand reaching up"
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </section>
  );
};

export default SolutionPurposeSection;
