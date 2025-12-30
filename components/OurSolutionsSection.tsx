// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion, Variants } from "framer-motion";

// // Update this path to match your folder structure
// import NetworkSVG from "../src/assets/network.svg";

// const OurSolutionsSection = () => {
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="relative w-full min-h-screen bg-linear-to-b from-[#595555] via-[#1e293b] to-[#002244]  flex flex-col justify-center items-center pt-20 md:pt-0">
//       {/* --- Network SVG Image --- */}
//       <div className="absolute bottom-[-10%] left-0 z-30 w-[80vw] md:w-auto max-w-[600px] pointer-events-none opacity-70 mix-blend-screen">
//         <Image
//           src={NetworkSVG}
//           alt="Network graphic decoration"
//           width={600}
//           height={400}
//           className="w-full h-auto"
//         />
//       </div>

//       {/* --- Main Content Container --- */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center"
//       >
//         {/* Headline */}
//         <motion.h2
//           variants={itemVariants}
//           className="text-white text-2xl md:text-3xl lg:text-4xl font-bold max-w-4xl leading-tight"
//         >
//           We secure mobility, communication, and vision and we enhance usability
//           through purposeful AI-driven innovation.
//         </motion.h2>

//         {/* Supporting Text */}
//         <motion.p
//           variants={itemVariants}
//           className="text-slate-200 text-lg md:text-xl mt-8 max-w-3xl"
//         >
//           Our solutions are built to empower everyday people while meeting the
//           needs of modern digital ecosystems, without exposing unnecessary
//           details or complexity.
//         </motion.p>
//       </motion.div>

//       {/* --- Footer Title (Aligned Right) --- */}
//       <div className="absolute bottom-0 right-0 w-full leading-none z-20 pointer-events-none text-right">
//         <motion.h1
//           initial={{ y: "100%", opacity: 0 }}
//           whileInView={{ y: "24px", opacity: 0.9 }}
//           transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
//           viewport={{ once: true }}
//           // Changed padding to right (pr-4) so it doesn't touch the edge
//           className="text-[clamp(3.5rem,10vw,9rem)] font-bold text-[#dce735]  tracking-tighter select-none whitespace-nowrap pr-4 md:pr-8"
//         >
//           Our Solutions
//         </motion.h1>
//       </div>
//     </section>
//   );
// };

// export default OurSolutionsSection;

"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import NetworkSVG from "../src/assets/network.svg";

const OurSolutionsSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#595555] via-[#1e293b] to-[#002244]  flex flex-col justify-center items-center pt-20 md:pt-0">
      
      {/* --- Network SVG Image --- */}
      {/* Added max-w wrapper to center image on ultra-wide screens */}
      <div className="absolute bottom-[-10%] left-0 w-full flex justify-center pointer-events-none">
         <div className="w-full max-w-[1920px] relative">
            <div className="absolute bottom-0 left-0 z-30 w-[80vw] md:w-auto max-w-[600px] opacity-70 mix-blend-screen">
                <Image
                src={NetworkSVG}
                alt="Network graphic decoration"
                width={600}
                height={400}
                className="w-full h-auto"
                />
            </div>
         </div>
      </div>

      {/* --- Main Content Container --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-white text-2xl md:text-3xl lg:text-4xl font-bold max-w-4xl leading-tight"
        >
          We secure mobility, communication, and vision and we enhance usability
          through purposeful AI-driven innovation.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-slate-200 text-lg md:text-xl mt-8 max-w-3xl"
        >
          Our solutions are built to empower everyday people while meeting the
          needs of modern digital ecosystems, without exposing unnecessary
          details or complexity.
        </motion.p>
      </motion.div>

      {/* --- Footer Title (Aligned Right & Centered on Large Screens) --- */}
      <div className="absolute bottom-0 w-full flex justify-center pointer-events-none z-20">
        <div className="w-full max-w-[1920px] px-4 md:px-8 text-right">
            <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "20%", opacity: 0.9 }} // Matches the spacing of the other file
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            // Same Size as WhyWeExistSection
            className="text-[clamp(3.5rem,10vw,9rem)] font-bold text-[#dce735] tracking-tighter select-none whitespace-nowrap"
            >
            Our Solutions
            </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default OurSolutionsSection;