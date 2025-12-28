import React from "react";
import Image from "next/image";
// Import the lower hand asset
import LeftHand from "../../src/assets/lefthand.svg";

const SolutionPurposeSection = () => {
  return (
    <section className="w-full bg-white py-24 lg:pt-32 lg:pb-42 relative  z-10 mx-auto max-w-[1500px] justify-center">

      {/* 2. Inner Content Container to center text */}
      <div className="max-w-300 mx-auto px-6 flex flex-col items-center text-center gap-8 relative z-20">
         
         {/* Headline */}

         <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl tracking-tight">
           We secure mobility, communication, and vision and we enhance usability through purposeful AI-driven innovation.
         </h2>

         {/* Paragraph */}
         <p className="text-gray-900 text-lg md:text-xl leading-relaxed max-w-3xl font-medium">
           Our solutions are built to empower everyday people while meeting the needs of modern digital ecosystems, without exposing unnecessary details or complexity.
         </p>
      </div>

      {/* 3. Lower Robotic Hand Image */}

      <div className="absolute bottom-[-30%] left-0 w-[50vw] md:w-[35vw] max-w-160 z-30 translate-y-[30%] pointer-events-none">
         <Image
           src={LeftHand}
           alt="Robotic left hand reaching up"
           className="w-full h-auto object-contain"
         />
      </div>

    </section>
  );
};

export default SolutionPurposeSection;