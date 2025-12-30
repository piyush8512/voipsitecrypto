"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import TopRightWave from "../../src/assets/abouttopright.svg";
import BottomLeftWave from "../../src/assets/abouttopbottomleft.svg";

export default function AboutHero() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-linear-to-br from-[#002244] via-[#1a2030] to-[#595555] flex flex-col justify-center items-center">
      <div className="absolute inset-0 w-full h-full max-w-480 mx-auto pointer-events-none">
        <div className="absolute top-0 right-0 w-[40vw] md:w-[30vw] max-w-150 opacity-60">
          <Image
            src={TopRightWave}
            alt="Decorative wave design"
            className="object-contain w-full h-auto"
            priority
          />
        </div>

        <div className="absolute bottom-0 left-0 w-[50vw] md:w-[40vw] max-w-125 -translate-x-1/4 translate-y-1/4 opacity-30">
          <Image
            src={BottomLeftWave}
            alt="Decorative wave design"
            className="object-contain w-full h-auto rotate-12"
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 md:px-12 flex flex-col items-center pt-10 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed font-light  text-justify hyphens-auto">
            We are a team of innovators from diverse backgrounds, united by a
            common mission: to build scalable, secure, and intelligent solutions
            that solve{" "}
            <span className="text-[#DCE735] font-bold">
              real-world problems.
            </span>{" "}
            <span className="text-[#DCE735] font-bold">
              With deep expertise in AI, cybersecurity, and large-scale system
              design,
            </span>{" "}
            our team thrives at the intersection of technology and human impact.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-[-2%] left-0 w-full flex justify-center pointer-events-none z-0">
        <div className="w-full max-w-480 px-4 md:px-8">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "20%", opacity: 0.8 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="text-[clamp(3.5rem,10vw,9rem)] font-bold text-[#EFEB11] tracking-tighter select-none whitespace-nowrap text-left"
          >
            About Us
          </motion.h1>
        </div>
      </div>
    </main>
  );
}
