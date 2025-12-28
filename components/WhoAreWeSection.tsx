"use client";
import React from "react";
import { motion } from "framer-motion";

const WhoAreWeSection = () => {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[80vh] bg-white flex flex-col justify-center items-center overflow-hidden py-12 md:py-20">
      <div className="container px-6 relative z-10 flex flex-col items-center max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl w-full"
        >
          <p className="text-black text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-justify">
            We are a team of innovators from diverse backgrounds, united by a
            common mission: to build scalable, secure, and intelligent solutions
            that solve real-world problems. With deep expertise in AI,
            cybersecurity, and large-scale system design, our team thrives at
            the intersection of technology and human impact.
          </p>

          <div className="flex justify-start md:justify-end mt-6">
            <button className="text-black font-bold text-lg inline-flex items-center group transition-colors hover:text-slate-600">
              More
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full flex justify-center pointer-events-none z-0 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 20 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="
            text-[clamp(3.5rem,10vw,9rem)] 
            font-bold 
            tracking-tighter 
            text-left 
            leading-none 
            opacity-100 
            select-none
            
            
            bg-gradient-to-b from-[#EFEB11] to-[#89870AEB] 
            bg-clip-text 
            text-transparent

            
            -ml-2 md:-ml-10
          "
          >
            Who are we?
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWeSection;
