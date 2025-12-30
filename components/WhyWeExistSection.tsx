"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface MissionCardProps {
  number: string;
  text: string;
  offset?: boolean;
}

const missionData: MissionCardProps[] = [
  { number: "1", text: "To solve problems that truly matter.", offset: true },
  {
    number: "2",
    text: "To make advanced AI & cybersecurity usable.",
    offset: false,
  },
  {
    number: "3",
    text: "To create technology built with empathy.",
    offset: true,
  },
  { number: "4", text: "To empower a safer, smarter future.", offset: false },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const MissionCard = ({ number, text, offset }: MissionCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`
        bg-white rounded-xl p-6 shadow-xl w-full 
        
        max-w-[250px] h-[260px] 
        flex flex-col justify-center relative z-20 mx-auto
        
        
        ${offset ? "lg:mt-30" : "lg:mb-0"} 
      `}
    >
      <div className="mb-4">
        <div className="flex items-center justify-center w-10 h-10 bg-[#1e2a45] rounded-full shadow-inner">
          <span className="text-[#dce735] font-bold text-lg">{number}.</span>
        </div>
      </div>

      <p className="text-slate-900 text-lg font-medium leading-snug">{text}</p>
    </motion.div>
  );
};

const WhyWeExistSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#002244] via-[#1e293b] to-[#595555] overflow-hidden flex flex-col justify-center items-center py-20 lg:py-0">
      <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#dce735] rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[150px]" />
      </div>

      <motion.div
        className="container mx-auto px-6 relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:justify-center items-center gap-5 lg:gap-6 w-full">
          {missionData.map((item, index) => (
            <MissionCard
              key={index}
              number={item.number}
              text={item.text}
              offset={item.offset}
            />
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-[-2%] left-0 w-full flex justify-center pointer-events-none">
        <div className="w-full max-w-[1920px] px-4 md:px-8">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "20%", opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="text-[clamp(3.5rem,10vw,9rem)] font-bold text-[#dce735] tracking-tighter opacity-90 select-none whitespace-nowrap text-left"
          >
            Why We Exist
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default WhyWeExistSection;
