"use client";
import React from "react";
import Image from "next/image";
import Header from "./layout/Header";
import { motion, Variants } from "framer-motion";

import HoneycombImage from "../src/assets/honeycomb.svg";

export default function HomePage() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const staggerContainer: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-[#002244] via-[#1e293b] to-[#595555] overflow-hidden flex flex-col">
      <div className="absolute inset-0 w-full max-w-[1440px] mx-auto h-full pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] -left-[20%] w-[280px] h-[280px] md:bottom-[-5%] md:left-[-20%] md:w-[500px] md:h-[500px] z-0"
        >
          <Image
            src={HoneycombImage}
            alt="Background Honeycomb"
            className="w-full h-full object-contain opacity-60"
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-[-10%] -right-[30%] w-[280px] h-[280px] md:top-[-20%] md:-right-[24%] md:w-[600px] md:h-[600px] z-0"
        >
          <Image
            src={HoneycombImage}
            alt="Background Honeycomb"
            className="w-full h-full object-contain opacity-60"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-50 w-full"
      >
        <Header />
      </motion.div>

      <section className="relative z-10 flex-grow flex flex-col justify-center items-center text-center w-full px-4 py-12 md:py-0">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl w-full px-4 mx-auto flex flex-col items-center"
        >
          <div className="mb-6 md:mb-8 w-full">
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none text-white drop-shadow-2xl"
            >
              Technology That
            </motion.h1>
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none text-white drop-shadow-2xl mt-2"
            >
              Thinks <span className="text-[#DCE735]">Securely</span>
            </motion.h1>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-8 font-light mx-auto"
          >
            Connect every CCTV brand, protect your video. We create scalable AI
            and cybersecurity solutions that solve real problems, protect what
            matters, stay simple by design, and add intelligence without
            replacing hardware.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center w-full"
          >
            <button className="bg-gradient-to-r from-[#DCE735] to-[#cdd628] text-[#0f1524] font-extrabold text-xs sm:text-sm px-8 sm:px-10 py-3 sm:py-4 rounded-full tracking-wider shadow-[0_0_20px_rgba(220,231,53,0.4)] hover:shadow-[0_0_30px_rgba(220,231,53,0.6)] hover:scale-105 transition-all duration-300">
              TALK TO US
            </button>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
