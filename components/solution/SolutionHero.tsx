"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import SolutionHeroTop from "../../src/assets/solutionherotop.svg";
import SolutionHeroBottom from "../../src/assets/soltuionherobottom.svg";
import righthand from "../../src/assets/righthand.svg";

export default function SolutionHero() {
  return (
    <main className="relative min-h-screen w-full bg-linear-to-br from-[#0a101f] via-[#1a2030] to-[#3a3f4b] flex justify-center ">
      <div className="w-full max-w-375 relative h-screen flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 w-[50vw] md:w-[40vw] max-w-75 pointer-events-none"
        >
          <Image
            src={SolutionHeroTop}
            alt="Circuit lines decoration"
            className="object-contain w-full h-auto"
            priority
          />
        </motion.div>

        <div className="relative z-10 w-full px-6 md:px-12 flex flex-col items-center justify-center pt-20 lg:pt-0">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[12vw] md:text-7xl lg:text-8xl font-bold text-[#EFEB11] text-center whitespace-nowrap"
          >
            Our Solutions
          </motion.h1>
        </div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="absolute bottom-0 left-0 w-[60vw] md:w-[50vw] max-w-75 z-20 translate-y-[-7%] md:translate-y-0"
        >
          <Image
            src={SolutionHeroBottom}
            alt="Robotic Hand Left"
            className="object-contain w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="absolute bottom-[-10%] md:bottom-[-30%] right-0 w-[70vw] md:w-[50vw] max-w-[600px] z-30 translate-y-10 md:translate-y-0"
        >
          <Image
            src={righthand}
            alt="Robotic Hand Right"
            className="object-contain w-full h-auto"
          />
        </motion.div>
      </div>
    </main>
  );
}
