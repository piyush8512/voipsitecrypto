// src/components/sections/SolutionHero.tsx
import React from "react";
import Image from "next/image";

// Importing the assets as requested
import SolutionHeroTop from "../../src/assets/solutionherotop.svg";
import SolutionHeroBottom from "../../src/assets/soltuionherobottom.svg"; 
import righthand from "../../src/assets/righthand.svg";

export default function SolutionHero() {
  return (
    // 1. Main Background with Gradient
    <main className="relative min-h-screen w-full  bg-gradient-to-br from-[#0a101f] via-[#1a2030] to-[#3a3f4b] flex justify-center">
      
      {/* 2. Inner Wrapper (max-w-1500px) to keep content centered on big screens */}
      <div className="w-full max-w-[1500px] relative h-screen flex flex-col justify-center items-center">

        {/* --- 1. Top Right Decoration (Circuit Lines) --- */}
        <div className="absolute top-0 right-0 w-[50vw] md:w-[40vw] max-w-[300px] pointer-events-none opacity-80">
          <Image
            src={SolutionHeroTop}
            alt="Circuit lines decoration"
            className="object-contain w-full h-auto"
            priority 
          />
        </div>

        {/* --- 2. Main Content (Centered) --- */}
        {/* Changed: w-full (removed lg:w-2/3), added items-center and text-center */}
        <div className="relative z-10 w-full px-6 md:px-12 flex flex-col items-center justify-center pt-20 lg:pt-0">
          
          {/* Title: Large Yellow Text */}
          <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold text-[#EFEB11] text-center">
            Our Solutions
          </h1>

        </div>

        {/* --- 3. Bottom Left Decoration (Robotic Hand 1) --- */}
        <div className="absolute bottom-0 left-0 w-[80vw] md:w-[50vw] max-w-[300px] z-20 translate-y-10 md:translate-y-0">
           <Image
             src={SolutionHeroBottom}
             alt="Robotic Hand Left"
             className="object-contain w-full h-auto"
           />
        </div>

        {/* --- 4. Bottom Right Decoration (Robotic Hand 2) --- */}
        <div className="absolute bottom-[-30%] right-0 w-[80vw] md:w-[50vw] max-w-150 z-20 translate-y-10 md:translate-y-0">
           <Image
             src={righthand}
             alt="Robotic Hand Right"
             className="object-contain w-full h-auto"
           />
        </div>

      </div>
    </main>
  );
}